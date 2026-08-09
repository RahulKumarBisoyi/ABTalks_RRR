import Container from '../common/Container';
import Reveal from '../common/Reveal';

const SKILLS = [
  { name: 'HTML', state: 'done' },
  { name: 'CSS', state: 'done' },
  { name: 'JavaScript', state: 'done' },
  { name: 'React', state: 'current' },
  { name: 'APIs', state: 'locked' },
  { name: 'Backend', state: 'locked' },
  { name: 'AI', state: 'locked' },
];

function StatusMark({ state }) {
  if (state === 'done') return <span className="text-ship">✓</span>;
  if (state === 'current') return <span className="text-volt">→</span>;
  return <span className="text-faint">🔒</span>;
}

export default function ProgressionShowcase() {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container className="grid gap-10 sm:grid-cols-2 sm:items-center sm:gap-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">Progression</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            You&rsquo;re not just completing days.
            <br />
            You&rsquo;re building your developer profile.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Every mission ties back to a skill. Watch the tree fill in as you go —
            it's the difference between a checklist and a real trajectory.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[var(--radius-mission)] border border-line bg-surface p-5 sm:p-6">
            <ul className="space-y-3 font-mono text-sm sm:text-base">
              {SKILLS.map((skill) => (
                <li
                  key={skill.name}
                  className={`flex items-center justify-between border-b border-line/60 pb-3 last:border-0 last:pb-0 ${
                    skill.state === 'locked' ? 'text-faint' : 'text-paper'
                  }`}
                >
                  <span>{skill.name}</span>
                  <StatusMark state={skill.state} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
