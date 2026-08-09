import { NavLink, Link, useLocation } from 'react-router-dom';
import { useStudent } from '../../hooks/useStudent';
import { getUnlockedDay } from '../../utils/dateGate';
import { TOTAL_DAYS } from '../../data/challenges';

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LeaderboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4M17 6h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const itemClasses = (active) =>
  `flex flex-1 flex-col items-center justify-center gap-1 py-2.5 font-mono text-[10px] uppercase tracking-wide transition-colors ${
    active ? 'text-volt' : 'text-muted hover:text-paper'
  }`;

export default function BottomNav() {
  const { student } = useStudent();
  const location = useLocation();
  const onDashboard = location.pathname === '/dashboard';
  const todayDay = getUnlockedDay(student, TOTAL_DAYS);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-6xl">
        <NavLink to="/dashboard" end className={({ isActive }) => itemClasses(isActive)}>
          <HomeIcon />
          Home
        </NavLink>

        <NavLink to={`/day/${todayDay}`} className={({ isActive }) => itemClasses(isActive)}>
          <MissionIcon />
          Mission
        </NavLink>

        {onDashboard ? (
          <a href="#progress" className={itemClasses(false)}>
            <ProgressIcon />
            Progress
          </a>
        ) : (
          <Link to="/dashboard#progress" className={itemClasses(false)}>
            <ProgressIcon />
            Progress
          </Link>
        )}

        <NavLink to="/leaderboard" className={({ isActive }) => itemClasses(isActive)}>
          <LeaderboardIcon />
          Ranks
        </NavLink>
      </div>
    </nav>
  );
}
