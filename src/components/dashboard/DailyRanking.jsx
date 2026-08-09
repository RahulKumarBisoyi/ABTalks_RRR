import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import Button from '../common/Button';
import { leaderboard } from '../../data/leaderboard';

const WINDOW_SIZE = 5;

// Merge the current student's LIVE xp/name into the mock leaderboard, then
// re-sort and re-rank so their position genuinely moves as their XP changes
// — this is the fix for the "leaderboard shows stale XP" issue.
function buildLiveLeaderboard(student) {
  const merged = leaderboard.map((entry) =>
    entry.isCurrentUser ? { ...entry, name: student.name, xp: student.xp } : entry
  );
  const sorted = [...merged].sort((a, b) => b.xp - a.xp);
  return sorted.map((entry, i) => ({ ...entry, rank: i + 1 }));
}

function getWindow(entries) {
  const idx = entries.findIndex((e) => e.isCurrentUser);
  if (idx === -1) return entries.slice(0, WINDOW_SIZE);
  const half = Math.floor(WINDOW_SIZE / 2);
  let start = Math.max(0, idx - half);
  let end = start + WINDOW_SIZE;
  if (end > entries.length) {
    end = entries.length;
    start = Math.max(0, end - WINDOW_SIZE);
  }
  return entries.slice(start, end);
}

function rowTint(entry) {
  if (entry.isCurrentUser) return 'border border-lavender bg-lavender/10 px-3 -mx-3';
  if (entry.rank === 1) return 'bg-yellow/8';
  if (entry.rank === 2) return 'bg-blue/8';
  if (entry.rank === 3) return 'bg-peach/8';
  return '';
}

function RankRow({ entry }) {
  return (
    <li
      className={`flex items-center justify-between gap-3 rounded-[var(--radius-mission)] border-b border-line/60 py-2.5 last:border-0 last:pb-0 first:pt-0 ${rowTint(entry)}`}
    >
      <span className="flex items-center gap-3 font-mono text-sm">
        <span className={entry.isCurrentUser ? 'text-lavender' : entry.rank === 1 ? 'text-yellow' : entry.rank === 2 ? 'text-blue' : entry.rank === 3 ? 'text-peach' : 'text-faint'}>
          {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : `#${entry.rank}`}
        </span>
        <span className={entry.isCurrentUser ? 'font-bold text-lavender' : 'text-paper'}>
          {entry.name}
        </span>
      </span>
      <span className="font-mono text-xs text-muted">{entry.xp.toLocaleString()} XP</span>
    </li>
  );
}

export default function DailyRanking({ student }) {
  const liveLeaderboard = buildLiveLeaderboard(student);
  const visible = getWindow(liveLeaderboard);

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <div className="flex items-center justify-between">
            <PanelLabel>Leaderboard</PanelLabel>
            <Button to="/leaderboard" variant="ghost" size="sm" className="!px-0 !py-0 normal-case">
              View All →
            </Button>
          </div>
          <ul className="mt-3">
            {visible.map((entry) => (
              <RankRow key={entry.handle ?? entry.rank} entry={entry} />
            ))}
          </ul>
        </Panel>
      </Container>
    </section>
  );
}
