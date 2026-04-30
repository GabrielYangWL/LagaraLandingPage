export interface TestimonialQuote {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProblemItem {
  title: string;
  description: string;
  icon: string;
}

export interface OutcomeItem {
  label: string;
  description: string;
  icon: string;
}

export interface ProcessStepCopy {
  number: string;
  title: string;
  headline: string;
  description: string;
}

export interface DifferentiatorItemCopy {
  title: string;
  description: string;
  icon: string;
}

export interface SiteCopy {
  meta: { homeTitle: string; homeDescription: string };
  skipToContent: string;
  nav: {
    services: string;
    approach: string;
    whyUs: string;
    contact: string;
    bookConsultation: string;
    openNav: string;
    closeNav: string;
    langEn: string;
    langId: string;
  };
  footer: {
    tagline: string;
    linkedIn: string;
    copyright: string;
    footerNavLabel: string;
  };
  trustStrip: string[];
  hero: {
    eyebrow: string;
    h1: string;
    p1: string;
    p2: string;
    ctaContact: string;
    ctaServices: string;
  };
  testimonials: {
    hero: TestimonialQuote;
    problem: TestimonialQuote;
    services: TestimonialQuote;
    outcomes: TestimonialQuote;
    process: TestimonialQuote;
    differentiators: TestimonialQuote;
    contact: TestimonialQuote;
  };
  problem: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
  };
  problems: ProblemItem[];
  services: {
    eyebrow: string;
    heading: string;
    sub: string;
    body: string;
    viewAll: string;
    bookConversation: string;
    readMore: string;
    learnMore: string;
  };
  outcomes: {
    eyebrow: string;
    heading: string;
    sub: string;
    body: string;
  };
  outcomesList: OutcomeItem[];
  process: {
    eyebrow: string;
    heading: string;
    sub: string;
  };
  steps: ProcessStepCopy[];
  differentiators: {
    eyebrow: string;
    heading: string;
    sub: string;
    body: string;
  };
  differentiatorsList: DifferentiatorItemCopy[];
  contact: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
  };
  form: {
    ariaLabel: string;
    name: string;
    email: string;
    company: string;
    message: string;
    placeholders: { name: string; email: string; company: string; message: string };
    submit: string;
    sending: string;
    thankYou: string;
    thankYouSub: string;
    errorGeneric: string;
    errorSubmit: string;
  };
  servicePage: {
    breadcrumbHome: string;
    breadcrumbServices: string;
    howWeHelp: string;
    outcomesHeading: string;
    engagementHeading: string;
    clientExamplesHeading: string;
    clientExamplesIntro: string;
    indonesiaHeading: string;
    discussService: string;
    allServices: string;
  };
  servicesIndex: {
    metaTitle: string;
    metaDescription: string;
    skipToContent: string;
    breadcrumbHome: string;
    breadcrumbCurrent: string;
    heroTitle: string;
    heroSub: string;
    sectionEyebrow: string;
    sectionHeading: string;
    sectionSub: string;
    ctaBook: string;
  };
}
