import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  const data = await req.json();
  const { name = "", email = "", website = "", industry = "", goal = "" } = data || {};
  
  console.log("LEAD_FORM_SUBMIT", data);
  
  const html = `<h2>New Lead (Blueprint)</h2>
<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Website:</b> ${website}</p>
<p><b>Industry:</b> ${industry}</p>
<p><b>Goal:</b> ${goal}</p>`;
  
  await sendMail({
    subject: `Blueprint lead from ${name}`,
    html
  });
  return NextResponse.json({ ok: true });
}