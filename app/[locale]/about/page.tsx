/* app/[locale]/about/page.tsx */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,0.61,0.36,1] } },
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
<section className="relative overflow-hidden border-b border-neutral-200">
  <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
  <div className="container-max py-16 md:py-24">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={stagger()}
    >
      <motion.p
        variants={fadeUp}
        className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]"
      >
        About FunnelFox Digital
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight"
      >
        We turn clicks into clients.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 text-neutral-600 max-w-3xl text-lg leading-relaxed"
      >
        FunnelFox Digital is a performance-driven digital studio that helps ambitious brands grow smarter and faster. 
        We combine conversion-focused web design, technical SEO, and data-driven strategy to build websites that don’t just look good — 
        they sell, scale, and sustain. From Kuala Lumpur to London, we partner with businesses to transform online presence into predictable pipelines 
        of qualified leads and measurable ROI.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-500"
      >
        <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">Conversion-first Web Design</span>
        <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">Technical SEO</span>
        <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">Growth Strategy</span>
        <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">Analytics & Funnels</span>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap gap-3"
      >
        <Link href="/blueprint" className="btn-primary">
          Get your Growth Blueprint
        </Link>
        <Link href="/cases" className="btn-outline">
          See case studies
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* EVIDENCE / SOCIAL PROOF SECTION */}
      <section className="border-t border-neutral-200">
  <div className="container-max py-14 md:py-20">
    <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger()}>
      {/* Heading */}
      <motion.div variants={fadeUp} className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold">Proof it works</h2>
        <Link href="/cases" className="text-sm font-medium text-[var(--brand)] hover:underline">See case studies →</Link>
      </motion.div>

      {/* Client Logos */}
      <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {["Acme Health","Nova SaaS","Prime Legal","KopiKlinik","Metro Builders","BrightLearn"].map((b)=>(
          <div key={b} className="h-12 rounded-xl border border-neutral-200 bg-white/70 backdrop-blur flex items-center justify-center text-neutral-500 text-sm hover:shadow transition">
            {b}
          </div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div variants={stagger(0.05)} className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          {
            q:"They cut our lead cost by 38% in 60 days — cleaner IA and faster pages made the difference.",
            n:"Jasmine T.", r:"Marketing Lead, Healthcare",
          },
          {
            q:"Clear roadmap, measurable results. We 2× signups with better messaging and schema fixes.",
            n:"Adrian L.", r:"Founder, SaaS",
          },
          {
            q:"From \"pretty site\" to a sales asset. Qualified demos up 52% and decisions are data-backed.",
            n:"Melissa K.", r:"COO, Legal",
          },
        ].map((t)=>(
          <motion.blockquote
            key={t.n} variants={fadeUp}
            className="rounded-2xl border border-neutral-200 bg-white p-5 hover:-translate-y-0.5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[var(--brand)]/15" />
              <div>
                <div className="text-sm font-semibold">{t.n}</div>
                <div className="text-xs text-neutral-500">{t.r}</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-neutral-700 leading-relaxed">“{t.q}”</div>
            <div className="mt-3 flex items-center gap-1 text-[var(--brand)]">
              {/* Stars */}
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
          </motion.blockquote>
        ))}
      </motion.div>

      {/* KPI Cards */}
      <motion.div variants={stagger(0.05)} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { kpi:"+52%", label:"Qualified demos (90 days)", note:"Positioning + CWV + intent pages" },
          { kpi:"-35%", label:"Interaction to Next Paint", note:"INP budgets + input latency fixes" },
          { kpi:"+42%", label:"Checkout conversion rate", note:"Copy/A/B + friction removal" },
        ].map((x)=>(
          <motion.div key={x.label} variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-3xl font-extrabold tracking-tight">{x.kpi}</div>
            <div className="mt-1 text-sm font-medium text-neutral-700">{x.label}</div>
            <div className="mt-2 text-xs text-neutral-500">{x.note}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp} className="mt-10 rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-3xl font-bold">Want similar results?</h3>
            <p className="mt-2 text-neutral-300">Grab a free Growth Blueprint — we’ll map a 90-day plan tailored to your goals.</p>
          </div>
          <div className="md:col-span-4">
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <Link href="/blueprint" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get my blueprint</Link>
              <Link href="/contact" className="btn border border-white/20 hover:bg-white/10">Talk to us</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
    </main>
  );
}