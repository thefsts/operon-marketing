import { useState } from 'react';
import { Home, Scale, Stethoscope, Trophy, Briefcase, Store, ChevronRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

export default function StartPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { key: 'real_estate', label: 'Real Estate', sub: 'Agents, brokers, property management', icon: Home, color: 'hover:border-emerald-400 hover:bg-emerald-50', iconClass: 'text-emerald-600 bg-emerald-100', path: '/real-estate' },
    { key: 'legal', label: 'Legal', sub: 'Law firms, attorneys, legal services', icon: Scale, color: 'hover:border-amber-400 hover:bg-amber-50', iconClass: 'text-amber-600 bg-amber-100', path: '/legal' },
    { key: 'medical', label: 'Medical', sub: 'Healthcare providers, clinics, practices', icon: Stethoscope, color: 'hover:border-rose-400 hover:bg-rose-50', iconClass: 'text-rose-600 bg-rose-100', path: '/healthcare' },
    { key: 'sports', label: 'Sports & Fitness', sub: 'Teams, coaches, trainers, organizations', icon: Trophy, color: 'hover:border-green-400 hover:bg-green-50', iconClass: 'text-green-600 bg-green-100', path: '/sports' },
    { key: 'service', label: 'Small Business', sub: 'Service businesses, contractors, local operations', icon: Briefcase, color: 'hover:border-blue-400 hover:bg-blue-50', iconClass: 'text-blue-600 bg-blue-100', path: '/small-business-crm' },
    { key: 'pos', label: 'Restaurant / Retail + POS', sub: 'Restaurants, retail, salons, shops', icon: Store, color: 'hover:border-purple-400 hover:bg-purple-50', iconClass: 'text-purple-600 bg-purple-100', path: '/restaurant-retail-crm' },
  ];

  const handleSelect = (opt: typeof options[0]) => {
    setSelected(opt.key);
    localStorage.setItem('operon_funnel_type', opt.key);
    localStorage.setItem('operon_last_step', 'industry');
    localStorage.setItem('operon_last_url', window.location.origin + opt.path);
    setTimeout(() => navigate(opt.path), 250);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 pb-16 pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <img src="/operon-logo-transparent.png" alt="OPERON CRM" className="mx-auto h-16 w-auto object-contain" />
          <h1 className="mt-7 text-3xl font-bold text-slate-950 md:text-4xl">What kind of business are you?</h1>
          <p className="mt-3 text-lg text-slate-500">Choose the closest fit and we will take you to the right OPERON solution.</p>
          <p className="mt-3 flex items-center justify-center gap-2 text-sm text-cyan-700"><Sparkles className="h-4 w-4" /> OPERON can adapt as your workflow grows.</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            return <button key={opt.key} onClick={() => handleSelect(opt)} className={`flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all hover:shadow-md ${selected === opt.key ? 'border-cyan-500 bg-cyan-50 shadow-md' : `border-slate-200 bg-white ${opt.color}`}`}><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${opt.iconClass}`}><Icon className="h-6 w-6" /></div><div className="flex-1"><div className="text-lg font-bold text-slate-900">{opt.label}</div><div className="text-sm text-slate-500">{opt.sub}</div></div><ChevronRight className={`h-5 w-5 transition-transform ${selected === opt.key ? 'translate-x-1 text-cyan-500' : 'text-slate-400'}`} /></button>;
          })}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">Already have an account? <a href={`${APP_URL}/login`} className="font-semibold text-cyan-700 hover:text-cyan-800">Sign in to OPERON</a>. Need help choosing? <Link to="/contact" className="font-semibold text-cyan-700 hover:text-cyan-800">Contact sales</Link>.</p>
      </main>
      <GlobalFooter />
    </div>
  );
}
