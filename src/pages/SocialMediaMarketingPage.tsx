import { Link } from 'react-router-dom';
import { BarChart3, Calendar, MapPin, Megaphone, Share2, Sparkles } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const capabilities = [
  { icon: Calendar, title: 'Content planning', text: 'Plan campaigns and organize publishing activity from one marketing workspace.' },
  { icon: Share2, title: 'Multi-channel workflow', text: 'Manage social activity without separating customer context from the rest of OPERON.' },
  { icon: Sparkles, title: 'AI assistance', text: 'Prepare content ideas, campaign drafts, and workflow assistance with human review.' },
  { icon: BarChart3, title: 'Performance visibility', text: 'Bring campaign activity and lead outcomes closer together for clearer reporting.' },
];

export default function SocialMediaMarketingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-violet-50 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">Marketing add-on roadmap</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Social Publisher Pro is being built as a connected OPERON add-on.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">The goal is a clean publishing and marketing workflow tied directly to CRM contacts, campaigns, leads, and reporting instead of another disconnected tool.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/contact" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-700">Talk to Sales</Link><Link to="/pricing" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800">View Current CRM Pricing</Link></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><Icon className="h-5 w-5" /></div><h2 className="mt-5 text-lg font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
            <article className="rounded-[2rem] border border-violet-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><Megaphone className="h-6 w-6" /></div><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">Phase 2 · Coming Soon</p><h2 className="mt-2 text-2xl font-bold">Social Publisher Pro</h2><p className="mt-3 leading-7 text-slate-600">Publishing, campaign workflow, AI-assisted content, and marketing reporting are being packaged as an OPERON add-on. Final production pricing will be published before release.</p></article>
            <article className="rounded-[2rem] border border-cyan-100 bg-white p-8 shadow-sm"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><MapPin className="h-6 w-6" /></div><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">Phase 2 · Coming Soon</p><h2 className="mt-2 text-2xl font-bold">Geofencing Marketing</h2><p className="mt-3 leading-7 text-slate-600">Location-based campaign capability is being prepared as a separate add-on so variable media and provider costs do not inflate the core CRM subscription.</p></article>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
