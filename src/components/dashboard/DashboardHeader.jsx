import { NavLink, Link } from 'react-router-dom';
import Container from '../common/Container';
import Logo from '../common/Logo';
import { STUDENT_ROLE } from '../../data/student';
import { getUnlockedDay } from '../../utils/dateGate';
import { TOTAL_DAYS } from '../../data/challenges';

const NAV_LINK_CLASSES = ({ isActive }) =>
  `rounded-full px-4 py-2 font-display text-sm font-medium transition-colors ${
    isActive ? 'bg-volt/12 text-volt' : 'text-muted hover:text-paper'
  }`;

export default function DashboardHeader({ student }) {
  const initial = student.name?.trim()?.[0]?.toUpperCase() || '?';
  const todayDay = getUnlockedDay(student, TOTAL_DAYS);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link to="/" aria-label="ABTalks home" className="flex shrink-0 items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-volt text-sm text-volt-ink">
            ⚡
          </span>
          <Logo className="text-base" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1 md:flex">
          <NavLink to="/" end className={NAV_LINK_CLASSES}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={NAV_LINK_CLASSES}>
            Dashboard
          </NavLink>
          <NavLink to={`/day/${todayDay}`} className={NAV_LINK_CLASSES}>
            Today
          </NavLink>
          <NavLink to="/leaderboard" className={NAV_LINK_CLASSES}>
            Leaderboard
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <span className="hidden items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-volt sm:inline-flex">
            ⚡ {student.xp.toLocaleString()} XP
          </span>
          <Link
            to="/profile"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            aria-label="Open your profile"
          >
            <div className="hidden text-right leading-tight sm:block">
              <p className="text-sm font-semibold text-paper">{student.name || 'Builder'}</p>
              <p className="font-mono text-[10px] text-muted">{STUDENT_ROLE}</p>
            </div>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-volt bg-surface-raised font-display text-sm font-bold text-volt">
              {initial}
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
}
