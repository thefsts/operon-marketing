import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageSquare, Phone, Mail, CreditCard, 
  Zap, Webhook, HardDrive, FileText, Calendar, CheckCircle,
  Calculator, ShoppingCart, Users, Star, Clock, Building
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const integrations = {
  communication: {
    title: 'Communication',
    description: 'Connect with your favorite communication tools',
    items: [
      { name: 'Slack', icon: MessageSquare, status: 'Native', description: 'Real-time team notifications and alerts' },
      { name: 'Twilio', icon: Phone, status: 'Native', description: 'SMS and voice communications' },
      { name: 'Gmail', icon: Mail, status: 'Native', description: 'Email sync and tracking' },
      { name: 'Outlook', icon: Mail, status: 'Via Zapier', description: 'Calendar and email integration' },
      { name: 'Microsoft Teams', icon: MessageSquare, status: 'Via Zapier', description: 'Team collaboration and chat' },
    ]
  },
  calendarScheduling: {
    title: 'Calendar & Scheduling',
    description: 'Sync calendars and automate scheduling',
    items: [
      { name: 'Google Calendar', icon: Calendar, status: 'Native', description: 'Two-way calendar synchronization' },
      { name: 'Calendly', icon: Clock, status: 'Via Zapier', description: 'Automated appointment scheduling' },
      { name: 'Outlook Calendar', icon: Calendar, status: 'Via Zapier', description: 'Microsoft calendar integration' },
    ]
  },
  payments: {
    title: 'Payments',
    description: 'Accept payments through multiple providers',
    items: [
      { name: 'PayPal', icon: CreditCard, status: 'Native', description: 'Online payment processing' },
      { name: 'Square', icon: CreditCard, status: 'Native', description: 'POS and online payments' },
      { name: 'Afterpay', icon: CreditCard, status: 'Coming Soon', description: 'Buy now, pay later options' },
      { name: 'Zip', icon: CreditCard, status: 'Coming Soon', description: 'Flexible payment plans' },
      { name: 'Stripe', icon: CreditCard, status: 'Coming Soon', description: 'Payment processing platform' },
    ]
  },
  automation: {
    title: 'Automation',
    description: 'Connect with automation platforms',
    items: [
      { name: 'Zapier', icon: Zap, status: 'Native', description: 'Connect 5000+ apps automatically' },
      { name: 'Make', icon: Zap, status: 'Native', description: 'Visual workflow automation' },
      { name: 'Webhooks', icon: Webhook, status: 'Native', description: 'Custom real-time integrations' },
      { name: 'n8n', icon: Zap, status: 'Via Webhook', description: 'Self-hosted workflow automation' },
    ]
  },
  filesStorage: {
    title: 'Files & Storage',
    description: 'Sync and backup your data',
    items: [
      { name: 'Google Drive', icon: HardDrive, status: 'Via Zapier', description: 'Cloud storage and documents' },
      { name: 'Dropbox', icon: HardDrive, status: 'Via Zapier', description: 'File sync and backup' },
      { name: 'OneDrive', icon: HardDrive, status: 'Via Zapier', description: 'Microsoft cloud storage' },
      { name: 'CSV Import/Export', icon: FileText, status: 'Native', description: 'Bulk data management' },
    ]
  },
  accountingFinance: {
    title: 'Accounting & Finance',
    description: 'Sync with your accounting software',
    items: [
      { name: 'QuickBooks', icon: Calculator, status: 'Coming Soon', description: 'Accounting software sync' },
      { name: 'Xero', icon: Calculator, status: 'Coming Soon', description: 'Cloud accounting integration' },
      { name: 'FreshBooks', icon: Calculator, status: 'Via Zapier', description: 'Invoicing and accounting' },
    ]
  },
  commerceOperations: {
    title: 'Commerce & Operations',
    description: 'E-commerce and business operations',
    items: [
      { name: 'WooCommerce', icon: ShoppingCart, status: 'Via Zapier', description: 'WordPress e-commerce platform' },
      { name: 'BigCommerce', icon: ShoppingCart, status: 'Via Zapier', description: 'Enterprise e-commerce' },
      { name: 'Amazon', icon: ShoppingCart, status: 'Coming Soon', description: 'Marketplace integration' },
      { name: 'eBay', icon: ShoppingCart, status: 'Coming Soon', description: 'Marketplace sync' },
    ]
  },
  crmMarketing: {
    title: 'CRM & Marketing',
    description: 'Connect your marketing and CRM tools',
    items: [
      { name: 'HubSpot', icon: Users, status: 'Via Zapier', description: 'Marketing automation' },
      { name: 'Mailchimp', icon: Mail, status: 'Via Zapier', description: 'Email marketing campaigns' },
      { name: 'Salesforce', icon: Building, status: 'Coming Soon', description: 'Enterprise CRM sync' },
    ]
  },
  reviews: {
    title: 'Reviews & Reputation',
    description: 'Manage your online reputation',
    items: [
      { name: 'Google Reviews', icon: Star, status: 'Native', description: 'Google Business Profile reviews' },
      { name: 'Facebook Reviews', icon: Star, status: 'Native', description: 'Facebook page reviews' },
      { name: 'Yelp', icon: Star, status: 'Via API', description: 'Business review platform' },
      { name: 'Trustpilot', icon: Star, status: 'Coming Soon', description: 'Customer review platform' },
    ]
  }
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Integrate with the tools your business{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              already uses
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Connect Operon with your existing tech stack. Native integrations, Zapier support, and custom webhooks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              40+ Integrations
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Native + Zapier
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Custom Webhooks
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(integrations).map(([key, category]) => (
            <div key={key} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{category.title}</h2>
                <p className="text-slate-500">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.status === 'Native' 
                          ? 'bg-green-100 text-green-700' 
                          : item.status === 'Coming Soon'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Build Custom Integrations with Our API
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Full REST API access with webhooks, OAuth support, and comprehensive documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/api-docs" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              <FileText className="w-5 h-5" />
              API Documentation
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a custom integration?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our team can build custom integrations tailored to your business needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
          >
            Book Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}