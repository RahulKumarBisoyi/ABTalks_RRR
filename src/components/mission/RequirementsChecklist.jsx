import { useState } from 'react';
import Container from '../common/Container';
import Panel, { PanelLabel } from '../common/Panel';

export default function RequirementsChecklist({ challenge }) {
  const [checked, setChecked] = useState(() => new Set());

  if (!challenge.requirements?.length) return null;

  const toggle = (item) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  return (
    <section className="py-4">
      <Container>
        <Panel>
          <PanelLabel>What You Will Build</PanelLabel>
          <ul className="mt-3 space-y-2.5">
            {challenge.requirements.map((item) => {
              const isChecked = checked.has(item);
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => toggle(item)}
                    className="flex w-full items-start gap-2.5 text-left"
                    aria-pressed={isChecked}
                  >
                    <span
                      className={`mt-0.5 font-mono text-sm ${isChecked ? 'text-ship' : 'text-faint'}`}
                      aria-hidden="true"
                    >
                      {isChecked ? '✓' : '○'}
                    </span>
                    <span
                      className={`text-sm sm:text-base ${
                        isChecked ? 'text-muted line-through' : 'text-paper/90'
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Panel>
      </Container>
    </section>
  );
}
