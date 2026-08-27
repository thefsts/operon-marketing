import { Shield } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function GunFFLPage() {
  return (
    <LightFeaturePage
      eyebrow="FFL / Firearms Business CRM"
      title="Organize customer, inventory, sales, and compliance-support workflows in one business system."
      description="OPERON is being designed to support licensed firearms businesses with CRM, retail operations, inventory visibility, records, and workflow organization while keeping legal compliance responsibilities with the licensed business."
      icon={Shield}
      features={[
        { title: 'Customer CRM', description: 'Keep customer records, notes, activity, and follow-up organized.' },
        { title: 'Inventory workflows', description: 'Support inventory visibility and operational tracking for the business.' },
        { title: 'Retail / POS workflows', description: 'Connect customer and retail activity as supported POS capabilities are released.' },
        { title: 'Record organization', description: 'Keep business records and related documents structured and retrievable.' },
        { title: 'Role-based access', description: 'Control which staff members can access sensitive business workflows.' },
        { title: 'Audit visibility', description: 'Maintain activity history for important records and operational changes.' },
      ]}
      note="OPERON does not replace federal, state, or local firearms-law compliance, required FFL recordkeeping systems, background-check obligations, or legal counsel. Licensed businesses remain responsible for determining and meeting all applicable requirements."
    />
  );
}
