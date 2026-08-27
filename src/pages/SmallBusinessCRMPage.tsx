import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Calendar, FileText, MessageSquare, Sparkles, TrendingUp, Users } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import PricingFamilySection from '../components/PricingFamilySection';
import { pricingFamilies } from '../lib/pricing';

const family = pricingFamilies.find((item) => item.id === 'small-business')!;

const features = [
  { icon: Users, title: 'Client Management', description: 'Keep contacts, notes, activity, and opportunities organized in one workspace.' },
  { icon: Calendar, title: 'Scheduling', description: 'Coordinate appointments, jobs, reminders, and follow-up activity.' },
  { icon: FileText, title: 'Business Workflows', description: 'Move estimates, documents, tasks, and client work through repeatable processes.' },
  { icon: MessageSquare, title: 'Connected Communication', description: 'Keep customer conversations and follow-up activity tied to the CRM record.' },
  { icon: BarChart3, title: 'Pipeline Visibility', description: 'See leads and active work clearly from first contact through completion.' },
  { icon: Sparkles, title: 'AI Assistance', description: 'Use intelligent assistance to reduce repetitive work and keep teams moving.' },
  { icon: TrendingUp, title: 'Reporting', description: 'Track the activity and performance signals that matter to a growing operation.' },
];

export default function SmallBusinessCRMPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Small Business CRM</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Run the customer side of your business without the clutter.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">OPERON gives service businesses and growing teams one clean place for contacts, pipelines, scheduling, follow-up, workflows, and reporting.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/start" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-700">Get Started <ArrowRight className="h-4 w-4" /></Link>
                <a href="#pricing" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-400 hover:text-cyan-700">View Pricing</a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              <p className="text-sm font-semibold text-slate-500">Built for day-to-day operations</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {['Leads & contacts', 'Pipelines', 'Scheduling', 'Follow-ups', 'Automation', 'Reporting'].map((item) => <div key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-800">{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">One connected workspace</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">The core tools a small operation needs to stay organized and responsive.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>)}
          </div>
        </section>

        <section id="pricing" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"><PricingFamilySection family={family} /></div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:flex lg:items-center lg:justify-between lg:p-10"><div><h2 className="text-3xl font-bold">Ready to put your customer operations in one system?</h2><p className="mt-3 max-w-2xl text-slate-300">Start with the plan that fits today and expand OPERON as your business grows.</p></div><Link to="/start" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 lg:mt-0">Start with OPERON</Link></div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
