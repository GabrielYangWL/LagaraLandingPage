import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorItem from "@/components/ui/DifferentiatorItem";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { differentiators } from "@/data/differentiators";
import { testimonialsBySection } from "@/data/testimonials";

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="Why Lagara Partners"
            heading="What sets our approach apart"
            subheading="Most AI transformation stalls at the strategy level. We are built for the harder work that follows — the trade-offs, the stakeholder fatigue, and the grind of making new habits normal in large, regulated, or politically complex environments."
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-grey-text text-base leading-relaxed">
            That shows up in how we scope engagements: fewer generic frameworks, more time with the
            people who must live with the outcome. It also means we are comfortable overlapping with
            your existing advisors — we would rather integrate than invent a parallel programme with a
            different vocabulary.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {differentiators.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} direction="up">
              <DifferentiatorItem {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={150} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-light" {...testimonialsBySection.differentiators} />
        </FadeIn>
      </div>
    </section>
  );
}
