import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Clock3, ShieldCheck, Sparkles } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import PricingFamilySection from '../components/PricingFamilySection';
import AddOnsSection from '../components/AddOnsSection';
import { geofenceBusinessEdition, geofenceManagedServicePricing } from '../lib/businessEditionPricing';
import { approvedPricingFamilies } from '../lib/approvedIndustryPricing';

const selectableFamilies = [...approvedPricingFamilies, geofenceBusinessEdition];
const productScreens = [
  { src: '/product-screenshots/pipeline_board.png', label: 'Sales Pipeline' },
  { src: '/product-screenshots/pos_retail.png', label: 'POS & Retail' },
  { src: '/product-screenshots/social_dashboard.png', label: 'Social Publisher' },
  { src: '/product-screenshots/geofence_dashboard.png', label: 'Geofence Marketing' },
  { src: '/product-screenshots/restaurant_dashboard.png', label: 'Restaurant Operations' },
  { src: '/product-screenshots/gym_dashboard.png', label: 'Gym Management' },
];

type BillingCycle = 'monthly' | 'yearly';

export default function PricingPage() {
  const [selectedFamilyId, setSelectedFamilyId] = useState(selectableFamilies[0]?.id ?? '');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const selectedFamily = useMemo(() => selectableFamilies.find((family) => family.id === selectedFamilyId) ?? selectableFamilies[0], [selectedFamilyId]);
  const isGeofenceBusiness = selectedFamily?.id === 'geofence-business';

  return <div className="min-h-screen bg-white text-slate-900">
    <GlobalHeader/>
    <main id="main-content" className="pt-20">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85')", backgroundSize: 'cover', backgroundPosition: 'center' }}/>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-900/60"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="text-left">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">All-in-one business CRM</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">More Than a CRM — <span className="text-cyan-300">It’s Your Growth Engine.</span></h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">Attract. Manage. Automate. Grow. One platform built to adapt to the way your business works.</p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {[['15-Day Free Trial','Try it risk free.'],['No Long-Term Contracts','Freedom to grow your way.'],['Save 15% Annually','Pay the year in full.'],['Cancel Anytime','You stay in control.']].map(([title,copy])=><div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"><div className="text-sm font-bold text-white">{title}</div><div className="mt-1 text-xs leading-5 text-slate-300">{copy}</div></div>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-3xl pb-5">
            <div className="absolute -inset-5 rounded-[3rem] bg-cyan-400/10 blur-3xl"/>
            <div className="relative rounded-[2rem] border border-white/20 bg-slate-950/70 p-2.5 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/><span className="ml-3 text-[11px] font-semibold uppercase tracking-[.14em] text-slate-400">Real OPERON CRM dashboard</span></div>
              <div className="overflow-hidden rounded-[1.35rem] border border-slate-700 bg-white"><img src="/product-screenshots/dashboard_main.png" alt="Real OPERON CRM dashboard with business metrics, pipeline and activity" className="block h-auto w-full"/></div>
            </div>
            <div className="relative mx-auto h-3 w-[82%] rounded-b-[2rem] bg-gradient-to-b from-slate-400 to-slate-700 shadow-xl"/>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Built for the way you work</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">One OPERON platform. Real tools for every part of the business.</h2><p className="mx-auto mt-3 max-w-3xl text-slate-600">Explore real OPERON product screens across sales, point of sale, marketing and industry operations.</p></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{productScreens.map((screen)=><figure key={screen.src} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"><div className="aspect-[16/9] overflow-hidden bg-slate-100"><img src={screen.src} alt={`Real OPERON ${screen.label} screen`} loading="lazy" className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"/></div><figcaption className="border-t border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800">{screen.label}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Choose your industry</p><h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">See tailored pricing and value for your business.</h2></div>
          <div className="mx-auto mt-7 flex max-w-6xl flex-wrap justify-center gap-2" role="tablist" aria-label="OPERON pricing services">
            {selectableFamilies.map((family)=>{const active=family.id===selectedFamily?.id;return <button key={family.id} type="button" role="tab" aria-selected={active} onClick={()=>setSelectedFamilyId(family.id)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition ${active?'border-cyan-600 bg-cyan-600 text-white shadow-cyan-100':'border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:text-cyan-700'}`}>{family.name}</button>;})}
          </div>
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm" aria-label="Billing cycle">
            <button type="button" onClick={()=>setBillingCycle('monthly')} className={`rounded-xl px-5 py-2.5 text-sm font-bold transition ${billingCycle==='monthly'?'bg-cyan-600 text-white':'text-slate-600 hover:bg-slate-50'}`}>Monthly</button>
            <button type="button" onClick={()=>setBillingCycle('yearly')} className={`rounded-xl px-5 py-2.5 text-sm font-bold transition ${billingCycle==='yearly'?'bg-cyan-600 text-white':'text-slate-600 hover:bg-slate-50'}`}>Yearly</button>
            <span className="rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700">Save 15%</span>
          </div>
          <p className="mt-4 text-center text-sm text-slate-500">The $99/month Founding Beta core CRM plan is the exception and does not receive the annual discount.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[96rem] px-4 py-14 sm:px-6 lg:px-8"><PricingFamilySection key={`${selectedFamily?.id}-${billingCycle}`} family={selectedFamily} billingCycle={billingCycle}/></section>

      {isGeofenceBusiness&&<section className="mx-auto max-w-7xl px-4 pb-14 text-center sm:px-6 lg:px-8"><div className="rounded-[2rem] border border-cyan-200 bg-cyan-50/60 p-6 sm:p-8"><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Sell managed geofence services</p><h2 className="mt-2 text-3xl font-bold text-slate-950">Your OPERON subscription is the platform. Client campaigns are the service you sell.</h2><p className="mx-auto mt-3 max-w-4xl leading-7 text-slate-600">Business Edition customers can use OPERON to organize and deliver geofence marketing for their own clients. Client media, data and vendor budgets remain separately funded.</p><div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">{geofenceManagedServicePricing.map((item)=><article key={item.name} className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-bold text-slate-950">{item.name}</h3><p className="mt-3 text-lg font-bold text-cyan-700">{item.price}</p></article>)}</div></div></section>}

      <section className="mx-auto max-w-[96rem] px-4 pb-12 sm:px-6 lg:px-8"><AddOnsSection/></section>

      <section className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">{[[CalendarCheck,'15-day free trial','On every standard OPERON plan.'],[Sparkles,'Detailed tier value','See exactly what grows as you move up.'],[ShieldCheck,'No long-term lock-in','Choose the plan that fits now and change as needed.'],[Clock3,'Capacity grows with tiers','Storage and usage allowances increase by plan.']].map(([Icon,title,copy])=>{const C=Icon as typeof CalendarCheck;return <div key={title as string} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5"><C className="mx-auto h-6 w-6 text-cyan-700"/><h3 className="mt-3 font-bold text-slate-950">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{copy as string}</p></div>})}</div></section>

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 text-white"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">Ready to grow your business?</p><h2 className="mt-2 text-3xl font-bold">Start your 15-day free trial today.</h2><p className="mt-2 text-slate-300">Choose the industry and tier that fit your operation now. Upgrade when you need more.</p></div><div className="flex flex-wrap justify-center gap-3"><Link to="/start" className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-400">Start Free Trial</Link><Link to="/contact" className="rounded-xl border border-white/25 px-6 py-3 text-sm font-bold text-white hover:border-cyan-300">Talk to Sales</Link></div></div></section>
    </main>
    <GlobalFooter/>
  </div>;
}
