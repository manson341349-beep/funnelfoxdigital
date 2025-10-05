/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useGA } from "../../(client)/useGA";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22,0.61,0.36,1] } },
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

export default function BlueprintPage(){
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { track } = useGA();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      website: (form.elements.namedItem("website") as HTMLInputElement).value.trim(),
      industry: (form.elements.namedItem("industry") as HTMLInputElement).value.trim(),
      goal: (form.elements.namedItem("goal") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      track("lead_submit", { method: "form" });
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.12),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              Free 30-min Growth Blueprint
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Get a prioritized plan to turn clicks into clients
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              Tell us about your business. We’ll send a practical 90-day plan and invite you to a 30-minute review call.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500">
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1">No spam</span>
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1">Cancel anytime</span>
              <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1">Response in 48h</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="container-max py-14 md:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form */}
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }}
            variants={stagger()} className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="relative rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="absolute -inset-0.5 rounded-3xl pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]" />
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4" aria-live="polite">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Website</label>
                  <input name="website" placeholder="https://…" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">Industry</label>
                  <input name="industry" className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">#1 growth goal in 90 days?</label>
                  <textarea name="goal" required className="mt-1 w-full rounded-xl border border-neutral-300 px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40" />
                </div>

                <div className="md:col-span-2 flex flex-wrap gap-3 items-center">
                  <button
                    disabled={status==="loading"}
                    className={`btn-primary inline-flex items-center gap-2 ${status==="loading" ? "opacity-80 cursor-not-allowed" : ""}`}
                  >
                    {status==="loading" ? (
                      <>
                        <span>Sending</span>
                        <span className="flex gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.2s]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce [animation-delay:-0.1s]" />
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" />
                        </span>
                      </>
                    ) : "Get my plan"}
                  </button>
                  <Link href="/pricing" className="btn-outline">See pricing</Link>
                  {status==="error" && (
                    <span className="text-sm text-rose-600">Something went wrong. Please try again.</span>
                  )}
                </div>

                <div className="md:col-span-2 mt-2 text-xs text-neutral-500">
                  By submitting, you agree to our <Link href="/privacy" className="underline hover:text-neutral-700">Privacy Policy</Link>. We’ll reply within 48 hours.
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Right: Value + Checklist */}
          <motion.aside
            initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }}
            variants={stagger()} className="lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-6 md:p-8">
              <h2 className="text-xl font-bold">What you’ll receive</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li>• Priority fixes for INP/LCP & conversion</li>
                <li>• Keyword & topic-cluster map</li>
                <li>• 90-day content & A/B plan</li>
                <li>• Tracking plan (GA4 events & funnels)</li>
              </ul>
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-neutral-200 bg-white p-3">
                  <div className="font-semibold">+15–40%</div>
                  <div className="text-neutral-500 mt-1">Form conversion uplift</div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-3">
                  <div className="font-semibold">Green</div>
                  <div className="text-neutral-500 mt-1">Core Web Vitals baseline</div>
                </div>
              </div>
              <div className="mt-6 text-xs text-neutral-500">
                Secure form • Spam-protected • Zero fluff
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            aria-modal="true" role="dialog"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="w-[90%] max-w-md rounded-2xl bg-white shadow-2xl p-8 text-center relative"
            >
              <h2 className="text-2xl font-bold text-[var(--brand)]">Thanks — you’re in!</h2>
              <p className="mt-3 text-neutral-600">
                We’ll email your Growth Blueprint and reach out within 48 hours to schedule a 30-minute review call.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Link href="/cases" className="btn-outline">See case studies</Link>
                <button onClick={()=>setStatus("idle")} className="btn-primary">Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}