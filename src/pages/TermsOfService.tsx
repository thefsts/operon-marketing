import React from 'react';

const TermsOfService: React.FC = () => {
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
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and OPERON ("Company," "we," "us," or "our") governing your access to and use of our Industry Adaptive Business Operating System, including all websites, applications, software, and services (collectively, the "Service").
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              OPERON provides an Industry Adaptive Business Operating System that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Customer Relationship Management (CRM) functionality</li>
              <li>Industry-specific workflow automation</li>
              <li>Business process management tools</li>
              <li>API integrations for third-party services</li>
              <li>Analytics and reporting features</li>
              <li>Team collaboration and communication tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Account Registration</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">3.1 Eligibility</h3>
            <p className="text-gray-300 leading-relaxed">
              You must be at least 18 years old and have the legal capacity to enter into a binding agreement. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">3.2 Account Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly notify us of any unauthorized access or security breach</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">3.3 Account Restrictions</h3>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Subscription and Payments</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">4.1 Subscription Plans</h3>
            <p className="text-gray-300 leading-relaxed">
              We offer various subscription plans with different features, limits, and pricing. Current pricing is available on our website. All prices are in USD unless otherwise specified.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">4.2 Payment Terms</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Payment is due at the beginning of each billing cycle</li>
              <li>We accept major credit cards and other payment methods as advertised</li>
              <li>You authorize us to charge your chosen payment method automatically</li>
              <li>All payments are non-refundable except as expressly stated</li>
            </ul>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">4.3 Price Changes</h3>
            <p className="text-gray-300 leading-relaxed">
              We may modify pricing with at least 30 days' notice. If you do not agree to the new price, you may cancel before the change takes effect.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">4.4 Taxes</h3>
            <p className="text-gray-300 leading-relaxed">
              You are responsible for all taxes associated with your purchase, excluding taxes based on our net income.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">5.1 Permitted Use</h3>
            <p className="text-gray-300 leading-relaxed">
              You may use the Service only for lawful business purposes in accordance with these Terms.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">5.2 Prohibited Activities</h3>
            <p className="text-gray-300 leading-relaxed">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights of others</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to any systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Scrape, crawl, or spider the Service without permission</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Use the Service to send spam or unsolicited communications</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">6.1 Our Intellectual Property</h3>
            <p className="text-gray-300 leading-relaxed">
              The Service, including all software, content, features, and functionality, is owned by OPERON and protected by intellectual property laws. You retain no rights to the Service beyond the limited license granted herein.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">6.2 Your Data</h3>
            <p className="text-gray-300 leading-relaxed">
              You own all data you upload or create within the Service. You grant us a limited license to process your data solely to provide the Service.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">6.3 Feedback</h3>
            <p className="text-gray-300 leading-relaxed">
              If you provide feedback or suggestions, we may use them without any obligation or compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. API Usage</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">7.1 API Access</h3>
            <p className="text-gray-300 leading-relaxed">
              We provide API access for integrating the Service with your other business systems. API usage is subject to rate limits and fair use policies.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">7.2 API Terms</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>You must authenticate API requests using valid credentials</li>
              <li>You may not use the API to create a competing service</li>
              <li>We may modify or discontinue API features with 90 days' notice</li>
              <li>You must secure your API keys and not share them publicly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Service Level Agreement</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">8.1 Uptime Commitment</h3>
            <p className="text-gray-300 leading-relaxed">
              We strive for 99.9% uptime for paid plans. Scheduled maintenance will be communicated in advance when possible.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">8.2 Data Backup</h3>
            <p className="text-gray-300 leading-relaxed">
              We perform regular backups of your data. However, you are responsible for maintaining copies of critical data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">9.1 By You</h3>
            <p className="text-gray-300 leading-relaxed">
              You may cancel your subscription at any time through your account settings or by contacting support. Cancellation takes effect at the end of the current billing period.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">9.2 By Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We may suspend or terminate your account for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Violation of these Terms or our Acceptable Use Policy</li>
              <li>Conduct that harms us, other users, or the Service</li>
              <li>Extended periods of inactivity</li>
              <li>Failure to pay applicable fees</li>
            </ul>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">9.3 Effect of Termination</h3>
            <p className="text-gray-300 leading-relaxed">
              Upon termination:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Your access to the Service will cease</li>
              <li>We will delete your data within 30 days (or as required by law)</li>
              <li>No refunds will be provided for partial periods</li>
              <li>Provisions that by their nature should survive will remain in effect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE ARE NOT RESPONSIBLE FOR THE ACTIONS OF THIRD-PARTY INTEGRATIONS OR SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL OPERON, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless OPERON and its officers, directors, employees, agents, and affiliates from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit or transmit through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Dispute Resolution</h2>
            <h3 className="text-xl font-medium text-cyan-400 mb-3">13.1 Governing Law</h3>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">13.2 Arbitration</h3>
            <p className="text-gray-300 leading-relaxed">
              Any dispute arising from these Terms or the Service shall be resolved through binding arbitration administered by [Arbitration Organization], except where prohibited by law.
            </p>

            <h3 className="text-xl font-medium text-cyan-400 mb-3 mt-6">13.3 Class Action Waiver</h3>
            <p className="text-gray-300 leading-relaxed">
              You agree not to bring or participate in any class action, collective action, or representative action against us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. General Terms</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and us.</li>
              <li><strong>Modifications:</strong> We may modify these Terms with 30 days' notice. Continued use constitutes acceptance.</li>
              <li><strong>Assignment:</strong> You may not assign your rights without our consent. We may assign our rights freely.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the rest remain in effect.</li>
              <li><strong>Force Majeure:</strong> We are not liable for delays due to events beyond our control.</li>
              <li><strong>No Waiver:</strong> Failure to enforce any right does not constitute a waiver.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms, please contact:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mt-4">
              <p className="text-gray-300"><strong>Legal Department</strong></p>
              <p className="text-gray-300">Email: <span className="text-cyan-400">legal@operon.io</span></p>
              <p className="text-gray-300">Address: [Your Business Address]</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap gap-6 text-sm text-gray-500">
          <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-cyan-400">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;