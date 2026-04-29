import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Why Us", href: "#differentiators" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "problem", "services", "outcomes", "approach", "differentiators", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <nav
        className="content-container flex items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
          className="text-white font-semibold text-lg tracking-tight focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
        >
          Lagara Partners
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                className={clsx(
                  "text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded px-1",
                  activeSection === id
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
            className="bg-muted-blue hover:bg-teal text-white px-5 py-2.5 rounded text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Book a consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 focus-visible:ring-2 focus-visible:ring-muted-blue rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden bg-navy/98 overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
            className="bg-muted-blue hover:bg-teal text-white px-5 py-3 rounded text-sm font-medium text-center transition-colors mt-2"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </header>
  );
}
