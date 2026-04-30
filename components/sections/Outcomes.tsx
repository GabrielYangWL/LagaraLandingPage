import SectionHeader from "@/components/ui/SectionHeader";
import OutcomeItem from "@/components/ui/OutcomeItem";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";

export default function Outcomes() {
  const { copy } = useLocale();
  return (
    <section id="outcomes" className="bg-navy">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow={copy.outcomes.eyebrow}
            heading={copy.outcomes.heading}
            subheading={copy.outcomes.sub}
            light
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-white/55 text-base leading-relaxed">{copy.outcomes.body}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {copy.outcomesList.map((outcome, i) => (
            <FadeIn key={outcome.label} delay={i * 75} direction="up">
              <OutcomeItem {...outcome} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={150} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-dark" {...copy.testimonials.outcomes} />
        </FadeIn>
      </div>
    </section>
  );
}
