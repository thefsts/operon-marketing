import { ShoppingCart } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function POSPage() {
  return (
    <LightFeaturePage
      eyebrow="OPERON POS"
      title="Connect transactions, customers, products, teams, and locations in one operating workflow."
      description="OPERON POS is positioned as a substantial business system for restaurant, retail, and club operations that need transaction activity connected to CRM context, products, inventory, authorized employees, reporting, and ongoing customer follow-up."
      icon={ShoppingCart}
      image="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1400&q=85"
      imageAlt="Modern point-of-sale checkout used by a business team"
      features={[
        { title: 'Customer-connected transactions', description: 'Keep transaction activity tied to the customer relationship when customer context is available, making follow-up and history easier to manage.' },
        { title: 'Products and inventory', description: 'Organize product and inventory workflows so frontline activity and operational context can stay connected inside the OPERON environment.' },
        { title: 'Employees and permissions', description: 'Support authorized team access and role-aware operational workflows rather than treating every staff member as the same user.' },
        { title: 'Restaurant, retail, and club operations', description: 'Use a shared OPERON foundation while configuring the operating workflow around the needs of the business type and implementation.' },
        { title: 'Multi-location visibility', description: 'Support businesses that need location-aware operational visibility while maintaining a broader customer and management view.' },
        { title: 'Operational reporting', description: 'Bring sales and operating activity closer to CRM reporting so management can review performance with customer context attached.' },
      ]}
      workflow={[
        'Configure products, locations, and access',
        'Run the customer transaction workflow',
        'Update operational context',
        'Continue CRM service or follow-up',
        'Review location and business reporting',
      ]}
      managementTitle="Treat POS as part of the business operating system, not a disconnected checkout widget."
      managementDescription="Implementation should account for business type, locations, catalog or menu structure, employee access, payment-provider requirements, reporting needs, and the CRM workflows that continue after a transaction. That setup work is part of building a dependable POS environment."
      note="Payment processing and hardware/provider requirements depend on the verified services selected for a specific deployment. Provider transaction fees, hardware, telecom, and customer-owned third-party subscriptions remain separate from OPERON pricing. OPERON should not be represented as supporting a provider until that integration is verified for production use."
      primaryCta={{ label: 'View Restaurant / Retail Pricing', to: '/pricing#restaurant-retail' }}
      secondaryCta={{ label: 'Plan a POS Implementation', to: '/contact' }}
    />
  );
}
