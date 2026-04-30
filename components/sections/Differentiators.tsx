import SectionHeader from "@/components/ui/SectionHeader";
import DifferentiatorItem from "@/components/ui/DifferentiatorItem";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";

export default function Differentiators() {
  const { copy } = useLocale();
  return (
    <section id="differentiators" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow={copy.differentiators.eyebrow}
            heading={copy.differentiators.heading}
            subheading={copy.differentiators.sub}
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-grey-text text-base leading-relaxed">{copy.differentiators.body}</p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {copy.differentiatorsList.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} direction="up">
              <DifferentiatorItem {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={150} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-light" {...copy.testimonials.differentiators} />
        </FadeIn>
      </div>
    </section>
  );
}
