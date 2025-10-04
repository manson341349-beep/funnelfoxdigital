"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    k: "Discovery",
    d: "Audit analytics, competitors, tech, and messaging. Define goals, constraints and KPIs.",
    bullets: ["GA4 & Search Console review", "CWV & crawl audit", "Audience & intent mapping", "Project scope & timeline"]
  },
  {
    k: "Design",
    d: "Architecture, copy, and UI components. We prioritize clarity and conversions.",
    bullets: ["IA & wireframes", "Messaging & offer framing", "Design system & tokens", "Accessibility baseline (AA)"]
  },
  {
    k: "Launch",
    d: "Ship with performance, tracking and QA. Hand over docs and train your team.",
    bullets: ["INP/LCP performance pass", "Events & funnel tracking", "Schema / sitemap / robots", "Handover docs & training"]
  },
  {
    k: "Scale",
    d: "90-day roadmap for SEO, content and experimentation. Review, iterate, repeat.",
    bullets: ["Topic clusters & briefs", "A/B tests & insights", "Monthly reporting cadence", "Care plan & improvements"]
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    } 
  }
};

const stagger = (delay = 0) => ({
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: delay }
  }
});

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const
    } 
  }
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" as const
    } 
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    } 
  }
};

export default function ProcessPageClient(){
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              How we work
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              A clear process that maps to outcomes
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              Discovery → Design → Launch → Scale. Milestones you can see, KPIs you can measure.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link href="/blueprint" className="btn-primary" aria-label="Get a Free Growth Blueprint - Start with our comprehensive analysis">Get a Free Growth Blueprint</Link>
              <Link href="/cases" className="btn-outline" aria-label="See Case Studies - View examples of our successful projects">See Case Studies</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-max py-14 md:py-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">Our 4-step framework</motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-neutral-600 max-w-2xl">
            We keep teams aligned with a simple, outcome-driven operating rhythm.
          </motion.p>

          <ol className="mt-8 grid lg:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.li key={s.k} variants={fadeUp}
                className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl transition"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white font-bold">
                    {i+1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.k}</h3>
                    <p className="mt-1 text-sm text-neutral-600">{s.d}</p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="inline-flex items-center gap-2 text-sm text-neutral-700">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* DELIVERABLES STRIP */}
      <section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="container-max py-12 md:py-16">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">What you receive</motion.h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Analytics & audit report (PDF)",
                "Information architecture & wireframes",
                "Messaging map & page outlines",
                "Design system tokens & components",
                "Tracking plan (GA4 events, funnels)",
                "Launch checklist & handover docs",
              ].map((x, i)=>(
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-sm font-medium">{x}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ MINI */}
      <section className="container-max py-14 md:py-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">FAQ</motion.h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {q:"How long does a typical project take?", a:"Landing pages 1–2 weeks; SME sites 3–6 weeks; full builds with content & SEO 6–10 weeks."},
              {q:"How do we kick off?", a:"Start with a free Growth Blueprint. We’ll align on goals, scope, and a 90-day plan."},
            ].map((f,i)=>(
              <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="font-medium">{f.q}</div>
                <div className="text-sm text-neutral-600 mt-1">{f.a}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-neutral-200">
        <div className="container-max py-14 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={fadeUp}
            className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-bold">Get your free 30-minute Growth Blueprint</h3>
                <p className="mt-2 text-neutral-300">A practical, prioritized plan for conversions, speed, and organic growth.</p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link href="/blueprint" className="btn bg-white text-neutral-900 hover:bg-neutral-100" aria-label="Book a timeslot">Book a timeslot</Link>
                  <Link href="/contact" className="btn border border-white/20 hover:bg-white/10" aria-label="Talk to us">Talk to us</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}