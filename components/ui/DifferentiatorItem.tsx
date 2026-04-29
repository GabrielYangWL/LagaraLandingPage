import { Target, Building2, Link2, Award } from "lucide-react";
import type { Differentiator } from "@/data/differentiators";

const iconMap: Record<string, React.ElementType> = {
  Target,
  Building2,
  Link2,
  Award,
};

export default function DifferentiatorItem({ title, description, icon }: Differentiator) {
  const Icon = iconMap[icon] ?? Target;

  return (
    <div className="flex flex-col gap-4">
      <div className="w-10 h-10 bg-muted-blue/10 rounded-lg flex items-center justify-center text-muted-blue shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div className="border-l-2 border-teal pl-5">
        <h3 className="text-navy font-semibold text-lg mb-2">{title}</h3>
        <p className="text-grey-text text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
