"use client";
import React, { useState } from "react";
import { useGA } from "../../(client)/useGA";

export default function ContactPage(){
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const { track } = useGA();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus("success");
    track("contact_submit", { method: "form" });
    form.reset();
  }

  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Contact us</h1>
      <p className="mt-4 text-neutral-600">Tell us about your project. We usually reply within one business day.</p>
      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input name="company" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 min-h-[120px]"/>
        </div>
        <button disabled={status==="loading"} className="btn-primary">
          {status==="loading" ? "Sending..." : "Send message"}
        </button>
        {status==="success" && <p className="text-green-600 text-sm mt-2">Thanks! We'll reply soon.</p>}
      </form>
    </main>
  );
}