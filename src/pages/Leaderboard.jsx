import { useStudent } from '../hooks/useStudent';
import { leaderboard } from '../data/leaderboard';
import { TOTAL_DAYS } from '../data/challenges';
import { percentComplete, formatPercent } from '../utils/progress';

import Container from '../components/common/Container';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import BottomNav from '../components/common/BottomNav';

function buildLiveLeaderboard(student) {
  const merged = leaderboard.map((entry) =>
    entry.isCurrentUser ? { ...entry, name: student.name, xp: student.xp, streak: student.currentStreak } : entry
  );
  const sorted = [...merged].sort((a, b) => b.xp - a.xp);
  return sorted.map((entry, i) => ({ ...entry, rank: i + 1 }));
}

const AVATAR_COLORS = ['bg-flame', 'bg-blue', 'bg-lavender', 'bg-mint', 'bg-yellow', 'bg-peach', 'bg-pink', 'bg-cyan', 'bg-purple'];

function Avatar({ name, colorIndex }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold text-white ${AVATAR_COLORS[colorIndex % AVATAR_COLORS.length]}`}
    >
      {initials}
    </span>
  );
}

function rowTint(entry) {
  if (entry.isCurrentUser) return 'bg-lavender/8';
  if (entry.rank === 1) return 'bg-yellow/8';
  if (entry.rank === 2) return 'bg-blue/8';
  if (entry.rank === 3) return 'bg-peach/8';
  return '';
}

export default function LeaderboardPage() {
  const { student } = useStudent();
  const board = buildLiveLeaderboard(student);
  const you = board.find((e) => e.isCurrentUser);
  const journeyPercent = percentComplete(student.completedDays.length, TOTAL_DAYS);

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink pb-24">
      <DashboardHeader student={student} />

      <main>
        <section className="py-8 text-center">
          <Container>
            <p className="text-4xl" aria-hidden="true">🏆</p>
            <h1 className="mt-3 font-display text-2xl font-bold text-paper sm:text-3xl">Global Leaderboard</h1>
            <p className="mt-1.5 text-sm text-muted">Top builders in the 60-day ABTalks journey</p>
          </Container>
        </section>

        {you && (
          <section className="py-3">
            <Container>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-faint">Your Position</p>
              <div className="card-shadow flex items-center justify-between rounded-[var(--radius-mission)] border-2 border-lavender bg-lavender/10 p-4">
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-lavender">#{you.rank}</span>
                  <Avatar name={you.name} colorIndex={you.rank} />
                  <div>
                    <p className="font-display text-sm font-bold text-paper">{you.name} <span className="font-mono text-[10px] font-normal text-lavender">(You)</span></p>
                    <p className="font-mono text-[10px] text-muted">🔥 {you.streak} day streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-base font-bold text-paper">{you.xp.toLocaleString()}</p>
                  <p className="font-mono text-[10px] text-faint">{formatPercent(journeyPercent)} complete</p>
                </div>
              </div>
            </Container>
          </section>
        )}

        <section className="py-4">
          <Container>
            <div className="card-shadow overflow-hidden rounded-[var(--radius-mission)] border border-line bg-surface">
              <ul className="divide-y divide-line">
                {board.map((entry) => (
                  <li
                    key={entry.handle ?? entry.rank}
                    className={`flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 ${rowTint(entry)}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 text-center font-mono text-xs font-bold ${
                          entry.isCurrentUser
                            ? 'text-lavender'
                            : entry.rank === 1
                              ? 'text-yellow'
                              : entry.rank === 2
                                ? 'text-blue'
                                : entry.rank === 3
                                  ? 'text-peach'
                                  : 'text-faint'
                        }`}
                      >
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
                      </span>
                      <Avatar name={entry.name} colorIndex={entry.rank} />
                      <div>
                        <p className={`font-display text-sm font-bold ${entry.isCurrentUser ? 'text-lavender' : 'text-paper'}`}>
                          {entry.name}
                          {entry.isCurrentUser && <span className="ml-1.5 font-mono text-[10px] font-normal text-lavender">(You)</span>}
                        </p>
                        <p className="font-mono text-[10px] text-faint">{entry.track}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-semibold text-paper">{entry.xp.toLocaleString()} XP</p>
                      <p className="font-mono text-[10px] text-faint">🔥 {entry.streak}d</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
