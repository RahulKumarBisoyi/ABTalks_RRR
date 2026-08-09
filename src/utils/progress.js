import { TOTAL_DAYS } from '../data/challenges';

const XP_PER_LEVEL = 400;

// Journey completion is driven by how many days are actually completed,
// not which day the student is currently on — completing Day 12 out of 60
// is 20%, full stop, whether or not Day 13 exists yet.
export function percentComplete(completedCount, total = TOTAL_DAYS) {
  if (total <= 0) return 0;
  const raw = Math.min(100, (completedCount / total) * 100);
  return Math.round(raw * 100) / 100;
}

export function formatPercent(percent) {
  return Number.isInteger(percent) ? `${percent}%` : `${percent.toFixed(2)}%`;
}

export function levelInfo(xp) {
  const level = Math.max(1, Math.floor(xp / XP_PER_LEVEL) + 1);
  const levelBaseXp = (level - 1) * XP_PER_LEVEL;
  const xpIntoLevel = xp - levelBaseXp;
  const percent = Math.min(100, Math.round((xpIntoLevel / XP_PER_LEVEL) * 100));
  return { level, xpIntoLevel, xpForNext: XP_PER_LEVEL, percent };
}

const WEEKDAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// A 7-slot strip ending on the student's current day. Purely mission-number
// driven (not real calendar dates) — matches how the rest of the prototype
// tracks time.
export function weekStrip(student) {
  const { currentDay, completedDays } = student;
  const start = Math.max(1, currentDay - 6);
  const days = [];
  for (let day = start; day <= currentDay; day += 1) {
    days.push(day);
  }
  // Left-pad so the strip always renders 7 slots, even early in the journey.
  const padCount = 7 - days.length;
  const slots = [
    ...Array.from({ length: padCount }, () => null),
    ...days,
  ];

  return slots.map((day, i) => {
    let state = 'future';
    if (day === null) state = 'empty';
    else if (day === currentDay) state = 'today';
    else if (completedDays.includes(day)) state = 'done';
    else if (day < currentDay) state = 'missed';

    return { key: `${i}-${day ?? 'pad'}`, label: WEEKDAY_LABELS[i], day, state };
  });
}
