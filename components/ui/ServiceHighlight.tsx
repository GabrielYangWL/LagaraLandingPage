import Link from "next/link";
import type { Service } from "@/data/service-types";
import { useLocale } from "@/contexts/LocaleContext";

interface ServiceHighlightProps {
  service: Pick<Service, "slug" | "title" | "description">;
}

export default function ServiceHighlight({ service }: ServiceHighlightProps) {
  const { copy } = useLocale();
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-off-white rounded-xl p-7 border border-slate-100 hover:border-navy hover:bg-navy transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2 h-full"
    >
      <div className="border-t-2 border-muted-blue mb-5 w-10 group-hover:border-teal transition-colors" />
      <h3 className="text-navy group-hover:text-white font-semibold text-lg mb-2 transition-colors">
        {service.title}
      </h3>
      <p className="text-grey-text group-hover:text-white/70 text-sm leading-relaxed line-clamp-3 transition-colors">
        {service.description}
      </p>
      <p className="mt-4 text-sm font-medium text-muted-blue group-hover:text-teal transition-colors">
        {copy.services.readMore}
      </p>
    </Link>
  );
}
