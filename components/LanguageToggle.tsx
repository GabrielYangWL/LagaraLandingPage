import clsx from "clsx";
import type { Locale } from "@/data/service-types";
import type { SiteCopy } from "@/lib/i18n/types";

interface LanguageToggleProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: SiteCopy;
  className?: string;
}

export default function LanguageToggle({ locale, setLocale, copy, className }: LanguageToggleProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-md border border-white/25 p-0.5 gap-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={clsx(
          "px-2.5 py-1 text-xs font-semibold rounded transition-colors",
          locale === "en" ? "bg-white text-navy" : "text-white/70 hover:text-white",
        )}
      >
        {copy.nav.langEn}
      </button>
      <button
        type="button"
        onClick={() => setLocale("id")}
        className={clsx(
          "px-2.5 py-1 text-xs font-semibold rounded transition-colors",
          locale === "id" ? "bg-white text-navy" : "text-white/70 hover:text-white",
        )}
      >
        {copy.nav.langId}
      </button>
    </div>
  );
}
