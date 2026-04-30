import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import LanguageToggle from "@/components/LanguageToggle";
import { useLocale } from "@/contexts/LocaleContext";

const routeLinks = [{ href: "/services", key: "services" as const }];
const hashLinks = [
  { href: "/#approach", key: "approach" as const },
  { href: "/#differentiators", key: "whyUs" as const },
  { href: "/#contact", key: "contact" as const },
];

export default function Navbar() {
  const router = useRouter();
  const { locale, setLocale, copy } = useLocale();
  const langToggle = (
    <LanguageToggle locale={locale} setLocale={setLocale} copy={copy} />
  );
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
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleHashLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("/#", "");
    if (router.pathname !== "/") {
      void router.push(href);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent",
      )}
    >
      <nav
        className="content-container flex items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-tight focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy rounded"
        >
          Lagara Partners
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {routeLinks.map((link) => {
            const onServicesHub =
              router.pathname === "/services" || router.pathname.startsWith("/services/");
            const onHomeServicesSection = router.pathname === "/" && activeSection === "services";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded px-1",
                  onServicesHub || onHomeServicesSection ? "text-white" : "text-white/70 hover:text-white",
                )}
              >
                {copy.nav[link.key]}
              </Link>
            );
          })}
          {hashLinks.map((link) => {
            const id = link.href.replace("/#", "");
            const label =
              link.key === "approach"
                ? copy.nav.approach
                : link.key === "whyUs"
                  ? copy.nav.whyUs
                  : copy.nav.contact;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashLinkClick(e, link.href)}
                className={clsx(
                  "text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded px-1",
                  router.pathname === "/" && activeSection === id
                    ? "text-white"
                    : "text-white/70 hover:text-white",
                )}
              >
                {label}
              </Link>
            );
          })}

          {langToggle}

          <Link
            href="/#contact"
            onClick={(e) => handleHashLinkClick(e, "/#contact")}
            className="bg-muted-blue hover:bg-teal text-white px-5 py-2.5 rounded text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            {copy.nav.bookConsultation}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          {langToggle}
          <button
            className="text-white p-2 focus-visible:ring-2 focus-visible:ring-muted-blue rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? copy.nav.closeNav : copy.nav.openNav}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          "md:hidden bg-navy/98 overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-[28rem] border-t border-white/10" : "max-h-0",
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {routeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
            >
              {copy.nav[link.key]}
            </Link>
          ))}
          {hashLinks.map((link) => {
            const label =
              link.key === "approach"
                ? copy.nav.approach
                : link.key === "whyUs"
                  ? copy.nav.whyUs
                  : copy.nav.contact;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleHashLinkClick(e, link.href);
                }}
                className="text-white/80 hover:text-white text-base font-medium py-1 transition-colors"
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={(e) => handleHashLinkClick(e, "/#contact")}
            className="bg-muted-blue hover:bg-teal text-white px-5 py-3 rounded text-sm font-medium text-center transition-colors mt-2"
          >
            {copy.nav.bookConsultation}
          </Link>
        </div>
      </div>
    </header>
  );
}
