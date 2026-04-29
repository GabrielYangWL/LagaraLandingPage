import {
  Map,
  TrendingUp,
  Users,
  ShieldCheck,
  GraduationCap,
  Rocket,
} from "lucide-react";
import type { Outcome } from "@/data/outcomes";

const iconMap: Record<string, React.ElementType> = {
  Map,
  TrendingUp,
  Users,
  ShieldCheck,
  GraduationCap,
  Rocket,
};

export default function OutcomeItem({ label, description, icon }: Outcome) {
  const Icon = iconMap[icon] ?? TrendingUp;

  return (
    <div className="bg-navy p-8">
      <Icon className="text-teal w-6 h-6 mb-4" />
      <p className="text-muted-blue font-semibold text-base">{label}</p>
      <p className="text-white/60 text-sm mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
