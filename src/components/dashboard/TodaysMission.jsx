import Container from '../common/Container';
import Button from '../common/Button';
import { TOTAL_DAYS } from '../../data/challenges';
import { getTodaysMissionView } from '../../utils/todaysMission';

function UnavailablePanel() {
  return (
    <section className="py-8">
      <Container>
        <div className="rounded-[var(--radius-mission)] border border-line bg-surface p-6 text-center">
          <p className="font-mono text-sm text-muted">
            No mission is available right now. Check back soon.
          </p>
        </div>
      </Container>
    </section>
  );
}

// Shown once the calendar-unlocked day is already completed — the next
// mission is real, it's just not open yet. This is the exact "Day N ✓
// completed / Day N+1 locked until tomorrow" state from the spec.
function WaitingForTomorrow({ challenge, nextDay }) {
  return (
    <section className="py-8">
      <Container>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-volt">
          Today&rsquo;s Mission
        </p>

        <div className="mission-celebrate rounded-[var(--radius-mission)] border-2 border-ship bg-ship/10 p-5 text-center sm:p-7">
          <p className="font-display text-xl font-bold text-ship sm:text-2xl">
            ✓ Day {challenge.day} Completed
          </p>
          <p className="mt-2 font-mono text-sm font-bold text-volt">+{challenge.xp} XP earned</p>

          <div className="mt-5 border-t border-line/60 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Next Mission</p>
            <p className="mt-1 font-mono text-sm font-bold text-paper">
              Day {nextDay} 🔒 Available Tomorrow
            </p>
          </div>

          <Button
            to={`/day/${challenge.day}`}
            variant="secondary"
            size="lg"
            className="mt-5 w-full justify-center"
          >
            Review Day {challenge.day} →
          </Button>
        </div>
      </Container>
    </section>
  );
}

function JourneyComplete() {
  return (
    <section className="py-8">
      <Container>
        <div className="mission-celebrate rounded-[var(--radius-mission)] border-2 border-volt bg-volt/10 p-5 text-center volt-glow sm:p-7">
          <p className="font-display text-2xl font-bold text-volt sm:text-3xl">
            60 / 60 — 100% Complete
          </p>
          <p className="mt-3 font-mono text-sm text-paper">🏆 60-Day Legend</p>
          <p className="mt-3 text-sm text-muted">
            You built, shipped, and proved your way through the entire 60-day journey.
          </p>
        </div>
      </Container>
    </section>
  );
}

const TAG_COLORS = ['text-blue bg-blue/10 border-blue/25', 'text-cyan bg-cyan/10 border-cyan/25', 'text-lavender bg-lavender/10 border-lavender/25', 'text-mint bg-mint/10 border-mint/25'];

function ActiveMission({ challenge }) {
  return (
    <section className="py-8">
      <Container>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-volt">
          Today&rsquo;s Mission
        </p>

        <div className="relative overflow-hidden rounded-[var(--radius-mission)] border-2 border-volt bg-gradient-to-br from-flame/8 via-surface to-volt/8 p-5 volt-glow sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold uppercase tracking-wide text-volt">
              Day {challenge.day} / {TOTAL_DAYS}
            </span>
            <span
              className={`rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide ${
                challenge.difficulty === 'Beginner'
                  ? 'border-mint/30 bg-mint/15 text-mint'
                  : challenge.difficulty === 'Advanced'
                    ? 'border-lavender/30 bg-lavender/15 text-lavender'
                    : 'border-peach/30 bg-peach/15 text-peach'
              }`}
            >
              {challenge.difficulty}
            </span>
          </div>

          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            {challenge.title}
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-paper/80 sm:text-base">
            {challenge.brief}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {challenge.skillTags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${TAG_COLORS[i % TAG_COLORS.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="font-mono text-sm font-bold text-volt">+{challenge.xp} XP</span>
            <Button
              to={`/day/${challenge.day}`}
              variant="primary"
              size="lg"
              className="flex-1 justify-center sm:flex-none"
            >
              Start Mission →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function TodaysMission({ student }) {
  const view = getTodaysMissionView(student);

  if (view.mode === 'unavailable') return <UnavailablePanel />;
  if (view.mode === 'journey-complete') return <JourneyComplete />;
  if (view.mode === 'waiting') return <WaitingForTomorrow challenge={view.challenge} nextDay={view.nextDay} />;
  return <ActiveMission challenge={view.challenge} />;
}
