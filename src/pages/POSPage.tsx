import { ShoppingCart } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function POSPage() {
  return <LightFeaturePage eyebrow="Restaurant / Retail CRM + POS" title="Connect point-of-sale operations to the customer relationship." description="OPERON's restaurant and retail direction combines CRM and POS workflows so customer activity, sales operations, and business follow-up can live in a more connected system." icon={ShoppingCart} features={[
    { title: 'POS Workflow', description: 'Support restaurant and retail transaction workflows inside the OPERON product family.' },
    { title: 'Customer Profiles', description: 'Connect customer history and operational follow-up to CRM records.' },
    { title: 'Products & Orders', description: 'Organize commerce activity and the operational context around it.' },
    { title: 'Team Operations', description: 'Give authorized staff a shared view of customer and business activity.' },
    { title: 'Reporting', description: 'Bring CRM and operational reporting closer together.' },
    { title: 'Expandable Integrations', description: 'Add verified payment and commerce services as production integrations are approved.' },
  ]} primaryCta={{ label: 'View Restaurant / Retail Pricing', to: '/pricing#restaurant-retail' }} />;
}
