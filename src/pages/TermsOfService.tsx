import { Link } from 'react-router-dom';
import GlobalFooter from '../components/GlobalFooter';
import GlobalHeader from '../components/GlobalHeader';

const sections = [
  ['Agreement and eligibility', 'These Terms govern access to and use of OPERON CRM, its website, applications, software, and related services provided by Full Stack Tech & Solutions. You must have legal capacity to enter into an agreement and, when using OPERON for an organization, authority to act for that organization.'],
  ['The OPERON service', 'OPERON provides customer relationship management and business operations software. Features can include customer and contact management, leads and pipelines, tasks, projects, billing workflows, reporting, automation, industry-focused tools, integrations, and phased add-on services. Features can differ by plan, release stage, provider availability, and customer configuration.'],
  ['Accounts and authorized users', 'Customers are responsible for accurate account information, controlling authorized-user access, protecting credentials, and promptly reporting suspected unauthorized access.'],
  ['Subscriptions, pricing, and third-party costs', 'Current OPERON subscription pricing is shown on the pricing page or in an applicable order or agreement. Third-party subscriptions, transaction fees, carrier usage, external integrations, taxes, and similar costs may be separate unless OPERON expressly states that they are included.'],
  ['Acceptable use', 'You may use OPERON only for lawful business purposes. You may not use the service to violate law or third-party rights, gain unauthorized access, distribute malware, intentionally disrupt the service, abuse platform resources, send unlawful communications, or circumvent security or access controls.'],
  ['Customer data', 'Customers retain their rights in data and content they submit to OPERON and are responsible for having the authority and permissions needed to process that data. You authorize OPERON and its service providers to process customer data as reasonably necessary to provide, secure, support, and improve the service.'],
  ['OPERON intellectual property', 'OPERON software, branding, designs, documentation, workflows, and other proprietary materials remain owned by Full Stack Tech & Solutions or its licensors. A subscription provides a limited right to use the service and does not transfer ownership of OPERON intellectual property.'],
  ['Integrations and external services', 'OPERON may connect with third-party services. Those services are controlled by their respective providers and may be subject to separate terms, fees, availability, security practices, and privacy policies.'],
  ['Beta, phased, and coming-soon features', 'Some OPERON features may be offered in beta, preview, phased release, or as coming-soon add-ons. Such features may change, be limited, experience interruptions, or require additional setup before general availability. We do not promise a release date unless expressly stated in a separate written agreement.'],
  ['Service changes and availability', 'We may improve, modify, replace, or discontinue portions of the service as OPERON develops. We work to provide a reliable service, but we do not promise uninterrupted or error-free operation unless a separate written service-level agreement specifically provides otherwise.'],
  ['Cancellation and suspension', 'Customers may cancel according to the applicable subscription, order, or account process. We may suspend or terminate access for nonpayment, misuse, security risk, legal requirement, or material violation of these Terms.'],
  ['Disclaimers and limitation of liability', 'To the extent permitted by law, OPERON is provided on an “as available” basis. We do not warrant that every feature or integration will meet every customer requirement or be available at all times. To the extent permitted by law, neither party will be liable for indirect, incidental, special, exemplary, or consequential damages arising from use of the service unless a separate written agreement states otherwise.'],
  ['Changes to these Terms', 'We may update these Terms as OPERON, its pricing, integrations, or legal requirements change. The current version will be posted here with an updated effective date. Material commercial terms in a separate signed agreement control if they conflict with these website Terms.'],
] as const;

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <GlobalHeader />
      <main id="main-content" className="pt-20">
        <section className="border-b border-slate-200 bg-gradient-to-b from-violet-50 via-white to-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-700">OPERON legal</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-sm font-medium text-slate-500">Effective August 31, 2026</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">These Terms explain the basic rules for using OPERON CRM and related services provided by Full Stack Tech &amp; Solutions.</p>
          </div>
        </section>
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5 text-sm leading-6 text-slate-700">OPERON is being released in phases. Product pages, pricing, order forms, and separately signed agreements may contain additional terms specific to a plan, beta program, add-on, or enterprise deployment.</div>
          <div className="mt-10 space-y-10">
            {sections.map(([title, body], index) => <section key={title}><h2 className="text-2xl font-bold text-slate-950">{index + 1}. {title}</h2><p className="mt-3 leading-7 text-slate-600">{body}</p></section>)}
            <section>
              <h2 className="text-2xl font-bold text-slate-950">14. Questions and notices</h2>
              <p className="mt-3 leading-7 text-slate-600">Questions about these Terms, subscriptions, or use of OPERON can be submitted through the OPERON contact page. Formal notices required under a separate written agreement should follow the notice procedure in that agreement.</p>
              <div className="mt-5 flex flex-wrap gap-3"><Link to="/contact" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Contact OPERON</Link><Link to="/privacy" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:border-violet-300 hover:text-violet-700">Privacy Policy</Link></div>
            </section>
          </div>
          <div className="mt-14 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">These website Terms provide general terms for OPERON service use. Customer-specific order forms, enterprise agreements, data-processing terms, or other signed agreements may include additional or different requirements.</div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
