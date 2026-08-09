const DEV_OFFSET_KEY = 'abtalks:devDateOffsetDays';

function safeGetItem(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

// Dev-only: lets the team simulate "the next calendar day" during a demo
// without waiting or touching the real system clock. Never surfaced to a
// normal student — only wired into the small reset/demo control.
export function getDevDateOffsetDays() {
  const raw = safeGetItem(DEV_OFFSET_KEY);
  const n = raw ? parseInt(raw, 10) : 0;
  return Number.isFinite(n) ? n : 0;
}

export function advanceDevDateOffset() {
  const next = getDevDateOffsetDays() + 1;
  safeSetItem(DEV_OFFSET_KEY, String(next));
  return next;
}

export function resetDevDateOffset() {
  safeSetItem(DEV_OFFSET_KEY, '0');
}

// "Today" as YYYY-MM-DD, shifted by the dev offset (0 in normal use). Using
// the date portion only — never a 24-hour timer — is what makes this a
// calendar-day rule rather than a countdown.
export function getTodayDateString() {
  const d = new Date();
  d.setDate(d.getDate() + getDevDateOffsetDays());
  return d.toISOString().slice(0, 10);
}

/**
 * The single source of truth for "which day is unlocked right now."
 *
 * - No completions yet → Day 1 is immediately available (no waiting).
 * - Otherwise → the highest completed day stays "unlocked" (so it can be
 *   reviewed / the student sees the "come back tomorrow" state) until the
 *   calendar date actually changes from the day it was completed on — at
 *   which point the next day unlocks.
 */
export function getUnlockedDay(student, totalDays) {
  const completedDays = student.completedDays ?? [];
  if (completedDays.length === 0) return 1;

  const highest = Math.max(...completedDays);
  const record = student.submittedProjects?.[highest];
  if (!record?.completedAt) return Math.min(highest, totalDays);

  const lastDateStr = record.completedAt.slice(0, 10);
  const todayStr = getTodayDateString();
  const unlocked = todayStr > lastDateStr ? highest + 1 : highest;

  return Math.min(unlocked, totalDays);
}
