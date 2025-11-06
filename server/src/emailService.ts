/**
 * server/src/emailService.ts
 *
 * Adapted behavior (flow and responsibilities) from:
 *   https://github.com/orkinosai-org/event-registration-form/blob/main/email_service.py
 *
 * Responsibilities:
 * - generateVerificationCode()
 * - sendVerificationEmail(recipientEmail, verificationCode, name, eventName)
 *
 * Notes:
 * - Uses nodemailer and environment variables for SMTP credentials.
 * - This is a small, test-friendly implementation suitable for the prototype.
 */

import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM = "no-reply@example.com",
} = process.env;

export function generateVerificationCode(length = 6): string {
  const digits = "0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += digits[Math.floor(Math.random() * digits.length)];
  }
  return code;
}

export async function sendVerificationEmail(opts: {
  recipientEmail: string;
  verificationCode: string;
  name?: string;
  eventName?: string;
}): Promise<boolean> {
  const { recipientEmail, verificationCode, name = "", eventName = "" } = opts;

  // If SMTP credentials are not configured, fail fast so callers can show a message.
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    // In production, log this to monitoring. For prototype, return false.
    console.warn("SMTP is not configured. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const subject = `${eventName ? eventName + " - " : ""}Email verification code`;
  const text = `Hello ${name || ""},\n\nYour verification code is: ${verificationCode}\n\nIf you didn't request this, ignore this message.\n\nThanks.\n`;

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: recipientEmail,
      subject,
      text,
      html: `<p>Hello ${name || ""},</p>\n             <p>Your verification code is: <strong>${verificationCode}</strong></p>\n             <p>If you didn't request this, ignore this message.</p>`,
    });
    return true;
  } catch (err) {
    console.error("Failed to send email:", err);
    return false;
  }
}