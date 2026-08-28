import { Code2 } from 'lucide-react';
import LightFeaturePage from '../components/LightFeaturePage';

export default function ApiDocs() {
  return (
    <LightFeaturePage
      eyebrow="Developer Platform"
      title="OPERON API and integration documentation is being prepared for production release."
      description="The public developer surface will document supported APIs, webhooks, authentication, integration patterns, and release-safe examples as those interfaces are finalized."
      icon={Code2}
      features={[
        { title: 'API Access', description: 'Document supported endpoints and authentication once the production API contract is locked.' },
        { title: 'Webhooks', description: 'Publish event payloads, signatures, retries, and delivery expectations for supported events.' },
        { title: 'Integration Guides', description: 'Provide implementation guidance for supported external services and workflows.' },
        { title: 'Security', description: 'Document credential handling, permissions, rate limits, and safe integration practices.' },
        { title: 'Examples', description: 'Release tested examples that match the production API rather than placeholder code.' },
        { title: 'Versioning', description: 'Keep developer documentation aligned with supported OPERON releases.' },
      ]}
      note="Developer documentation shown publicly will only describe interfaces that have been verified for the production OPERON platform."
      primaryCta={{ label: 'Contact Integration Team', to: '/contact' }}
      secondaryCta={{ label: 'View Integrations', to: '/integrations' }}
    />
  );
}
