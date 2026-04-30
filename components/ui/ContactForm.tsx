import { useState } from "react";
import clsx from "clsx";
import { useLocale } from "@/contexts/LocaleContext";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const inputClass =
  "w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-muted-blue transition-colors text-sm focus-visible:ring-2 focus-visible:ring-muted-blue";

export default function ContactForm() {
  const { copy } = useLocale();
  const f = copy.form;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "fail");
      }

      setSubmitted(true);
    } catch {
      setError(f.errorSubmit);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/20 rounded-xl p-10 text-center">
        <p className="text-teal text-lg font-semibold mb-2">{f.thankYou}</p>
        <p className="text-white/60 text-sm">{f.thankYouSub}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={f.ariaLabel}
      className="space-y-5"
      noValidate
    >
      <div>
        <label htmlFor="name" className="text-white/70 text-sm font-medium mb-1.5 block">
          {f.name} <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          value={form.name}
          onChange={handleChange}
          placeholder={f.placeholders.name}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-white/70 text-sm font-medium mb-1.5 block">
          {f.email} <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          value={form.email}
          onChange={handleChange}
          placeholder={f.placeholders.email}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="company" className="text-white/70 text-sm font-medium mb-1.5 block">
          {f.company} <span aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          aria-required="true"
          value={form.company}
          onChange={handleChange}
          placeholder={f.placeholders.company}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-white/70 text-sm font-medium mb-1.5 block">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={f.placeholders.message}
          className={clsx(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-muted-blue hover:bg-teal text-white py-3.5 rounded-lg font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        {isSubmitting ? f.sending : f.submit}
      </button>
      {error && (
        <p role="alert" className="text-red-200 text-sm">
          {error}
        </p>
      )}
    </form>
  );
}
