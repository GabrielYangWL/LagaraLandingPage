import SectionHeader from "@/components/ui/SectionHeader";
import OutcomeItem from "@/components/ui/OutcomeItem";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { outcomes } from "@/data/outcomes";
import { testimonialsBySection } from "@/data/testimonials";

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-navy">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="What you gain"
            heading="What successful adoption looks like"
            subheading="Engagements are designed to deliver tangible change — not just a strategy document. These are the outcomes our clients build towards."
            light
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-white/55 text-base leading-relaxed">
            We measure success by whether adoption holds after the programme team steps back: usage
            patterns, quality of human oversight, and whether leaders can explain priorities without
            reverting to tool-centric jargon. The list below is what “good” looks like when the work is
            done seriously — not a guarantee of every engagement, but the north star we design toward.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {outcomes.map((outcome, i) => (
            <FadeIn key={outcome.label} delay={i * 75} direction="up">
              <OutcomeItem {...outcome} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={150} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-dark" {...testimonialsBySection.outcomes} />
        </FadeIn>
      </div>
    </section>
  );
}
