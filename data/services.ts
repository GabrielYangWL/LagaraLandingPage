import type { Locale, Service } from "./service-types";
import { servicesEn, homeHighlightedSlugs, getHomeHighlightServicesEn } from "./services-en";
import { servicesId, getHomeHighlightServicesId } from "./services-id";

export type { Locale, Service } from "./service-types";
export { homeHighlightedSlugs };

export function getServices(locale: Locale): Service[] {
  return locale === "id" ? servicesId : servicesEn;
}

export function getServiceBySlug(slug: string, locale: Locale = "en"): Service | undefined {
  return getServices(locale).find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesEn.map((s) => s.slug);
}

export function getHomeHighlightServices(locale: Locale = "en"): Service[] {
  return locale === "id" ? getHomeHighlightServicesId() : getHomeHighlightServicesEn();
}
