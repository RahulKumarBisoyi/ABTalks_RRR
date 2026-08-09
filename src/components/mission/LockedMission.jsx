import Button from '../common/Button';
import { TOTAL_DAYS } from '../../data/challenges';

const COPY = {
  locked: {
    heading: 'Available Tomorrow',
    body: 'You\u2019ve already completed today\u2019s mission. This one unlocks at the start of the next calendar day.',
  },
  future: {
    heading: 'Locked',
    body: 'Complete your earlier missions in order to reach this one.',
  },
  missed: {
    heading: 'Missed',
    body: 'This mission\u2019s window has passed without a submission — it\u2019s no longer completable, but it doesn\u2019t break your journey.',
  },
};

export default function LockedMission({ day, state }) {
  const copy = COPY[state] ?? COPY.future;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
        Day {day} / {TOTAL_DAYS}
      </p>
      <p className="text-4xl" aria-hidden="true">🔒</p>
      <p className="font-display text-2xl font-bold text-paper">{copy.heading}</p>
      <p className="max-w-xs text-sm text-muted">{copy.body}</p>
      <Button to="/dashboard" variant="secondary" size="md" className="mt-2">
        ← Back to Dashboard
      </Button>
    </div>
  );
}
