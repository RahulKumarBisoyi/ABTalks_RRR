import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import { TOTAL_DAYS } from '../../data/challenges';
import { percentComplete, formatPercent } from '../../utils/progress';

const MILE_MARKERS = [1, 15, 30, 45, 60];

export default function JourneyProgress({ student }) {
  const percent = percentComplete(student.completedDays.length, TOTAL_DAYS);

  return (
    <section id="progress" className="scroll-mt-20 py-4">
      <Container>
        <Panel>
          <div className="flex items-center justify-between">
            <PanelLabel>Your Developer Journey</PanelLabel>
            <span className="font-mono text-xs font-bold text-paper">
              DAY {student.currentDay} / {TOTAL_DAYS}
            </span>
          </div>

          <div className="relative mt-5 h-2 rounded-full bg-line">
            <div
              className="h-2 rounded-full bg-volt volt-glow transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
            {MILE_MARKERS.map((marker) => (
              <span
                key={marker}
                className="absolute top-1/2 h-3 w-px -translate-y-1/2 bg-ink/60"
                style={{ left: `${(marker / TOTAL_DAYS) * 100}%` }}
                aria-hidden="true"
              />
            ))}
          </div>

          <div className="mt-2 flex justify-between font-mono text-[10px] text-faint">
            {MILE_MARKERS.map((marker) => (
              <span key={marker}>D{marker}</span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="font-display text-lg font-bold text-volt">{formatPercent(percent)} complete</p>
            <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
              Completed → Current → Upcoming
            </p>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
