import { Building2 } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function MortgagePage() {
  return <LightFeaturePage eyebrow="Mortgage CRM" title="Keep borrowers, loan milestones, referral partners, documents, and branch operations organized." description="OPERON gives mortgage professionals a structured business workspace for borrower relationships, loan pipeline activity, referral networks, tasks, milestones, document workflow, follow-up, and branch coordination." icon={Building2} image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=82" imageAlt="Mortgage professional reviewing financial documents with a client" features={[
    { title: 'Borrower Relationships', description: 'Organize borrowers, co-borrowers, prospects, past customers, referral partners, and communication history in one CRM.' },
    { title: 'Loan Pipeline', description: 'Track business workflow from new opportunity through application milestones, processing activity, closing, and post-close follow-up.' },
    { title: 'Document Workflow', description: 'Keep permitted business documents, checklists, requests, notes, and activity connected to the correct borrower and opportunity.' },
    { title: 'Tasks & Milestones', description: 'Coordinate reminders, internal assignments, follow-ups, appointments, and important operational dates across the team.' },
    { title: 'Referral Network', description: 'Track agents, builders, partners, referral sources, relationship activity, and resulting opportunities from one workspace.' },
    { title: 'Production Visibility', description: 'Give authorized managers a clearer view of pipeline activity, team workloads, branch operations, and business performance.' },
  ]} workflow={['Lead & referral', 'Borrower intake', 'Loan milestones', 'Closing workflow', 'Post-close nurture']} managementTitle="Branch / Office Management connects production workflows with day-to-day mortgage operations." managementDescription="Coordinate staff, shared calendars, internal tasks, approvals, documents, branch resources, referral activity, and production reporting from the same workspace used to manage borrower relationships." note="Mortgage licensing, disclosures, lending compliance, data-handling obligations, and regulated transaction requirements remain the responsibility of the licensed business and its compliance professionals." />;
}
