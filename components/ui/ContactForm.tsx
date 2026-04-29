import { useState } from "react";
import clsx from "clsx";

interface FormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

const inputClass =
  "w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-muted-blue transition-colors text-sm focus-visible:ring-2 focus-visible:ring-muted-blue";

const labelClass = "text-white/70 text-sm font-medium mb-1.5 block";

export default function ContactForm() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error ? submitError.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/20 rounded-xl p-10 text-center">
        <p className="text-teal text-lg font-semibold mb-2">Thank you for getting in touch.</p>
        <p className="text-white/60 text-sm">We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact Lagara Partners"
      className="space-y-5"
      noValidate
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Work email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-required="true"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company <span aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          aria-required="true"
          value={form.company}
          onChange={handleChange}
          placeholder="Organisation name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your AI adoption challenge"
          className={clsx(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-muted-blue hover:bg-teal text-white py-3.5 rounded-lg font-semibold text-sm transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {error && (
        <p role="alert" className="text-red-200 text-sm">
          {error}
        </p>
      )}
    </form>
  );
}
