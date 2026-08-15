import IndustryTemplate from './IndustryTemplate';

// This page used to be a hand-copied duplicate of IndustryTemplate's markup, so
// it drifted from its twelve siblings — most visibly, its AI capability cards
// rendered no icon at all. Its own wording is preserved through the template's
// optional label props.
const solutions = [
  'Digital banking platforms and neobank applications',
  'Payment processing systems and merchant gateways',
  'Lending and loan origination platforms',
  'Trading platforms and investment apps',
  'Wealth management and robo-advisory',
  'RegTech and compliance automation (AML, KYC)',
  'Open Banking integrations (PSD2)',
  'Insurance technology platforms',
  'Blockchain and DeFi solutions',
];

const aiCapabilities = [
  { title: 'AI-Powered Fraud Detection', desc: 'Behavioral models and real-time transaction monitoring' },
  { title: 'Automated KYC/AML', desc: 'Document verification and watchlist screening', icon: 'Lock' },
  { title: 'Credit Risk Modeling', desc: 'ML-based credit scoring with alternative data', icon: 'Chart' },
  { title: 'AI Financial Advisors', desc: 'Portfolio Q&A and financial planning assistance', icon: 'MessageCircle' },
];

const compliance = [
  'PCI-DSS — Payment card industry security',
  'PSD2 / Open Banking regulation',
  'AML / CFT — Anti-Money Laundering',
  'GDPR — Data privacy for financial data',
  'SOC 2 Type II for financial SaaS',
  'SEC, FCA, RBI regulations',
];

export default function FinTechPage() {
  return (
    <IndustryTemplate
      industry="FinTech"
      tagline="Financial Technology Solutions"
      description="Financial software demands the highest standards of security, accuracy, compliance, and performance. Pelquant has deep expertise building financial platforms — from consumer banking apps and payment processors to investment platforms, compliance systems, and AI-powered financial analytics."
      solutions={solutions}
      solutionsHeading="FinTech Solutions"
      aiCapabilities={aiCapabilities}
      aiTag="AI IN FINTECH"
      aiHeading="AI & Automation Capabilities"
      compliance={compliance}
      complianceTag="REGULATORY COMPLIANCE"
      complianceHeading="Frameworks We Work Within"
      ctaSubtext="Let’s discuss your financial technology project and build compliant, secure solutions."
    />
  );
}
