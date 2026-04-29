export interface Service {
  title: string;
  description: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    title: "AI Adoption Strategy",
    description:
      "Define where AI creates business value, which teams and workflows to prioritise, and how adoption will be measured and governed.",
    bullets: [
      "Use case prioritisation and sequencing",
      "Adoption KPIs and success metrics",
      "Stakeholder and readiness mapping",
    ],
  },
  {
    title: "Change Management",
    description:
      "Structure the human side of AI adoption — engaging leaders, equipping managers, and shifting behaviours at team level.",
    bullets: [
      "Sponsor alignment and leadership mobilisation",
      "Change impact and resistance analysis",
      "Manager enablement and team engagement",
    ],
  },
  {
    title: "Rollout Planning and Execution",
    description:
      "Translate AI strategy into a structured, sequenced rollout plan with clear milestones, owners, and escalation paths.",
    bullets: [
      "Phased deployment planning",
      "Cross-functional coordination",
      "Progress tracking and course correction",
    ],
  },
  {
    title: "Governance and Responsible Use",
    description:
      "Design and embed governance frameworks that are practical, proportionate, and understood by the people who need to use them.",
    bullets: [
      "Responsible use policy design",
      "Workflow-level governance integration",
      "Risk boundary definition and escalation design",
    ],
  },
  {
    title: "Enablement and Training",
    description:
      "Build capability at every level — from executive orientation to hands-on training for the teams deploying and using AI tools.",
    bullets: [
      "Role-based learning pathways",
      "Practical, workflow-contextualised training",
      "Capability assessment and tracking",
    ],
  },
  {
    title: "Stakeholder Alignment",
    description:
      "Align leaders, functional heads, and operational teams around a common understanding of AI priorities, expectations, and progress.",
    bullets: [
      "Executive workshops and briefings",
      "Cross-functional governance forums",
      "Communication planning and messaging architecture",
    ],
  },
];
