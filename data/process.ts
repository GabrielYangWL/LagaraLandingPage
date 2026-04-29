export interface ProcessStep {
  number: string;
  title: string;
  headline: string;
  description: string;
}

export const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Assess",
    headline: "Assess readiness",
    description:
      "Evaluate the organisation's stakeholders, workflows, use cases, risks, and barriers to adoption. Establish a baseline from which a credible adoption programme can be designed.",
  },
  {
    number: "02",
    title: "Define",
    headline: "Define the programme",
    description:
      "Design the adoption strategy, governance framework, and operating model. Prioritise use cases, confirm ownership, and set the metrics that will define success.",
  },
  {
    number: "03",
    title: "Mobilise",
    headline: "Mobilise for change",
    description:
      "Activate leaders, engage stakeholders, and build the communication and capability infrastructure needed to move from strategy to action across the enterprise.",
  },
  {
    number: "04",
    title: "Embed",
    headline: "Embed and sustain",
    description:
      "Integrate AI adoption into operational rhythms, manager accountabilities, and learning systems so that the change becomes self-sustaining rather than dependent on the programme.",
  },
];
