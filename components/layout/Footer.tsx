import Link from "next/link";
import { Mail } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerHrefKeys = [
  { href: "/services", navKey: "services" as const },
  { href: "/#approach", navKey: "approach" as const },
  { href: "/#differentiators", navKey: "whyUs" as const },
  { href: "/#contact", navKey: "contact" as const },
];

export default function Footer() {
  const { copy } = useLocale();
  return (
    <footer className="bg-charcoal">
      <div className="content-container px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: wordmark + descriptor + contact */}
          <div>
            <p className="text-white font-semibold text-lg tracking-tight">Lagara Partners</p>
            <p className="text-grey-text text-sm mt-1">{copy.footer.tagline}</p>
            <a
              href="mailto:hello@lagarapartners.com"
              className="text-muted-blue hover:text-teal text-sm mt-4 inline-flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded"
            >
              <Mail className="w-4 h-4" />
              hello@lagarapartners.com
            </a>
            <div className="mt-4">
              <a
                href="#"
                aria-label={`Lagara Partners ${copy.footer.linkedIn}`}
                className="text-white/50 hover:text-muted-blue transition-colors inline-flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-muted-blue rounded"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="text-white/40 text-xs">{copy.footer.linkedIn}</span>
              </a>
            </div>
          </div>

          {/* Right: nav links */}
          <nav aria-label={copy.footer.footerNavLabel}>
            <ul className="flex flex-col gap-3">
              {footerHrefKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded px-1"
                  >
                    {copy.nav[link.navKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-white/30 text-xs gap-2">
          <span>{copy.footer.copyright}</span>
          <span>{copy.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
