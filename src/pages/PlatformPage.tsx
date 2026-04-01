import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Zap, Brain, Users, BarChart3, Globe, Clock, DollarSign, 
  CheckCircle, ArrowRight, Sparkles, Layers, Settings, MessageSquare,
  Calendar, FileText, ShoppingCart, Megaphone, Workflow
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const PlatformPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '10+', label: 'Core Modules' },
    { value: '50%', label: 'Cost Savings' },
    { value: '24/7', label: 'AI Support' },
    { value: '1', label: 'Platform' },
  ];

  const modules = [
    { icon: Users, name: 'CRM', desc: 'Complete customer relationship management with pipelines, contacts, and deal tracking.' },
    { icon: Brain, name: 'AI Assistant', desc: 'Intelligent automation that learns your business and handles repetitive tasks.' },
    { icon: ShoppingCart, name: 'POS', desc: 'Point of sale system for restaurants, retail, and service businesses.' },
    { icon: Megaphone, name: 'Marketing', desc: 'Email campaigns, social media management, and lead generation tools.' },
    { icon: FileText, name: 'Documents', desc: 'Secure document storage with version control and e-signatures.' },
    { icon: Calendar, name: 'Scheduling', desc: 'Appointment booking, calendar management, and automated reminders.' },
    { icon: MessageSquare, name: 'Communications', desc: 'Unified inbox for SMS, email, and chat across all channels.' },
    { icon: BarChart3, name: 'Reporting', desc: 'Real-time analytics and custom dashboards for data-driven decisions.' },
    { icon: Workflow, name: 'Automation', desc: 'Workflow builder to automate tasks, triggers, and business processes.' },
    { icon: Layers, name: 'Projects', desc: 'Task management and project tracking for teams of any size.' },
  ];

  const values = [
    { 
      icon: DollarSign, 
      title: 'Replace Your Entire Tech Stack', 
      desc: 'Instead of paying for 5-10 different tools, Operon gives you everything in one platform. Most businesses save 50% or more on software costs.'
    },
    { 
      icon: Clock, 
      title: 'Built for Speed', 
      desc: 'Every feature is designed to save time. Automated workflows, AI-powered suggestions, and instant access to the data you need.'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Security', 
      desc: 'Bank-level encryption, role-based access controls, and compliance-ready features for regulated industries.'
    },
    { 
      icon: Globe, 
      title: 'Works Everywhere', 
      desc: 'Cloud-based platform accessible from any device. Desktop, tablet, or mobile — your business is always with you.'
    },
  ];

  const timeline = [
    { year: '2023', title: 'The Vision', desc: 'Operon was founded with a simple mission: eliminate the fragmentation that plagues modern businesses.' },
    { year: '2024', title: 'Platform Launch', desc: 'After extensive development, Operon launched with 10 integrated modules replacing dozens of standalone tools.' },
    { year: '2025', title: 'AI Integration', desc: 'Full AI assistant capabilities added, enabling intelligent automation across all platform features.' },
    { year: 'Today', title: 'Growing Together', desc: 'Businesses across industries use Operon to streamline operations and focus on what matters most.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              The All-in-One Business Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Operon CRM
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              One platform. Every tool you need. Operon replaces your fragmented software stack with a unified system designed to save time, reduce costs, and scale your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                View Pricing
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Operon Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why We Built Operon
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              We saw businesses struggling with dozens of disconnected tools — each with its own login, pricing, and learning curve. Operon was created to end that frustration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything in One Place
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Each module is fully integrated. No more exporting CSVs, no more duplicate data, no more switching between tabs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((module, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-cyan-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-3">
                  <module.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{module.name}</h3>
                <p className="text-slate-500 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                An AI Assistant That Actually Helps
              </h2>
              <p className="text-slate-600 text-lg mb-6">
                Operon's AI assistant isn't just a chatbot. It learns your business, automates routine tasks, drafts emails, schedules appointments, and provides intelligent suggestions based on your data.
              </p>
              <ul className="space-y-3">
                {[
                  'Automated follow-ups and reminders',
                  'Smart email drafting and responses',
                  'Lead scoring and prioritization',
                  'Natural language reporting queries',
                  'Predictive analytics for sales trends',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4">
                    <p className="text-slate-700">I've scheduled 3 appointments for tomorrow and sent follow-up emails to 12 leads. Your conversion rate is up 15% this week!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-cyan-600 rounded-xl p-4">
                    <p className="text-white">Show me my top 5 leads this month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 rounded-xl p-4">
                    <p className="text-slate-700">Here are your top leads based on engagement and deal value. Would you like me to prioritize outreach for any of them?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Story
            </h2>
            <p className="text-slate-500 text-lg">
              Building the platform we wished existed.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />
            
            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-center mb-8 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-600 rounded-full -translate-x-1/2 border-4 border-white shadow" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="text-cyan-600 font-bold text-sm mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Business?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join the businesses that have consolidated their tech stack and saved thousands with Operon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/start"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default PlatformPage;