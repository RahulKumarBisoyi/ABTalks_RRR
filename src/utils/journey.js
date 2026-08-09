// Single source of truth for "what state is day N in" — used by the journey
// calendar and available to anything else that needs the same classification
// (milestones, week strip, etc.) so it's never computed two different ways.
export function getDayState(day, student) {
  if (student.completedDays.includes(day)) return 'completed';
  if (day === student.currentDay) return 'current';
  if (day < student.currentDay) return 'missed';
  return 'upcoming';
}
