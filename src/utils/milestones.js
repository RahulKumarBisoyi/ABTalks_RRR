import { TOTAL_DAYS } from '../data/challenges';
import { getAchievementDef } from '../data/achievements';

// The main sequential milestone line (excludes the two parallel-track
// badges, frontend-builder and api-explorer, which aren't part of a single
// linear countdown).
const MAIN_LINE = [
  { id: 'first-ship', target: 1, currentValue: (s) => s.completedDays.length, unit: 'mission' },
  { id: 'week-warrior', target: 7, currentValue: (s) => s.currentStreak, unit: 'day streak' },
  { id: 'ten-mission-builder', target: 10, currentValue: (s) => s.completedDays.length, unit: 'missions' },
  { id: 'thirty-day-builder', target: 30, currentValue: (s) => s.completedDays.length, unit: 'missions' },
  { id: 'sixty-day-legend', target: TOTAL_DAYS, currentValue: (s) => s.completedDays.length, unit: 'missions' },
];

export function getNextMilestone(student) {
  for (const entry of MAIN_LINE) {
    const record = student.achievements.find((a) => a.id === entry.id);
    if (record?.unlocked) continue;

    const def = getAchievementDef(entry.id);
    if (!def) continue;

    const current = Math.min(entry.target, entry.currentValue(student));
    const remaining = Math.max(0, entry.target - current);

    return { def, current, target: entry.target, remaining, unit: entry.unit };
  }
  return null; // every main-line milestone unlocked
}
