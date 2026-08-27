import { ArrowRight, Calendar, CheckCircle2, CreditCard, Mail, MessageSquare, Plug, Webhook } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const categories = [
  {
    title: 'Communication',
    icon: MessageSquare,
    items: ['Gmail', 'Microsoft 365 / Outlook', 'Slack', 'Business messaging providers'],
  },
  {
    title: 'Calendar & Scheduling',
    icon: Calendar,
    items: ['Google Calendar', 'Microsoft Calendar', 'Scheduling tools'],
  },
  {
    title: 'Payments & Commerce',
    icon: CreditCard,
    items: ['Stripe', 'Square', 'POS and commerce integrations'],
  },
  {
    title: 'Automation & API',
    icon: Webhook,
    items: ['Webhooks', 'Zapier / Make-style workflows', 'API access as released'],
  },
  {
    title: 'Email & Notifications',
    icon: Mail,
    items: ['Resend', 'Transactional email', 'Notification routing'],
  },
  {
    title: 'Connected Services',
    icon: Plug,
    items: ['QuickBooks', 'DocuSign', 'Gusto', 'Customer-owned third-party services'],
  },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">Integrations</span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Connect OPERON to the tools your business already uses.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">OPERON is being built around a clean integration layer so customers can connect communications, calendars, payments, accounting, documents, and automation without scattering business data across disconnected workflows.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article key={category.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700"><Icon className="h-5 w-5" /></div>
                  <h2 className="mt-5 text-xl font-bold text-slate-950">{category.title}</h2>
                  <ul className="mt-4 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-900">
            Availability depends on provider credentials, platform approvals, customer-owned subscriptions, and the OPERON release stage. We do not present an integration as live until it has been verified end to end.
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white lg:flex lg:items-center lg:justify-between">
            <div><h2 className="text-2xl font-bold">Need a specific integration?</h2><p className="mt-2 text-slate-300">Tell us what your business uses and we will confirm the current connection path.</p></div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 lg:mt-0">Contact us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
