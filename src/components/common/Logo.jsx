export default function Logo({ className = '' }) {
  return (
    <span className={`font-display font-bold tracking-tight text-paper ${className}`}>
      AB<span className="text-volt">Talks</span>
    </span>
  );
}
