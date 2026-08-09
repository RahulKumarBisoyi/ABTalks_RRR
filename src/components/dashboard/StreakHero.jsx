import Container from '../common/Container';
import WeekStrip from './WeekStrip';

export default function StreakHero({ student }) {
  const { currentStreak } = student;
  const isFirstDay = student.completedDays.length === 0 && currentStreak === 0;
  const isBrokenStreak = !isFirstDay && currentStreak === 0;

  let headline = `${currentStreak} DAY STREAK`;
  let supporting = 'Keep the chain alive.';
  let flameClass = 'flame-glow';

  if (isFirstDay) {
    headline = 'START YOUR STREAK';
    supporting = 'Complete today\u2019s mission to light the first flame.';
    flameClass = 'opacity-40';
  } else if (isBrokenStreak) {
    headline = 'CHAIN BROKEN';
    supporting = 'No shame in a reset — ship today\u2019s mission to start a new one.';
    flameClass = 'opacity-40';
  }

  return (
    <section className="border-b border-line py-6">
      <Container className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className={`text-3xl ${flameClass}`} aria-hidden="true">
            🔥
          </span>
          <div>
            <p className="font-display text-xl font-bold leading-none text-paper sm:text-2xl">
              {headline}
            </p>
            <p className="mt-1.5 text-sm text-muted">{supporting}</p>
          </div>
        </div>

        <WeekStrip student={student} />
      </Container>
    </section>
  );
}
