import type { LucideIcon } from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlobalFooter from './GlobalFooter';
import GlobalHeader from './GlobalHeader';

type Feature = { title: string; description: string };
type Props = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  note?: string;
  image?: string;
  imageAlt?: string;
  managementTitle?: string;
  managementDescription?: string;
  workflow?: string[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export default function LightFeaturePage({ eyebrow, title, description, icon: Icon, features, note, image, imageAlt = '', managementTitle, managementDescription, workflow, primaryCta = { label: 'View Pricing', to: '/pricing' }, secondaryCta = { label: 'Contact Sales', to: '/contact' } }: Props) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className={`mx-auto max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${image ? 'grid text-center lg:grid-cols-2 lg:text-left' : 'text-center'}`}>
            <div className={image ? '' : 'mx-auto max-w-4xl'}>
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800 ${image ? 'mx-auto lg:mx-0' : 'mx-auto'}`}><Icon className="h-7 w-7" /></div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">{eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
              <p className={`mt-5 text-lg leading-8 text-slate-600 ${image ? 'mx-auto max-w-3xl lg:mx-0' : 'mx-auto max-w-3xl'}`}>{description}</p>
              <div className={`mt-8 flex flex-wrap gap-3 ${image ? 'justify-center lg:justify-start' : 'justify-center'}`}>
                <Link to={primaryCta.to} className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">{primaryCta.label}<ArrowRight className="h-4 w-4" /></Link>
                <Link to={secondaryCta.to} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-cyan-300 hover:text-cyan-700">{secondaryCta.label}</Link>
              </div>
            </div>
            {image && <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-cyan-100/60"><img src={image} alt={imageAlt} className="h-80 w-full rounded-[1.5rem] object-cover sm:h-96" loading="eager" /></div>}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Built around the work</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Keep the people, activity, documents, and next steps connected.</h2></div>
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => <article key={feature.title} className="flex h-full min-h-48 flex-col items-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><CheckCircle2 className="h-6 w-6 text-emerald-600" /><h2 className="mt-4 text-lg font-bold text-slate-950">{feature.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p></article>)}
          </div>
        </section>

        {workflow && workflow.length > 0 && <section className="border-y border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8"><div className="mx-auto max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">Connected workflow</p><h2 className="mt-3 text-3xl font-bold text-slate-950">Give the team a clear path from first contact through completion.</h2></div><div className={`mt-10 grid gap-4 sm:grid-cols-2 ${workflow.length >= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'}`}>{workflow.map((step, index) => <div key={step} className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-black text-cyan-700">0{index + 1}</span><p className="mt-3 font-bold text-slate-900">{step}</p></div>)}</div></div></section>}

        {managementTitle && managementDescription && <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="rounded-[2rem] border border-cyan-100 bg-cyan-50/60 p-8 text-center lg:p-10"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-sm"><Icon className="h-7 w-7" /></div><p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Management capability</p><h2 className="mx-auto mt-2 max-w-4xl text-3xl font-bold text-slate-950">{managementTitle}</h2><p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">{managementDescription}</p></div></section>}

        {note && <section className="mx-auto max-w-7xl px-4 pb-16 text-center sm:px-6 lg:px-8"><div className="mx-auto max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">{note}</div></section>}

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20"><div className="rounded-[2rem] bg-slate-950 p-8 text-center text-white lg:p-10"><h2 className="mx-auto max-w-3xl text-3xl font-bold">Build the OPERON setup that fits your operation.</h2><p className="mx-auto mt-3 max-w-2xl text-slate-300">Compare service tiers, then add capacity, growth, operations, and branding tools as your organization needs them.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Link to="/pricing" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Compare Pricing</Link><Link to="/contact" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white">Talk to Sales</Link></div></div></section>
      </main>
      <GlobalFooter />
    </div>
  );
}
