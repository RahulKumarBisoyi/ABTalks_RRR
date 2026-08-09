// Static badge/achievement definitions. Unlock state lives on the student
// object (data/student.js) and is merged in at render time — keeps "what a
// badge is" separate from "did this student earn it."
//
// ~7 badges, matching ABTalks' canonical set. Two (frontend-builder,
// api-explorer) are parallel-track skill badges rather than part of the
// main day/streak countdown — see utils/milestones.js for the main line.

export const achievementDefs = [
  {
    id: 'first-ship',
    label: 'First Ship',
    description: 'Complete Day 1.',
    icon: 'flag',
  },
  {
    id: 'week-warrior',
    label: '7-Day Warrior',
    description: 'Maintain a 7-day streak.',
    icon: 'flame',
  },
  {
    id: 'ten-mission-builder',
    label: '10 Mission Builder',
    description: 'Complete 10 missions.',
    icon: 'bolt',
  },
  {
    id: 'thirty-day-builder',
    label: '30-Day Builder',
    description: 'Complete 30 missions.',
    icon: 'rocket',
  },
  {
    id: 'sixty-day-legend',
    label: '60-Day Legend',
    description: 'Complete all 60 missions.',
    icon: 'trophy',
  },
  {
    id: 'frontend-builder',
    label: 'Frontend Builder',
    description: 'Complete the first 20 frontend foundation missions.',
    icon: 'code',
  },
  {
    id: 'api-explorer',
    label: 'API Explorer',
    description: 'Complete 3 API-focused missions.',
    icon: 'plug',
  },
];

export function getAchievementDef(id) {
  return achievementDefs.find((a) => a.id === id) ?? null;
}
