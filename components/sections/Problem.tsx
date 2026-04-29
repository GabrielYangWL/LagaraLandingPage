import SectionHeader from "@/components/ui/SectionHeader";
import ProblemCard from "@/components/ui/ProblemCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { problems } from "@/data/problems";
import { testimonialsBySection } from "@/data/testimonials";

export default function Problem() {
  return (
    <section id="problem" className="bg-off-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="The challenge"
            heading="Why enterprise AI programmes struggle"
            align="center"
          />
        </FadeIn>
        <FadeIn direction="up" delay={100}>
          <p className="mt-4 max-w-2xl mx-auto text-center text-grey-text text-base leading-relaxed">
            Technology alone does not create change. Sustainable adoption requires role clarity,
            capability building, leadership sponsorship, governance, and workflow integration
            working in concert.
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-center text-grey-text text-base leading-relaxed">
            The organisations we work with rarely lack ambition or budget. They struggle with sequencing
            — what to prove first — and with ownership: who is accountable for adoption outcomes when
            delivery, risk, HR, and the business each see a different slice of the problem. Lagara helps
            you name those gaps early and build a programme that survives contact with real operations.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 100} direction="up">
              <ProblemCard {...problem} />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={200} className="mt-16 max-w-3xl mx-auto">
          <SectionTestimonial variant="on-light" {...testimonialsBySection.problem} />
        </FadeIn>
      </div>
    </section>
  );
}
