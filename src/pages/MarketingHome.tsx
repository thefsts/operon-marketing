import { ArrowRight, BarChart3, Briefcase, Building2, CheckCircle2, Globe2, MapPin, Phone, ShoppingCart, Sparkles, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddOnsSection from '../components/AddOnsSection';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';
import { pricingFamilies } from '../lib/pricing';

const industries = [
  {
    name: 'Small Business',
    description: 'A clean CRM for service businesses, contractors, consultants, and local teams.',
    path: '/small-business-crm',
    icon: Briefcase,
    startingAt: 29,
  },
  {
    name: 'Restaurant / Retail + POS',
    description: 'Customer management and POS workflows for restaurants, shops, and retail operations.',
    path: '/restaurant-retail-crm',
    icon: ShoppingCart,
    startingAt: 69,
  },
  {
    name: 'Professional CRM',
    description: 'Industry-focused CRM for real estate, mortgage, legal, healthcare, and other professional teams.',
    path: '/platform',
    icon: Building2,
    startingAt: 49,
  },
];

const capabilities = [
  { icon: Users, title: 'Customers & Contacts', description: 'Keep people, companies, notes, tasks, and activity organized in one place.' },
  { icon: BarChart3, title: 'Pipelines & Opportunities', description: 'Track leads and opportunities through clear stages with less manual follow-up.' },
  { icon: Sparkles, title: 'Automation & AI', description: 'Use intelligent assistance and workflows to reduce repetitive work across the CRM.' },
  { icon: Globe2, title: 'Industry Workflows', description: 'Start with workflows designed around the way your industry actually operates.' },
];

const phaseTwo = [
  { icon: Phone, name: 'Phone System', description: 'Integrated business calling and communications with separate add-on pricing.' },
  { icon: Sparkles, name: 'Social Publisher Pro', description: 'Social publishing, planning, approvals, and campaign tools as a paid add-on.' },
  { icon: MapPin, name: 'Geofencing / Location Marketing', description: 'Location-aware marketing and geofence capabilities offered separately from the base CRM.' },
];

export default function MarketingHome() {
  const smallBusiness = pricingFamilies.find((family) => family.id === 'small-business');
  const restaurantRetail = pricingFamilies.find((family) => family.id === 'restaurant-retail');
  const professional = pricingFamilies.find((family) => family.id === 'professional');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />

      <main id="main-content" className="pt-20">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.10),transparent_38%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
                CRM + operations for modern businesses
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Run your customer relationships and daily operations from one cleaner system.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                OPERON CRM brings customer management, pipelines, tasks, automation, and industry-focused workflows together without forcing your team to juggle disconnected tools.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/start" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700">
                  View Pricing
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                {['Simple monthly pricing', 'Industry-focused options', 'Phase 2 add-ons shown separately'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">OPERON workspace</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">Business overview</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live data ready</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  ['Open Leads', '24'],
                  ['Active Opportunities', '12'],
                  ['Tasks Due', '7'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950">Pipeline</p>
                  <span className="text-xs text-slate-500">Sample workspace</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {['New', 'Qualified', 'Proposal', 'Won'].map((stage, index) => (
                    <div key={stage} className="rounded-xl bg-slate-50 p-3">
                      <p className="text-xs font-semibold text-slate-500">{stage}</p>
                      <p className="mt-2 text-lg font-bold text-slate-950">{[9, 6, 4, 11][index]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Choose your starting point</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">One OPERON platform, sized for the way you work.</h2>
            <p className="mt-4 text-slate-600">The website now follows the same three pricing families as the approved pricing schedule.</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article key={industry.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{industry.name}</h3>
                  <p className="mt-2 min-h-20 text-sm leading-6 text-slate-600">{industry.description}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-sm text-slate-500">Starting at</span>
                    <span className="text-2xl font-bold text-slate-950">${industry.startingAt}</span>
                    <span className="pb-0.5 text-sm text-slate-500">/mo</span>
                  </div>
                  <Link to={industry.path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-800">
                    Explore solution
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Core platform</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Built to replace scattered business tools with one operating layer.</h2>
                <p className="mt-4 text-slate-600">Keep the core CRM fast and focused, then add specialized capability as your business needs it.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <article key={capability.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-bold text-slate-950">{capability.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{capability.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">Phase 2 · Coming Soon</span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">High-value add-ons are coming next.</h2>
              <p className="mt-3 text-slate-600">These capabilities are being built as separate paid add-ons. We are not advertising final pricing until the service cost and production scope are locked.</p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {phaseTwo.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.name} className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-950">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    <Link to={item.name === 'Social Publisher Pro' ? '/social-media-marketing' : '/pricing'} className="mt-4 inline-flex text-sm font-semibold text-violet-700 hover:text-violet-800">
                      Learn more
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <AddOnsSection />
        </section>

        <section className="border-t border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Ready to see OPERON?</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Start with the CRM your business needs today.</h2>
              <p className="mt-3 text-slate-300">Then expand into Phase 2 add-ons as they move through production readiness.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/start" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">Get Started</Link>
              <Link to="/pricing" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-200">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
