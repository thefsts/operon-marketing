import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, Mail, MapPin, Phone, Clock, MessageSquare, Building, Users, Zap,
  ArrowRight, Check, Globe, HeadphonesIcon, Calendar
} from 'lucide-react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <GlobalHeader transparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about Operon CRM? Our team is here to help you transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Email Card */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                <a href="mailto:hello@operoncrm.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  hello@operoncrm.com
                </a>
              </div>

              {/* Live Chat Card */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Live Chat</h3>
                    <p className="text-gray-400 text-sm">Chat with our support team</p>
                  </div>
                </div>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Start a conversation →
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                <a href="tel:+1-888-555-0123" className="text-green-400 hover:text-green-300 transition-colors">
                  (888) 555-0123
                </a>
              </div>

              {/* Office Card */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 hover:border-amber-500/50 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office</h3>
                    <p className="text-gray-400 text-sm">Visit our headquarters</p>
                  </div>
                </div>
                <address className="text-gray-300 text-sm not-italic">
                  123 Innovation Drive<br />
                  San Francisco, CA 94107<br />
                  United States
                </address>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                    <p className="text-gray-400 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', subject: 'general', message: '' });
                      }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700/50 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-slate-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700/50 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-slate-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700/50 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder-slate-500"
                          placeholder="Acme Inc"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700/50 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white appearance-none"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="support">Technical Support</option>
                          <option value="enterprise">Enterprise Solutions</option>
                          <option value="partnership">Partnership</option>
                          <option value="press">Press & Media</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700/50 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none text-white placeholder-slate-500"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Cards */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact the <span className="text-cyan-400">Right Team</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get direct access to the team that can help you best.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building,
                title: 'Enterprise Sales',
                description: 'Custom solutions for large organizations',
                email: 'enterprise@operoncrm.com',
                color: 'cyan',
              },
              {
                icon: Users,
                title: 'Customer Success',
                description: 'Onboarding, training, and support',
                email: 'success@operoncrm.com',
                color: 'purple',
              },
              {
                icon: Zap,
                title: 'Technical Support',
                description: 'API help and technical issues',
                email: 'support@operoncrm.com',
                color: 'amber',
              },
            ].map((dept, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur border border-gray-700/50 rounded-xl p-6 text-center hover:border-gray-600 transition">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                  dept.color === 'cyan' ? 'bg-cyan-500/20' : 
                  dept.color === 'purple' ? 'bg-purple-500/20' : 'bg-amber-500/20'
                }`}>
                  <dept.icon className={`w-8 h-8 ${
                    dept.color === 'cyan' ? 'text-cyan-400' : 
                    dept.color === 'purple' ? 'text-purple-400' : 'text-amber-400'
                  }`} />
                </div>
                <h3 className="font-semibold text-white mb-2">{dept.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{dept.description}</p>
                <a href={`mailto:${dept.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-900/30 via-gray-800 to-purple-900/30 rounded-2xl p-8 md:p-12 border border-gray-700/50 text-center">
            <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule a <span className="text-cyan-400">Personalized Demo</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              See Operon CRM in action with a one-on-one demo tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/start"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 bg-gray-700/30 text-white rounded-xl font-semibold hover:bg-gray-600/30 transition-all border border-gray-600/50"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="text-purple-400">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'How quickly can I get started with Operon CRM?',
                a: 'You can sign up and start using Operon CRM in minutes. Our onboarding wizard guides you through the initial setup, and you can import your existing data easily.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.',
              },
              {
                q: 'Can I migrate from my current CRM?',
                a: 'Absolutely. We provide migration tools and support to help you transfer your data from popular CRM platforms like Salesforce, HubSpot, and Zoho.',
              },
              {
                q: 'What support options are available?',
                a: 'All plans include email support. Pro and Enterprise plans include priority support with faster response times and dedicated account managers.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-700/50 backdrop-blur border border-gray-700/50 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
};

export default ContactPage;