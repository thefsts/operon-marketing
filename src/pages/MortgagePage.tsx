import { Building2 } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function MortgagePage() {
  return (
    <LightFeaturePage
      eyebrow="Professional CRM · Mortgage"
      title="Keep borrowers, loan stages, documents, and follow-up organized."
      description="OPERON gives mortgage professionals a structured CRM workspace for borrower relationships, loan pipeline activity, tasks, and operational follow-up using the Professional CRM pricing family."
      icon={Building2}
      features={[
        { title: 'Borrower Records', description: 'Keep borrower, co-borrower, referral, and partner records organized.' },
        { title: 'Loan Pipeline', description: 'Track opportunities and loan progress through clear operational stages.' },
        { title: 'Document Workflow', description: 'Associate documents and checklist activity with the correct client and transaction.' },
        { title: 'Tasks & Follow-up', description: 'Manage reminders, deadlines, and next actions across the loan workflow.' },
        { title: 'Referral Relationships', description: 'Track agents, builders, partners, and referral sources inside the CRM.' },
        { title: 'Reporting', description: 'Review pipeline activity and operational performance from one business system.' },
      ]}
      note="Mortgage licensing, disclosures, lending compliance, and regulated transaction requirements remain the responsibility of the licensed business and its compliance professionals."
    />
  );
}
