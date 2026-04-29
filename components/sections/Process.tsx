import SectionHeader from "@/components/ui/SectionHeader";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { steps } from "@/data/process";
import { testimonialsBySection } from "@/data/testimonials";

export default function Process() {
  return (
    <section id="approach" className="bg-off-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="How we work"
            heading="A structured path from assessment to embedded change"
            align="center"
            subheading="Our process is deliberately simple on the surface so it can flex inside complex enterprises. Assess and define prevent you from scaling the wrong thing; mobilise and embed ensure the organisation — not just the project team — carries the change forward."
          />
        </FadeIn>

        {/* Desktop: 4-col grid with connecting line */}
        <div className="mt-16 hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-6 left-0 right-0 h-px"
            style={{ background: "linear-gradient(to right, transparent 2%, #4A7CA5 5%, #4A7CA5 95%, transparent 98%)", opacity: 0.3 }}
            aria-hidden="true"
          />
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 120} direction="up">
                <ProcessStepCard {...step} isLast={i === steps.length - 1} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="mt-12 md:hidden flex flex-col gap-10 relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-6 top-10 bottom-10 w-px"
            style={{ background: "#4A7CA5", opacity: 0.2 }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100} direction="up">
              <ProcessStepCard {...step} isLast={i === steps.length - 1} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={200} className="mt-16 max-w-3xl mx-auto">
          <SectionTestimonial variant="on-light" {...testimonialsBySection.process} />
        </FadeIn>
      </div>
    </section>
  );
}
