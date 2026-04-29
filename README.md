# LagaraLandingPage

## Contact form backend

The contact form now sends submissions to `POST /api/contact`.

On each submit, the backend:
- validates the input;
- stores the submission in `data/contact-submissions.json`;
- sends an email containing the submitted data.

## Email setup (simple)

You only need to do this once on your machine.

### 1) Create a Gmail App Password

Use this if you want to send through a Gmail account.

1. Log into the Gmail account you want to send from.
2. Turn on 2-Step Verification in Google Account security settings.
3. Go to **Google Account -> Security -> App passwords**.
4. Create a new app password (choose any name like `Lagara Contact Form`).
5. Copy the 16-character password Google gives you.

This app password is your `SMTP_PASS` (not your normal Gmail password).

### 2) Create `.env.local` in the project root

Create a file named `.env.local` (same level as `package.json`) and paste this:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-16-char-google-app-password
CONTACT_FROM_EMAIL=your-gmail-address@gmail.com
CONTACT_TO_EMAIL=where-you-want-to-receive-notifications@example.com
```

### 3) Restart the app

After creating or changing `.env.local`, restart the dev server:

```bash
npm run dev
```

## Important safety notes

- `.env.local` is local-only and should not be committed.
- Never share real `SMTP_PASS` values in chat, commits, or screenshots.
- If a password is accidentally shared, rotate/revoke it immediately in Google.