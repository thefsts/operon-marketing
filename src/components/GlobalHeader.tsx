import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

interface GlobalHeaderProps {
  transparent?: boolean;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const useTransparentBg = (transparent || isHome) && !scrolled;

  const solutions = [
    { name: 'Small Business CRM', path: '/small-business-crm', price: 'From $29/mo' },
    { name: 'Restaurant / Retail CRM', path: '/restaurant-retail-crm', price: 'From $69/mo' },
    { name: 'Real Estate / Mortgage', path: '/real-estate', price: 'From $49/mo' },
    { name: 'Medical CRM', path: '/healthcare', price: 'From $49/mo' },
    { name: 'Legal CRM', path: '/legal', price: 'From $49/mo' },
    { name: 'Sports & Fitness', path: '/sports', price: 'From $29/mo' },
    { name: 'Social Media Marketing', path: '/social-media-marketing', price: 'From $49/mo' },
    { name: 'Gun FFL / Firearms', path: '/gun-ffl-crm', price: 'From $29/mo' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useTransparentBg 
          ? 'bg-slate-900/80 backdrop-blur-md' 
          : 'bg-white/97 backdrop-blur-xl shadow-sm border-b border-slate-100'
      }`}
      style={{ minHeight: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center">
            <img 
              src="/operon-logo-transparent.png" 
              alt="Operon CRM" 
              className="h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Link 
              to="/platform" 
              className={`text-sm font-medium transition-colors ${
                useTransparentBg ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-cyan-600'
              }`}
            >
              Platform
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  useTransparentBg ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-cyan-600'
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.path}
                      to={solution.path}
                      className="block px-4 py-3 hover:bg-slate-50 rounded-lg"
                    >
                      <div className="font-semibold text-slate-900">{solution.name}</div>
                      <div className="text-xs text-slate-500">{solution.price}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors ${
                useTransparentBg ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-cyan-600'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors ${
                useTransparentBg ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-cyan-600'
              }`}
            >
              Contact
            </Link>

            <LanguageSwitcher />

            <a 
              href={`${APP_URL}/login`}
              className={`text-sm font-medium transition-colors ${
                useTransparentBg ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-cyan-600'
              }`}
            >
              Login
            </a>

            <Link
              to="/start"
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${useTransparentBg ? 'text-white' : 'text-slate-700'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-100 shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <Link to="/platform" className="block text-slate-700 hover:text-cyan-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Platform
            </Link>
            
            <div className="border-t border-slate-100 pt-4">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Solutions</div>
              {solutions.map((solution) => (
                <Link
                  key={solution.path}
                  to={solution.path}
                  className="block py-2 text-slate-700 hover:text-cyan-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>

            <Link to="/pricing" className="block text-slate-700 hover:text-cyan-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/contact" className="block text-slate-700 hover:text-cyan-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            
            <div className="pt-2 border-t border-slate-100">
              <LanguageSwitcher />
            </div>
            
            <a href={`${APP_URL}/login`} className="block text-slate-700 hover:text-cyan-600 font-medium">
              Login
            </a>
            
            <Link
              to="/start"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default GlobalHeader;