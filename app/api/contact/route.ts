import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name = "", email = "", phone = "", company = "", message = "" } = data || {};

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Message:</b><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    `;

    // 使用硬编码配置确保功能正常
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'hello@funnelfoxdigital.com',
        pass: 'Qf$#G5jd&3!&vsq'
      }
    });

    await transporter.sendMail({
      from: 'hello@funnelfoxdigital.com',
      to: 'hello@funnelfoxdigital.com',
      subject: `Contact: ${name || "New"}`,
      html
    });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Contact form SMTP error:", e.message);
    return NextResponse.json({ ok: false, error: "smtp_failed" }, { status: 500 });
  }
}