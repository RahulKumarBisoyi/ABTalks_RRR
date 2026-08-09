import { Link } from 'react-router-dom';
import { useStudent } from '../hooks/useStudent';
import { STUDENT_ROLE } from '../data/student';
import { TOTAL_DAYS } from '../data/challenges';
import { levelInfo, percentComplete, formatPercent } from '../utils/progress';

import Container from '../components/common/Container';
import Panel, { PanelLabel } from '../components/common/Panel';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SkillsPanel from '../components/dashboard/SkillsPanel';
import AchievementsRow from '../components/dashboard/AchievementsRow';
import BottomNav from '../components/common/BottomNav';
import DevResetControl from '../components/common/DevResetControl';

export default function Profile() {
  const { student } = useStudent();
  const { level, xpIntoLevel, xpForNext, percent } = levelInfo(student.xp);
  const journeyPercent = percentComplete(student.completedDays.length, TOTAL_DAYS);
  const initial = student.name?.trim()?.[0]?.toUpperCase() || '?';

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink pb-24">
      <DashboardHeader student={student} />

      <div className="sticky top-16 z-20 border-b border-line bg-ink/95 backdrop-blur-sm">
        <Container className="flex h-11 items-center">
          <Link
            to="/dashboard"
            className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-volt"
          >
            ← Dashboard
          </Link>
        </Container>
      </div>

      <main>
        {/* Identity */}
        <section className="py-6">
          <Container>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-volt bg-surface font-display text-2xl font-bold text-volt volt-glow">
                {initial}
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-paper">{student.name || 'Builder'}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-muted">{STUDENT_ROLE}</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Level / XP */}
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
                    {(xpForNext - xpIntoLevel).toLocaleString()} XP remaining
                  </p>
                </div>
              </div>
              <div className="mt-4 h-1.5 rounded-full bg-line">
                <div
                  className="h-1.5 rounded-full gradient-fill-orange transition-all duration-700"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </Panel>
          </Container>
        </section>

        {/* Stats grid */}
        <section className="py-4">
          <Container>
            <Panel>
              <PanelLabel>Your Stats</PanelLabel>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-xl font-bold text-mint sm:text-2xl">
                    {student.completedDays.length}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
                    Missions Completed
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-peach sm:text-2xl">
                    {student.currentStreak}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
                    Current Streak
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-yellow sm:text-2xl">
                    {student.longestStreak}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
                    Best Streak
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-blue sm:text-2xl">
                    {formatPercent(journeyPercent)}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-faint">
                    Journey Progress
                  </p>
                </div>
              </div>
            </Panel>
          </Container>
        </section>

        {/* Reuse existing badges + skills sections exactly as built */}
        <AchievementsRow student={student} />
        <SkillsPanel student={student} />

        {/* Dev/demo tools live here, not on the main dashboard */}
        <section className="py-4">
          <Container>
            <DevResetControl />
          </Container>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
