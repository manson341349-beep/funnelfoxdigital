/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  { slug:"web-design",    title:"Web Design",      blurb:"Conversion-first websites that turn clicks into clients." },
  { slug:"seo",           title:"SEO",             blurb:"Topic clusters, technical SEO, and content that ranks & converts." },
  { slug:"wordpress",     title:"WordPress",       blurb:"Fast, secure, scalable WordPress builds and care plans." },
  { slug:"app-design",    title:"App UI/UX",       blurb:"Usable, beautiful product design from research to hi-fi." },
  { slug:"branding-copy", title:"Brand & Copy",    blurb:"Positioning, messaging, and on-brand copy that sells." },
  { slug:"business-strategy", title:"Growth Strategy", blurb:"From audits to roadmaps—moves that drive ROI." },
];

const highlights = [
  { k:"INP / LCP optimization", v:"Green Core Web Vitals baseline" },
  { k:"Form conversion rate",   v:"+15–40% typical uplift" },
  { k:"Technical SEO",          v:"Schema, sitemaps, internal linking" },
  { k:"Topic clusters",         v:"Searchable, intent-led content map" },
  { k:"Maintainability",        v:"Design system, tokens, documentation" },
  { k:"Observability",          v:"GA4 events, funnels, heatmaps" },
];

const faqs = [
  { q:"How long do projects take?", a:"Landing pages 1–2 weeks; SME sites 3–6 weeks; full builds with content & SEO 6–10 weeks." },
  { q:"Do you provide ongoing support?", a:"Yes. We offer care plans (performance, backups, security, content) and ongoing SEO (technical + content + links)." },
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

const stagger = (delay=0) => ({
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: delay }
  }
});

export default function ServicesPageClient() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div
            initial="initial" whileInView="animate" viewport={{ once:true, margin:"-100px" }}
            variants={stagger()}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              Our Capabilities
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight">
              Services designed to grow revenue
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-neutral-600">
              We focus on the moves that matter: faster pages, clearer messaging, higher conversions, and durable organic growth.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link href="/blueprint" className="btn-primary">Get a Free Growth Blueprint</Link>
              <Link href="/cases" className="btn-outline">See Case Studies</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }}
          variants={stagger(0.1)}
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {services.map((s, i) => (
            <motion.div key={s.slug} variants={fadeUp}>
              <Link
                href={`/services/${s.slug}`}
                aria-label={`Learn more about ${s.title}`}
                className="block group rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-xl transition hover:-translate-y-0.5 overflow-hidden min-h-[180px]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white group-hover:scale-105 transition">
                  <span className="text-sm font-bold">↗</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.blurb}</p>
                <div className="mt-4 text-[13px] font-medium text-[var(--brand)] opacity-0 group-hover:opacity-100 transition">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* VALUE HIGHLIGHTS */}
      <section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="container-max py-14 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">What you get</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-neutral-600 max-w-2xl">
              Clear deliverables, measurable outcomes, and maintainable systems.
            </motion.p>
            <motion.div variants={stagger(0.1)} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-4 hover:-translate-y-0.5 hover:shadow-lg transition">
                  <div className="text-sm font-semibold">{h.k}</div>
                  <div className="text-sm text-neutral-600 mt-1">{h.v}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">Core Web Vitals</span>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700">Analytics & Events</span>
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-amber-100 text-amber-700">Conversion Design</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS TEASER */}
      <section className="container-max py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()} className="md:col-span-5">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">Our process</motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-neutral-600">Discovery → Design → Launch → Scale. Clear milestones, transparent comms, and KPIs that map to revenue.</motion.p>
            <motion.div variants={fadeUp} className="mt-5 flex gap-3">
              <Link href="/process" className="btn-outline">See full process</Link>
              <Link href="/cases" className="btn-primary">View results</Link>
            </motion.div>
          </motion.div>

          <motion.ol initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger(0.05)} className="md:col-span-7 grid gap-4">
            {[
              {t:"Discovery", d:"Audit, analytics, benchmarks, and strategy."},
              {t:"Design", d:"Architecture, copy, visuals, components."},
              {t:"Launch", d:"Performance passes, tracking, DX handover."},
              {t:"Scale", d:"SEO + content + testing roadmap for 90 days."},
            ].map((s,i)=>(
              <motion.li key={s.t} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-sm text-neutral-500">Step {i+1}</div>
                <div className="text-base font-semibold mt-1">{s.t}</div>
                <div className="text-sm text-neutral-600 mt-1">{s.d}</div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="border-t border-neutral-200 bg-neutral-900 text-white">
        <div className="container-max py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-8">
            <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()} className="md:col-span-5">
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold">FAQ</motion.h2>
              <motion.p variants={fadeUp} className="mt-2 text-neutral-300">Short answers to help you decide faster.</motion.p>
              <motion.div variants={fadeUp} className="mt-4">
                <Link href="/faq" className="inline-flex text-sm font-medium text-[var(--brand)] hover:underline">See all FAQs →</Link>
              </motion.div>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger(0.05)} className="md:col-span-7 grid gap-4">
              {faqs.map((f,i)=>(
                <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition">
                  <div className="font-medium">{f.q}</div>
                  <div className="text-sm text-neutral-300 mt-1">{f.a}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-neutral-200">
        <div className="container-max py-14 md:py-20">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={fadeUp} className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-bold">Get your free 30-minute Growth Blueprint</h3>
                <p className="mt-2 text-neutral-300">A practical plan for better conversions, faster pages, and more qualified leads.</p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link href="/blueprint" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Book a timeslot</Link>
                  <Link href="/contact" className="btn border border-white/20 hover:bg-white/10">Talk to us</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}