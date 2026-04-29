import { Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import SectionTestimonial from "@/components/ui/SectionTestimonial";
import { testimonialsBySection } from "@/data/testimonials";

export default function CTASection() {
  return (
    <section id="contact" className="bg-navy">
      <div className="content-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + copy + email */}
          <FadeIn direction="up">
            <div>
              <SectionHeader
                eyebrow="Start the conversation"
                heading="Make AI adoption work in the real organisation"
                light
              />
              <p className="text-white/60 text-base mt-6 leading-relaxed max-w-md">
                If your organisation has made the investment in AI but adoption has not followed,
                we would like to understand your situation. Let us know what you are working
                through and we will respond promptly.
              </p>
              <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-md">
                Useful context in your first message: sector and geography, where you are on the journey
                (pilot, scale, or reset), and whether the pain is mostly technology, people, or governance.
                We work across regions and can discuss Indonesia and ASEAN operating realities where
                relevant.
              </p>
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
          <SectionTestimonial variant="on-dark" {...testimonialsBySection.contact} />
        </FadeIn>
      </div>
    </section>
  );
}
