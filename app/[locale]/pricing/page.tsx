/* app/[locale]/pricing/page.tsx */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "For new sites or simple revamps",
    monthly: 799,
    yearly: 799 * 10,
    features: [
      "Conversion-first 1–5 pages",
      "Core Web Vitals: Green baseline",
      "GA4 basic events + funnels",
      "Basic on-page SEO",
      "Launch checklist & handover",
    ],
    cta: "Start with Launch",
  },
  {
    id: "grow",
    name: "Grow",
    tagline: "For SMEs ready to scale",
    monthly: 1499,
    yearly: 1499 * 10,
    features: [
      "Up to 10–20 pages + blog",
      "CWV optimization (LCP/INP)",
      "Content hub & topic clusters",
      "Technical SEO + schema + sitemap",
      "A/B testing (1 exp / month)",
    ],
    cta: "Scale with Grow",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For content & lead machines",
    monthly: 2599,
    yearly: 2599 * 10,
    features: [
      "Custom components & design system",
      "Advanced analytics & event taxonomy",
      "SEO ops: content + internal linking",
      "Experiment program (2–3 / month)",
      "Quarterly strategy & roadmap",
    ],
    cta: "Dominate with Scale",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
};
const stagger = (delay = 0) => ({ animate: { transition: { staggerChildren: 0.08, delayChildren: delay } } });

export default function PricingPage() {
  const [yearly, setYearly] = React.useState(true);

  const fmtUSD = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

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
              Transparent Pricing
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Simple plans that grow with you
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              USD pricing. Pause or upgrade anytime. All plans ship with conversion-first design, Core Web Vitals, and clean analytics.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-2"
            >
              <button
                className={`px-3 py-1.5 rounded-xl text-sm font-medium ${
                  !yearly ? "bg-[var(--brand)] text-white" : "text-neutral-700"
                }`}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
              <button
                className={`px-3 py-1.5 rounded-xl text-sm font-medium ${
                  yearly ? "bg-[var(--brand)] text-white" : "text-neutral-700"
                }`}
                onClick={() => setYearly(true)}
              >
                Yearly <span className="ml-1 text-[11px] opacity-80">(2 months free)</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLANS */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((p) => {
            const price = yearly ? Math.round(p.yearly / 12) : p.monthly;
            return (
              <motion.div key={p.id} variants={fadeUp}>
                <div
                  className={`relative h-full rounded-3xl border p-6 md:p-8 bg-white shadow-sm ${
                    p.popular ? "border-[var(--brand)]/50 ring-1 ring-[var(--brand)]/20" : "border-neutral-200"
                  }`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[var(--brand)] px-2.5 py-1 text-xs font-semibold text-white shadow">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <div className="text-xs text-neutral-500">{p.tagline}</div>
                  </div>

                  <div className="mt-5 flex items-end gap-1">
                    <div className="text-4xl font-extrabold tracking-tight">{fmtUSD(price)}</div>
                    <div className="text-sm text-neutral-500 mb-1">/mo</div>
                  </div>
                  {yearly && (
                    <div className="text-xs text-emerald-600 mt-1">Billed yearly ({fmtUSD(p.yearly)})</div>
                  )}

                  <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--brand)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href="/blueprint" className={`btn w-full ${p.popular ? "btn-primary" : "btn-outline"}`}>
                      {p.cta}
                    </Link>
                  </div>

                  <div className="mt-4 text-[11px] text-neutral-500">
                    No long-term lock-in. 14-day satisfaction guarantee.
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="container-max py-14 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={stagger()}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">
              What’s included
            </motion.h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-neutral-500">
                    <th className="py-3 pr-4">Capability</th>
                    <th className="py-3 px-4">Launch</th>
                    <th className="py-3 px-4">Grow</th>
                    <th className="py-3 px-4">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {[
                    ["Pages/components", "1–5 pages", "10–20 pages", "Custom DS + components"],
                    ["Core Web Vitals (LCP/INP)", "Baseline green", "Green + audits", "Green + ongoing tuning"],
                    ["Analytics & Events", "GA4 basic", "GA4 funnels + events", "Advanced taxonomy + dashboards"],
                    ["SEO", "On-page basics", "Tech SEO + schema", "Hub strategy + internal linking"],
                    ["Experiments", "-", "1 / month", "2–3 / month"],
                    ["Content Ops", "-", "Editorial calendar", "Content hub + velocity"],
                    ["Support", "Email", "Priority", "Priority + Quarterly roadmap"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="py-3 pr-4 font-medium">{row[0]}</td>
                      <td className="py-3 px-4">{row[1]}</td>
                      <td className="py-3 px-4">{row[2]}</td>
                      <td className="py-3 px-4">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-xs text-neutral-500">DS = Design System</div>
          </motion.div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="container-max py-14 md:py-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={stagger()}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">
            FAQ
          </motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-700">
            <motion.div variants={fadeUp}>
              <div className="font-semibold">Can I start small and upgrade later?</div>
              <p className="mt-2 text-neutral-600">
                Yes — most clients start with Launch or Grow and upgrade as results compound.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="font-semibold">Do you work internationally?</div>
              <p className="mt-2 text-neutral-600">
                Yes. Pricing is in USD and we work across MY/SEA/US/UK time zones.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="font-semibold">What’s the typical timeline?</div>
              <p className="mt-2 text-neutral-600">
                Launch: 2–4 weeks, Grow: 4–8 weeks, Scale: scope-dependent.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="font-semibold">Is there a contract?</div>
              <p className="mt-2 text-neutral-600">
                No long-term lock-in. You can pause or switch plans with a notice.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-10 rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-bold">Not sure which plan fits?</h3>
                <p className="mt-2 text-neutral-300">
                  Get a free Growth Blueprint — we’ll map a 90-day plan and recommend the right tier.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link href="/blueprint" className="btn bg-white text-neutral-900 hover:bg-neutral-100">
                    Get my blueprint
                  </Link>
                  <Link href="/contact" className="btn border border-white/20 hover:bg-white/10">
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}