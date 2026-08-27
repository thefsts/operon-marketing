import { BarChart3, CheckCircle2, ShoppingBag, Store, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';
import PricingFamilySection from '../components/PricingFamilySection';
import { pricingFamilies } from '../lib/pricing';

const features = [
  { icon: Store, title: 'CRM + POS', description: 'Connect customer records with restaurant or retail transaction workflows.' },
  { icon: Users, title: 'Customer relationships', description: 'Keep customer activity, notes, follow-up, and loyalty context organized.' },
  { icon: ShoppingBag, title: 'Operational workflows', description: 'Support orders, products, inventory-related processes, and daily business activity.' },
  { icon: BarChart3, title: 'Business visibility', description: 'Bring customer and operational reporting into one connected workspace.' },
];

export default function RestaurantRetailCRMPage() {
  const family = pricingFamilies.find((item) => item.id === 'restaurant-retail');

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-orange-50 via-white to-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-700">Restaurant / Retail CRM + POS</span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Customer management and POS workflows in one cleaner operating system.</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">OPERON brings customer relationships and day-to-day restaurant or retail operations together without forcing teams to manage disconnected systems.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/start" className="rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white hover:bg-slate-800">Get Started</Link>
                <Link to="/pricing#restaurant-retail" className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 hover:border-orange-300">View Pricing</Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
              <Utensils className="h-9 w-9 text-orange-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">Built around the operation</h2>
              <div className="mt-5 space-y-4">
                {['Restaurant / retail CRM and POS plans start at $69/month.', 'White-label Restaurant / Retail CRM + POS is $199/month.', 'Phase 2 marketing and phone services remain separate paid add-ons.'].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Icon className="h-6 w-6 text-orange-600" /><h2 className="mt-4 font-bold text-slate-950">{feature.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>;
            })}
          </div>
        </section>

        {family && <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><PricingFamilySection family={family} /></section>}
      </main>
      <GlobalFooter />
    </div>
  );
}
