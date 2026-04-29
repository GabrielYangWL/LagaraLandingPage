import type { ProcessStep } from "@/data/process";

interface ProcessStepCardProps extends ProcessStep {
  isLast?: boolean;
}

export default function ProcessStepCard({
  number,
  title,
  headline,
  description,
}: ProcessStepCardProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="w-12 h-12 rounded-full border-2 border-muted-blue flex items-center justify-center text-muted-blue font-bold text-sm bg-off-white relative z-10 shrink-0">
        {number}
      </div>
      <p className="text-muted-blue text-xs font-medium uppercase tracking-widest mt-4 mb-1">
        {title}
      </p>
      <h3 className="text-navy font-semibold text-base mb-2">{headline}</h3>
      <p className="text-grey-text text-sm leading-relaxed">{description}</p>
    </div>
  );
}
