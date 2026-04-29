import { Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Why Us", href: "#differentiators" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal">
      <div className="content-container px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left: wordmark + descriptor + contact */}
          <div>
            <p className="text-white font-semibold text-lg tracking-tight">Lagara Partners</p>
            <p className="text-grey-text text-sm mt-1">Enterprise AI Adoption and Change Management</p>
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
                aria-label="Lagara Partners on LinkedIn"
                className="text-white/50 hover:text-muted-blue transition-colors inline-flex items-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-muted-blue rounded"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="text-white/40 text-xs">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    className="text-white/60 hover:text-white text-sm transition-colors focus-visible:ring-2 focus-visible:ring-muted-blue rounded px-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-white/30 text-xs gap-2">
          <span>© 2025 Lagara Partners. All rights reserved.</span>
          <span>Enterprise AI Adoption and Change Management</span>
        </div>
      </div>
    </footer>
  );
}
