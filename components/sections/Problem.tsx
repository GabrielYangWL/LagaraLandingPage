import SectionHeader from "@/components/ui/SectionHeader";
import ProblemCard from "@/components/ui/ProblemCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";

export default function Problem() {
  const { copy } = useLocale();
  return (
    <section id="problem" className="bg-off-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow={copy.problem.eyebrow}
            heading={copy.problem.heading}
            align="center"
          />
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <p className="mt-4 max-w-2xl mx-auto text-center text-grey-text text-base leading-relaxed">
            {copy.problem.p1}
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-grey-text text-base leading-relaxed">
            {copy.problem.p2}
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 100} direction="up">
              <ProblemCard {...problem} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={200} className="mt-16 max-w-3xl mx-auto">
          <SectionTestimonial variant="on-light" {...copy.testimonials.problem} />
        </FadeIn>
      </div>
    </section>
  );
}
