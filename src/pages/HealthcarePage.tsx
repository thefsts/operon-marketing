import { Stethoscope } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function HealthcarePage() {
  return <LightFeaturePage eyebrow="Professional CRM · Healthcare" title="A cleaner CRM layer for healthcare business operations." description="OPERON helps healthcare organizations organize business relationships, outreach, tasks, and operational workflows while keeping clinical and regulated requirements clearly separated from unverified marketing claims." icon={Stethoscope} features={[
    { title: 'Contact & Organization Records', description: 'Organize business contacts, organizations, referral relationships, and activity.' },
    { title: 'Operational Pipelines', description: 'Track non-clinical business workflows through clear stages.' },
    { title: 'Tasks & Scheduling', description: 'Coordinate follow-ups and operational work across authorized team members.' },
    { title: 'Documents & Notes', description: 'Keep permitted business documents and notes associated with the appropriate record.' },
    { title: 'Reporting', description: 'Review business pipeline and operational activity from one workspace.' },
    { title: 'Integration Path', description: 'Connect approved services only after security and production readiness are verified.' },
  ]} note="Healthcare customers must configure OPERON according to their own privacy, security, HIPAA, clinical-system, and regulatory obligations. The marketing site does not claim that every workflow or integration is HIPAA-ready by default." />;
}
