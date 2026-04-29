import { Mail } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import FadeIn from "@/components/ui/FadeIn";

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
      </div>
    </section>
  );
}
