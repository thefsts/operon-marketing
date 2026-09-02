import { ShoppingCart } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ECommercePage() {
  return (
    <LightFeaturePage
      eyebrow="E-Commerce"
      title="Run commerce workflows with the customer relationship already connected."
      description="OPERON E-Commerce brings customer context, orders, catalog activity, inventory visibility, follow-up, and reporting into the same CRM-centered operating model so teams can manage the work around a sale instead of treating every order like an isolated transaction."
      icon={ShoppingCart}
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Business team reviewing digital commerce activity at a checkout counter"
      features={[
        { title: 'Customer + order history', description: 'Keep customer records connected to orders, notes, service history, activity, and the next follow-up your team needs to complete.' },
        { title: 'Catalog and product workflows', description: 'Organize products and catalog activity while keeping the related customer, sales, and operational context inside OPERON.' },
        { title: 'Inventory visibility', description: 'Give authorized teams a clearer operational view of product and inventory activity without separating commerce work from the CRM relationship.' },
        { title: 'Commerce follow-up', description: 'Turn order and customer activity into practical follow-up for service, retention, sales, and internal handoffs.' },
        { title: 'Marketing connections', description: 'Pair commerce workflows with supported OPERON growth tools such as Social Publisher, Lead Generation, Reputation Management, and additional email capacity.' },
        { title: 'Reporting and customer insight', description: 'Bring commerce activity into broader OPERON reporting so teams can review customer and operational performance in context.' },
      ]}
      workflow={[
        'Capture or identify the customer',
        'Connect product and order activity',
        'Coordinate fulfillment and follow-up',
        'Continue the CRM relationship',
        'Review performance and next actions',
      ]}
      managementTitle="A commerce layer that stays connected to sales, service, and retention."
      managementDescription="E-Commerce is most useful when the order is not the end of the workflow. OPERON keeps the surrounding customer relationship available so sales, operations, service, marketing, and management can work from the same business context."
      note="Available capabilities depend on the OPERON tier, enabled add-ons, and verified provider integrations in your deployment. Payment-provider, advertising, telecom, and other third-party subscription or transaction costs remain separate from OPERON pricing. Annual and qualifying multi-add-on discounts follow the shared OPERON pricing rules and do not stack automatically."
      primaryCta={{ label: 'Compare OPERON Pricing', to: '/pricing' }}
      secondaryCta={{ label: 'Plan an E-Commerce Setup', to: '/contact' }}
    />
  );
}
