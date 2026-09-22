import { Cannabis } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function CannabisPage() {
  return (
    <LightFeaturePage
      eyebrow="Cannabis CRM + Regulated Operations"
      title="Run regulated cannabis customer, retail, inventory, delivery, and business operations from one connected workspace."
      description="OPERON gives cannabis businesses a CRM-centered operating layer for customer relationships, regulated retail workflows, inventory visibility, delivery coordination, staff operations, reporting, and integration-ready compliance workflows."
      icon={Cannabis}
      image="https://images.unsplash.com/photo-1536819114556-1e10f967fb77?auto=format&fit=crop&w=1400&q=82"
      imageAlt="Modern regulated retail business interior"
      features={[
        { title: 'Customer CRM', description: 'Organize permitted customer relationships, activity, notes, follow-up, service history, and business communications.' },
        { title: 'Retail & POS Operations', description: 'Connect customer, order, product, inventory, and operational workflows with OPERON retail and POS capabilities.' },
        { title: 'Inventory & Location Visibility', description: 'Coordinate products, stock, locations, transfers, purchasing workflows, and operational reporting across the business.' },
        { title: 'Delivery Coordination', description: 'Support dispatch, delivery workflow, customer communication, route coordination, and operational handoffs.' },
        { title: 'Compliance-Ready Workflows', description: 'Capture required operational data, acknowledgments, records, and integration points needed for jurisdiction-specific compliance processes.' },
        { title: 'Connected Security & Integrations', description: 'Prepare the business for approved integrations with FSTS security, legal-evidence, API, and compliance systems as those integrations are certified for production use.' },
      ]}
      workflow={['Customer & order intake', 'Verify & route workflow', 'Inventory / retail operations', 'Delivery or fulfillment', 'Record & report']}
      managementTitle="Cannabis operations management keeps regulated business activity connected to the CRM."
      managementDescription="Coordinate staff, locations, inventory, customer operations, delivery workflows, reporting, approved integrations, and compliance-support processes from one operating workspace."
      note="Cannabis businesses remain responsible for all applicable federal, state, local, licensing, traceability, age-verification, sales-limit, inventory, delivery, retention, security, tax, and reporting requirements. Availability of METRC or other government/third-party integrations depends on jurisdiction, credentials, provider approval, and production certification."
    />
  );
}
