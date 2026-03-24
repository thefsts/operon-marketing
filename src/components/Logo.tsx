import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  dark?: boolean;
}

export default function Logo({ size = 'md', showText = true, className = '', dark = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Planet Logo with Ring */}
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Planet sphere */}
        <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/30" />
        {/* Orbital ring */}
        <div className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-80" style={{ transform: 'rotateX(70deg)' }} />
        {/* Highlight */}
        <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white/60 rounded-full" />
      </div>
      {showText && (
        <span className={`font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          OPERON
        </span>
      )}
    </Link>
  );
}