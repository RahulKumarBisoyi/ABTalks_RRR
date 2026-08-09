import Container from '../common/Container';
import { PanelLabel } from '../common/Panel';

function stepState(index, isCompleted) {
  if (isCompleted) return 'completed';
  if (index === 0) return 'current';
  return 'upcoming';
}

const CIRCLE_CLASSES = {
  completed: 'bg-ship/20 border-ship text-ship',
  current: 'bg-volt border-volt text-volt-ink volt-glow',
  upcoming: 'bg-surface border-line text-faint',
};

export default function MissionRoadmap({ challenge, isCompleted }) {
  if (!challenge.steps?.length) return null;

  return (
    <section className="py-4">
      <Container>
        <PanelLabel>Mission Roadmap</PanelLabel>

        <ol className="relative mt-4 flex flex-col gap-6">
          <div aria-hidden="true" className="absolute left-4 top-2 bottom-2 w-px bg-line" />
          {challenge.steps.map((step, i) => {
            const state = stepState(i, isCompleted);
            return (
              <li key={step.title} className="relative flex gap-4 pl-0">
                <span
                  className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-bold ${CIRCLE_CLASSES[state]}`}
                >
                  {state === 'completed' ? '✓' : i + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
                    Step {i + 1}
                  </p>
                  <p className={`mt-0.5 text-sm font-semibold sm:text-base ${state === 'upcoming' ? 'text-muted' : 'text-paper'}`}>
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted sm:text-sm">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
