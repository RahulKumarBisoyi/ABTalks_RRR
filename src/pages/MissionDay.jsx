import { useParams } from 'react-router-dom';
import { getChallengeByDay, TOTAL_DAYS } from '../data/challenges';
import { getMissionPageState } from '../utils/missionPageState';
import { getMissionMentorTip } from '../utils/mentor';
import { useStudent } from '../hooks/useStudent';

import DashboardHeader from '../components/dashboard/DashboardHeader';
import MissionSubHeader from '../components/mission/MissionSubHeader';
import MissionHero from '../components/mission/MissionHero';
import MissionObjective from '../components/mission/MissionObjective';
import RequirementsChecklist from '../components/mission/RequirementsChecklist';
import SkillsLevelUp from '../components/mission/SkillsLevelUp';
import MissionRoadmap from '../components/mission/MissionRoadmap';
import ShipYourWork from '../components/mission/ShipYourWork';
import LockedMission from '../components/mission/LockedMission';
import AiMentorPreview from '../components/dashboard/AiMentorPreview';
import BottomNav from '../components/common/BottomNav';

export default function MissionDay() {
  const { day } = useParams();
  const { student } = useStudent();
  const dayNum = Number(day);

  if (!Number.isInteger(dayNum) || dayNum < 1 || dayNum > TOTAL_DAYS) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-2 px-6 text-center">
        <p className="font-mono text-xs text-miss">MISSION NOT FOUND</p>
        <p className="font-mono text-xs text-muted">Day {day} doesn&rsquo;t exist in the 60-day journey.</p>
      </div>
    );
  }

  const pageState = getMissionPageState(student, dayNum);

  // Locked/future/missed days render no mission content at all — just a
  // clear locked message. This is the enforcement point that prevents
  // completing anything ahead of the calendar-gated unlock.
  if (pageState === 'locked' || pageState === 'future' || pageState === 'missed') {
    return (
      <div className="min-h-dvh overflow-x-clip bg-ink pb-24">
        <DashboardHeader student={student} />
        <MissionSubHeader day={dayNum} />
        <LockedMission day={dayNum} state={pageState} />
        <BottomNav />
      </div>
    );
  }

  const challenge = getChallengeByDay(dayNum);
  const isDone = pageState === 'completed';

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink pb-24">
      <DashboardHeader student={student} />
      <MissionSubHeader day={challenge.day} />

      <main>
        <MissionHero student={student} challenge={challenge} />
        <MissionObjective challenge={challenge} />
        <RequirementsChecklist challenge={challenge} />
        <SkillsLevelUp challenge={challenge} />
        <MissionRoadmap challenge={challenge} isCompleted={isDone} />
        <ShipYourWork student={student} challenge={challenge} />
        <AiMentorPreview student={student} insight={getMissionMentorTip(challenge)} />
      </main>

      <BottomNav />
    </div>
  );
}
