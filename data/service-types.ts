export interface Service {
  slug: string;
  title: string;
  description: string;
  detail: string;
  bullets: string[];
  outcomes: string[];
  engagementSnapshot: string;
  clientExamples: string[];
  indonesiaExample: {
    label: string;
    description: string;
  };
}

export type Locale = "en" | "id";
