import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="content-container section-padding">
        <FadeIn direction="up">
          <SectionHeader
            eyebrow="What we do"
            heading="Our services"
            subheading="Six interconnected disciplines that together address the full scope of enterprise AI adoption — from strategy through to embedded change."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 75} direction="up">
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
