import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'PELQUANT - AI-First Full-Stack Development & Growth Marketing',
    description: 'Enterprise AI & full-stack development company. We build intelligent software, AI systems, and drive growth across 12+ industries with 13 core services.',
    keywords: 'AI development, full-stack development, AI integration, LLM integration, custom software, growth marketing, technical SEO, enterprise software',
    ogImage: '/og-home.jpg'
  },
  '/about': {
    title: 'About PELQUANT - Enterprise Technology Partner',
    description: 'Enterprise technology partner across every industry. Full-stack development, AI integration, and performance marketing solutions.',
    keywords: 'enterprise technology, AI partner, full-stack agency, technology consulting',
    ogImage: '/og-about.jpg'
  },
  '/services': {
    title: 'Services - Technology & Marketing Solutions | PELQUANT',
    description: '13 core services: AI/LLM Integration, SIEM, SOAR, Custom Software, DevOps, Technical SEO, Growth Marketing, and more.',
    keywords: 'AI services, software development services, marketing services, DevOps, cybersecurity, SEO services',
    ogImage: '/og-services.jpg'
  },
  '/services/ai-llm-integration': {
    title: 'AI & LLM Integration Services - GPT, Claude, Custom Models | PELQUANT',
    description: 'Enterprise AI & LLM integration. Build intelligent systems with GPT, Claude, Gemini, or custom models. Production-ready AI solutions.',
    keywords: 'AI integration, LLM integration, GPT integration, Claude AI, custom AI models, enterprise AI',
    ogImage: '/og-ai-llm.jpg'
  },
  '/services/siem': {
    title: 'SIEM Solutions - Security Information & Event Management | PELQUANT',
    description: 'Enterprise SIEM implementation and management. Real-time threat detection, compliance monitoring, and security analytics.',
    keywords: 'SIEM, security monitoring, threat detection, security analytics, compliance monitoring',
    ogImage: '/og-siem.jpg'
  },
  '/services/soar': {
    title: 'SOAR Platform - Security Orchestration & Automation | PELQUANT',
    description: 'SOAR platform implementation. Automate security operations, incident response, and threat intelligence workflows.',
    keywords: 'SOAR, security automation, incident response, security orchestration, threat intelligence',
    ogImage: '/og-soar.jpg'
  },
  '/services/ai-automation': {
    title: 'AI Automation Services - Intelligent Process Automation | PELQUANT',
    description: 'AI-powered automation solutions. Automate workflows, processes, and operations with intelligent systems.',
    keywords: 'AI automation, process automation, intelligent automation, workflow automation, RPA',
    ogImage: '/og-ai-automation.jpg'
  },
  '/services/secops': {
    title: 'SecOps Services - Security Operations & Management | PELQUANT',
    description: 'Security operations services. 24/7 monitoring, threat hunting, incident response, and security management.',
    keywords: 'SecOps, security operations, threat hunting, incident response, security management',
    ogImage: '/og-secops.jpg'
  },
  '/services/custom-software-development': {
    title: 'Custom Software Development - Enterprise Solutions | PELQUANT',
    description: 'Custom software development for enterprises. Scalable, secure, and high-performance applications tailored to your needs.',
    keywords: 'custom software development, enterprise software, bespoke software, software engineering',
    ogImage: '/og-custom-software.jpg'
  },
  '/services/web-mobile-development': {
    title: 'Web & Mobile Development - React, React Native, Flutter | PELQUANT',
    description: 'Modern web and mobile app development. React, React Native, Flutter, and progressive web apps.',
    keywords: 'web development, mobile app development, React development, React Native, Flutter, PWA',
    ogImage: '/og-web-mobile.jpg'
  },
  '/services/devops-cloud': {
    title: 'DevOps & Cloud Services - AWS, Azure, GCP | PELQUANT',
    description: 'DevOps and cloud infrastructure services. CI/CD, containerization, Kubernetes, AWS, Azure, GCP.',
    keywords: 'DevOps, cloud services, AWS, Azure, GCP, Kubernetes, CI/CD, infrastructure',
    ogImage: '/og-devops.jpg'
  },
  '/services/technical-seo': {
    title: 'Technical SEO Services - Core Web Vitals & Performance | PELQUANT',
    description: 'Technical SEO optimization. Core Web Vitals, site speed, crawlability, indexation, and technical audits.',
    keywords: 'technical SEO, Core Web Vitals, site speed optimization, SEO audit, crawlability',
    ogImage: '/og-technical-seo.jpg'
  },
  '/services/growth-seo': {
    title: 'Growth SEO Services - Organic Traffic & Rankings | PELQUANT',
    description: 'Growth-focused SEO strategies. Keyword research, content optimization, link building, and organic growth.',
    keywords: 'growth SEO, organic traffic, keyword research, content SEO, link building, SEO strategy',
    ogImage: '/og-growth-seo.jpg'
  },
  '/services/social-media-marketing': {
    title: 'Social Media Marketing - Strategy & Management | PELQUANT',
    description: 'Social media marketing services. Strategy, content creation, community management, and paid social campaigns.',
    keywords: 'social media marketing, social media strategy, content marketing, community management',
    ogImage: '/og-social-media.jpg'
  },
  '/services/paid-advertising': {
    title: 'Paid Advertising Services - Google Ads, Meta Ads | PELQUANT',
    description: 'Paid advertising management. Google Ads, Meta Ads, LinkedIn Ads, and multi-channel campaigns.',
    keywords: 'paid advertising, Google Ads, Meta Ads, PPC, paid search, paid social',
    ogImage: '/og-paid-ads.jpg'
  },
  '/services/performance-marketing': {
    title: 'Performance Marketing - ROI-Driven Campaigns | PELQUANT',
    description: 'Performance marketing services. Data-driven campaigns focused on conversions, ROI, and measurable results.',
    keywords: 'performance marketing, ROI marketing, conversion optimization, data-driven marketing',
    ogImage: '/og-performance-marketing.jpg'
  },
  '/solutions': {
    title: 'Industry Solutions - 12+ Verticals | PELQUANT',
    description: 'Industry-specific solutions for FinTech, HealthTech, eCommerce, SaaS, and 8+ more verticals.',
    keywords: 'industry solutions, vertical solutions, enterprise solutions, industry expertise',
    ogImage: '/og-solutions.jpg'
  },
  '/solutions/fintech': {
    title: 'FinTech Solutions - Banking & Financial Software | PELQUANT',
    description: 'FinTech software development. Payment systems, banking apps, trading platforms, and compliance solutions.',
    keywords: 'FinTech development, banking software, payment systems, financial technology, compliance',
    ogImage: '/og-fintech.jpg'
  },
  '/solutions/healthtech': {
    title: 'HealthTech Solutions - HIPAA-Compliant Healthcare Software | PELQUANT',
    description: 'HealthTech software development. HIPAA-compliant systems, telemedicine, EHR/EMR, and healthcare platforms.',
    keywords: 'HealthTech, healthcare software, HIPAA compliance, telemedicine, EHR, EMR',
    ogImage: '/og-healthtech.jpg'
  },
  '/solutions/ecommerce': {
    title: 'eCommerce Solutions - Online Store Development | PELQUANT',
    description: 'eCommerce platform development. Custom stores, marketplace solutions, and conversion optimization.',
    keywords: 'eCommerce development, online store, marketplace, Shopify, WooCommerce, custom eCommerce',
    ogImage: '/og-ecommerce.jpg'
  },
  '/solutions/logistics': {
    title: 'Logistics Solutions - Supply Chain & Fleet Management | PELQUANT',
    description: 'Logistics software development. Supply chain management, fleet tracking, warehouse management systems.',
    keywords: 'logistics software, supply chain management, fleet management, warehouse management, TMS',
    ogImage: '/og-logistics.jpg'
  },
  '/solutions/edtech': {
    title: 'EdTech Solutions - Learning Management Systems | PELQUANT',
    description: 'EdTech platform development. LMS, online courses, student management, and educational technology.',
    keywords: 'EdTech, learning management system, LMS, online education, educational technology',
    ogImage: '/og-edtech.jpg'
  },
  '/solutions/legaltech': {
    title: 'LegalTech Solutions - Legal Practice Management Software | PELQUANT',
    description: 'LegalTech software development. Case management, document automation, and legal practice solutions.',
    keywords: 'LegalTech, legal software, case management, document automation, legal practice management',
    ogImage: '/og-legaltech.jpg'
  },
  '/solutions/proptech': {
    title: 'PropTech Solutions - Real Estate Technology | PELQUANT',
    description: 'PropTech software development. Property management, real estate platforms, and smart building solutions.',
    keywords: 'PropTech, real estate software, property management, real estate technology',
    ogImage: '/og-proptech.jpg'
  },
  '/solutions/hrtech': {
    title: 'HRTech Solutions - Human Resources Management Systems | PELQUANT',
    description: 'HRTech software development. HRMS, recruitment platforms, payroll systems, and employee management.',
    keywords: 'HRTech, HRMS, recruitment software, payroll systems, employee management',
    ogImage: '/og-hrtech.jpg'
  },
  '/solutions/govtech': {
    title: 'GovTech Solutions - Government & Public Sector Technology | PELQUANT',
    description: 'GovTech software development. Citizen services, compliance systems, and government platforms.',
    keywords: 'GovTech, government software, public sector technology, citizen services',
    ogImage: '/og-govtech.jpg'
  },
  '/solutions/saas': {
    title: 'SaaS Development - Multi-Tenant Cloud Platforms | PELQUANT',
    description: 'SaaS platform development. Multi-tenant architecture, subscription management, and scalable cloud solutions.',
    keywords: 'SaaS development, multi-tenant, cloud platform, subscription software, SaaS architecture',
    ogImage: '/og-saas.jpg'
  },
  '/solutions/media': {
    title: 'Media & Entertainment Solutions - Streaming & Content Platforms | PELQUANT',
    description: 'Media technology development. Streaming platforms, content management, and entertainment solutions.',
    keywords: 'media technology, streaming platform, content management, entertainment software',
    ogImage: '/og-media.jpg'
  },
  '/solutions/manufacturing': {
    title: 'Manufacturing Solutions - Industry 4.0 & IoT | PELQUANT',
    description: 'Manufacturing software development. Industry 4.0, IoT integration, MES, and production management.',
    keywords: 'manufacturing software, Industry 4.0, IoT, MES, production management, smart manufacturing',
    ogImage: '/og-manufacturing.jpg'
  },
  '/contact': {
    title: 'Contact PELQUANT - Let\'s Build Something Real',
    description: 'Get in touch with PELQUANT. Start your project with our enterprise technology and growth marketing team.',
    keywords: 'contact, get in touch, project inquiry, consultation',
    ogImage: '/og-contact.jpg'
  }
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const seo = seoData[path] || seoData['/'];

    // Update title
    document.title = seo.title;

    // Update or create meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', seo.description);
    updateMeta('keywords', seo.keywords);

    // Open Graph tags
    updateMeta('og:title', seo.title, true);
    updateMeta('og:description', seo.description, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', `https://pelquant.com${path}`, true);
    updateMeta('og:image', `https://pelquant.com${seo.ogImage}`, true);
    updateMeta('og:site_name', 'PELQUANT', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seo.title);
    updateMeta('twitter:description', seo.description);
    updateMeta('twitter:image', `https://pelquant.com${seo.ogImage}`);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://pelquant.com${path}`);

    // Structured Data (JSON-LD)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PELQUANT",
      "url": "https://pelquant.com",
      "logo": "https://pelquant.com/logo.png",
      "description": "Enterprise AI & full-stack development company specializing in intelligent software, AI systems, and growth marketing.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/pelquant",
        "https://twitter.com/pelquant"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": "https://pelquant.com/contact"
      }
    };

    script.textContent = JSON.stringify(structuredData);
  }, [location]);

  return null;
}
