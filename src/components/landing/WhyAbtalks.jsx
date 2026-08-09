import Container from '../common/Container';
import Reveal from '../common/Reveal';

const REASONS = [
  'Build instead of only consuming tutorials',
  'Ship real projects for your portfolio',
  'Build daily consistency',
  'Make your progress visible',
  'Develop real-world skills',
  'Walk away with proof of your work',
];

export default function WhyAbtalks() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-lg">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">Why ABTalks</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            What you actually get out of it.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-[var(--radius-mission)] border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
              <span className="ml-2 font-mono text-[11px] text-faint">why-abtalks.log</span>
            </div>
            <ul className="divide-y divide-line">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3 px-4 py-3.5 sm:px-5">
                  <span className="font-mono text-sm text-volt">&gt;</span>
                  <span className="text-sm text-paper/90 sm:text-base">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
