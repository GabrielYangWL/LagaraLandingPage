import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceHighlight from "@/components/ui/ServiceHighlight";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { getHomeHighlightServices, services } from "@/data/services";
import { testimonialsBySection } from "@/data/testimonials";

export default function Services() {
  const highlights = getHomeHighlightServices();

  return (
    <section id="services" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="What we do"
            heading="Our services"
            subheading="From strategy and governance to change, rollout, and sustainment — we help enterprises close the gap between AI investment and daily adoption. Each service can stand alone, but most clients combine several as a coherent programme."
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-grey-text text-base leading-relaxed">
            Below are three entry points we see often: clarifying the adoption roadmap, building the human
            side of change, and making governance usable in day-to-day work. The full catalogue covers
            diagnostics, operating model design, pilot exit, enablement, alignment, and sustainment — so
            you can match the scope to your maturity and risk profile.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 80} direction="up">
              <ServiceHighlight service={service} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex justify-center bg-muted-blue hover:bg-teal text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
          >
            View all {services.length} services
          </Link>
          <Link
            href="/#contact"
            className="inline-flex justify-center border border-navy/15 text-navy hover:bg-off-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2"
          >
            Book a conversation
          </Link>
        </div>

        <FadeIn direction="up" delay={100} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-light" {...testimonialsBySection.services} />
        </FadeIn>
      </div>
    </section>
  );
}
