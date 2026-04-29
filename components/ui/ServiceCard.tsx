import Link from "next/link";
import type { Service } from "@/data/services";

export default function ServiceCard({ slug, title, description, bullets }: Service) {
  return (
    <Link
      href={`/services/${slug}`}
      className="bg-off-white rounded-xl p-7 border border-slate-100 group hover:bg-navy hover:border-navy transition-all duration-300 cursor-pointer flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-blue focus-visible:ring-offset-2"
    >
      <div className="border-t-2 border-muted-blue mb-6 w-10" />
      <h3 className="text-navy group-hover:text-white font-semibold text-lg mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-grey-text group-hover:text-white/70 text-sm mb-5 transition-colors leading-relaxed">
        {description}
      </p>
      <ul className="mt-auto space-y-1.5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="text-grey-text group-hover:text-white/60 text-sm transition-colors flex items-start gap-2"
          >
            <span className="text-teal mt-0.5 shrink-0">·</span>
            {bullet}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm font-medium text-muted-blue group-hover:text-teal transition-colors">
        Learn more →
      </p>
    </Link>
  );
}
