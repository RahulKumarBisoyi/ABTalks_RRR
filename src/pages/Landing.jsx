import { useStudent } from '../hooks/useStudent';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Hero from '../components/landing/Hero';
import JourneyPath from '../components/landing/JourneyPath';
import HowItWorks from '../components/landing/HowItWorks';
import WhyAbtalks from '../components/landing/WhyAbtalks';
import ProgressionShowcase from '../components/landing/ProgressionShowcase';
import StreakMotivation from '../components/landing/StreakMotivation';
import FinalCta from '../components/landing/FinalCta';
import BottomNav from '../components/common/BottomNav';

export default function Landing() {
  const { student } = useStudent();

  return (
    <div className="min-h-dvh overflow-x-clip bg-ink pb-20 md:pb-0">
      <DashboardHeader student={student} />
      <main>
        <Hero />
        <JourneyPath />
        <HowItWorks />
        <WhyAbtalks />
        <ProgressionShowcase />
        <StreakMotivation />
        <FinalCta />
      </main>
      <BottomNav />
    </div>
  );
}
