import { Building2, MapPin, Phone, Plus, Radio, Users } from 'lucide-react';
import { confirmedAddOns, phaseTwoAddOns } from '../lib/pricing';

const confirmedIcons = [Users, Building2];
const phaseTwoIcons = [Phone, Radio, MapPin];

export default function AddOnsSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Add-ons</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Add capability without overloading the base plan</h2>
        <p className="mt-3 text-slate-600">
          Fixed-price add-ons stay simple. Higher-variable-cost services remain separate so customers only pay for what they use.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {confirmedAddOns.map((addon, index) => {
          const Icon = confirmedIcons[index] ?? Plus;
          return (
            <article key={addon.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{addon.name}</h3>
                  <p className="mt-1 text-lg font-semibold text-emerald-700">{addon.price}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{addon.description}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet-700">
          Phase 2 · Coming Soon
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {phaseTwoAddOns.map((addon, index) => {
          const Icon = phaseTwoIcons[index] ?? Plus;
          return (
            <article key={addon.name} className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">{addon.status}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{addon.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{addon.description}</p>
              <p className="mt-4 text-sm font-semibold text-slate-500">Pricing to be finalized before release.</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
