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
    <img
      src="/operon-logo-transparent.png"
      alt="Operon CRM"
      className={`${imgSizeClasses[size]} w-auto object-contain`}
      style={{ filter: dark ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  if (asAnchor) {
    return (
      <a href="/" className={`inline-flex items-center ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      {content}
    </Link>
  );
}