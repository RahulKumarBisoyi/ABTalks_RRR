import { achievementDefs } from './achievements';

// The role is fixed for every student — there is no track selection
// anywhere in the product. Exported so it's defined in exactly one place.
export const STUDENT_ROLE = 'Software Developer';

// The TRUE fresh-install default. A brand-new (or reset) student starts at
// Day 1 with nothing completed — no XP, no streak, no achievements. This is
// what StudentContext seeds when localStorage is empty.
export const freshStudent = {
  name: 'Rahul',
  handle: '@rahul.builds',
  role: STUDENT_ROLE,
  currentDay: 1,
  currentStreak: 0,
  longestStreak: 0,
  xp: 0,
  level: 1,
  avatarSeed: 'rahul',
  joinedDay: 1,
  completedDays: [],
  // Keyed by day -> { day, githubUrl, linkedinUrl, completedAt }. Also
  // doubles as the duplicate-completion guard and the next-day unlock
  // timestamp source — see utils/dateGate.js.
  submittedProjects: {},
  skills: [
    { name: 'React', level: 0, xp: 0 },
    { name: 'JavaScript', level: 0, xp: 0 },
    { name: 'CSS / Tailwind', level: 0, xp: 0 },
    { name: 'Git & GitHub', level: 0, xp: 0 },
    { name: 'API Integration', level: 0, xp: 0 },
  ],
  achievements: achievementDefs.map((def) => ({ id: def.id, unlocked: false, unlockedOn: null })),
  recentActivity: [],
};

// The primary export other modules import — kept as its own name so
// StudentContext's "load or seed" logic reads clearly.
export const defaultStudent = freshStudent;

// A populated "mid-journey" seed, kept only as optional mock/demo data (per
// spec) — NOT used as the fresh-install default anymore. Useful if the team
// ever wants to demo a further-along profile without playing through 11
// days of the real unlock-gated flow first. Not wired into any UI control.
export const demoSeedStudent = {
  ...freshStudent,
  currentDay: 12,
  currentStreak: 12,
  longestStreak: 14,
  xp: 1450,
  level: 4,
  completedDays: Array.from({ length: 11 }, (_, i) => i + 1),
  submittedProjects: {
    1: {
      day: 1,
      githubUrl: 'https://github.com/rahulbuilds/day-01-landing-page',
      linkedinUrl: 'https://linkedin.com/posts/rahulbuilds_day1-abtalks',
      completedAt: '2026-06-02T09:14:00.000Z',
    },
  },
  skills: [
    { name: 'React', level: 3, xp: 620 },
    { name: 'JavaScript', level: 4, xp: 810 },
    { name: 'CSS / Tailwind', level: 2, xp: 340 },
    { name: 'Git & GitHub', level: 3, xp: 410 },
    { name: 'API Integration', level: 1, xp: 120 },
  ],
  achievements: [
    { id: 'first-ship', unlocked: true, unlockedOn: 1 },
    { id: 'week-warrior', unlocked: true, unlockedOn: 7 },
    { id: 'ten-mission-builder', unlocked: true, unlockedOn: 10 },
    { id: 'thirty-day-builder', unlocked: false, unlockedOn: null },
    { id: 'sixty-day-legend', unlocked: false, unlockedOn: null },
    { id: 'frontend-builder', unlocked: false, unlockedOn: null },
    { id: 'api-explorer', unlocked: false, unlockedOn: null },
  ],
  recentActivity: [
    { id: 'act-11', kind: 'completed', day: 11, label: 'Completed Day 11', xp: 140, when: 'Yesterday' },
    { id: 'act-10', kind: 'completed', day: 10, label: 'Completed Day 10', xp: 130, when: '2 days ago' },
    { id: 'act-streak10', kind: 'achievement', label: 'Unlocked "10 Mission Builder"', when: '3 days ago' },
    { id: 'act-9', kind: 'completed', day: 9, label: 'Completed Day 9', xp: 120, when: '3 days ago' },
    { id: 'act-8', kind: 'completed', day: 8, label: 'Completed Day 8', xp: 110, when: '4 days ago' },
  ],
};

// Edge-case variants, still available for defensive-rendering coverage —
// components read these the same way they'd read any student object.
export const missedDayStudent = {
  ...demoSeedStudent,
  currentStreak: 0,
  longestStreak: 9,
  completedDays: Array.from({ length: 8 }, (_, i) => i + 1), // gap after day 8
  recentActivity: [
    { id: 'act-miss', kind: 'completed', day: 8, label: 'Completed Day 8', xp: 110, when: '4 days ago' },
  ],
};

export const emptyProfileStudent = {
  ...freshStudent,
  name: 'New Builder',
  handle: '@newbuilder',
};
