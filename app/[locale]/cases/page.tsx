"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import imgKopiklinik from "@/app/[locale]/cases/kopiklinik.webp";
import imgTechflow from "@/app/[locale]/cases/techflow.webp";
import imgGreenspace from "@/app/[locale]/cases/greenspace.webp";

const cases = [
  {
    title: "KopiKlinik — Local SEO Lift",
    desc: "A healthcare brand's local visibility surged 3x with a full SEO revamp.",
    metrics: ["+220% organic traffic", "+58% lead form conversions", "-35% load time"],
    img: imgKopiklinik,
    alt: "KopiKlinik storefront with SEO analytics overlay"
  },
  {
    title: "TechFlow SaaS — Conversion Redesign",
    desc: "Complete funnel optimization doubled trial signups and reduced churn by 40%.",
    metrics: ["+180% trial conversions", "+65% user retention", "+45% MRR growth"],
    img: imgTechflow,
    alt: "Futuristic SaaS dashboard with conversion funnel charts"
  },
  {
    title: "GreenSpace — E-commerce Growth",
    desc: "Strategic content marketing and UX improvements tripled online sales.",
    metrics: ["+300% online revenue", "+125% avg order value", "+90% repeat customers"],
    img: imgGreenspace,
    alt: "Multi-device ecommerce layouts with sales growth charts"
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

const stagger = (delay=0) => ({
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: delay }
  }
});

export default function CasesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger()}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeUp} 
              className="text-3xl md:text-5xl font-extrabold tracking-tight"
            >
              Case Studies
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              className="mt-4 text-lg text-neutral-600"
            >
              Real results for growth-focused brands.
            </motion.p>
            <motion.div 
              variants={fadeUp} 
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link 
                href="/blueprint" 
                className="btn-primary"
                aria-label="Get a free growth blueprint consultation"
              >
                Get a Free Growth Blueprint
              </Link>
              <Link 
                href="/pricing" 
                className="btn-outline"
                aria-label="View our pricing plans"
              >
                See Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CASE GRID */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial" 
          whileInView="animate" 
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {cases.map((c: any, i: number) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-xl transition hover:-translate-y-0.5 group"
            >
              <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-neutral-100">
                <Image 
                  src={c.img} 
                  alt={c.alt} 
                  placeholder="blur" 
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  priority={i === 0} 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.metrics.map((m: string, j: number) => (
                    <span 
                      key={j}
                      className="inline-flex text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-neutral-900 text-white">
        <div className="container-max py-14 md:py-20">
          <motion.div
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger()}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.blockquote 
              variants={fadeUp}
              className="text-xl md:text-2xl font-medium leading-relaxed"
            >
              "FunnelFox rebuilt our site and doubled conversions in 90 days."
            </motion.blockquote>
            <motion.cite 
              variants={fadeUp}
              className="mt-4 block text-neutral-300 not-italic"
            >
              — Nova SaaS, Marketing Lead
            </motion.cite>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-neutral-200">
        <div className="container-max py-14 md:py-20">
          <motion.div 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }} 
            variants={fadeUp} 
            className="rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Get your free 30-minute Growth Blueprint
                </h3>
                <p className="mt-2 text-neutral-300">
                  A practical plan for better conversions, faster pages, and more qualified leads.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link 
                    href="/blueprint" 
                    className="btn bg-white text-neutral-900 hover:bg-neutral-100"
                    aria-label="Book a growth blueprint consultation"
                  >
                    Book a timeslot
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn border border-white/20 hover:bg-white/10"
                    aria-label="Contact us for more information"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}