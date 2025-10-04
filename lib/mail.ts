import nodemailer from "nodemailer";

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export function getTransport() {
  const host = requireEnv("SMTP_HOST");
  const port = Number(requireEnv("SMTP_PORT")); // 465
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 => SSL, 587 => STARTTLS (secure:false)
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false // 与测试脚本保持一致
    }
  });
}

export async function sendMail({
  subject,
  html,
  to
}: { subject: string; html: string; to?: string }) {
  const transporter = getTransport();
  const from = requireEnv("SMTP_USER");
  const rcpt = to ?? requireEnv("LEAD_TO_EMAIL");
  return transporter.sendMail({ from, to: rcpt, subject, html });
}