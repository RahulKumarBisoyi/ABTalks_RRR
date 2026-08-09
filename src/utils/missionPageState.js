import { getUnlockedDay } from './dateGate';
import { TOTAL_DAYS } from '../data/challenges';

/**
 * - 'completed' → already done — the page renders in history/review mode.
 * - 'available' → this is the unlocked day right now — full mission, can submit.
 * - 'locked'    → the very next day after the unlocked one — "available tomorrow".
 * - 'future'    → further out than that — plain locked.
 * - 'missed'    → earlier than the unlocked day and never completed. Not
 *                 reachable through normal navigation (progression is
 *                 strictly sequential), but the architecture supports it.
 */
export function getMissionPageState(student, day) {
  const d = Number(day);

  if (student.completedDays.includes(d)) return 'completed';

  const unlocked = getUnlockedDay(student, TOTAL_DAYS);
  const unlockedIsDone = student.completedDays.includes(unlocked);

  if (d === unlocked) return 'available';
  // "Available tomorrow" only makes sense once today's unlocked mission is
  // actually done — otherwise Day N+1 is just as locked as any future day.
  if (unlockedIsDone && d === unlocked + 1) return 'locked';
  if (d > unlocked) return 'future';
  return 'missed';
}
