import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-volt text-volt-ink hover:bg-volt-dim active:scale-[0.98] card-shadow',
  accent:
    'gradient-cta-cyan text-white hover:brightness-105 active:scale-[0.98] card-shadow',
  secondary:
    'bg-white text-paper border border-line hover:border-volt hover:text-volt active:scale-[0.98]',
  ghost:
    'bg-transparent text-muted hover:text-volt',
};

const SIZES = {
  lg: 'px-7 py-3.5 text-sm sm:text-base',
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-3.5 py-2 text-xs',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'lg',
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold transition-all duration-150 rounded-full';
  const classes = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
