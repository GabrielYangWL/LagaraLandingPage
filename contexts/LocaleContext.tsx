import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/data/service-types";
import siteEn from "@/lib/i18n/site-en";
import siteId from "@/lib/i18n/site-id";
import type { SiteCopy } from "@/lib/i18n/types";

const STORAGE_KEY = "lagara-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: SiteCopy;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "id" ? "id" : "en";
  } catch {
    return "en";
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Restore saved language after SSR (initial render is always English for hydration match).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time client read
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "id" ? "id" : "en";
  }, [locale]);

  const copy = useMemo(() => (locale === "id" ? siteId : siteEn), [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy,
    }),
    [locale, setLocale, copy],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
