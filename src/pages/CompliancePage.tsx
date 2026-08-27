import { Shield } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function CompliancePage() {
  return (
    <LightFeaturePage
      eyebrow="Compliance-aware workflows"
      title="Structure regulated workflows with clearer access, records, and accountability."
      description="OPERON is designed to support regulated professional operations with role-aware access, organized records, activity history, and workflow controls."
      icon={Shield}
      features={[
        { title: 'Role-based access', description: 'Limit access based on the responsibilities of users and teams.' },
        { title: 'Activity history', description: 'Maintain an auditable history of important record and workflow activity.' },
        { title: 'Document organization', description: 'Keep documents connected to the appropriate customer, case, matter, or transaction.' },
        { title: 'Acknowledgments', description: 'Support workflows for disclosures, approvals, and required acknowledgments.' },
        { title: 'Industry workflows', description: 'Use structured workflows for healthcare, legal, real estate, and other professional operations.' },
        { title: 'Data controls', description: 'Build security and access practices around the sensitivity of business data.' },
      ]}
      note="OPERON provides software features that can support compliance workflows. It does not replace legal advice, regulatory guidance, formal certification, or an organization’s own compliance program."
    />
  );
}
