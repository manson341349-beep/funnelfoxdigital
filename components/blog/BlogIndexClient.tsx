"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 }
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

// util: format date
const fmt = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });

import { BlogMeta } from "@/lib/blogFs";

interface BlogIndexClientProps {
  posts: BlogMeta[];
  locale?: string;
}

export default function BlogIndexClient({ posts, locale }: BlogIndexClientProps) {

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
          {posts.map((p, i)=>(
            <motion.article key={p.slug} variants={fadeUp} transition={{ duration: 0.6 }}
              className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition hover:-translate-y-0.5"
            >
              <Link href={`/${locale || "en"}/blog/${p.slug}`} aria-label={`Read: ${p.title}`} className="block">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  {p.cover && (
                    <Image
                      src={p.cover}
                      alt={p.alt || p.title}
                      fill
                      sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={i<2}
                    />
                  )}
                </div>
                <div className="p-5">
                  <div className="text-xs text-neutral-500">{fmt(p.date)}</div>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{p.excerpt}</p>
                  {p.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t: string)=>(
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