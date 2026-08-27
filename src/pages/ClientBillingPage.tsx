import { CreditCard } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ClientBillingPage() {
  return (
    <LightFeaturePage
      eyebrow="Client Billing"
      title="Keep billing workflows connected to the customer record."
      description="OPERON is designed to keep invoices, payment status, recurring billing workflows, and customer activity connected to the same CRM record instead of splitting finance operations across disconnected tools."
      icon={CreditCard}
      features={[
        { title: 'Invoice workflows', description: 'Create and track billing activity alongside customer and account records.' },
        { title: 'Payment status', description: 'Keep payment progress visible to the team without losing the customer context.' },
        { title: 'Recurring workflows', description: 'Support recurring billing and follow-up processes as the billing module expands.' },
        { title: 'Provider integrations', description: 'Connect supported payment providers while keeping third-party processing fees and terms transparent.' },
        { title: 'Activity history', description: 'Keep billing-related activity auditable inside the CRM timeline.' },
        { title: 'Reporting', description: 'Bring billing and revenue visibility into OPERON reporting as supported data becomes available.' },
      ]}
      note="Payment-provider availability and transaction fees depend on the provider selected and the customer account configuration."
    />
  );
}
