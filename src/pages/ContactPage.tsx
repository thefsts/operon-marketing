import { MessageSquare } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ContactPage() {
  return (
    <LightFeaturePage
      eyebrow="Contact OPERON"
      title="Talk with us about your CRM, industry, and rollout needs."
      description="Tell us what your business does, how many people or locations you need to support, and which workflows matter most. We can help map the right OPERON starting point."
      icon={MessageSquare}
      features={[
        { title: 'Sales & pricing', description: 'Get help selecting the right CRM family, tier, seats, and locations.' },
        { title: 'Beta onboarding', description: 'Coordinate controlled beta onboarding and testing requirements.' },
        { title: 'Industry fit', description: 'Review how OPERON can support your specific business workflow.' },
        { title: 'Integrations', description: 'Discuss the external services and data connections your business requires.' },
        { title: 'Enterprise scope', description: 'Plan custom users, integrations, security, support, and deployment requirements.' },
        { title: 'Support', description: 'Route product and onboarding questions to the appropriate OPERON team.' },
      ]}
      secondaryCta={{ label: 'View Pricing', to: '/pricing' }}
      note="For now, use hello@operoncrm.com for general OPERON inquiries. We are removing placeholder phone numbers and office addresses from the public site until verified business contact details are locked."
    />
  );
}
