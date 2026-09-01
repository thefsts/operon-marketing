import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, BriefcaseBusiness, Calendar, CheckCircle2, FileText, MessageSquare, Sparkles, TrendingUp, Users } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import PricingFamilySection from '../components/PricingFamilySection';
import { pricingFamilies } from '../lib/pricing';

const family = pricingFamilies.find((item) => item.id === 'small-business')!;

const features = [
  { icon: Users, title: 'Client Management', description: 'Keep contacts, notes, activity, opportunities, files, and customer history together in one workspace.' },
  { icon: Calendar, title: 'Scheduling & Coordination', description: 'Coordinate appointments, jobs, reminders, team calendars, and follow-up activity without bouncing between tools.' },
  { icon: FileText, title: 'Business Workflows', description: 'Move estimates, documents, tasks, approvals, and client work through repeatable operational processes.' },
  { icon: MessageSquare, title: 'Connected Communication', description: 'Keep customer conversations and follow-up activity tied to the right CRM record and opportunity.' },
  { icon: BarChart3, title: 'Pipeline Visibility', description: 'See leads, opportunities, active work, and customer progress clearly from first contact through completion.' },
  { icon: Sparkles, title: 'AI Assistance', description: 'Use OPERON AI assistance to reduce repetitive work, prepare content, summarize activity, and help teams move faster.' },
];

const workflow = ['Capture the lead', 'Qualify & assign', 'Create the opportunity', 'Schedule the work', 'Deliver & document', 'Invoice & follow up'];
const stack = ['Office Management', 'Social Publisher Pro', 'Lead Generation', 'Reputation Management'];

export default function SmallBusinessCRMPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 text-center sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24 lg:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Small Business CRM</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Run the customer side of your business without the clutter.</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">OPERON brings customer relationships, sales, scheduling, documents, office operations, automation, and reporting into one connected workspace built to grow with your team.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Link to="/start" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-700">Get Started <ArrowRight className="h-4 w-4" /></Link>
                <a href="#pricing" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-400 hover:text-cyan-700">View Pricing</a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-cyan-100/60">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=82" alt="Small business team collaborating in an office" className="h-80 w-full rounded-[1.5rem] object-cover sm:h-96" loading="eager" />
              <div className="grid grid-cols-3 gap-3 p-3 text-center text-xs font-semibold text-slate-700 sm:text-sm">
                <div className="rounded-xl bg-cyan-50 p-3">CRM</div><div className="rounded-xl bg-emerald-50 p-3">Office</div><div className="rounded-xl bg-violet-50 p-3">Growth</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">One connected workspace</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">The tools a growing operation needs to stay organized, responsive, and profitable.</h2><p className="mt-4 text-slate-600">OPERON is designed so sales, service, office administration, and customer follow-up work from the same source of truth.</p></div>
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => <article key={title} className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>)}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">From lead to paid customer</p><h2 className="mt-3 text-3xl font-bold text-slate-950">A workflow your whole team can follow.</h2></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{workflow.map((step, index) => <div key={step} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-black text-cyan-700">0{index + 1}</span><p className="mt-3 font-bold text-slate-900">{step}</p></div>)}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-8 rounded-[2rem] border border-cyan-100 bg-cyan-50/60 p-7 text-center lg:grid-cols-[.9fr_1.1fr] lg:p-10 lg:text-left">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-cyan-700 shadow-sm lg:mx-0"><BriefcaseBusiness className="h-9 w-9" /></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Pro tier & above</p><h2 className="mt-2 text-3xl font-bold text-slate-950">Office Management turns CRM into a business operating workspace.</h2><p className="mt-4 leading-7 text-slate-600">Coordinate staff, calendars, internal tasks, documents, approvals, customer work, and day-to-day office operations from the same system that manages your pipeline and customer history.</p></div>
          </div>
        </section>

        <section id="pricing" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"><PricingFamilySection family={family} /></div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Recommended growth stack</p><h2 className="mt-3 text-3xl font-bold text-slate-950">Add the growth tools when your business is ready.</h2><p className="mt-3 text-slate-600">Choose two or more qualifying add-ons and receive 15% off the eligible add-on subtotal. Automatic discounts do not stack.</p></div>
          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">{stack.map((item) => <div key={item} className="flex min-h-28 items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-900 shadow-sm"><CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-emerald-600" />{item}</div>)}</div>
          <Link to="/pricing#addons" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-800">Explore Products & Add-ons <ArrowRight className="h-4 w-4" /></Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white lg:p-10"><TrendingUp className="mx-auto h-8 w-8 text-cyan-300"/><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold">Ready to put your customer and office operations in one system?</h2><p className="mx-auto mt-3 max-w-2xl text-slate-300">Start with the plan that fits today and expand OPERON as your business grows.</p><Link to="/start" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Start with OPERON</Link></div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
