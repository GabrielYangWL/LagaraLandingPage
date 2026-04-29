export type TestimonialSectionId =
  | "hero"
  | "problem"
  | "services"
  | "outcomes"
  | "process"
  | "differentiators"
  | "contact";

export interface SectionTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonialsBySection: Record<TestimonialSectionId, SectionTestimonial> = {
  hero: {
    quote:
      "The board wanted AI everywhere in twelve months. Lagara helped us sequence what actually had to happen first — sponsors, data, and manager habits — so we did not burn credibility in month three.",
    author: "Elena Marchetti",
    role: "Chief Transformation Officer",
    company: "Northbridge Financial Group (fictional)",
  },
  problem: {
    quote:
      "We had three competing pilots and no one could explain who owned adoption outcomes. The diagnostic made the politics discussable and gave us a single story for the exec team.",
    author: "James Okonkwo",
    role: "VP Operations",
    company: "Crescent Industries (fictional)",
  },
  services: {
    quote:
      "We picked up the phone because the website described exactly the gap we had — strategy decks in the drawer, usage flat in the business. The engagement model matched how we actually work.",
    author: "Priya Natarajan",
    role: "Head of Digital Workplace",
    company: "Vantage Logistics (fictional)",
  },
  outcomes: {
    quote:
      "Six months in, usage is not a vanity metric anymore. We review adoption and risk in the same forum as financial performance — that shift was worth the programme on its own.",
    author: "Marcus Lindström",
    role: "COO",
    company: "Baltic Retail Holdings (fictional)",
  },
  process: {
    quote:
      "Assess–define–mobilise–embed sounded generic until we saw how they used it to force trade-offs. We stopped pretending every function could be first in line.",
    author: "Sofia Alves",
    role: "Programme Director, AI Office",
    company: "Lusitania Energy (fictional)",
  },
  differentiators: {
    quote:
      "Other firms left us a hundred recommendations. Lagara stayed until managers had something they could run in Monday’s team meeting — that is the difference.",
    author: "Daniel Reeves",
    role: "HR Director, Group Capability",
    company: "Meridian Health Systems (fictional)",
  },
  contact: {
    quote:
      "We were not sure we were ready for an outside partner. The first call was substantive — they had read our sector and asked better questions than our last two RFPs.",
    author: "Amélie Fontaine",
    role: "General Counsel",
    company: "Alpine Re Insurance (fictional)",
  },
};
