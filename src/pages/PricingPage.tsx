import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CalendarCheck, Megaphone, ShieldCheck, Smartphone, Users } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import PricingFamilySection from '../components/PricingFamilySection';
import AddOnsSection from '../components/AddOnsSection';
import { geofenceBusinessEdition, geofenceManagedServicePricing } from '../lib/businessEditionPricing';
import { approvedPricingFamilies } from '../lib/approvedIndustryPricing';

const selectableFamilies = [...approvedPricingFamilies, geofenceBusinessEdition];
type BillingCycle = 'monthly' | 'yearly';

export default function PricingPage() {
  const [selectedFamilyId, setSelectedFamilyId] = useState(selectableFamilies[0]?.id ?? '');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const selectedFamily = useMemo(() => selectableFamilies.find((family) => family.id === selectedFamilyId) ?? selectableFamilies[0], [selectedFamilyId]);
  const isGeofenceBusiness = selectedFamily?.id === 'geofence-business';

  return <div className="min-h-screen bg-white text-slate-900">
    <GlobalHeader/>
    <main id="main-content" className="pt-20">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-100">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg,rgba(241,245,249,.98) 0%,rgba(241,245,249,.92) 42%,rgba(241,245,249,.35) 70%,rgba(241,245,249,.7) 100%),url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')", backgroundSize: 'cover', backgroundPosition: 'center' }}/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-9 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-10">
          <div className="text-left">
            <p className="text-sm font-bold uppercase tracking-[.16em] text-sky-600">All-in-one business CRM</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">More Than a CRM —<br/>It’s Your <span className="text-sky-500">Growth Engine.</span></h1>
            <p className="mt-3 text-lg leading-7 text-slate-800">Attract. Manage. Automate. Grow.<br/>One platform. Every industry.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['🎁','15-Day Free Trial','Try risk free.'],['▣','No Long-Term Contracts','Freedom to grow your way.'],['%','Save 15% Annually','More value. Lower cost.'],['◆','Cancel Anytime','You’re in control.']].map(([icon,title,copy])=><div key={title} className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 text-lg font-bold text-sky-600">{icon}</div><div><div className="text-xs font-bold text-slate-950">{title}</div><div className="mt-0.5 text-[10px] leading-4 text-slate-600">{copy}</div></div></div>)}</div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl pb-2">
            <div className="relative rotate-[-1deg] rounded-xl border-[7px] border-slate-800 bg-slate-900 p-1 shadow-2xl"><img src="/product-screenshots/dashboard_main.png" alt="Real OPERON CRM dashboard" className="block w-full rounded-md"/></div><div className="mx-auto h-3 w-[82%] rounded-b-3xl bg-slate-400 shadow-lg"/>
            <p className="mt-1 text-right text-lg font-semibold italic text-slate-950">One Platform.<br/>Real Results.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-sky-50/40">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-slate-950">Choose Your Industry</h2><p className="mt-1 text-sm text-slate-600">See tailored pricing and features for your business.</p><div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-2" role="tablist" aria-label="OPERON pricing services">{selectableFamilies.map((family)=>{const active=family.id===selectedFamily?.id;return <button key={family.id} type="button" role="tab" aria-selected={active} onClick={()=>setSelectedFamilyId(family.id)} className={`shrink-0 rounded-lg border px-4 py-2.5 text-xs font-bold transition ${active?'border-sky-500 bg-sky-500 text-white shadow-md shadow-sky-100':'border-slate-200 bg-white text-slate-700 hover:border-sky-300'}`}>{family.name}</button>;})}</div></div>
      </section>

      <section className="mx-auto max-w-[96rem] px-4 pb-7 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-col items-center justify-center gap-4 text-center lg:relative"><div><h2 className="text-3xl font-bold tracking-tight text-slate-950">Choose the Plan That Fits Your Business</h2><p className="mt-1 text-sm text-slate-600">All plans include a 15-day free trial. Upgrade, downgrade, or cancel anytime.</p></div><div className="flex items-center rounded-full border border-sky-200 bg-white p-1 shadow-sm lg:absolute lg:right-0"><button type="button" onClick={()=>setBillingCycle('monthly')} className={`rounded-full px-5 py-2 text-sm font-bold ${billingCycle==='monthly'?'bg-sky-500 text-white':'text-slate-700'}`}>Monthly</button><button type="button" onClick={()=>setBillingCycle('yearly')} className={`rounded-full px-5 py-2 text-sm font-bold ${billingCycle==='yearly'?'bg-sky-500 text-white':'text-slate-700'}`}>Yearly</button><span className="px-4 text-sm font-bold text-emerald-600">Save 15%</span></div></div>
        <PricingFamilySection key={`${selectedFamily?.id}-${billingCycle}`} family={selectedFamily} billingCycle={billingCycle} showHeading={false}/>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-2xl bg-gradient-to-r from-fuchsia-50 via-sky-50 to-violet-50 px-5 py-3 text-xs font-semibold text-slate-700"><span>🎁 <strong className="text-violet-700">15-Day Free Trial</strong> · On Every Plan</span><span>％ <strong className="text-violet-700">Save 15%</strong> When You Pay Annually</span><span>⭐ <strong className="text-violet-700">$99 Founding Beta</strong> · No Annual Discount</span><span>🛡️ <strong className="text-violet-700">No Long-Term Contracts</strong> · Cancel Anytime</span></div>
      </section>

      {isGeofenceBusiness&&<section className="mx-auto max-w-7xl px-4 pb-7 sm:px-6 lg:px-8"><div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 text-center"><h2 className="text-2xl font-bold text-slate-950">Managed Geofence Services</h2><p className="mx-auto mt-2 max-w-3xl text-sm text-slate-600">Use OPERON to organize and deliver geofence marketing for your own clients. Client media, data and vendor budgets remain separately funded.</p><div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{geofenceManagedServicePricing.map((item)=><article key={item.name} className="rounded-xl border border-slate-200 bg-white p-4"><h3 className="font-bold">{item.name}</h3><p className="mt-2 font-bold text-cyan-700">{item.price}</p></article>)}</div></div></section>}

      <section className="mx-auto max-w-[96rem] px-4 pb-7 sm:px-6 lg:px-8"><AddOnsSection/></section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"><h2 className="mb-5 text-center text-2xl font-bold text-slate-950">Included in Every Plan</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">{[[Users,'Contact Management','Keep your client data organized.'],[BarChart3,'Sales Pipeline','Track and close more deals.'],[Megaphone,'Marketing Tools','Email, SMS and automation.'],[CalendarCheck,'Reporting & Analytics','Make smarter decisions.'],[Smartphone,'Mobile Access','Work from anywhere.'],[ShieldCheck,'Secure & Reliable','Your data is always protected.']].map(([Icon,title,copy])=>{const C=Icon as typeof Users;return <div key={title as string} className="text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-sky-300 text-sky-600"><C className="h-5 w-5"/></div><h3 className="mt-2 text-sm font-bold text-slate-950">{title as string}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{copy as string}</p></div>})}</div></section>

      <section className="border-y border-slate-800 bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white"><div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2><p className="mt-2 text-sm text-slate-300">Start your 15-day free trial today. No credit card required.</p><div className="mt-5 flex justify-center gap-3"><Link to="/start" className="rounded-lg bg-sky-500 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-sky-900/20 hover:bg-sky-400">Start Free Trial</Link><Link to="/contact" className="rounded-lg border border-sky-400 px-8 py-3 text-sm font-bold text-white hover:bg-white/5">Talk to Sales</Link></div></div></section>
    </main>
    <GlobalFooter/>
  </div>;
}
