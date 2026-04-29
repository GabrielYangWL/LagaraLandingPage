import clsx from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={clsx(align === "center" && "text-center")}>
      {eyebrow && (
        <p className="text-muted-blue text-sm font-medium uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={clsx(
            "text-lg mt-4 leading-relaxed",
            light ? "text-white/60" : "text-grey-text",
            align === "center" && "mx-auto",
            "max-w-2xl"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
