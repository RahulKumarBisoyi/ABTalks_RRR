import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';

const TAG_STYLES = [
  'border-volt/40 bg-volt/10 text-volt',
  'border-blue/40 bg-blue/10 text-blue',
  'border-mint/40 bg-mint/10 text-mint',
  'border-lavender/40 bg-lavender/10 text-lavender',
  'border-pink/40 bg-pink/10 text-pink',
  'border-cyan/40 bg-cyan/10 text-cyan',
];

export default function SkillsLevelUp({ challenge }) {
  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Skills You&rsquo;ll Level Up</PanelLabel>
          <p className="mt-1.5 text-xs text-muted">
            You&rsquo;re not just completing a mission — you&rsquo;re building your developer profile.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {challenge.skillTags.map((skill, i) => (
              <span
                key={skill}
                className={`rounded-[var(--radius-mission)] border px-3 py-1.5 font-mono text-xs font-semibold ${TAG_STYLES[i % TAG_STYLES.length]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
