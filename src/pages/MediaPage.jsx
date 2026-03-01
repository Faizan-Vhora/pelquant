import IndustryTemplate from './IndustryTemplate';

export default function MediaPage() {
  const data = {
    industry: 'Media & Entertainment',
    tagline: 'Media & Entertainment Platforms',
    description: 'We build digital media platforms, streaming services, content management systems, and creator economy tools — engineered for high-traffic, content-rich experiences.',
    solutions: [
      'OTT video streaming platforms',
      'Podcast and audio distribution',
      'Digital publishing and CMS',
      'Creator monetization platforms',
      'Sports data platforms',
      'Event ticketing and live streaming',
      'Social network and community platforms'
    ],
    aiCapabilities: [
      { title: 'AI Content Moderation', desc: 'Automated screening of user-generated content' },
      { title: 'Personalized Recommendations', desc: 'Content discovery and engagement optimization' },
      { title: 'AI Transcription', desc: 'Automated captioning and translation' },
      { title: 'Automated Highlights', desc: 'AI-generated clips and summaries' }
    ]
  };

  return <IndustryTemplate {...data} />;
}
