import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceHighlight from "@/components/ui/ServiceHighlight";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";
import { getHomeHighlightServices, getServices } from "@/data/services";

export default function Services() {
  const { locale, copy } = useLocale();
  const highlights = getHomeHighlightServices(locale);
  const serviceCount = getServices(locale).length;

  return (
    <section id="services" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow={copy.services.eyebrow}
            heading={copy.services.heading}
            subheading={copy.services.sub}
          />
        </FadeIn>
        <FadeIn direction="up" delay={80}>
          <p className="mt-5 max-w-3xl text-grey-text text-base leading-relaxed">{copy.services.body}</p>
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
            {copy.services.viewAll.replace("{count}", String(serviceCount))}
          </Link>
          <Link
            href="/#contact"
            className="inline-flex justify-center border border-navy/15 text-navy hover:bg-off-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2"
          >
            {copy.services.bookConversation}
          </Link>
        </div>

        <FadeIn direction="up" delay={100} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-light" {...copy.testimonials.services} />
        </FadeIn>
      </div>
    </section>
  );
}
