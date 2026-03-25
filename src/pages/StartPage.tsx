import { useState, useEffect } from 'react';
import { Home, Scale, Stethoscope, Trophy, Briefcase, Store, ArrowRight, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

export default function StartPage() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const options = [
    { key: 'real_estate', label: 'Real Estate', sub: 'Agents, brokers, property management', icon: Home, color: 'hover:border-emerald-400 hover:bg-emerald-50', iconClass: 'text-emerald-600 bg-emerald-100', path: '/real-estate' },
    { key: 'legal', label: 'Legal', sub: 'Law firms, attorneys, legal services', icon: Scale, color: 'hover:border-amber-400 hover:bg-amber-50', iconClass: 'text-amber-600 bg-amber-100', path: '/compliance' },
    { key: 'medical', label: 'Medical', sub: 'Healthcare providers, clinics, practices', icon: Stethoscope, color: 'hover:border-rose-400 hover:bg-rose-50', iconClass: 'text-rose-600 bg-rose-100', path: '/compliance' },
    { key: 'sports', label: 'Sports & Athletics', sub: 'Teams, coaches, trainers, organizations', icon: Trophy, color: 'hover:border-green-400 hover:bg-green-50', iconClass: 'text-green-600 bg-green-100', path: '/sports' },
    { key: 'service', label: 'Service Business', sub: 'HVAC, plumbing, cleaning, landscaping', icon: Briefcase, color: 'hover:border-blue-400 hover:bg-blue-50', iconClass: 'text-blue-600 bg-blue-100', path: `${APP_URL}/login` },
    { key: 'pos', label: 'POS / Retail', sub: 'Restaurants, retail, salons, shops', icon: Store, color: 'hover:border-purple-400 hover:bg-purple-50', iconClass: 'text-purple-600 bg-purple-100', path: '/pos' },
  ];

  const handleSelect = (opt: typeof options[0]) => {
    setSelected(opt.key);
    localStorage.setItem('operon_funnel_type', opt.key);
    localStorage.setItem('operon_last_step', 'industry');
    localStorage.setItem('operon_last_url', opt.path.startsWith('http') ? opt.path : window.location.origin + opt.path);
    setTimeout(() => {
      if (opt.path.startsWith('http')) {
        window.location.href = opt.path;
      } else {
        navigate(opt.path);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="inline-flex">
              <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-9 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/#pricing" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Pricing</Link>
              <a href={`${APP_URL}/login`} className="text-slate-600 hover:text-cyan-600 transition-colors text-sm font-medium">Login</a>
            </div>
            <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3">
            <Link to="/" className="block text-slate-700 font-medium">Home</Link>
            <a href={`${APP_URL}/login`} className="block text-slate-700 font-medium">Login</a>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl w-full text-center mb-10">
          <div className="flex justify-center mb-6">
            <img src="/operon-logo-transparent.png" alt="Operon CRM" className="h-16 w-auto object-contain" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What kind of business are you?</h1>
          <p className="text-slate-500 text-lg">Choose your industry and we'll take you straight to your setup.</p>
          <p className="text-cyan-600 text-sm mt-2 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> AI will help configure your system automatically.
          </p>
        </div>

        <div className="max-w-2xl w-full space-y-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.key}
                onClick={() => handleSelect(opt)}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                  selected === opt.key
                    ? 'border-cyan-500 bg-cyan-50 shadow-md'
                    : `border-slate-200 bg-white ${opt.color}`
                } hover:shadow-md`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.iconClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 text-lg">{opt.label}</div>
                  <div className="text-slate-500 text-sm">{opt.sub}</div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform ${selected === opt.key ? 'translate-x-1 text-cyan-500' : 'text-slate-400'}`} />
              </button>
            );
          })}
        </div>

        <p className="mt-8 text-slate-400 text-sm">
          Not sure? <Link to={`${APP_URL}/login`} className="text-cyan-600 hover:text-cyan-700 font-medium">Start with our general setup →</Link>
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-6 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Operon CRM. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}