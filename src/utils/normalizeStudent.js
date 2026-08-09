import { defaultStudent, STUDENT_ROLE } from '../data/student';
import { achievementDefs } from '../data/achievements';

function isPlainObject(v) {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/**
 * Takes whatever came out of localStorage (possibly null, possibly a
 * partial/legacy shape from an earlier build step, possibly corrupted) and
 * returns a complete, well-typed student object. Every field falls back to
 * defaultStudent's value independently, so one bad field can't take down
 * the rest of the profile.
 */
export function normalizeStudent(raw) {
  if (!isPlainObject(raw)) return defaultStudent;

  const merged = { ...defaultStudent, ...raw };

  merged.name = typeof raw.name === 'string' && raw.name.trim() ? raw.name : defaultStudent.name;
  merged.role = STUDENT_ROLE; // fixed — never selectable, never read from storage
  delete merged.track; // drop any legacy track field from an older save

  merged.currentDay = Number.isFinite(raw.currentDay) ? raw.currentDay : defaultStudent.currentDay;
  merged.currentStreak = Number.isFinite(raw.currentStreak) ? Math.max(0, raw.currentStreak) : 0;
  merged.longestStreak = Number.isFinite(raw.longestStreak)
    ? Math.max(raw.longestStreak, merged.currentStreak)
    : merged.currentStreak;
  merged.xp = Number.isFinite(raw.xp) ? Math.max(0, raw.xp) : 0;

  merged.completedDays = Array.isArray(raw.completedDays)
    ? raw.completedDays.filter((d) => Number.isFinite(d))
    : [];

  merged.skills =
    Array.isArray(raw.skills) && raw.skills.length > 0 ? raw.skills : defaultStudent.skills;

  merged.recentActivity = Array.isArray(raw.recentActivity) ? raw.recentActivity : [];

  merged.submittedProjects = isPlainObject(raw.submittedProjects) ? raw.submittedProjects : {};

  // Reconcile against the current achievement catalog — a legacy save made
  // before an achievement existed (or with a corrupted list) still gets
  // every known achievement represented, defaulting to locked rather than
  // silently missing.
  const existingById = new Map(
    (Array.isArray(raw.achievements) ? raw.achievements : []).map((a) => [a.id, a])
  );
  merged.achievements = achievementDefs.map(
    (def) => existingById.get(def.id) ?? { id: def.id, unlocked: false, unlockedOn: null }
  );

  return merged;
}
