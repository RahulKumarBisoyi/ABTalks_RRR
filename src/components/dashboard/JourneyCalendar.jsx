import { Link } from 'react-router-dom';
import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import { getDayState } from '../../utils/journey';

const CELL_CLASSES = {
  completed: 'bg-mint/70 border-mint text-white',
  current: 'bg-volt border-volt text-volt-ink volt-glow',
  missed: 'bg-pink/20 border-pink/40 text-pink',
  upcoming: 'bg-surface border-line text-faint',
};

const CELL_ICON = {
  completed: '✓',
  current: '🔥',
  missed: '×',
  upcoming: '○',
};

function DayCell({ day, state }) {
  return (
    <Link
      to={`/day/${day}`}
      className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-lg border font-mono transition-transform active:scale-95 ${CELL_CLASSES[state]}`}
      title={`Day ${day} — ${state}`}
    >
      <span className="text-[10px] leading-none opacity-80">{String(day).padStart(2, '0')}</span>
      <span className="text-xs leading-none">{CELL_ICON[state]}</span>
    </Link>
  );
}

function DayRange({ label, start, end, student }) {
  const days = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return (
    <div className="mt-4 first:mt-0">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-wide text-faint">{label}</p>
      <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-10">
        {days.map((day) => (
          <DayCell key={day} day={day} state={getDayState(day, student)} />
        ))}
      </div>
    </div>
  );
}

export default function JourneyCalendar({ student }) {
  return (
    <section className="py-4">
      <Container>
        <Panel>
          <div className="flex items-center justify-between">
            <PanelLabel>Activity Map</PanelLabel>
            <span className="font-mono text-[10px] text-faint">Day {student.currentDay}/60</span>
          </div>

          <DayRange label="Days 1–30" start={1} end={30} student={student} />
          <DayRange label="Days 31–60" start={31} end={60} student={student} />

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line/60 pt-3">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <span className="text-mint">✓</span> Completed
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              🔥 Today
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <span className="text-faint">○</span> Upcoming
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <span className="text-pink">×</span> Missed
            </span>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
