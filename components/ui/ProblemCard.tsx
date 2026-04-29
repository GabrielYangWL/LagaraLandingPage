import { BarChart2, Users, GitBranch, Shield } from "lucide-react";
import type { Problem } from "@/data/problems";

const iconMap: Record<string, React.ElementType> = {
  BarChart2,
  Users,
  GitBranch,
  Shield,
};

export default function ProblemCard({ title, description, icon }: Problem) {
  const Icon = iconMap[icon] ?? Shield;

  return (
    <div className="bg-white rounded-xl p-7 border border-slate-100 shadow-sm hover:border-muted-blue hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <Icon className="text-teal w-8 h-8 mb-5 shrink-0" />
      <h3 className="text-navy font-semibold text-base mb-2">{title}</h3>
      <p className="text-grey-text text-sm leading-relaxed">{description}</p>
    </div>
  );
}
