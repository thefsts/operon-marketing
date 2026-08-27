import { Link } from 'react-router-dom';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import PricingFamilySection from '../components/PricingFamilySection';
import AddOnsSection from '../components/AddOnsSection';
import { clientPaidThirdPartyServices, pricingFamilies } from '../lib/pricing';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />

      <main id="main-content" className="pt-20">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_45%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.10),transparent_38%)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700 shadow-sm">
                Current OPERON pricing
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Clear pricing for the CRM your business actually needs.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Choose from Small Business, Restaurant / Retail + POS, or Professional CRM plans. Phase 2 services are shown separately as coming soon so there is no confusion about what is available today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <a href="#small-business" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-700 shadow-sm hover:border-cyan-300 hover:text-cyan-700">Small Business</a>
                <a href="#restaurant-retail" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-700 shadow-sm hover:border-cyan-300 hover:text-cyan-700">Restaurant / Retail + POS</a>
                <a href="#professional" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-700 shadow-sm hover:border-cyan-300 hover:text-cyan-700">Professional</a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {pricingFamilies.map((family) => (
            <PricingFamilySection key={family.id} family={family} />
          ))}

          <AddOnsSection />

          <section className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Third-party services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Provider subscriptions stay transparent.</h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                OPERON can connect to outside services, but customer-owned subscriptions and usage charges remain separate unless a future OPERON add-on explicitly includes them.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <ul className="space-y-3 text-sm text-slate-700">
                {clientPaidThirdPartyServices.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Need help choosing?</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">We can match the plan to your operation.</h2>
              <p className="mt-3 text-slate-300">Tell us your industry, team size, locations, and workflow needs. We will help you choose the right OPERON starting point.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 lg:mt-0">
              <Link to="/contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">Contact Sales</Link>
              <Link to="/start" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-200">Get Started</Link>
            </div>
          </section>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
