import IndustryTemplate from './IndustryTemplate';

export default function GovTechPage() {
  const data = {
    industry: 'GovTech',
    tagline: 'Government & Public Sector Technology',
    description: 'Government software must be accessible to all citizens, compliant with stringent regulations, highly secure, and built to last for decades. We bring private-sector agility and AI capability to public sector digital transformation.',
    solutions: [
      'Citizen service portals',
      'Government ERP systems',
      'Tax filing and revenue management',
      'Benefits and social welfare management',
      'Digital identity and e-government authentication',
      'Smart city platforms',
      'Land registry and property records',
      'Emergency management systems'
    ],
    aiCapabilities: [
      { title: 'AI Citizen Request Triage', desc: 'Intelligent routing and prioritization' },
      { title: 'Fraud Detection', desc: 'Anomaly detection in benefits and tax systems' },
      { title: 'Predictive Analytics', desc: 'Public service demand planning' },
      { title: 'Smart City Applications', desc: 'Traffic analysis and public safety monitoring' }
    ]
  };

  return <IndustryTemplate {...data} />;
}
