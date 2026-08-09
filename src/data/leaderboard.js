// Mock daily leaderboard. Rahul (the mock student) is deliberately placed
// mid-pack so the ranking UI has somewhere to push toward.

export const leaderboard = [
  { rank: 1, name: 'Priya S.', handle: '@priya.codes', xp: 2180, streak: 24, track: 'Frontend Development' },
  { rank: 2, name: 'Arjun M.', handle: '@arjunbuilds', xp: 2050, streak: 19, track: 'Backend Development' },
  { rank: 3, name: 'Sneha K.', handle: '@sneha.dev', xp: 1960, streak: 21, track: 'Frontend Development' },
  { rank: 4, name: 'Vikram R.', handle: '@vikram.ships', xp: 1870, streak: 15, track: 'Full Stack' },
  { rank: 5, name: 'Ananya T.', handle: '@ananya.ui', xp: 1720, streak: 17, track: 'Frontend Development' },
  { rank: 6, name: 'Karan D.', handle: '@karan.dev', xp: 1600, streak: 12, track: 'Backend Development' },
  { rank: 7, name: 'Rahul', handle: '@rahul.builds', xp: 1450, streak: 12, track: 'Frontend Development', isCurrentUser: true },
  { rank: 8, name: 'Meera J.', handle: '@meera.codes', xp: 1390, streak: 8, track: 'Frontend Development' },
  { rank: 9, name: 'Aditya P.', handle: '@aditya.dev', xp: 1310, streak: 11, track: 'Full Stack' },
  { rank: 10, name: 'Ishaan V.', handle: '@ishaan.builds', xp: 1240, streak: 6, track: 'Backend Development' },
];

export function getCurrentUserRank() {
  return leaderboard.find((entry) => entry.isCurrentUser) ?? null;
}
