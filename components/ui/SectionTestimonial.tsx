import clsx from "clsx";

interface SectionTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  variant: "on-dark" | "on-light";
  className?: string;
}

export default function SectionTestimonial({
  quote,
  author,
  role,
  company,
  variant,
  className,
}: SectionTestimonialProps) {
  return (
    <figure
      className={clsx(
        "rounded-xl border p-6 md:p-8",
        variant === "on-dark" && "border-white/15 bg-white/[0.06]",
        variant === "on-light" && "border-slate-200/80 bg-off-white",
        className,
      )}
    >
      <blockquote
        className={clsx(
          "text-base leading-relaxed",
          variant === "on-dark" && "text-white/85",
          variant === "on-light" && "text-navy",
        )}
      >
        <span className="text-muted-blue font-serif text-3xl leading-none mr-1" aria-hidden="true">
          “
        </span>
        <span>{quote}</span>
        <span className="text-muted-blue font-serif text-3xl leading-none ml-0.5" aria-hidden="true">
          ”
        </span>
      </blockquote>
      <figcaption
        className={clsx(
          "mt-5 text-sm",
          variant === "on-dark" && "text-white/55",
          variant === "on-light" && "text-grey-text",
        )}
      >
        <span className="font-semibold text-inherit">{author}</span>
        <span className="text-inherit"> — {role}, {company}</span>
      </figcaption>
    </figure>
  );
}
