import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import { getNextMilestone } from '../../utils/milestones';

const ICONS = { flag: '🏁', flame: '🔥', bolt: '⚡', rocket: '🚀', trophy: '🏆', code: '💻', plug: '🔌' };

export default function NextMilestone({ student }) {
  const milestone = getNextMilestone(student);

  if (!milestone) {
    return (
      <section className="py-4">
        <Container>
          <Panel>
            <PanelLabel>Next Badge</PanelLabel>
            <p className="mt-2 text-sm text-paper/90">
              Every main milestone is unlocked. 🏆 You&rsquo;re running on the parallel-track badges now.
            </p>
          </Panel>
        </Container>
      </section>
    );
  }

  const { def, current, target, remaining, unit } = milestone;
  const percent = target > 0 ? Math.min(100, Math.round((current / target) * 100)) : 0;

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Next Badge</PanelLabel>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">
              {ICONS[def.icon] ?? '🏅'}
            </span>
            <p className="font-display text-base font-bold text-paper">{def.label}</p>
          </div>

          <div className="mt-3 h-1.5 rounded-full bg-line">
            <div
              className="h-1.5 rounded-full gradient-fill-orange transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="font-mono text-xs text-muted">
              {current} / {target} {unit}
            </p>
            {remaining > 0 && (
              <p className="font-mono text-xs font-bold text-volt">
                {remaining} more {remaining === 1 ? unit.replace(/s$/, '') : unit} to unlock
              </p>
            )}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
