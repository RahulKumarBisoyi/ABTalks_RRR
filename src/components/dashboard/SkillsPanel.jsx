import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';

const MAX_LEVEL = 5;
const SEGMENTS = 10;

function SkillRow({ skill }) {
  const isDone = skill.level >= MAX_LEVEL;
  const isLocked = skill.level <= 0;
  const filledSegments = Math.round((skill.level / MAX_LEVEL) * SEGMENTS);

  return (
    <li className="flex items-center justify-between gap-3 border-b border-line/60 py-3 last:border-0 last:pb-0 first:pt-0">
      <span className={`font-mono text-sm ${isLocked ? 'text-faint' : 'text-paper'}`}>
        {skill.name}
      </span>

      {isDone && <span className="font-mono text-sm text-ship">✓</span>}

      {!isDone && !isLocked && (
        <span className="flex gap-[3px]" aria-hidden="true">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <span
              key={i}
              className={`h-3 w-1.5 rounded-sm ${i < filledSegments ? 'bg-volt' : 'bg-line'}`}
            />
          ))}
        </span>
      )}

      {isLocked && <span className="font-mono text-sm text-faint">🔒</span>}
    </li>
  );
}

export default function SkillsPanel({ student }) {
  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Your Skills</PanelLabel>
          <p className="mt-1.5 text-xs text-muted">
            You&rsquo;re unlocking your developer skill path, one mission at a time.
          </p>
          <ul className="mt-3">
            {student.skills.map((skill) => (
              <SkillRow key={skill.name} skill={skill} />
            ))}
          </ul>
        </Panel>
      </Container>
    </section>
  );
}
