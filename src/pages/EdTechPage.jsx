import IndustryTemplate from './IndustryTemplate';

export default function EdTechPage() {
  const data = {
    industry: 'EdTech',
    tagline: 'Education Technology Solutions',
    description: 'We build education platforms that are engaging, personalized, and measurable — from corporate learning management systems to consumer education apps and AI-powered tutoring systems.',
    solutions: [
      'Learning Management Systems (LMS)',
      'Corporate training and e-learning platforms',
      'School/university management systems (SIS)',
      'Online examination and assessment platforms',
      'Tutoring and coaching marketplaces',
      'Interactive video learning platforms',
      'Certification and credentialing systems'
    ],
    aiCapabilities: [
      { title: 'Adaptive Learning', desc: 'Content personalization based on learner performance' },
      { title: 'AI Tutors', desc: 'Conversational homework help and concept explanation' },
      { title: 'Automated Grading', desc: 'AI feedback for essays, code, and assignments' },
      { title: 'Learning Analytics', desc: 'At-risk learner identification and engagement analysis' }
    ]
  };

  return <IndustryTemplate {...data} />;
}
