import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

interface GlobalHeaderProps {
  transparent?: boolean;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const solutions = [
    { name: 'Small Business CRM', path: '/small-business-crm', desc: 'Service businesses, trades & contractors' },
    { name: 'POS + Business Operations', path: '/restaurant-retail-crm', desc: 'POS, customers, inventory & operations' },
    { name: 'Real Estate / Mortgage', path: '/real-estate', desc: 'Listings, deals & compliance-aware workflows' },
    { name: 'Medical CRM', path: '/healthcare', desc: 'Compliance-aware healthcare workflows' },
    { name: 'Legal CRM', path: '/legal', desc: 'Matters, documents & client workflows' },
    { name: 'Sports & Fitness', path: '/sports', desc: 'Teams, leagues, rosters & facilities' },
    { name: 'Social Media Marketing', path: '/social-media-marketing', desc: 'Content, campaigns & publishing' },
    { name: 'FFL / Firearms CRM', path: '/gun-ffl-crm', desc: 'Compliance-aware dealer operations' },
    { name: 'E-Commerce', path: '/e-commerce', desc: 'Online store and customer operations' },
    { name: 'Reputation Management', path: '/reputation-management', desc: 'Reviews & brand monitoring' },
  ];

  const navLinkClass = 'text-sm font-semibold text-slate-700 hover:text-cyan-700 transition-colors';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_35px_rgba(15,23,42,0.08)]' : 'shadow-[0_1px_0_rgba(15,23,42,0.03)]'
      }`}
      style={{ minHeight: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] gap-5">
          <Link to="/" className="inline-flex items-center shrink-0" aria-label="Operon CRM home">
            <img
              src="/operon-logo-transparent.png"
              alt="Operon CRM"
              className="h-9 sm:h-10 w-auto max-w-[190px] object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Primary navigation">
            <Link to="/" className={navLinkClass}>Operon</Link>
            <Link to="/platform" className={navLinkClass}>About</Link>

            <div className="relative group">
              <button
                type="button"
                className={`${navLinkClass} flex items-center gap-1 py-5`}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[620px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-200 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all z-50 p-3">
                <div className="grid grid-cols-2 gap-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path + solution.name}
                      to={solution.path}
                      className="block px-4 py-3 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-colors"
                    >
                      <div className="font-semibold text-slate-900 text-sm">{solution.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{solution.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" className={navLinkClass}>Pricing</Link>
            <Link to="/contact" className={navLinkClass}>Contact</Link>
            <LanguageSwitcher />
            <a href={`${APP_URL}/login`} className={navLinkClass}>Login</a>
            <Link
              to="/start"
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
          </nav>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 sm:px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold">Operon</Link>
              <Link to="/platform" className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold">About</Link>
              <Link to="/pricing" className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold">Pricing</Link>
              <Link to="/contact" className="px-3 py-2.5 rounded-lg text-slate-800 hover:bg-slate-50 font-semibold">Contact</Link>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.14em] mb-2 px-1">Solutions</div>
              <div className="grid sm:grid-cols-2 gap-1">
                {solutions.map((solution) => (
                  <Link
                    key={solution.path + solution.name}
                    to={solution.path}
                    className="block px-3 py-2.5 text-slate-700 hover:text-cyan-700 hover:bg-slate-50 rounded-lg"
                  >
                    <span className="block text-sm font-semibold">{solution.name}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">{solution.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center gap-3">
              <LanguageSwitcher />
              <a href={`${APP_URL}/login`} className="px-4 py-3 text-center border border-slate-200 text-slate-800 rounded-xl font-semibold hover:bg-slate-50">Login</a>
              <Link to="/start" className="px-4 py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default GlobalHeader;