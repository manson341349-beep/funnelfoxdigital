"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Posts dataset (8 items, 2023 -> now)
const posts = [
  {
    slug: "ai-for-core-web-vitals",
    title: "Using AI to Prioritize Core Web Vitals Fixes",
    date: "2023-04-18",
    excerpt: "How to triage LCP/INP opportunities with data-driven heuristics.",
    tags: ["Performance","CWV"],
    cover: "/media/blog/ai-cwv.webp",
    alt: "AI-enhanced Core Web Vitals dashboard"
  },
  {
    slug: "local-seo-malaysia-2024",
    title: "Local SEO in Malaysia: Tactics That Still Win",
    date: "2024-02-07",
    excerpt: "From NAP consistency to intent-led topic clusters for SERP dominance.",
    tags: ["SEO","Local"],
    cover: "/media/blog/local-seo.webp",
    alt: "Local SEO map with ranking pins"
  },
  {
    slug: "ux-writing-for-forms",
    title: "UX Writing for Forms that Convert",
    date: "2024-06-12",
    excerpt: "Microcopy patterns that reduce friction and increase completion rate.",
    tags: ["UX","Conversion"],
    cover: "/media/blog/ux-forms.webp",
    alt: "Form UI with microcopy hints"
  },
  {
    slug: "ga4-events-that-matter",
    title: "GA4 Events that Actually Matter for Growth",
    date: "2024-10-01",
    excerpt: "A minimal, scalable event schema that maps cleanly to funnels.",
    tags: ["Analytics","GA4"],
    cover: "/media/blog/ga4-events.webp",
    alt: "GA4 event funnel charts"
  },
  {
    slug: "wordpress-speed-checklist",
    title: "WordPress Speed Checklist for 2025",
    date: "2025-01-15",
    excerpt: "The essential ops for caching, images, and CWV-friendly themes.",
    tags: ["WordPress","Performance"],
    cover: "/media/blog/wordpress-speed.webp",
    alt: "WordPress speed optimization"
  },
  {
    slug: "content-hub-blueprints",
    title: "Content Hub Blueprints for Topic Authority",
    date: "2025-03-05",
    excerpt: "Structuring clusters that rank and send traffic to money pages.",
    tags: ["SEO","Content"],
    cover: "/media/blog/content-hub.webp",
    alt: "Content hub network diagram"
  },
  {
    slug: "ab-testing-smarter",
    title: "A/B Testing that Doesn't Waste Your Traffic",
    date: "2025-05-20",
    excerpt: "Prioritization, MDE, and guardrails for realistic decision-making.",
    tags: ["Experimentation","Conversion"],
    cover: "/media/blog/ab-testing.webp",
    alt: "A/B split test UI"
  },
  {
    slug: "brand-messaging-framework",
    title: "A Practical Brand Messaging Framework",
    date: "2025-08-08",
    excerpt: "Positioning → promises → reasons-to-believe — tied to outcomes.",
    tags: ["Brand","Copy"],
    cover: "/media/blog/brand-messaging.webp",
    alt: "Brand identity flat lay"
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 }
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

// util: format date
const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

export default function BlogIndexClient(){
  // sort newest → oldest once
  const postsSorted = React.useMemo(
    () => [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    ),
    []
  );

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">Insights</motion.p>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Blog</motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-3 text-neutral-600 max-w-2xl">Practical playbooks on SEO, UX, speed, and conversions — what actually moves revenue.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="container-max py-14 md:py-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {postsSorted.map((p, i)=>(
            <motion.article key={p.slug} variants={fadeUp} transition={{ duration: 0.6 }}
              className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition hover:-translate-y-0.5"
            >
              <Link href={`/blog/${p.slug}`} aria-label={`Read: ${p.title}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={p.cover}
                    alt={p.alt}
                    fill
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={i<2}
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-neutral-500">{fmt(p.date)}</div>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{p.excerpt}</p>
                  {p.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map(t=>(
                        <span key={t} className="inline-flex text-[11px] font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700">{t}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}