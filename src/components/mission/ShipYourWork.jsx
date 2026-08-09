import { useState } from 'react';
import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';
import Button from '../common/Button';
import { TOTAL_DAYS } from '../../data/challenges';
import { getAchievementDef } from '../../data/achievements';
import { percentComplete, formatPercent } from '../../utils/progress';
import { useStudent } from '../../hooks/useStudent';

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1.5 font-mono text-xs text-miss">{message}</p>;
}

function ProofForm({ challenge, student, onSaved, saveLabel, buttonVariant = 'primary' }) {
  const { submitProof } = useStudent();
  const existing = student.submittedProjects?.[challenge.day];
  const [github, setGithub] = useState(existing?.githubUrl ?? '');
  const [linkedin, setLinkedin] = useState(existing?.linkedinUrl ?? '');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const nextErrors = {};
    if (!github.trim()) nextErrors.github = 'GitHub repository link is required.';
    if (!linkedin.trim()) nextErrors.linkedin = 'LinkedIn post link is required.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    submitProof(challenge.day, { githubUrl: github.trim(), linkedinUrl: linkedin.trim() });
    onSaved?.();
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <label htmlFor="github-url" className="font-mono text-xs uppercase tracking-wide text-muted">
          GitHub Repository
        </label>
        <input
          id="github-url"
          type="text"
          inputMode="url"
          placeholder="https://github.com/you/project"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          className={`mt-1.5 w-full rounded-[var(--radius-mission)] border bg-ink px-3.5 py-3 font-mono text-sm text-paper placeholder:text-faint focus:outline-none ${
            errors.github ? 'border-miss' : 'border-line focus:border-volt'
          }`}
        />
        <FieldError message={errors.github} />
      </div>

      <div>
        <label htmlFor="linkedin-url" className="font-mono text-xs uppercase tracking-wide text-muted">
          LinkedIn Post
        </label>
        <input
          id="linkedin-url"
          type="text"
          inputMode="url"
          placeholder="https://linkedin.com/posts/you_..."
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className={`mt-1.5 w-full rounded-[var(--radius-mission)] border bg-ink px-3.5 py-3 font-mono text-sm text-paper placeholder:text-faint focus:outline-none ${
            errors.linkedin ? 'border-miss' : 'border-line focus:border-volt'
          }`}
        />
        <FieldError message={errors.linkedin} />
      </div>

      <Button variant={buttonVariant} size="lg" className="w-full justify-center" onClick={handleSubmit}>
        {saveLabel}
      </Button>
    </div>
  );
}

function formatCompletedDate(isoString) {
  if (!isoString) return null;
  try {
    return new Date(isoString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return null;
  }
}

function CompletedSummary({ student, challenge }) {
  const [editing, setEditing] = useState(false);
  const unlockedHere = student.achievements
    .filter((a) => a.unlocked && a.unlockedOn === challenge.day)
    .map((a) => getAchievementDef(a.id))
    .filter(Boolean);
  const percent = percentComplete(student.completedDays.length, TOTAL_DAYS);
  const submission = student.submittedProjects?.[challenge.day];
  const completedDateLabel = formatCompletedDate(submission?.completedAt);

  return (
    <div>
      <div className="mission-celebrate rounded-[var(--radius-mission)] border-2 border-ship bg-ship/10 p-5 text-center sm:p-6">
        <p className="font-display text-xl font-bold text-ship sm:text-2xl">MISSION COMPLETE ✓</p>

        <div className="mt-4 flex justify-center gap-6">
          <div>
            <p className="text-2xl" aria-hidden="true">🔥</p>
            <p className="mt-1 font-mono text-sm font-bold text-paper">{student.currentStreak} day streak</p>
          </div>
          <div>
            <p className="text-2xl" aria-hidden="true">⚡</p>
            <p className="mt-1 font-mono text-sm font-bold text-volt">+{challenge.xp} XP</p>
          </div>
        </div>

        {unlockedHere.map((def) => (
          <p key={def.id} className="mt-3 font-mono text-xs text-paper/80">
            🏆 Achievement Unlocked — &ldquo;{def.label}&rdquo;
          </p>
        ))}

        <div className="mt-5 border-t border-line/60 pt-4">
          <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Your Journey</p>
          <p className="mt-1 font-mono text-sm font-bold text-paper">
            {student.currentDay} / {TOTAL_DAYS} days · {formatPercent(percent)} complete
          </p>
        </div>

        <Button to="/dashboard" variant="primary" size="lg" className="mt-5 w-full justify-center">
          Back to Dashboard →
        </Button>
      </div>

      {/* Review mode: the actual submitted proof, for anyone revisiting a
          completed mission — not just a celebration screen. */}
      {submission && (
        <div className="mt-4 rounded-[var(--radius-mission)] border border-line bg-ink p-4">
          <p className="font-mono text-[10px] uppercase tracking-wide text-faint">Submitted Proof</p>
          {completedDateLabel && (
            <p className="mt-1.5 text-xs text-muted">Completed {completedDateLabel}</p>
          )}
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            {submission.githubUrl && (
              <a
                href={submission.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-[var(--radius-mission)] border border-line px-3.5 py-2.5 text-center font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:border-volt hover:text-volt"
              >
                View Repository →
              </a>
            )}
            {submission.linkedinUrl && (
              <a
                href={submission.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-[var(--radius-mission)] border border-line px-3.5 py-2.5 text-center font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:border-volt hover:text-volt"
              >
                View Post →
              </a>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setEditing((v) => !v)}
        className="mt-3 font-mono text-xs uppercase tracking-wide text-muted transition-colors hover:text-volt"
      >
        {editing ? '← Hide edit form' : 'Edit submission links'}
      </button>

      {editing && (
        <ProofForm
          challenge={challenge}
          student={student}
          saveLabel="Save Changes"
          onSaved={() => setEditing(false)}
        />
      )}
    </div>
  );
}

export default function ShipYourWork({ student, challenge }) {
  const isDone = student.completedDays.includes(challenge.day);

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>Ship Your Work</PanelLabel>
          <p className="mt-1.5 text-sm text-muted">Build it. Upload it. Share it.</p>

          {isDone ? (
            <div className="mt-4">
              <CompletedSummary student={student} challenge={challenge} />
            </div>
          ) : (
            <ProofForm challenge={challenge} student={student} saveLabel="Complete Mission →" buttonVariant="accent" />
          )}
        </Panel>
      </Container>
    </section>
  );
}
