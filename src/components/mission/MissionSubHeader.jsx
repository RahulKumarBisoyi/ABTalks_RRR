import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { TOTAL_DAYS } from '../../data/challenges';

export default function MissionSubHeader({ day }) {
  return (
    <div className="sticky top-16 z-20 border-b border-line bg-ink/95 backdrop-blur-sm">
      <Container className="flex h-11 items-center justify-between">
        <Link
          to="/dashboard"
          className="font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-volt"
        >
          ← Dashboard
        </Link>
        <span className="font-mono text-[11px] text-faint">
          Day {day} / {TOTAL_DAYS}
        </span>
      </Container>
    </div>
  );
}
