import { getChallengeByDay, TOTAL_DAYS } from '../data/challenges';
import { getUnlockedDay } from './dateGate';

/**
 * Decides what "Today's Mission" should render, using the same date gate
 * as the mission page itself.
 *
 * - 'active'            → the unlocked day is a genuinely new mission — show it.
 * - 'waiting'            → the unlocked day is already completed (calendar
 *                          date hasn't advanced yet) — show a "come back
 *                          tomorrow" recap instead of a fake next mission.
 * - 'journey-complete'  → all 60 days are done.
 * - 'unavailable'       → defensive fallback, shouldn't happen with real data.
 */
export function getTodaysMissionView(student) {
  const unlockedDay = getUnlockedDay(student, TOTAL_DAYS);

  if (unlockedDay > TOTAL_DAYS) {
    return { mode: 'journey-complete', challenge: null };
  }

  const challenge = getChallengeByDay(unlockedDay);
  if (!challenge) return { mode: 'unavailable', challenge: null };

  if (student.completedDays.includes(unlockedDay)) {
    return { mode: 'waiting', challenge, nextDay: unlockedDay + 1 };
  }

  return { mode: 'active', challenge };
}
