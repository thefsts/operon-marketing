import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const sections = [
  {
    title: 'Information we collect',
    body: 'Depending on how you use OPERON, we may process account and business profile information, customer and operational data you enter into the service, support communications, device and browser information, and usage or diagnostic information needed to operate and improve the service.',
  },
  {
    title: 'How we use information',
    body: 'We use information to provide and secure the service, authenticate users, support customer workflows, process requested transactions through configured providers, respond to support requests, maintain service reliability, prevent abuse, and improve OPERON features and performance.',
  },
  {
    title: 'Business data and customer content',
    body: 'Customers remain responsible for the business data and content they place in OPERON and for having the rights and permissions required to process that information. OPERON processes customer content to provide the service and related functionality.',
  },
  {
    title: 'Service providers and integrations',
    body: 'OPERON may rely on hosting, authentication, payment, email, analytics, communications, and other technology providers. When you connect a third-party integration, information may also be processed under that provider’s terms and privacy practices.',
  },
  {
    title: 'Security',
    body: 'We use administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, misuse, or alteration. No online service can guarantee absolute security, and customers are also responsible for protecting their accounts, credentials, devices, and authorized-user access.',
  },
  {
    title: 'Retention',
    body: 'We retain information for as long as reasonably necessary to provide the service, meet contractual or legal obligations, resolve disputes, prevent abuse, and maintain appropriate business records. Retention periods can vary by data type, customer configuration, and legal requirement.',
  },
  {
    title: 'Cookies and analytics',
    body: 'The OPERON website and application may use essential browser storage and cookies required for functionality and may use analytics or preference technologies where configured. Available cookie controls and browser settings can be used to manage non-essential technologies when applicable.',
  },
  {
    title: 'Privacy rights',
    body: 'Depending on where you live, applicable law may provide rights to request access, correction, deletion, restriction, portability, or other controls over personal information. Requests are reviewed and handled subject to applicable law, identity verification, and legitimate retention requirements.',
  },
  {
    title: 'Children',
    body: 'OPERON is a business software service and is not directed to children. Customers are responsible for ensuring that their use of OPERON and the information they process through it is lawful for their industry and users.',
  },
  {
    title: 'Changes to this policy',
    body: 'We may update this Privacy Policy as OPERON develops, our vendors or features change, or legal requirements evolve. The version posted here will show the current effective date.',
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">OPERON legal</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm font-medium text-slate-500">Effective August 30, 2026</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              This Privacy Policy explains how OPERON CRM and its owner, Full Stack Tech &amp; Solutions, handle information in connection with the OPERON website, application, and related business software services.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5 text-sm leading-6 text-slate-700">
            OPERON is still expanding through beta and phased releases. Features, integrations, and data flows can vary by plan and configuration. We update this policy as the production service changes.
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-slate-950">{index + 1}. {section.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-slate-950">11. Contact and privacy requests</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Use the OPERON contact page for privacy questions, data requests, or concerns. Please do not send passwords, payment-card information, or other highly sensitive credentials through a general contact form.
              </p>
              <Link to="/contact" className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
                Contact OPERON
              </Link>
            </section>
          </div>

          <div className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
            This policy describes OPERON’s current privacy practices and is not a substitute for customer-specific legal or regulatory obligations.
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
