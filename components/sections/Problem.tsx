import SectionHeader from "@/components/ui/SectionHeader";
import ProblemCard from "@/components/ui/ProblemCard";
import FadeIn from "@/components/ui/FadeIn";
import { problems } from "@/data/problems";

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
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <FadeIn key={problem.title} delay={i * 100} direction="up">
              <ProblemCard {...problem} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
