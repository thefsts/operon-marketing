import { Target } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function LeadGenerationPage() {
  return <LightFeaturePage eyebrow="Lead Generation" title="Turn more prospects into organized opportunities." description="Capture, qualify, and move leads into the OPERON CRM pipeline with cleaner follow-up and less manual work." icon={Target} features={[
    { title: 'Lead Capture', description: 'Bring new prospects into a structured CRM workflow.' },
    { title: 'Qualification', description: 'Organize lead details and prioritize the opportunities that need attention.' },
    { title: 'Pipeline Tracking', description: 'Move qualified leads through visible stages from first contact to close.' },
    { title: 'Follow-up Workflows', description: 'Use tasks and automation to reduce missed follow-ups.' },
    { title: 'Activity History', description: 'Keep notes, touchpoints, and progress connected to the contact record.' },
    { title: 'Performance Visibility', description: 'See where leads are coming from and how the pipeline is progressing.' },
  ]} />;
}
