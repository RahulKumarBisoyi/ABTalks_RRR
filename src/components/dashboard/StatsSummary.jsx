import Container from '../common/Container';
import { TOTAL_DAYS } from '../../data/challenges';
import { percentComplete, formatPercent } from '../../utils/progress';
import { leaderboard } from '../../data/leaderboard';

function getLiveRank(student) {
  const merged = leaderboard.map((e) => (e.isCurrentUser ? { ...e, xp: student.xp } : e));
  const sorted = [...merged].sort((a, b) => b.xp - a.xp);
  const idx = sorted.findIndex((e) => e.isCurrentUser);
  return { rank: idx + 1, total: sorted.length };
}

const CARD_STYLES = {
  flame: { bg: 'bg-peach/12 border-peach/25', icon: 'bg-peach/20 text-peach', value: 'text-flame' },
  volt: { bg: 'bg-yellow/12 border-yellow/25', icon: 'bg-yellow/20 text-yellow', value: 'text-volt' },
  rank: { bg: 'bg-blue/10 border-blue/25', icon: 'bg-blue/20 text-blue', value: 'text-blue' },
  ship: { bg: 'bg-mint/10 border-mint/25', icon: 'bg-mint/20 text-mint', value: 'text-ship' },
};

export default function StatsSummary({ student }) {
  const { rank, total } = getLiveRank(student);
  const journeyPercent = percentComplete(student.completedDays.length, TOTAL_DAYS);

  const stats = [
    { key: 'flame', icon: '🔥', value: student.currentStreak, label: 'Day Streak', sub: `Best ${student.longestStreak}` },
    { key: 'volt', icon: '⚡', value: student.xp.toLocaleString(), label: 'Total XP', sub: `Level ${Math.max(1, Math.floor(student.xp / 400) + 1)}` },
    { key: 'rank', icon: '🏅', value: `#${rank}`, label: 'Global Rank', sub: `of ${total}` },
    { key: 'ship', icon: '✅', value: formatPercent(journeyPercent), label: 'Completion', sub: `${student.completedDays.length}/${TOTAL_DAYS} missions` },
  ];

  return (
    <section className="py-4">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => {
            const style = CARD_STYLES[stat.key];
            return (
              <div
                key={stat.key}
                className={`card-shadow rounded-[var(--radius-mission)] border p-4 ${style.bg}`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl text-base ${style.icon}`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </span>
                <p className={`mt-2.5 font-display text-xl font-bold ${style.value}`}>{stat.value}</p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">{stat.label}</p>
                <p className="mt-0.5 font-mono text-[10px] text-faint">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
