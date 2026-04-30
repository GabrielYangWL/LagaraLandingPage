import SectionHeader from "@/components/ui/SectionHeader";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";

export default function Process() {
  const { copy } = useLocale();
  return (
    <section id="approach" className="bg-off-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow={copy.process.eyebrow}
            heading={copy.process.heading}
            align="center"
            subheading={copy.process.sub}
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
            {copy.steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 120} direction="up">
                <ProcessStepCard {...step} isLast={i === copy.steps.length - 1} />
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
          {copy.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100} direction="up">
              <ProcessStepCard {...step} isLast={i === copy.steps.length - 1} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={200} className="mt-16 max-w-3xl mx-auto">
          <SectionTestimonial variant="on-light" {...copy.testimonials.process} />
        </FadeIn>
      </div>
    </section>
  );
}
