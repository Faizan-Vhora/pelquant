import IndustryTemplate from './IndustryTemplate';

export default function HealthTechPage() {
  const data = {
    industry: 'HealthTech',
    tagline: 'Healthcare Technology Solutions',
    description: 'Healthcare software must balance clinical accuracy, patient safety, strict data privacy regulations, and seamless integration with existing clinical systems. Pelquant builds healthcare software that clinicians trust and patients benefit from — without compromising on compliance or performance.',
    solutions: [
      'Electronic Health Records (EHR/EMR) systems',
      'Telemedicine and telehealth platforms',
      'Hospital Information Systems (HIS)',
      'Laboratory Information Management Systems (LIMS)',
      'Medical imaging platforms and DICOM viewers',
      'Patient engagement and health tracking apps',
      'Healthcare provider portals and referral management',
      'Pharmacy management systems',
      'Mental health and wellness platforms'
    ],
    aiCapabilities: [
      { title: 'AI-Assisted Clinical Decision Support', desc: 'Diagnostic assistance and treatment recommendations' },
      { title: 'Medical Image Analysis', desc: 'AI-powered radiology, pathology, and dermatology screening' },
      { title: 'Predictive Analytics', desc: 'Patient deterioration and hospital readmission prediction' },
      { title: 'NLP for Clinical Notes', desc: 'Automated coding and discharge summary processing' }
    ],
    compliance: [
      'HIPAA — Healthcare data privacy and security (US)',
      'HITECH — Health Information Technology Act',
      'HL7 FHIR — Healthcare interoperability standard',
      'GDPR — For European healthcare data',
      'FDA 21 CFR Part 11 — Electronic records and signatures',
      'CE Marking / FDA clearance for medical device software'
    ]
  };

  return <IndustryTemplate {...data} />;
}
