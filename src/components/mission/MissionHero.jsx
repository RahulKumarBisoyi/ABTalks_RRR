import Container from '../common/Container';
import { TOTAL_DAYS } from '../../data/challenges';

export default function MissionHero({ student, challenge }) {
  const showRecoveryBanner = student.currentStreak === 0 && student.completedDays.length > 0;

  return (
    <section className="relative overflow-hidden border-b border-line py-8 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-volt/10 blur-3xl"
      />

      <Container className="relative">
        {showRecoveryBanner && (
          <p className="mb-4 inline-flex items-center gap-2 rounded-[var(--radius-mission)] border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
            🔥 Your streak reset — completing this mission starts a new one.
          </p>
        )}

        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-volt">
          Day {challenge.day} / {TOTAL_DAYS}
        </p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
          Today&rsquo;s Mission
        </p>

        <h1 className="mt-3 font-display text-3xl font-bold leading-[1.05] text-paper sm:text-5xl">
          {challenge.title}
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-paper/80 sm:text-base">
          {challenge.brief}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:max-w-md">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Difficulty</p>
            <p className="mt-1 font-mono text-sm font-bold text-paper">{challenge.difficulty}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Skills</p>
            <p className="mt-1 font-mono text-xs text-paper">{challenge.skillTags.slice(0, 3).join(' · ')}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Reward</p>
            <p className="mt-1 font-mono text-sm font-bold text-volt">⚡ +{challenge.xp} XP</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
