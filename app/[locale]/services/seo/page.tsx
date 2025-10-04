"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    transition: { staggerChildren: 0.08, delayChildren: delay }
  }
});

const features = [
  "Technical SEO",
  "Content Strategy", 
  "Organic Growth"
];

const deliverables = [
  "Technical SEO Audit",
  "Keyword Research & Strategy",
  "Content Optimization",
  "On-Page SEO Implementation",
  "Schema Markup Setup",
  "Site Speed Optimization",
  "Local SEO Setup",
  "Link Building Strategy",
  "Monthly Performance Reports",
  "Ongoing SEO Consultation"
];

const processSteps = [
  {
    step: "01",
    title: "SEO Audit & Analysis",
    description: "Comprehensive technical audit, keyword research, and competitor analysis to identify optimization opportunities."
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Creating a data-driven SEO strategy with content plans, technical fixes, and optimization roadmap."
  },
  {
    step: "03",
    title: "Implementation & Optimization",
    description: "Executing on-page optimizations, technical improvements, and content enhancements for better rankings."
  },
  {
    step: "04",
    title: "Monitoring & Growth",
    description: "Continuous monitoring, performance tracking, and strategy refinement to maintain and improve rankings."
  }
];

const kpis = [
  { metric: "Organic Traffic", value: "+150%", description: "Average increase in 6 months" },
  { metric: "Keyword Rankings", value: "+85%", description: "Top 10 position improvements" },
  { metric: "Conversion Rate", value: "+40%", description: "From organic traffic" }
];

export default function SEOPage() {
  return (
    <main>
      {/* HERO */}
      <section className="container-max py-16 md:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger(0.1)}
          className="max-w-4xl"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            SEO Services
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl"
          >
            Drive organic growth with strategic SEO that improves rankings, increases traffic, and converts visitors into customers.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center rounded-full bg-[var(--brand)]/10 px-4 py-2 text-sm font-medium text-[var(--brand)]"
              >
                {feature}
              </span>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/blueprint"
              aria-label="Get your free SEO blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get SEO Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us about SEO services"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50 transition"
            >
              Start SEO Project
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* DELIVERABLES */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
          >
            What You Get
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-neutral-600 max-w-2xl"
          >
            Comprehensive SEO package that improves your search visibility and drives qualified organic traffic to your website.
          </motion.p>
          
          <motion.div 
            variants={stagger(0.05)}
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {deliverables.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-xl transition hover:-translate-y-0.5"
              >
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand)] mr-3"></div>
                  <span className="font-medium">{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
          >
            Our Process
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-neutral-600 max-w-2xl"
          >
            A systematic approach to SEO that combines technical optimization with strategic content planning for sustainable growth.
          </motion.p>
          
          <motion.div 
            variants={stagger(0.1)}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-0.5"
              >
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white font-bold text-sm mr-4">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* KPIs */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Results That Matter
          </motion.h2>
          
          <motion.div 
            variants={stagger(0.1)}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            {kpis.map((kpi) => (
              <motion.div
                key={kpi.metric}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--brand)]">
                  {kpi.value}
                </div>
                <div className="mt-2 text-lg font-semibold">{kpi.metric}</div>
                <div className="mt-1 text-sm text-neutral-600">{kpi.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 text-white py-16 md:py-24">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="container-max text-center"
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready to Dominate Search Results?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Get more qualified traffic and leads with SEO strategies that deliver measurable results and sustainable growth.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blueprint"
              aria-label="Get your free SEO blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get SEO Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us to start your SEO project"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-600 px-6 py-3 font-medium hover:bg-neutral-800 transition"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}