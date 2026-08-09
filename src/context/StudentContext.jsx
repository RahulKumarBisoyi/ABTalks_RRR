import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { defaultStudent } from '../data/student';
import { getChallengeByDay, TOTAL_DAYS } from '../data/challenges';
import { computeMissionCompletion } from '../utils/missionCompletion';
import { normalizeStudent } from '../utils/normalizeStudent';
import { getUnlockedDay, advanceDevDateOffset, resetDevDateOffset } from '../utils/dateGate';
import { loadState, saveState, clearState, STORAGE_KEYS } from '../utils/storage';

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  // loadState already returns the fallback (null) on missing/corrupted JSON;
  // normalizeStudent then fills in any missing/invalid fields individually,
  // so a partial or legacy-shaped save never breaks the app.
  const [student, setStudent] = useState(() => normalizeStudent(loadState(STORAGE_KEYS.STUDENT, null)));

  // Single source of truth in localStorage — every field (completedDays,
  // streak, xp, achievements, submittedProjects, recentActivity) lives on
  // this one object under one key, so nothing can drift out of sync.
  useEffect(() => {
    saveState(STORAGE_KEYS.STUDENT, student);
  }, [student]);

  // Reconcile currentDay against the calendar-date gate on every load. This
  // is what actually "unlocks" the next mission — completing a day never
  // advances currentDay itself (see missionCompletion.js); only a genuine
  // new calendar day (real or dev-simulated) does, and this effect is what
  // notices that and bumps the stored value to match.
  useEffect(() => {
    const unlocked = getUnlockedDay(student, TOTAL_DAYS);
    if (unlocked !== student.currentDay) {
      setStudent((prev) => ({ ...prev, currentDay: unlocked }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student.completedDays, student.submittedProjects]);

  const submitProof = useCallback((day, proof) => {
    setStudent((prev) => {
      const challenge = getChallengeByDay(day);
      if (!challenge) return prev;

      const result = computeMissionCompletion(prev, challenge, proof);

      return {
        ...prev,
        xp: result.newXp,
        level: result.newLevel,
        completedDays: result.newCompletedDays,
        currentStreak: result.newStreak,
        longestStreak: result.newLongestStreak,
        currentDay: result.newCurrentDay,
        achievements: result.newAchievements,
        skills: result.newSkills,
        submittedProjects: result.newSubmittedProjects,
        recentActivity: result.newRecentActivity,
      };
    });
  }, []);

  const resetProgress = useCallback((name) => {
    clearState(STORAGE_KEYS.STUDENT);
    resetDevDateOffset();
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    setStudent(trimmedName ? { ...defaultStudent, name: trimmedName } : defaultStudent);
  }, []);

  // Dev-only: simulate the next calendar day so the team can demo the
  // unlock flow without waiting. Never exposed to a normal student — only
  // reachable through the small reset/demo control.
  const advanceDevDay = useCallback(() => {
    advanceDevDateOffset();
    setStudent((prev) => ({ ...prev, currentDay: getUnlockedDay(prev, TOTAL_DAYS) }));
  }, []);

  const value = useMemo(
    () => ({ student, submitProof, resetProgress, advanceDevDay, setStudent }),
    [student, submitProof, resetProgress, advanceDevDay]
  );

  return <StudentContext.Provider value={value}>{children}</StudentContext.Provider>;
}
