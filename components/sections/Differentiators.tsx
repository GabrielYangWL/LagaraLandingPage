import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorItem from "@/components/ui/DifferentiatorItem";
import FadeIn from "@/components/ui/FadeIn";
import { differentiators } from "@/data/differentiators";

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="Why Lagara Partners"
            heading="What sets our approach apart"
            subheading="Most AI transformation stalls at the strategy level. We are built for the harder work that follows."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {differentiators.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} direction="up">
              <DifferentiatorItem {...item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
