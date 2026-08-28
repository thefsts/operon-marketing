import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
      <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-200/50 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">We couldn't find that OPERON page.</h1>
        <p className="mt-4 text-slate-600">The link may be outdated or the page may have moved during the website refresh.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"><Home className="h-4 w-4" />Home</Link>
          <button type="button" onClick={() => window.history.back()} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800"><ArrowLeft className="h-4 w-4" />Go Back</button>
        </div>
      </div>
    </main>
  );
}
