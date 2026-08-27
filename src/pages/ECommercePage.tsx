import { ShoppingCart } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ECommercePage() {
  return (
    <LightFeaturePage
      eyebrow="E-Commerce"
      title="Keep customers, orders, and commerce activity connected to your CRM."
      description="OPERON brings customer context and commerce operations together so teams can manage relationships, orders, follow-up, and reporting from a cleaner business workspace."
      icon={ShoppingCart}
      features={[
        { title: 'Customer records', description: 'Connect customer profiles to orders, activity, notes, and follow-up.' },
        { title: 'Order visibility', description: 'Keep order activity visible alongside the broader customer relationship.' },
        { title: 'Product workflows', description: 'Support product and catalog workflows as commerce capabilities expand.' },
        { title: 'Payment connections', description: 'Integrate supported payment providers while keeping provider costs separate and transparent.' },
        { title: 'Automation', description: 'Trigger follow-up and internal workflows from customer and commerce events.' },
        { title: 'Reporting', description: 'Bring customer and commerce performance into OPERON reporting.' },
      ]}
    />
  );
}
