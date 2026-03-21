import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Matrix-style background effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(6, 182, 212, 0.03) 2px,
            rgba(6, 182, 212, 0.03) 4px
          )`,
          backgroundSize: '100% 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Glitch-style 404 */}
        <div className="relative mb-8">
          <h1 
            className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #d946ef 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(6, 182, 212, 0.5)',
            }}
          >
            404
          </h1>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-cyan-500/20 blur-xl -z-10">
            404
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">Operon</span> Universe
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            <Home size={20} />
            Return Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Additional links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/#features" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Features
            </a>
            <a href="/#pricing" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Pricing
            </a>
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-16 flex items-center justify-center gap-2 text-gray-600">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-fuchsia-500/50" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;