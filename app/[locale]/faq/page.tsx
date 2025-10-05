/* app/[locale]/faq/page.tsx */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";



const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
};
const stagger = (delay = 0) => ({
  animate: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

const faqs = [
  {
    q: "How long does a project take?",
    a: "Landing pages typically take 1–2 weeks, SME websites 3–6 weeks, and full builds with content & SEO 6–10 weeks. Timelines depend on scope, feedback speed, and content readiness.",
  },
  {
    q: "What’s your pricing structure?",
    a: "We offer three growth tiers — Launch ($799), Grow ($1,499), and Scale ($2,599). Custom enterprise scopes are also available upon request.",
  },
  {
    q: "Do you offer ongoing maintenance or care plans?",
    a: "Yes. Our Care Plans include performance monitoring, backups, security patches, uptime tracking, and content publishing support. Plans start at $99/month.",
  },
  {
    q: "What results can I expect from SEO?",
    a: "Organic traffic improvements usually start showing within 60–90 days. Rankings stabilize between 3–6 months, depending on domain age, competition, and content velocity.",
  },
  {
    q: "Do you provide copywriting or just design?",
    a: "We handle both. Every site we build includes conversion-optimized copy that aligns with your brand tone and SEO strategy.",
  },
  {
    q: "How do payments work?",
    a: "We require a 50% deposit to start, 30% upon first draft approval, and 20% on final delivery. Payments can be made via credit card, Wise, or bank transfer (MY/US).",
  },
  {
    q: "Do you work with WordPress or custom code?",
    a: "Both. We build high-performance WordPress sites for scalability, and custom Next.js projects for advanced UX, integrations, and SEO edge cases.",
  },
  {
    q: "Can you guarantee rankings or leads?",
    a: "No ethical agency can guarantee #1 rankings — but we do guarantee measurable technical improvements, improved conversions, and transparent analytics reports.",
  },
  {
    q: "How do we get started?",
    a: "Book a free 30-minute Growth Blueprint. We'll audit your site, outline quick wins, and map a 90-day action plan before any commitment.",
  },
];

export default function FaqPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={stagger()}>
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]"
            >
              FAQ
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Common questions, answered clearly.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              Everything you need to know about our process, pricing, SEO results, and what working with us looks like.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ GRID */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid md:grid-cols-2 gap-6"
        >
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-neutral-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              <h3 className="text-base font-semibold text-neutral-900">{f.q}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="container-max py-14 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Didn’t find your answer?
            </h2>
            <p className="mt-3 text-neutral-300 max-w-xl mx-auto">
              Drop us a message — we’ll respond within 24 hours. You can also grab a free Growth Blueprint if you’re planning a redesign or SEO push.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contact" className="btn bg-white text-neutral-900 hover:bg-neutral-100">
                Contact us
              </Link>
              <Link href="/blueprint" className="btn border border-white/20 hover:bg-white/10">
                Get a free plan
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}