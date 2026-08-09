import Container from '../common/Container';
import Reveal from '../common/Reveal';

const CHAIN_LENGTH = 12;

export default function StreakMotivation() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <span className="text-4xl flame-glow" aria-hidden="true">
            🔥
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            Keep the chain alive.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            12 days today. 13 tomorrow.
            <br />
            Don&rsquo;t break the chain.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: CHAIN_LENGTH }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${
                i === CHAIN_LENGTH - 1 ? 'bg-volt volt-glow' : 'bg-flame/70'
              }`}
              aria-hidden="true"
            />
          ))}
          <span className="ml-2 font-mono text-xs text-muted">day 12</span>
        </Reveal>
      </Container>
    </section>
  );
}
