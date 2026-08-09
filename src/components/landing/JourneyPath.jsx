import Container from '../common/Container';
import Reveal from '../common/Reveal';

const NODES = [
  { day: '01', label: 'Start here', state: 'active' },
  { day: '15', label: 'Two weeks in', state: 'default' },
  { day: '30', label: 'Halfway boss', state: 'default' },
  { day: '45', label: 'Momentum', state: 'default' },
  { day: '60', label: 'Ship day', state: 'finish' },
];

function nodeCircleClasses(state) {
  if (state === 'active') {
    return 'bg-volt border-volt text-volt-ink volt-glow';
  }
  if (state === 'finish') {
    return 'bg-surface border-volt text-volt';
  }
  return 'bg-surface border-line text-muted';
}

export default function JourneyPath() {
  return (
    <section id="journey" className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-lg">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">The Concept</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            One mission every day.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            No binge-watching tutorials. Sixty consecutive days of building, one
            practical mission at a time, until consistency becomes the skill.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mt-12 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute left-4 top-1 bottom-1 w-px bg-line md:left-6 md:right-6 md:top-4 md:bottom-auto md:h-px md:w-auto"
          />

          <ol className="relative flex flex-col gap-7 md:flex-row md:items-start md:justify-between md:gap-4">
            {NODES.map((node) => (
              <li key={node.day} className="flex items-center gap-4 md:flex-1 md:flex-col md:items-center md:gap-3 md:text-center">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${nodeCircleClasses(
                    node.state
                  )}`}
                >
                  {node.day}
                </span>
                <span className="font-mono text-sm text-paper md:text-xs md:uppercase md:tracking-wide">
                  Day {node.day}
                  <span className="ml-2 font-body text-xs font-normal text-muted md:mt-1 md:block md:ml-0">
                    {node.label}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
