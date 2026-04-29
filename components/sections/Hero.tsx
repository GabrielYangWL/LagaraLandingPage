import TrustStrip from "./TrustStrip";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const handleCTAClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="bg-navy min-h-screen flex items-center pt-20">
      <div className="content-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <FadeIn direction="up" delay={0}>
              <p className="text-muted-blue text-sm font-medium uppercase tracking-widest mb-5">
                Enterprise AI Adoption
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={100}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn enterprise AI ambition into daily adoption
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={200}>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                Lagara Partners helps organisations close the gap between AI investment and AI adoption. We combine strategy, change management, and execution capability to make AI work in the real enterprise — not just in the proof of concept.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleCTAClick("#contact"); }}
                  className="bg-muted-blue hover:bg-teal text-white px-7 py-3.5 rounded font-semibold transition-colors text-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  Book a conversation
                </a>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); handleCTAClick("#services"); }}
                  className="border border-white/30 text-white hover:border-muted-blue hover:text-white px-7 py-3.5 rounded font-semibold transition-colors text-center focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  See our services
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: abstract SVG diagram */}
          <FadeIn direction="left" delay={200} className="hidden lg:flex justify-center items-center">
            <svg
              viewBox="0 0 480 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-lg opacity-80"
              aria-hidden="true"
            >
              {/* Connecting lines */}
              <path d="M80 240 L180 180 L280 200 L360 120 L440 80" stroke="#4A7CA5" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>
              <path d="M80 240 L180 180" stroke="#3D8B8B" strokeWidth="2" opacity="0.7"/>
              <path d="M180 180 L280 200" stroke="#3D8B8B" strokeWidth="2" opacity="0.7"/>
              <path d="M280 200 L360 120" stroke="#4A7CA5" strokeWidth="1.5" opacity="0.5"/>
              <path d="M360 120 L440 80" stroke="#4A7CA5" strokeWidth="1.5" opacity="0.5"/>

              {/* Secondary connection paths */}
              <path d="M80 240 Q130 170 180 180" stroke="#4A7CA5" strokeWidth="0.8" opacity="0.2"/>
              <path d="M180 180 Q230 190 280 200" stroke="#4A7CA5" strokeWidth="0.8" opacity="0.2"/>

              {/* Dormant nodes */}
              <circle cx="360" cy="120" r="16" stroke="#4A7CA5" strokeWidth="1.5" fill="#0F1E2E" opacity="0.7"/>
              <circle cx="440" cy="80" r="16" stroke="#4A7CA5" strokeWidth="1.5" fill="#0F1E2E" opacity="0.7"/>

              {/* Active nodes */}
              <circle cx="80" cy="240" r="20" fill="#3D8B8B" opacity="0.9"/>
              <circle cx="80" cy="240" r="28" stroke="#3D8B8B" strokeWidth="1" fill="none" opacity="0.3"/>

              <circle cx="180" cy="180" r="20" fill="#3D8B8B" opacity="0.9"/>
              <circle cx="180" cy="180" r="28" stroke="#3D8B8B" strokeWidth="1" fill="none" opacity="0.3"/>

              <circle cx="280" cy="200" r="18" fill="#4A7CA5" opacity="0.85"/>
              <circle cx="280" cy="200" r="26" stroke="#4A7CA5" strokeWidth="1" fill="none" opacity="0.3"/>

              {/* Node labels */}
              <text x="80" y="244" textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">01</text>
              <text x="180" y="184" textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">02</text>
              <text x="280" y="204" textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">03</text>
              <text x="360" y="124" textAnchor="middle" fill="#4A7CA5" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">04</text>
              <text x="440" y="84" textAnchor="middle" fill="#4A7CA5" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">05</text>

              {/* Step labels below */}
              <text x="80" y="272" textAnchor="middle" fill="#6B7280" fontSize="8" fontFamily="Inter, sans-serif">Assess</text>
              <text x="180" y="212" textAnchor="middle" fill="#6B7280" fontSize="8" fontFamily="Inter, sans-serif">Define</text>
              <text x="280" y="232" textAnchor="middle" fill="#6B7280" fontSize="8" fontFamily="Inter, sans-serif">Mobilise</text>
              <text x="360" y="148" textAnchor="middle" fill="#4A7CA5" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.6">Embed</text>
              <text x="440" y="108" textAnchor="middle" fill="#4A7CA5" fontSize="8" fontFamily="Inter, sans-serif" opacity="0.6">Scale</text>

              {/* Direction arrow */}
              <path d="M380 60 L420 50 L415 58 M420 50 L412 55" stroke="#4A7CA5" strokeWidth="1.2" opacity="0.4"/>
            </svg>
          </FadeIn>
        </div>

        <TrustStrip />
      </div>
    </section>
  );
}
