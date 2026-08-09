import { useState } from 'react';
import { useStudent } from '../../hooks/useStudent';

// Dev/demo-only controls. Lives inside the Profile page (not the main
// dashboard) so it never clutters the normal student experience. The reset
// flow asks for exactly one thing — a name — no track, no other fields.
export default function DevResetControl() {
  const { resetProgress, advanceDevDay } = useStudent();
  const [showResetForm, setShowResetForm] = useState(false);
  const [name, setName] = useState('');

  const handleReset = () => {
    resetProgress(name);
    setShowResetForm(false);
    setName('');
  };

  return (
    <div className="rounded-[var(--radius-mission)] border border-dashed border-line/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Dev / Demo Only</p>

      {showResetForm ? (
        <div className="mt-3 space-y-3">
          <div>
            <label htmlFor="reset-name" className="font-mono text-xs uppercase tracking-wide text-muted">
              Enter your name
            </label>
            <input
              id="reset-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-[var(--radius-mission)] border border-line bg-ink px-3.5 py-3 font-mono text-sm text-paper placeholder:text-faint focus:border-volt focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 rounded-[var(--radius-mission)] bg-volt px-4 py-2.5 text-center font-mono text-xs font-semibold uppercase tracking-wide text-volt-ink transition-transform active:scale-[0.98]"
            >
              Reset &amp; Start Journey →
            </button>
            <button
              type="button"
              onClick={() => setShowResetForm(false)}
              className="font-mono text-xs uppercase tracking-wide text-faint hover:text-paper"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <button
            type="button"
            onClick={() => setShowResetForm(true)}
            className="font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-volt"
          >
            Reset Demo Progress
          </button>
          <span className="text-faint">·</span>
          <button
            type="button"
            onClick={advanceDevDay}
            className="font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-volt"
          >
            Simulate Next Day →
          </button>
        </div>
      )}
    </div>
  );
}
