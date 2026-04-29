import SectionHeader from "@/components/ui/SectionHeader";
import OutcomeItem from "@/components/ui/OutcomeItem";
import FadeIn from "@/components/ui/FadeIn";
import { outcomes } from "@/data/outcomes";

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

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {outcomes.map((outcome, i) => (
            <FadeIn key={outcome.label} delay={i * 75} direction="up">
              <OutcomeItem {...outcome} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
