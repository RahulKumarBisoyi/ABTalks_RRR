import Container from '../common/Container';
import { PanelLabel } from '../common/Panel';
import { getAchievementDef } from '../../data/achievements';

// Maps a meaningful journey day to the achievement that represents it.
// Purely a display mapping — unlock truth still comes from student.achievements.
const MILESTONE_DAYS = [
  { day: 1, achievementId: 'first-ship' },
  { day: 7, achievementId: 'week-warrior' },
  { day: 10, achievementId: 'ten-mission-builder' },
  { day: 30, achievementId: 'thirty-day-builder' },
  { day: 60, achievementId: 'sixty-day-legend' },
];

export default function JourneyMilestones({ student }) {
  const milestones = MILESTONE_DAYS.map(({ day, achievementId }) => {
    const def = getAchievementDef(achievementId);
    const record = student.achievements.find((a) => a.id === achievementId);
    return { day, def, unlocked: Boolean(record?.unlocked) };
  }).filter((m) => m.def);

  return (
    <section className="py-4">
      <Container>
        <PanelLabel>Journey Milestones</PanelLabel>

        <ol className="relative mt-4 flex flex-col gap-5">
          <div aria-hidden="true" className="absolute left-4 top-2 bottom-2 w-px bg-line" />
          {milestones.map((m) => (
            <li key={m.day} className="relative flex items-center gap-4">
              <span
                className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] font-bold ${
                  m.unlocked
                    ? 'bg-volt border-volt text-volt-ink volt-glow'
                    : 'bg-surface border-line text-faint'
                }`}
              >
                {m.unlocked ? '✓' : '🔒'}
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
                  Day {m.day}
                </p>
                <p className={`text-sm font-semibold sm:text-base ${m.unlocked ? 'text-paper' : 'text-muted'}`}>
                  {m.def.label}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
