import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Link as LinkIcon, Instagram } from 'lucide-react';

const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.operoncrm.com';

const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', path: '/platform' },
      { name: 'Industries', path: '/#industries' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Integrations', path: '/integrations' },
      { name: 'Lead Generation', path: '/social-media-marketing' },
      { name: 'Reputation', path: '/reputation-management' },
      { name: 'Demo', path: '/contact' },
      { name: 'Login', path: `${APP_URL}/login`, external: true },
      { name: 'API Docs', path: '/docs' },
    ],
    industries: [
      { name: 'Real Estate', path: '/real-estate' },
      { name: 'Mortgage', path: '/real-estate' },
      { name: 'Legal', path: '/legal' },
      { name: 'Healthcare', path: '/healthcare' },
      { name: 'Title Companies', path: '/real-estate' },
      { name: 'Sports & Athletics', path: '/sports' },
      { name: 'Service Business', path: '/small-business-crm' },
      { name: 'E-Commerce', path: '/e-commerce' },
      { name: 'Reputation Management', path: '/reputation-management' },
    ],
    company: [
      { name: 'About Us', path: '/platform' },
      { name: 'Contact', path: '/contact' },
      { name: 'Support', path: '/contact' },
      { name: 'Partners', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Compliance', path: '/platform' },
      { name: 'Accessibility', path: '/accessibility' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/operon-logo-transparent.png" 
                alt="Operon CRM" 
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              The operating system for modern businesses. Any industry. Complete compliance.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.path} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">INDUSTRIES</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Operon CRM. All rights reserved. Created by{' '}
            <a 
              href="https://fstacktsolutions.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              Full Stack Tech & Solutions
            </a>
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;