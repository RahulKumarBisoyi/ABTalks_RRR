import { levelInfo } from './progress';
import { applySkillGrowth } from './skills';
import { getAchievementDef } from '../data/achievements';
import { getChallengeByDay } from '../data/challenges';

const API_FOCUSED_TAG = 'APIs';
const API_EXPLORER_THRESHOLD = 3;
const FRONTEND_BUILDER_THRESHOLD = 20;

function countApiFocusedCompletions(completedDays) {
  return completedDays.filter((d) => getChallengeByDay(d)?.skillTags?.includes(API_FOCUSED_TAG)).length;
}

// Achievement unlock rules, evaluated after a mission is (newly) completed.
// Kept data-driven so adding a badge is a one-line addition here plus an
// entry in data/achievements.js.
function unlockConditions({ day, newStreak, newCompletedDays }) {
  const completedCount = newCompletedDays.length;
  return {
    'first-ship': day === 1,
    'week-warrior': newStreak >= 7,
    'ten-mission-builder': completedCount === 10,
    'thirty-day-builder': completedCount === 30,
    'sixty-day-legend': completedCount === 60,
    'frontend-builder': completedCount === FRONTEND_BUILDER_THRESHOLD,
    'api-explorer': countApiFocusedCompletions(newCompletedDays) === API_EXPLORER_THRESHOLD,
  };
}

function evaluateAchievements(prevAchievements, ctx) {
  const conditions = unlockConditions(ctx);
  const newlyUnlockedIds = [];

  const nextAchievements = prevAchievements.map((a) => {
    if (a.unlocked) return a;
    if (conditions[a.id]) {
      newlyUnlockedIds.push(a.id);
      return { ...a, unlocked: true, unlockedOn: ctx.day };
    }
    return a;
  });

  return { nextAchievements, newlyUnlockedIds };
}

/**
 * Pure function: given the student's current state and the challenge being
 * submitted, returns everything that changes. No side effects, no
 * localStorage — StudentContext persists the result, and MissionDay/
 * Dashboard can call this ahead of time to preview the exact same result
 * before it's persisted.
 *
 * `alreadyCompleted` is the single duplicate-completion guard: once true,
 * XP, streak, completedDays, achievements, skills, and activity all pass
 * through unchanged — only the submitted links can still be updated.
 */
export function computeMissionCompletion(student, challenge, proof) {
  const alreadyCompleted = student.completedDays.includes(challenge.day);

  const xpGain = alreadyCompleted ? 0 : challenge.xp;
  const newXp = student.xp + xpGain;
  const newStreak = alreadyCompleted ? student.currentStreak : student.currentStreak + 1;
  const newLongestStreak = Math.max(student.longestStreak, newStreak);
  const newCompletedDays = alreadyCompleted
    ? student.completedDays
    : [...student.completedDays, challenge.day].sort((a, b) => a - b);
  // currentDay deliberately does NOT jump to challenge.day + 1 here.
  // Completing Day N keeps the student "on" Day N (now completed) — the
  // next day only becomes the unlocked day once the calendar date actually
  // changes, which StudentContext reconciles via utils/dateGate.js on load.
  const newCurrentDay = Math.max(student.currentDay, challenge.day);
  const { level: newLevel } = levelInfo(newXp);

  const newSkills = alreadyCompleted
    ? student.skills
    : applySkillGrowth(student.skills, challenge.skillTags);

  const { nextAchievements, newlyUnlockedIds } = evaluateAchievements(student.achievements, {
    day: challenge.day,
    newStreak,
    newCompletedDays,
  });

  const existing = student.submittedProjects?.[challenge.day];
  const newSubmittedProjects = {
    ...student.submittedProjects,
    [challenge.day]: {
      day: challenge.day,
      githubUrl: proof?.githubUrl ?? existing?.githubUrl ?? '',
      linkedinUrl: proof?.linkedinUrl ?? existing?.linkedinUrl ?? '',
      completedAt: new Date().toISOString(),
    },
  };

  const newActivity = alreadyCompleted
    ? student.recentActivity
    : [
        ...newlyUnlockedIds.map((id) => ({
          id: `act-${id}-${challenge.day}`,
          kind: 'achievement',
          label: `Unlocked "${getAchievementDef(id)?.label ?? id}"`,
          when: 'Today',
        })),
        {
          id: `act-day-${challenge.day}`,
          kind: 'completed',
          day: challenge.day,
          label: `Completed Day ${challenge.day}`,
          xp: xpGain,
          when: 'Today',
        },
        ...(student.recentActivity ?? []),
      ];

  return {
    alreadyCompleted,
    xpGain,
    newXp,
    newStreak,
    newLongestStreak,
    newCompletedDays,
    newCurrentDay,
    newLevel,
    newSkills,
    newAchievements: nextAchievements,
    newlyUnlockedIds,
    newSubmittedProjects,
    newRecentActivity: newActivity,
  };
}
