import { Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { useLocale } from "@/contexts/LocaleContext";

export default function CTASection() {
  const { copy } = useLocale();
  return (
    <section id="contact" className="bg-navy">
      <div className="content-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + copy + email */}
          <FadeIn direction="up">
            <div>
              <SectionHeader
                eyebrow={copy.contact.eyebrow}
                heading={copy.contact.heading}
                light
              />
              <p className="text-white/60 text-base mt-6 leading-relaxed max-w-md">{copy.contact.p1}</p>
              <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-md">{copy.contact.p2}</p>
              <a
                href="mailto:hello@lagarapartners.com"
                className="text-muted-blue hover:text-teal mt-8 inline-flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                hello@lagarapartners.com
              </a>
            </div>
          </FadeIn>

          {/* Right: contact form */}
          <FadeIn direction="up" delay={150}>
            <ContactForm />
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={200} className="mt-16 max-w-3xl">
          <SectionTestimonial variant="on-dark" {...copy.testimonials.contact} />
        </FadeIn>
      </div>
    </section>
  );
}
