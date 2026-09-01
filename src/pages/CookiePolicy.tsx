import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const sections = [
  ['What browser storage we use', 'The public OPERON website uses local browser storage for choices such as cookie consent, accessibility preferences, language preference, and limited funnel/navigation state. Essential storage supports the user experience and does not require advertising or tracking.'],
  ['Analytics', 'If analytics services are configured, OPERON does not initialize Google Analytics or PostHog unless the visitor has explicitly enabled analytics in the cookie controls. Analytics remains off by default until consent is granted.'],
  ['Functional preferences', 'Functional browser storage may remember optional site preferences. Disabling optional preferences may reset convenience settings but should not prevent access to public marketing content.'],
  ['Marketing and advertising', 'The current OPERON public marketing site does not require advertising cookies or cross-site advertising trackers to function. If marketing technology is added later, this policy and the consent controls will be updated before that technology is enabled where consent is required.'],
  ['Third-party services', 'Some links or future integrations may lead to third-party services with their own privacy and cookie practices. A third-party service is not considered active on this website merely because OPERON may integrate with that provider elsewhere in the product.'],
  ['Managing your choices', 'Use the cookie banner to accept, decline, or customize available categories. You can also clear site data through your browser. Declining optional categories does not disable necessary storage.'],
  ['Policy changes', 'We may update this Cookie Policy when the public website, analytics configuration, or applicable requirements change. The current version will be posted here.'],
] as const;

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">OPERON legal</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Cookie Policy</h1>
            <p className="mt-4 text-sm font-medium text-slate-500">Effective August 31, 2026</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">This page describes the browser storage and optional analytics behavior currently used by the OPERON public marketing website.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="space-y-10">{sections.map(([title, body], index) => <section key={title}><h2 className="text-2xl font-bold text-slate-950">{index + 1}. {title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></section>)}</div>
          <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">8. Questions</h2><p className="mt-3 leading-7 text-slate-600">Questions about cookies or website privacy can be submitted through the OPERON contact page.</p><Link to="/contact" className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Contact OPERON</Link></section>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
