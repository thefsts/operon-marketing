import { Link } from 'react-router-dom';
import { Activity, Calendar, Check, CreditCard, Trophy, Users } from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const features = [
  { icon: Users, title: 'People & roster records', text: 'Organize athlete, member, parent, staff, or customer relationships in one system.' },
  { icon: Calendar, title: 'Scheduling', text: 'Coordinate events, sessions, appointments, practices, and operational follow-up.' },
  { icon: CreditCard, title: 'Payments workflow', text: 'Keep payment-related activity connected to the customer and operational record.' },
  { icon: Activity, title: 'Operational visibility', text: 'Track activity, tasks, and performance without relying on disconnected spreadsheets.' },
];

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50 via-white to-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
            <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Sports & Fitness</p><h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">CRM and operations for organizations built around people and schedules.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Use OPERON to keep relationships, scheduling, workflows, communications, and business activity connected in one adaptable platform.</p><div className="mt-8 flex gap-3"><Link to="/contact" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white">Contact Sales</Link><Link to="/pricing" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold">View Pricing</Link></div></div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60"><Trophy className="h-10 w-10 text-emerald-700" /><h2 className="mt-5 text-2xl font-bold">Flexible by design</h2><div className="mt-5 space-y-3">{['Teams and clubs', 'Training businesses', 'Fitness operations', 'Sports organizations'].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><Check className="h-4 w-4 text-emerald-700" />{item}</div>)}</div></div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-5 w-5" /></div><h2 className="mt-5 text-lg font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></section>
      </main>
      <GlobalFooter />
    </div>
  );
}
