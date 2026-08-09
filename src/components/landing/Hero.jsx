import Container from '../common/Container';
import Button from '../common/Button';

const BADGES = [
  { icon: '🔥', label: 'Streak' },
  { icon: '⚡', label: 'XP' },
  { icon: '🗓', label: '60 Days' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-16 text-center sm:pt-24 sm:pb-24">
      <div aria-hidden="true" className="warm-glow pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full" />

      <Container className="relative flex flex-col items-center gap-6">
        <p className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-1.5 font-display text-xs font-medium text-volt card-shadow">
          🔥 Build. Ship. Level Up.
        </p>

        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-6xl">
          The 60-day challenge that turns <span className="text-volt">average</span> into{' '}
          <span className="text-volt">unstoppable</span>
        </h1>

        <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Complete one practical coding mission every day, build real projects,
          prove your work, and track your developer journey — one streak at a time.
        </p>

        <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
          <Button to="/dashboard" variant="primary" size="lg" className="w-full sm:w-auto">
            Start Your 60-Day Journey
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg" className="w-full sm:w-auto">
            See How It Works
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-muted card-shadow"
            >
              <span aria-hidden="true">{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
