import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              OPERON ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Industry Adaptive Business Operating System ("Service").
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">Personal Data</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Account information (name, email address, company name)</li>
              <li>Payment information (processed securely via third-party processors)</li>
              <li>Usage data (how you interact with our Service)</li>
              <li>Device information (browser type, IP address, device identifiers)</li>
              <li>Business data you upload or create within the Service</li>
            </ul>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">Automatically Collected Data</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Log data (access times, pages viewed, referring URL)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Analytics data (aggregate usage patterns)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              <li>Personalize and improve the Service and provide content relevant to your interests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-300 leading-relaxed">
              We process your personal data based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li><strong>Consent:</strong> When you opt-in to marketing communications</li>
              <li><strong>Contract:</strong> When processing is necessary to provide our Service</li>
              <li><strong>Legitimate Interest:</strong> For security, fraud prevention, and business improvement</li>
              <li><strong>Legal Obligation:</strong> When required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights (GDPR/CCPA)</h2>
            <p className="text-gray-300 leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Request limited processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Opt-out:</strong> Opt-out of the sale of personal information (CCPA)</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, contact us at <span className="text-cyan-400">privacy@operon.io</span>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li><strong>Service Providers:</strong> Cloud hosting, payment processing, analytics</li>
              <li><strong>Business Partners:</strong> With your consent for integrated services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
              <li><strong>Business Transfers:</strong> In connection with merger, acquisition, or sale</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training and confidentiality agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal data for as long as your account is active or as needed to provide services. We will delete or anonymize your data after account closure, except where retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs) for EU data transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our Service is not intended for children under 16 (or 13 in the US). We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li><strong>Essential cookies:</strong> Required for the Service to function</li>
              <li><strong>Analytics cookies:</strong> Understand how users interact with our Service</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or through the Service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              For privacy-related inquiries or to exercise your rights, contact:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <p className="text-gray-300"><strong>Data Protection Officer</strong></p>
              <p className="text-gray-300">Email: <span className="text-cyan-400">privacy@operon.io</span></p>
              <p className="text-gray-300">Address: [Your Business Address]</p>
            </div>
            <p className="text-gray-300 leading-relaxed mt-4">
              EU residents may also lodge a complaint with their local supervisory authority.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap gap-6 text-sm text-gray-500">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/privacy" className="text-cyan-400">Privacy Policy</a>
          <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;