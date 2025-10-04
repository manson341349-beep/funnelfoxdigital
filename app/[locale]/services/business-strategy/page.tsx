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
  "Data-Driven",
  "Growth-Focused", 
  "ROI-Optimized"
];

const deliverables = [
  "Business Analysis",
  "Market Research",
  "Growth Strategy",
  "90-Day Roadmap",
  "KPI Framework",
  "Competitive Analysis",
  "Revenue Optimization",
  "Process Documentation",
  "Performance Tracking",
  "Strategic Consulting"
];

const processSteps = [
  {
    step: "01",
    title: "Business Audit",
    description: "Comprehensive analysis of your current business model, market position, and growth opportunities."
  },
  {
    step: "02", 
    title: "Strategy Development",
    description: "Creating a data-driven growth strategy with clear objectives, tactics, and measurable outcomes."
  },
  {
    step: "03",
    title: "Implementation Planning",
    description: "Developing detailed roadmaps and action plans with timelines, resources, and success metrics."
  },
  {
    step: "04",
    title: "Execution & Optimization",
    description: "Ongoing support, performance monitoring, and strategy refinement based on real-world results."
  }
];

const kpis = [
  { metric: "Revenue Growth", value: "+85%", description: "Average increase" },
  { metric: "Market Share", value: "+45%", description: "Competitive gain" },
  { metric: "ROI", value: "320%", description: "Strategy return" }
];

export default function BusinessStrategyPage() {
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
            Business Strategy
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl"
          >
            Strategic business consulting and growth planning that transforms your vision into measurable results and sustainable success.
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
              aria-label="Get your free business strategy blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Strategy Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us about business strategy services"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50 transition"
            >
              Start Strategy Project
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
            Comprehensive business strategy package that provides clear direction, actionable plans, and measurable growth outcomes.
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
            A systematic approach to business strategy that combines market analysis, strategic planning, and execution excellence.
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
            Strategy Results
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
            Ready to Scale Your Business?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Get a strategic roadmap that aligns your team, optimizes your operations, and accelerates sustainable growth.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blueprint"
              aria-label="Get your free business strategy blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Strategy Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us to start your strategy project"
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