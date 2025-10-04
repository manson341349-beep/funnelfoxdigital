"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Posts dataset (10 items, 2023 -> now)
const posts = [
  {
    slug: "ai-powered-cwv-optimization",
    title: "AI-Powered Core Web Vitals Optimization: The Complete Guide",
    date: "2023-04-18",
    excerpt: "Leverage artificial intelligence to automatically identify and fix Core Web Vitals issues",
    tags: ["Performance","CWV","AI"],
    cover: "/blog/ai-cwv.webp",
    alt: "Dashboard showing Core Web Vitals charts enhanced by AI"
  },
  {
    slug: "local-seo-mastery-2024",
    title: "Local SEO Mastery 2024: Complete Guide for Malaysian Businesses",
    date: "2024-02-07",
    excerpt: "Master local SEO strategies specifically designed for Malaysian businesses and markets",
    tags: ["SEO","Local"],
    cover: "/blog/local-seo.webp",
    alt: "Local map pins and search snippets"
  },
  {
    slug: "ux-forms-conversion-optimization",
    title: "UX Forms That Convert: Design Principles for Higher Conversion Rates",
    date: "2024-06-12",
    excerpt: "Transform your website forms with proven UX design principles that boost conversion rates",
    tags: ["UX","Conversion"],
    cover: "/blog/ux-forms.webp",
    alt: "Form UI with helpful microcopy"
  },
  {
    slug: "ga4-event-tracking-mastery",
    title: "GA4 Event Tracking Mastery: Complete Implementation Guide",
    date: "2024-10-01",
    excerpt: "Master Google Analytics 4 event tracking with advanced implementation strategies",
    tags: ["Analytics","GA4"],
    cover: "/blog/ga4-events.webp",
    alt: "Analytics dashboard with event funnels"
  },
  {
    slug: "wordpress-speed-optimization-guide",
    title: "WordPress Speed Optimization: Complete Performance Guide for 2024",
    date: "2023-09-12",
    excerpt: "Transform your slow WordPress site into a speed demon with this comprehensive optimization guide",
    tags: ["WordPress","Performance"],
    cover: "/blog/wordpress-speed.webp",
    alt: "Speedometer metaphor with WordPress logo"
  },
  {
    slug: "content-hub-strategy-guide",
    title: "Content Hub Strategy: Building Authority Through Strategic Content Clusters",
    date: "2025-03-05",
    excerpt: "Build topical authority and drive organic traffic with strategic content hub architecture",
    tags: ["SEO","Content"],
    cover: "/blog/content-hub.webp",
    alt: "Content hub nodes forming a network"
  },
  {
    slug: "ab-testing-conversion-optimization",
    title: "A/B Testing Mastery: Data-Driven Conversion Optimization Framework",
    date: "2025-05-20",
    excerpt: "Master A/B testing with proven frameworks for data-driven conversion optimization",
    tags: ["Experimentation","Conversion"],
    cover: "/blog/ab-testing.webp",
    alt: "Split test UI with variant charts"
  },
  {
    slug: "brand-messaging-strategy-guide",
    title: "Brand Messaging Strategy: Complete Framework for Market Positioning",
    date: "2025-08-08",
    excerpt: "Develop compelling brand messaging that resonates with your target audience and drives conversions",
    tags: ["Brand","Strategy"],
    cover: "/blog/brand-messaging.webp",
    alt: "Typography grid with brand elements"
  },

];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,0.61,0.36,1] } }
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

// util: format date
const fmt = (d: string) =>
  new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

export default function BlogIndexClient(){
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">Insights</motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">Blog</motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">Practical playbooks on SEO, UX, speed, and conversions — what actually moves revenue.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="container-max py-14 md:py-20">
        <motion.div initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }} variants={stagger(0.1)}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {posts.map((p, i)=>(
            <motion.article key={p.slug} variants={fadeUp}
              className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition hover:-translate-y-0.5"
            >
              <Link href={`/blog/${p.slug}`} aria-label={`Read: ${p.title}`} className="block">
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={p.cover}
                    alt={p.alt}
                    width={1280} height={720}
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
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