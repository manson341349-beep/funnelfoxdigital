"use client";
import React, { useState } from "react";
import { useGA } from "../../(client)/useGA";

export default function BlueprintPage(){
  const [status, setStatus] = useState<"idle"|"loading"|"success">("idle");
  const { track } = useGA();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLInputElement).value,
      goal: (form.elements.namedItem("goal") as HTMLTextAreaElement).value,
    };
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus("success");
    track("lead_submit", { method: "form" });
    form.reset();
  }

  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Get your free Growth Blueprint</h1>
      <p className="mt-4 text-neutral-600 max-w-2xl">
        Tell us about your business, and we'll send a prioritized plan and a 30-minute review call.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Website</label>
          <input name="website" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Industry</label>
          <input name="industry" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3"/>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">#1 growth goal in 90 days?</label>
          <textarea name="goal" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 min-h-[120px]"/>
        </div>
        <div className="md:col-span-2 flex gap-3">
          <button disabled={status==="loading"} className="btn-primary">
            {status==="loading" ? "Sending..." : "Get my plan"}
          </button>
          <a href="/pricing" className="btn btn-outline">See pricing</a>
        </div>
        {status==="success" && <p className="text-green-600 text-sm mt-2 md:col-span-2">Thanks! We'll send your blueprint soon.</p>}
      </form>
    </main>
  );
}