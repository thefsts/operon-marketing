import { Mail, MessageSquare, Rocket, Tags, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const topics = [
  { icon: Tags, title: 'Sales & pricing', description: 'Plan the right CRM family, tier, seats, locations, and add-ons.' },
  { icon: Rocket, title: 'Beta onboarding', description: 'Coordinate controlled beta onboarding, testing, and rollout requirements.' },
  { icon: Workflow, title: 'Industry & integrations', description: 'Review workflows, external services, and implementation requirements.' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800"><MessageSquare className="h-7 w-7" /></div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Contact OPERON</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Talk with us about your CRM, industry, and rollout needs.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Tell us what your business does, your team size, locations, and the workflows you need. We will help map the right OPERON starting point.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hello@operoncrm.com?subject=OPERON%20CRM%20Inquiry" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"><Mail className="h-4 w-4" />Email hello@operoncrm.com</a>
              <Link to="/pricing" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-300 hover:text-cyan-700">View Pricing</Link>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">{topics.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="h-5 w-5" /></div><h2 className="mt-5 text-lg font-bold text-slate-950">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></article>)}</div>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">We intentionally do not publish placeholder phone numbers or office addresses. Verified contact details will be added only after they are finalized for OPERON.</div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
