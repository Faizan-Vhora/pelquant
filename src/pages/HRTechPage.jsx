import IndustryTemplate from './IndustryTemplate';

export default function HRTechPage() {
  const data = {
    industry: 'HR Technology',
    tagline: 'HR Technology & Workforce Management',
    description: 'Human capital is every company\'s most important asset. We build HR technology that automates administrative burden, improves hiring quality, and creates better employee experiences.',
    solutions: [
      'Human Resource Information Systems (HRIS)',
      'Applicant Tracking Systems (ATS)',
      'Onboarding platforms',
      'Performance management systems',
      'Learning and Development (L&D) platforms',
      'Payroll and compensation management',
      'Time and attendance management',
      'Employee engagement and pulse surveys'
    ],
    aiCapabilities: [
      { title: 'AI Resume Screening', desc: 'Automated candidate ranking and matching' },
      { title: 'HR Chatbots', desc: 'Policy Q&A, leave requests, payroll enquiries' },
      { title: 'Predictive Attrition', desc: 'Identifying at-risk employees before resignation' },
      { title: 'AI L&D Recommendations', desc: 'Personalized learning content suggestions' }
    ]
  };

  return <IndustryTemplate {...data} />;
}
