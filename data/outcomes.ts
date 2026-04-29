export interface Outcome {
  label: string;
  description: string;
  icon: string;
}

export const outcomes: Outcome[] = [
  {
    label: "A clear adoption roadmap",
    description:
      "A prioritised, sequenced plan that connects AI investment to business objectives and team readiness.",
    icon: "Map",
  },
  {
    label: "Higher, sustained usage",
    description:
      "Consistent AI tool adoption across target teams — not a spike at launch followed by drop-off.",
    icon: "TrendingUp",
  },
  {
    label: "Leaders who can sponsor AI change",
    description:
      "Executives and managers equipped to drive adoption within their functions, not just endorse it from a distance.",
    icon: "Users",
  },
  {
    label: "Governance that people actually follow",
    description:
      "Practical frameworks embedded in workflows, so responsible use is the path of least resistance.",
    icon: "ShieldCheck",
  },
  {
    label: "Capability built at scale",
    description:
      "A workforce that understands how to apply AI in their roles — and a learning model that sustains this over time.",
    icon: "GraduationCap",
  },
  {
    label: "Confidence to scale beyond pilots",
    description:
      "The operating model, governance, and change infrastructure to move from proof of concept to enterprise-wide rollout.",
    icon: "Rocket",
  },
];
