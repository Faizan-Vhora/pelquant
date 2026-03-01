import IndustryTemplate from './IndustryTemplate';

export default function LegalTechPage() {
  const data = {
    industry: 'LegalTech',
    tagline: 'Legal Technology Solutions',
    description: 'Legal work is document-intensive, deadline-critical, and high-stakes. We build legal technology platforms and AI tools that automate routine legal tasks, improve accuracy, and free lawyers to focus on high-value work.',
    solutions: [
      'Case and matter management platforms',
      'Contract lifecycle management (CLM)',
      'Legal document management systems',
      'Court and tribunal case management',
      'Legal billing and time-tracking platforms',
      'Due diligence automation',
      'Compliance management systems',
      'Client-facing legal portals'
    ],
    aiCapabilities: [
      { title: 'AI Contract Review', desc: 'Clause extraction, risk flagging, obligation tracking' },
      { title: 'Legal Research AI', desc: 'Case law analysis and precedent identification' },
      { title: 'Contract Comparison', desc: 'Automated redlining and version control' },
      { title: 'Due Diligence Automation', desc: 'Document review and anomaly detection' }
    ]
  };

  return <IndustryTemplate {...data} />;
}
