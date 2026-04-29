export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export const problems: Problem[] = [
  {
    title: "Strong tools, weak adoption",
    description:
      "Licences are purchased and capabilities deployed, but usage remains low and uneven across the organisation. Technology is available; behaviour change has not followed.",
    icon: "BarChart2",
  },
  {
    title: "Leadership enthusiasm, unclear operating model",
    description:
      "Senior buy-in exists, but role clarity, decision rights, and accountability for AI outcomes are absent. Ambition outpaces structure.",
    icon: "Users",
  },
  {
    title: "Pilots with no path to scaled rollout",
    description:
      "Proof of concept succeeds in isolation but stalls when translated to the wider enterprise. The gap between prototype and programme remains unresolved.",
    icon: "GitBranch",
  },
  {
    title: "Governance exists on paper, not in practice",
    description:
      "Policies are drafted but not embedded in workflows, leaving teams uncertain about appropriate use, risk boundaries, and escalation paths.",
    icon: "Shield",
  },
];
