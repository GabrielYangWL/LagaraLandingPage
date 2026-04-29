import { useScrollReveal } from "@/hooks/useScrollReveal";
import clsx from "clsx";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const { ref, isVisible } = useScrollReveal();

  const directionClass = {
    up: "translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  }[direction];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={clsx(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionClass}`,
        className
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
