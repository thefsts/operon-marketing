import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  dark?: boolean;
  asAnchor?: boolean;
}

export default function Logo({ size = 'md', showText = true, className = '', dark = false, asAnchor = false }: LogoProps) {
  const imgSizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-16',
  };

  const content = (
    <span className="inline-flex items-center gap-3">
      <img
        src="/operon-logo-transparent.png"
        alt="OPERON CRM"
        className={`${imgSizeClasses[size]} w-auto object-contain`}
        style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }}
      />
      {showText && <span className="sr-only">OPERON CRM</span>}
    </span>
  );

  if (asAnchor) {
    return (
      <a href="/" className={`inline-flex items-center ${className}`} aria-label="OPERON CRM home">
        {content}
      </a>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="OPERON CRM home">
      {content}
    </Link>
  );
}
