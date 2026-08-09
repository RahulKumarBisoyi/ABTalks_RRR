import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';

const ICONS = {
  completed: '✓',
  achievement: '🏆',
};

const ICON_CLASSES = {
  completed: 'text-ship',
  achievement: 'text-volt',
};

export default function RecentActivity({ student }) {
  const activity = student.recentActivity ?? [];

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Recent Activity</PanelLabel>

          {activity.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              Your activity will show up here once you complete your first mission.
            </p>
          ) : (
            <ol className="mt-3 space-y-4">
              {activity.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 font-mono text-sm font-bold ${ICON_CLASSES[item.kind] ?? 'text-paper'}`}
                    aria-hidden="true"
                  >
                    {ICONS[item.kind] ?? '•'}
                  </span>
                  <div>
                    <p className="text-sm text-paper">{item.label}</p>
                    <p className="mt-0.5 font-mono text-[11px] text-faint">
                      {item.when}
                      {typeof item.xp === 'number' ? ` · +${item.xp} XP` : ''}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </Panel>
      </Container>
    </section>
  );
}
