import { weekStrip } from '../../utils/progress';

const STATE_CLASSES = {
  done: 'bg-mint/20 border-mint text-mint',
  today: 'bg-volt border-volt text-volt-ink volt-glow',
  missed: 'bg-pink/10 border-pink/50 text-pink',
  future: 'bg-transparent border-line text-faint',
  empty: 'bg-transparent border-transparent text-transparent',
};

export default function WeekStrip({ student }) {
  const slots = weekStrip(student);

  return (
    <div className="flex justify-between gap-1.5 sm:gap-2" role="list" aria-label="Last 7 mission days">
      {slots.map((slot) => (
        <div key={slot.key} role="listitem" className="flex flex-1 flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] uppercase text-faint">{slot.label}</span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px] font-bold sm:h-9 sm:w-9 ${STATE_CLASSES[slot.state]}`}
          >
            {slot.state === 'done' && '✓'}
            {slot.state === 'today' && '🔥'}
            {slot.state === 'missed' && '·'}
            {slot.state !== 'empty' && slot.day && slot.state === 'future' ? slot.day : null}
          </span>
        </div>
      ))}
    </div>
  );
}
