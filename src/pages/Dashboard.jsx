import { useStudent } from '../hooks/useStudent';

import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardHero from '../components/dashboard/DashboardHero';
import StatsSummary from '../components/dashboard/StatsSummary';
import TodaysMission from '../components/dashboard/TodaysMission';
import SkillsPanel from '../components/dashboard/SkillsPanel';
import JourneyCalendar from '../components/dashboard/JourneyCalendar';
import JourneyMilestones from '../components/dashboard/JourneyMilestones';
import NextMilestone from '../components/dashboard/NextMilestone';
import DailyRanking from '../components/dashboard/DailyRanking';
import AchievementsRow from '../components/dashboard/AchievementsRow';
import AiMentorPreview from '../components/dashboard/AiMentorPreview';
import RecentActivity from '../components/dashboard/RecentActivity';
import BottomNav from '../components/common/BottomNav';

// Structure follows the reference: greeting/progress hero, then stat cards,
// then Today's Mission as the most prominent action, then supporting
// context sections below.
export default function Dashboard() {
  const { student } = useStudent();

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink pb-24">
      <DashboardHeader student={student} />

      <main>
        <DashboardHero student={student} />
        <StatsSummary student={student} />
        <TodaysMission student={student} />
        <SkillsPanel student={student} />
        <JourneyCalendar student={student} />
        <JourneyMilestones student={student} />
        <NextMilestone student={student} />
        <DailyRanking student={student} />
        <AchievementsRow student={student} />
        <AiMentorPreview student={student} />
        <RecentActivity student={student} />
      </main>

      <BottomNav />
    </div>
  );
}
