import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from './GlobalFooter';
import GlobalHeader from './GlobalHeader';

type Feature = {
  title: string;
  description: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  note?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export default function LightFeaturePage({
  eyebrow,
  title,
  description,
  icon: Icon,
  features,
  note,
  primaryCta = { label: 'View Pricing', to: '/pricing' },
  secondaryCta = { label: 'Contact Sales', to: '/contact' },
}: Props) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800">
              <Icon className="h-7 w-7" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">{eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={primaryCta.to} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                {primaryCta.label}<ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={secondaryCta.to} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-300 hover:text-cyan-700">
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <h2 className="mt-4 text-lg font-bold text-slate-950">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
          {note && <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">{note}</div>}
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
