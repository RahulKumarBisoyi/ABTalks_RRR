import Container from '../common/Container';
import Reveal from '../common/Reveal';

const STEPS = [
  {
    key: 'build',
    title: 'Build',
    copy: "Get today's practical coding mission and build it yourself.",
  },
  {
    key: 'ship',
    title: 'Ship',
    copy: 'Publish your work and turn your learning into a real project.',
  },
  {
    key: 'prove',
    title: 'Prove',
    copy: 'Submit your GitHub repository and LinkedIn post.',
  },
  {
    key: 'level-up',
    title: 'Level Up',
    copy: 'XP, streaks, and achievements move every time you prove a mission.',
    isReward: true,
  },
];

function StepCard({ step }) {
  if (step.isReward) {
    return (
      <div className="w-full rounded-[var(--radius-mission)] border border-volt bg-volt/10 px-5 py-6 text-center volt-glow sm:flex-1">
        <p className="font-display text-xl font-bold text-volt sm:text-2xl">{step.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-paper/80">{step.copy}</p>
      </div>
    );
  }
  return (
    <div className="w-full rounded-[var(--radius-mission)] border border-line bg-surface px-5 py-6 text-center sm:flex-1">
      <p className="font-display text-xl font-bold text-paper sm:text-2xl">{step.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="font-mono text-lg text-volt">
      <span className="block sm:hidden">↓</span>
      <span className="hidden sm:block">→</span>
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line py-16 sm:py-24">
      <Container>
        <Reveal className="max-w-lg">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">How It Works</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            Three steps. Every single day.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col items-stretch gap-2 sm:mt-14 sm:flex-row sm:items-center sm:gap-2">
          {STEPS.map((step, i) => (
            <div key={step.key} className="flex flex-col items-center gap-2 sm:flex-1 sm:flex-row">
              <Reveal delay={i * 80} className="w-full sm:flex-1">
                <StepCard step={step} />
              </Reveal>
              {i < STEPS.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
