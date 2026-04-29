export interface Service {
  slug: string;
  title: string;
  description: string;
  /** Longer context for the service detail page */
  detail: string;
  bullets: string[];
  /** What clients move toward when this work lands well */
  outcomes: string[];
  /** How we typically show up (scope, cadence, tone) */
  engagementSnapshot: string;
  /** Illustrative engagements — not specific client claims */
  clientExamples: string[];
  /** Illustrative scenario for Indonesian / ASEAN operating context */
  indonesiaExample: {
    label: string;
    description: string;
  };
}

/** Shown on the homepage; full catalogue lives on /services */
export const homeHighlightedSlugs: string[] = [
  "ai-adoption-strategy",
  "change-management",
  "governance-and-responsible-use",
];

export const services: Service[] = [
  {
    slug: "ai-adoption-strategy",
    title: "AI Adoption Strategy",
    description:
      "Define where AI creates business value, which teams and workflows to prioritise, and how adoption will be measured and governed.",
    detail:
      "Strategy here means connective tissue — not a slide deck that sits apart from operations. We help you decide which use cases deserve investment now, which depend on foundations you have not yet built, and how to sequence work so adoption compounds instead of fragmenting across silos. The output is a roadmap executives can defend and teams can execute against.",
    bullets: [
      "Use case prioritisation and sequencing",
      "Adoption KPIs and success metrics",
      "Stakeholder and readiness mapping",
    ],
    outcomes: [
      "A prioritised adoption roadmap tied to business outcomes",
      "Clear definitions of success beyond launch or licence counts",
      "Shared language across IT, business, and people leaders on what “adopted” means",
    ],
    engagementSnapshot:
      "Usually a focused diagnostic and design sprint with senior stakeholders, followed by a concrete roadmap and governance hooks — sized to your organisation, not a generic framework dump.",
    clientExamples: [
      "For a global bank: sequence wholesale credit, legal review, and branch operations use cases so data residency and model risk gates align with rollout waves.",
      "For a healthcare system: tie ambulatory vs. inpatient AI experiments to clinical governance maturity and union consultation timelines.",
      "For a manufacturer: prioritise predictive maintenance and quality assistants only after MES data lineage and shop-floor Wi-Fi constraints are honest inputs to the plan.",
    ],
    indonesiaExample: {
      label: "Jakarta-listed diversified conglomerate (holding + SBUs)",
      description:
        "Several divisions want gen-AI copilots at once — property, retail, and infrastructure — but shared services, data residency, and board reporting are centralised. We help the holding company define a single adoption narrative, sequence SBUs by readiness and regulatory exposure, and set KPIs that work in Bahasa and English leadership forums so subsidiaries do not compete for the same scarce data-engineering capacity.",
    },
  },
  {
    slug: "change-management",
    title: "Change Management",
    description:
      "Structure the human side of AI adoption — engaging leaders, equipping managers, and shifting behaviours at team level.",
    detail:
      "AI change fails when it is treated as a communications exercise or a training rollout. We design the sponsorship chain, manager enablement, and team-level rituals that make new ways of working stick. Resistance is expected; we surface it early and build responses into the plan rather than reacting after usage has already collapsed.",
    bullets: [
      "Sponsor alignment and leadership mobilisation",
      "Change impact and resistance analysis",
      "Manager enablement and team engagement",
    ],
    outcomes: [
      "Leaders who know how to sponsor AI adoption in their functions",
      "Managers equipped to coach teams through real workflow change",
      "Higher sustained usage because behaviour change is designed in, not hoped for",
    ],
    engagementSnapshot:
      "Often paired with rollout or governance work: we embed change leads, run targeted enablement, and tune interventions as adoption data comes back.",
    clientExamples: [
      "Run a manager playbook for “AI + performance conversations” so team leads know how to set expectations without over-promising automation.",
      "Map resistance by function — e.g. legal fearing hallucinated citations vs. sales fearing slower workflows — and tailor interventions.",
      "Co-design team rituals (huddles, QA checklists) so responsible use is socialised peer-to-peer, not only top-down.",
    ],
    indonesiaExample: {
      label: "Consumer goods manufacturer with plants in Java and Sumatra",
      description:
        "New SOP assistants are introduced at head office, but plant supervisors default to WhatsApp and paper checklists. We align plant managers and union stewards on what changes in daily briefings, build short Bahasa-first micro-learning for line leads, and tie adoption metrics to safety and quality outcomes so the change is framed as job protection and consistency — not surveillance.",
    },
  },
  {
    slug: "rollout-planning-and-execution",
    title: "Rollout Planning and Execution",
    description:
      "Translate AI strategy into a structured, sequenced rollout plan with clear milestones, owners, and escalation paths.",
    detail:
      "Rollout is where ambition meets capacity constraints. We build phased plans that respect dependencies — data, access, risk, training — and assign clear ownership so work does not stall in handoffs. Progress is tracked against adoption and risk indicators, not only project milestones, so you can correct course before the programme loses credibility.",
    bullets: [
      "Phased deployment planning",
      "Cross-functional coordination",
      "Progress tracking and course correction",
    ],
    outcomes: [
      "A sequenced rollout with explicit owners and decision points",
      "Fewer surprises at scale-up because dependencies were named upfront",
      "Executive visibility into adoption health, not just green project status",
    ],
    engagementSnapshot:
      "We typically operate as a thin execution layer alongside your PMO or transformation office — enough rigour to keep momentum, light enough not to duplicate existing structures.",
    clientExamples: [
      "Wave plan for 40-country copilot rollout with explicit “green country” criteria (IdP, logging, helpdesk).",
      "Integration between IT change calendar and HR business-partner checkpoints so training is not an afterthought.",
      "Weekly adoption war-room with product, risk, and internal comms using a shared dashboard.",
    ],
    indonesiaExample: {
      label: "National retail bank rolling an internal copilot to branches",
      description:
        "Pilot succeeded in Jakarta HQ, but branch bandwidth, device policies, and escalation to OJK-aligned risk teams were unclear. We design waves by region (Greater Jakarta, then Java non-metro, then outer islands), align with existing ITIL release windows, and set helpdesk scripts in Indonesian for common failure modes — so scale does not outrun support or audit expectations.",
    },
  },
  {
    slug: "governance-and-responsible-use",
    title: "Governance and Responsible Use",
    description:
      "Design and embed governance frameworks that are practical, proportionate, and understood by the people who need to use them.",
    detail:
      "Governance only works when it is easier to follow than to ignore. We translate policy intent into workflow-level guidance: what is in bounds, what needs review, and how to escalate when uncertainty hits. Proportionate means different rules for different risk contexts — not one undifferentiated rulebook that teams work around.",
    bullets: [
      "Responsible use policy design",
      "Workflow-level governance integration",
      "Risk boundary definition and escalation design",
    ],
    outcomes: [
      "Policies and guardrails people actually reference in daily work",
      "Clear escalation paths that reduce “shadow” AI use",
      "Audit-ready traceability without paralysing innovation",
    ],
    engagementSnapshot:
      "Engagements often combine legal, risk, IT, and business stakeholders in working sessions so governance is co-owned, not dropped on one function.",
    clientExamples: [
      "Tiered model: low-risk drafting assist vs. high-risk decisions requiring human sign-off and logging.",
      "Partner with legal to turn “no training on client data” into concrete tool configurations and DLP rules.",
      "Incident playbooks when a model outputs protected data — who gets paged, what gets preserved.",
    ],
    indonesiaExample: {
      label: "OJK-supervised fintech with Bahasa and English customer traffic",
      description:
        "Marketing wants fast gen-AI for campaigns; compliance needs traceability and PII handling aligned with local expectations. We co-create a short responsible-use guide in Indonesian for front-line staff, map which prompts require legal pre-check, and define retention and escalation aligned with your risk appetite — so teams stop using personal ChatGPT accounts for regulated work.",
    },
  },
  {
    slug: "enablement-and-training",
    title: "Enablement and Training",
    description:
      "Build capability at every level — from executive orientation to hands-on training for the teams deploying and using AI tools.",
    detail:
      "Capability building must match how adults learn in busy roles: short, contextual, and tied to real workflows. We design pathways by role — executive, manager, practitioner — and align content to the tools and use cases you are actually rolling out, so training does not feel abstract or disconnected from the job.",
    bullets: [
      "Role-based learning pathways",
      "Practical, workflow-contextualised training",
      "Capability assessment and tracking",
    ],
    outcomes: [
      "A workforce that knows how to apply AI in-role, not just what buttons to press",
      "Learning assets that stay current as tools and policies evolve",
      "Metrics that show skill growth alongside usage",
    ],
    engagementSnapshot:
      "We can build curricula, train-the-trainer models, or run targeted waves — always anchored to your adoption roadmap and governance boundaries.",
    clientExamples: [
      "“First week with copilot” job aids tied to real tickets in ITSM, CRM, or contract review.",
      "Executive 90-minute session on what to sponsor vs. what to delegate technically.",
      "Capability rubric by role with refresh cadence when models or policies change.",
    ],
    indonesiaExample: {
      label: "Telco with contact centres in Surabaya and Makassar",
      description:
        "Agents need consistent prompts and escalation when the model suggests wrong promos or policy answers. We build bilingual quick-reference cards, scenario drills for supervisors, and a peer-coach model so quality assurance and enablement are not only centralised in Jakarta — reducing accent and dialect misunderstandings in customer interactions while keeping governance visible.",
    },
  },
  {
    slug: "stakeholder-alignment",
    title: "Stakeholder Alignment",
    description:
      "Align leaders, functional heads, and operational teams around a common understanding of AI priorities, expectations, and progress.",
    detail:
      "Misalignment is expensive: duplicate pilots, conflicting messages, and fatigue. We run structured alignment moments — briefings, workshops, forums — so priorities, trade-offs, and timelines are explicit. The goal is a shared narrative that holds when the programme hits friction, not agreement that evaporates after the workshop.",
    bullets: [
      "Executive workshops and briefings",
      "Cross-functional governance forums",
      "Communication planning and messaging architecture",
    ],
    outcomes: [
      "Fewer competing narratives across functions",
      "Faster decisions because trade-offs were surfaced early",
      "Teams that understand why their workflow is in scope — or not — and when",
    ],
    engagementSnapshot:
      "Often front-loaded at programme kickoff and repeated at major phase gates so alignment survives leadership churn and shifting priorities.",
    clientExamples: [
      "Single-page “north star” signed by CIO, CHRO, and business president with explicit non-goals.",
      "Quarterly forum where product, risk, and unions / works councils hear the same adoption metrics.",
      "Narrative for investors or regulators that matches internal programme reality.",
    ],
    indonesiaExample: {
      label: "Palm oil and consumer brands holding company",
      description:
        "Plantation digitisation, consumer marketing, and ESG reporting each push different AI agendas. We facilitate a leadership offsite that sequences shared data foundations, aligns on what “responsible AI” means for smallholder-facing communications, and assigns one executive sponsor narrative for the board — reducing duplicate vendor proofs and conflicting messages to regional governments and NGOs.",
    },
  },
  {
    slug: "adoption-readiness-and-diagnostics",
    title: "Adoption Readiness & Diagnostics",
    description:
      "Establish an honest baseline before you commit to a programme — stakeholders, workflows, use cases, risks, and the barriers that typically stall adoption in enterprises like yours.",
    detail:
      "Many programmes start with optimism and underinvest in baseline reality. We map where adoption is likely to break — data quality, skill gaps, political blockers, competing initiatives — and quantify readiness so your plan is credible to sponsors and funders. The point is not a long report; it is a prioritised set of barriers with implications for sequencing and investment.",
    bullets: [
      "Readiness and barrier assessment across functions",
      "Use case and workflow heat-mapping",
      "Risk and constraint surfacing for programme design",
    ],
    outcomes: [
      "A evidence-based view of where adoption will be hard — before you scale spend",
      "Use cases ordered by value and feasibility, not hype",
      "Explicit links between technical prerequisites and adoption risk",
    ],
    engagementSnapshot:
      "Typically a 3–6 week diagnostic depending on enterprise size, with interviews, document review, and structured workshops — output is a concise readiness pack and recommended programme shape.",
    clientExamples: [
      "Heat map of 30 proposed use cases vs. data maturity and change saturation.",
      "Interview synthesis showing where middle management quietly blocks tool mandates.",
      "Benchmark adoption prerequisites against peers in your sector (anonymised).",
    ],
    indonesiaExample: {
      label: "E-commerce logistics / 3PL spanning Java and outer islands",
      description:
        "Leadership wants route optimisation and warehouse assistants, but master data is fragmented between franchise partners and legacy TMS. We run a diagnostic that names integration and literacy gaps by hub, prioritises one corridor for end-to-end proof, and flags where Bahasa documentation quality will limit model usefulness — so the business case reflects ground truth, not HQ optimism.",
    },
  },
  {
    slug: "ai-programme-and-operating-model",
    title: "AI Programme & Operating Model Design",
    description:
      "Turn executive enthusiasm into clear structure: who decides, who owns outcomes, how progress is measured, and how AI work fits alongside existing operating rhythms.",
    detail:
      "Enthusiasm without structure becomes a pile of pilots. We design the programme office or network model, decision rights, and cadence that fit your culture — light in some organisations, more formal in regulated environments. Success metrics connect usage, value, and risk so the operating model reinforces the behaviours you want.",
    bullets: [
      "Role clarity, decision rights, and accountability design",
      "Adoption programme structure aligned to enterprise politics and pace",
      "Success metrics that reflect sustained usage, not launch activity",
    ],
    outcomes: [
      "Named owners for adoption outcomes, not just technology delivery",
      "Meeting rhythms and forums that sustain focus after launch",
      "A programme design sponsors can explain in one clear story",
    ],
    engagementSnapshot:
      "We co-design with HR, IT, risk, and business leads so the model is lived-in, not imposed — usually iterative over several working sessions.",
    clientExamples: [
      "RACI for model updates, prompt libraries, and exception handling.",
      "Fusion team model vs. central AI CoE — trade-offs made explicit.",
      "Budget mechanism for retraining and vendor churn so the programme does not starve after year one.",
    ],
    indonesiaExample: {
      label: "State-owned enterprise digital transformation unit",
      description:
        "Multiple ministries and internal directorates influence prioritisation; procurement cycles are long. We help define a lightweight programme board with clear decision rights, align AI initiatives to existing transformation OKRs, and set reporting that works for both technical and political stakeholders — so initiatives do not stall waiting for unanimous consensus.",
    },
  },
  {
    slug: "pilot-exit-and-scale-readiness",
    title: "Pilot Exit & Scale Readiness",
    description:
      "Close the gap between a successful proof of concept and a credible path to enterprise rollout — sequencing, dependencies, and the change infrastructure needed to go wide.",
    detail:
      "Pilots succeed in friendly corners; scale exposes data, support, and behaviour gaps. We define explicit exit criteria for pilots, what must be true before the next wave, and how support and governance scale with user growth. The aim is to avoid the common trap: a celebrated POC followed by a stalled enterprise mandate.",
    bullets: [
      "Pilot review and scale criteria definition",
      "Sequenced rollout design with realistic dependencies",
      "Readiness gates before expanding audience or use cases",
    ],
    outcomes: [
      "A documented path from pilot to wave-based rollout",
      "Readiness checks that prevent premature scale",
      "Confidence from sponsors that the next tranche is fundable and defensible",
    ],
    engagementSnapshot:
      "Often triggered at pilot mid-point or end — intensive working sessions with delivery, risk, and business owners to lock scale criteria and sequencing.",
    clientExamples: [
      "Checklist: SSO, logging, DLP, helpdesk tier-1 scripts, manager training completion rates.",
      "Kill / pivot criteria if adoption or error rates breach thresholds.",
      "Financial model for scale including inference cost and support FTE.",
    ],
    indonesiaExample: {
      label: "Indonesian marketplace / tech company post-pilot",
      description:
        "A gen-AI assistant for merchants worked in Jakarta beta; support load and Bahasa informal-language edge cases spiked when the pilot widened. We define scale gates on latency, human handoff rates, and content safety, sequence expansion by merchant tier and region, and align product marketing with realistic capability claims — protecting trust with sellers and consumers.",
    },
  },
  {
    slug: "embedded-adoption-and-sustainment",
    title: "Embedded Adoption & Sustainment",
    description:
      "Integrate adoption into how the organisation actually runs — manager habits, operational forums, and learning loops so usage does not collapse when the programme team steps back.",
    detail:
      "Programme teams eventually step down; operating norms must carry adoption forward. We embed expectations into performance conversations, operational reviews, and learning cycles so AI use is reinforced by managers and peers, not only by central communications. Sustainment is designed as a handover, not an afterthought.",
    bullets: [
      "Embedding adoption into operational cadences and reviews",
      "Manager accountability and team-level reinforcement",
      "Sustainment planning beyond the initial deployment wave",
    ],
    outcomes: [
      "Adoption metrics that stay healthy after central programme resources taper",
      "Managers who treat AI capability as part of how the team runs",
      "Clear ownership for refresh, policy updates, and tooling changes",
    ],
    engagementSnapshot:
      "Best started before the final rollout wave — we build the handover plan and pilot it with a subset of functions before full transition.",
    clientExamples: [
      "Embed AI usage review into monthly ops reviews alongside safety and quality.",
      "Rotate “AI champion” role in each department with time allocation recognised by HR.",
      "Sunset central PMO with documented owners for prompts, models, and policy updates.",
    ],
    indonesiaExample: {
      label: "Energy / resources firm with remote sites and JV partners",
      description:
        "Field engineers adopted assistants during the deployment wave, but usage drops when central coaches leave. We embed short AI segments into existing safety and production meetings, align contractor onboarding to the same guardrails as employees, and assign regional sustainment leads in Balikpapan and site clusters — so adoption survives rotation and joint-venture governance complexity.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getHomeHighlightServices(): Service[] {
  return homeHighlightedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => s !== undefined);
}
