export default function Panel({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag
      className={`card-shadow rounded-[var(--radius-mission)] border border-line bg-surface p-5 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function PanelLabel({ children, className = '' }) {
  return (
    <p className={`font-display text-xs font-semibold uppercase tracking-[0.15em] text-volt ${className}`}>
      {children}
    </p>
  );
}
