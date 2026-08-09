import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import { levelInfo } from '../../utils/progress';

export default function XpLevel({ student }) {
  const { level, xpIntoLevel, xpForNext, percent } = levelInfo(student.xp);
  const remaining = xpForNext - xpIntoLevel;

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <div className="flex items-center justify-between">
            <div>
              <PanelLabel>Level {level}</PanelLabel>
              <p className="mt-1.5 font-display text-2xl font-bold text-paper">
                {student.xp.toLocaleString()} XP
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Next Level</p>
              <p className="mt-0.5 font-mono text-xs font-bold text-volt">
                {remaining.toLocaleString()} XP remaining
              </p>
            </div>
          </div>

          <div className="mt-4 h-1.5 rounded-full bg-line">
            <div
              className="h-1.5 rounded-full bg-volt transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>
        </Panel>
      </Container>
    </section>
  );
}
