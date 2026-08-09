import Container from '../common/Container';
import Panel from '../common/Panel';
import { getMockMentorInsight } from '../../utils/mentor';

// Deliberately takes `insight` as a prop rather than computing it inline —
// so a future Breeth-backed version can pass a real insight object with the
// same { label, message } shape and this component won't need to change.
export default function AiMentorPreview({ student, insight }) {
  const resolvedInsight = insight ?? getMockMentorInsight(student);

  return (
    <section className="py-4">
      <Container>
        <Panel className="border-purple/25 bg-purple/5">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-purple">
              {resolvedInsight.label}
            </p>
            <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase text-faint">
              Preview
            </span>
          </div>

          <h3 className="mt-2 font-display text-base font-bold text-paper">Your AI Mentor</h3>

          <p className="mt-2 text-sm leading-relaxed text-paper/80">
            &ldquo;{resolvedInsight.message}&rdquo;
          </p>

          <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-faint">
            Mock insight for this prototype — mentor connects to live memory soon.
          </p>
        </Panel>
      </Container>
    </section>
  );
}
