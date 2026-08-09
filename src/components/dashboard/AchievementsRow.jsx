import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import { achievementDefs } from '../../data/achievements';

const ICONS = {
  flag: '🏁',
  rocket: '🚀',
  shield: '🛡️',
  flame: '🔥',
  star: '⭐',
  code: '💻',
  trophy: '🏆',
  bolt: '⚡',
  plug: '🔌',
};

const BADGE_STYLES = [
  { ring: 'border-flame', bg: 'bg-flame/15', glow: 'shadow-[0_0_0_4px_rgba(242,121,42,0.08)]' },
  { ring: 'border-yellow', bg: 'bg-yellow/15', glow: 'shadow-[0_0_0_4px_rgba(224,165,38,0.1)]' },
  { ring: 'border-cyan', bg: 'bg-cyan/15', glow: 'shadow-[0_0_0_4px_rgba(79,176,196,0.1)]' },
  { ring: 'border-mint', bg: 'bg-mint/15', glow: 'shadow-[0_0_0_4px_rgba(67,196,151,0.1)]' },
  { ring: 'border-blue', bg: 'bg-blue/15', glow: 'shadow-[0_0_0_4px_rgba(91,141,239,0.1)]' },
  { ring: 'border-lavender', bg: 'bg-lavender/15', glow: 'shadow-[0_0_0_4px_rgba(169,150,224,0.1)]' },
  { ring: 'border-purple', bg: 'bg-purple/15', glow: 'shadow-[0_0_0_4px_rgba(149,132,209,0.1)]' },
  { ring: 'border-peach', bg: 'bg-peach/15', glow: 'shadow-[0_0_0_4px_rgba(239,156,114,0.1)]' },
  { ring: 'border-pink', bg: 'bg-pink/15', glow: 'shadow-[0_0_0_4px_rgba(232,127,163,0.1)]' },
  { ring: 'border-ship', bg: 'bg-ship/15', glow: 'shadow-[0_0_0_4px_rgba(63,168,118,0.1)]' },
  { ring: 'border-volt', bg: 'bg-volt/15', glow: 'shadow-[0_0_0_4px_rgba(242,121,42,0.08)]' },
];

export default function AchievementsRow({ student }) {
  // Show the full catalog, not just what's unlocked — locked entries read as
  // future milestones, never as fake progress.
  const achievements = achievementDefs.map((def, i) => {
    const record = student.achievements.find((a) => a.id === def.id);
    return {
      def,
      unlocked: Boolean(record?.unlocked),
      unlockedOn: record?.unlockedOn ?? null,
      style: BADGE_STYLES[i % BADGE_STYLES.length],
    };
  });
  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <div className="flex items-center justify-between">
            <PanelLabel>Badges</PanelLabel>
            <span className="font-mono text-[10px] text-faint">
              {unlockedCount}/{achievements.length} unlocked
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
            {achievements.map(({ def, unlocked, style }) => (
              <div key={def.id} className="flex flex-col items-center gap-1.5 text-center">
                <span className="relative">
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-2xl transition-shadow ${
                      unlocked ? `${style.ring} ${style.bg} ${style.glow}` : 'border-line bg-ink grayscale opacity-50'
                    }`}
                    aria-hidden="true"
                  >
                    {unlocked ? ICONS[def.icon] ?? '🏅' : '🔒'}
                  </span>
                  {unlocked && (
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-surface bg-mint text-[9px] font-bold text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                  )}
                </span>
                <span
                  className={`font-mono text-[10px] font-semibold leading-tight ${
                    unlocked ? 'text-paper' : 'text-faint'
                  }`}
                >
                  {def.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-line/60 pt-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Badges collected</p>
              <p className="font-mono text-[10px] font-bold text-paper">
                {unlockedCount} / {achievements.length}
              </p>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-line">
              <div
                className="h-1.5 rounded-full gradient-fill-orange transition-all duration-700"
                style={{ width: `${achievements.length ? (unlockedCount / achievements.length) * 100 : 0}%` }}
              />
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
