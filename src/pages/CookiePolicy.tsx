import { useEffect } from 'react';

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. What Are Cookies</h2>
            <p className="text-slate-600 mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information 
              to the website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-medium text-slate-800 mb-2">Essential Cookies</h3>
            <p className="text-slate-600 mb-4">
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility. The website 
              cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-2">Analytics Cookies</h3>
            <p className="text-slate-600 mb-4">
              We use analytics cookies to understand how visitors interact with our website. 
              This helps us improve our website and services. These cookies collect information 
              anonymously, including the number of visitors, where visitors come from, and the 
              pages they visit.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-2">Functional Cookies</h3>
            <p className="text-slate-600 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization, 
              such as remembering your preferences and settings.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-2">Marketing Cookies</h3>
            <p className="text-slate-600 mb-4">
              These cookies are used to track visitors across websites. The intention is to display 
              ads that are relevant and engaging for the individual user.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Use Cookies</h2>
            <p className="text-slate-600 mb-4">
              OPERON uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>To authenticate users and maintain session state</li>
              <li>To remember user preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve our website and services</li>
              <li>To provide personalized content and advertising</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-slate-600 mb-4">
              We may use third-party services that set their own cookies, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Google Analytics - for website analytics</li>
              <li>Stripe - for payment processing</li>
              <li>Social media platforms - for sharing and engagement features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Managing Cookies</h2>
            <p className="text-slate-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Through our cookie consent banner</li>
              <li>Through your browser settings</li>
              <li>Through third-party opt-out mechanisms</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Please note that disabling certain cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Updates to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this Cookie Policy from time to time. Any changes will be posted on 
              this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about our Cookie Policy, please contact us at:{' '}
              <a href="mailto:support@operoncrm.com" className="text-cyan-600 hover:text-cyan-700">
                support@operoncrm.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <a href="/" className="text-cyan-600 hover:text-cyan-700 font-medium">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}