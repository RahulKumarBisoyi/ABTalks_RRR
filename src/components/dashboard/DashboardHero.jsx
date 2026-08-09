import Container from '../common/Container';
import WeekStrip from './WeekStrip';
import { TOTAL_DAYS } from '../../data/challenges';
import { levelInfo, percentComplete, formatPercent } from '../../utils/progress';

function RadialLevelRing({ level, percent }) {
  const size = 64;
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--color-line)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-volt)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 700ms ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-base font-bold leading-none text-paper">{level}</span>
        <span className="font-mono text-[8px] uppercase text-faint">Lv</span>
      </div>
    </div>
  );
}

export default function DashboardHero({ student }) {
  const { level, percent } = levelInfo(student.xp);
  const journeyPercent = percentComplete(student.completedDays.length, TOTAL_DAYS);
  const isFirstDay = student.completedDays.length === 0 && student.currentStreak === 0;
  const isBrokenStreak = !isFirstDay && student.currentStreak === 0;

  const subtitle = isFirstDay
    ? "Today's the day you start the chain."
    : isBrokenStreak
      ? 'Your streak reset — ship today\u2019s mission to start a new one.'
      : `Day ${student.currentDay} of ${TOTAL_DAYS} \u2014 keep the streak alive!`;

  return (
    <section id="progress" className="scroll-mt-20 border-b border-line py-6">
      <Container>
        <div className="card-shadow rounded-[var(--radius-mission)] border border-line bg-surface p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold text-paper sm:text-2xl">
                Hey, {student.name || 'Builder'} 👋
              </p>
              <p className="mt-1 text-sm text-muted">{subtitle}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs font-semibold text-flame">
                  🔥 {student.currentStreak}d streak
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs font-semibold text-volt">
                  ⚡ {student.xp.toLocaleString()} XP
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-line bg-ink px-3 py-1 font-mono text-xs font-semibold text-purple">
                  ★ Lv {level}
                </span>
              </div>
            </div>

            <RadialLevelRing level={level} percent={percent} />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Challenge Progress</p>
              <p className="font-mono text-[10px] font-bold text-paper">{formatPercent(journeyPercent)}</p>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-line">
              <div
                className="h-2 rounded-full gradient-fill-lavender-blue transition-all duration-700"
                style={{ width: `${journeyPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-5">
            <WeekStrip student={student} />
          </div>
        </div>
      </Container>
    </section>
  );
}
