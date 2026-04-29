import type { NextApiRequest, NextApiResponse } from "next";
import {
  sendContactSubmissionEmail,
  storeContactSubmission,
  validateContactSubmission,
} from "../../lib/contact";

type ContactApiResponse =
  | { ok: true; id: string }
  | { ok: false; error: string; details?: string[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponse>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const validation = validateContactSubmission(req.body ?? {});

  if (!validation.isValid || !validation.data) {
    return res.status(400).json({
      ok: false,
      error: "Validation failed.",
      details: validation.errors,
    });
  }

  try {
    const submission = await storeContactSubmission(validation.data);
    await sendContactSubmissionEmail(submission);

    return res.status(200).json({ ok: true, id: submission.id });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return res.status(500).json({
      ok: false,
      error: "Failed to process submission.",
    });
  }
}
