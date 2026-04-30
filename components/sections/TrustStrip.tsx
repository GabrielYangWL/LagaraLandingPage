import { CheckCircle } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function TrustStrip() {
  const { copy } = useLocale();
  return (
    <div className="mt-16 pt-10 border-t border-white/10">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
        {copy.trustStrip.map((item) => (
          <div
            key={item}
            className="sm:px-10 first:pl-0 last:pr-0 flex items-center gap-3"
          >
            <CheckCircle className="text-teal w-5 h-5 shrink-0" />
            <span className="text-white/80 text-sm font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
