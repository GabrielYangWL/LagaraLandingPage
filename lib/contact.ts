import fs from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

export interface ContactSubmissionInput {
  name: string;
  email: string;
  company: string;
  message?: string;
}

export interface StoredContactSubmission extends ContactSubmissionInput {
  id: string;
  createdAt: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), "data", "contact-submissions.json");

const sanitize = (value: string) => value.replace(/\s+/g, " ").trim();

export function validateContactSubmission(
  payload: Partial<ContactSubmissionInput>,
): { isValid: boolean; errors: string[]; data?: ContactSubmissionInput } {
  const errors: string[] = [];

  const name = sanitize(payload.name ?? "");
  const email = sanitize(payload.email ?? "");
  const company = sanitize(payload.company ?? "");
  const message = (payload.message ?? "").trim();

  if (!name) {
    errors.push("Name is required.");
  }

  if (!email) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Email is invalid.");
  }

  if (!company) {
    errors.push("Company is required.");
  }

  if (message.length > 5000) {
    errors.push("Message must be under 5000 characters.");
  }

  if (errors.length) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    data: { name, email, company, message },
  };
}

async function ensureStorageFile() {
  await fs.mkdir(path.dirname(SUBMISSIONS_FILE), { recursive: true });

  try {
    await fs.access(SUBMISSIONS_FILE);
  } catch {
    await fs.writeFile(SUBMISSIONS_FILE, "[]", "utf-8");
  }
}

export async function storeContactSubmission(
  data: ContactSubmissionInput,
): Promise<StoredContactSubmission> {
  await ensureStorageFile();

  const submission: StoredContactSubmission = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existingData = await fs.readFile(SUBMISSIONS_FILE, "utf-8");
  const submissions = JSON.parse(existingData) as StoredContactSubmission[];
  submissions.push(submission);

  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  return submission;
}

export async function sendContactSubmissionEmail(submission: StoredContactSubmission) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = (process.env.SMTP_SECURE ?? "").toLowerCase() === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL ?? user;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    throw new Error(
      "Missing email configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.",
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: secure || port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject: `New Lagara contact form submission from ${submission.name}`,
    replyTo: submission.email,
    text: [
      "A new contact form submission was received:",
      "",
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Company: ${submission.company}`,
      `Message: ${submission.message || "(empty)"}`,
      `Submitted At: ${submission.createdAt}`,
      `Submission ID: ${submission.id}`,
    ].join("\n"),
  });
}
