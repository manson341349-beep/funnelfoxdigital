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
  "Conversion-Focused",
  "Mobile-First", 
  "Performance Optimized"
];

const deliverables = [
  "User Experience Research",
  "Conversion-Focused Design",
  "Responsive Web Development",
  "Performance Optimization",
  "SEO-Ready Implementation",
  "Accessibility Compliance",
  "Content Management System",
  "Analytics Integration",
  "Quality Assurance Testing",
  "Launch & Training Support"
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding your business goals, target audience, and competitive landscape to create a strategic design foundation."
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Creating wireframes, user flows, and high-fidelity designs that prioritize user experience and conversion optimization."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building responsive, fast-loading websites with clean code, SEO optimization, and thorough quality assurance."
  },
  {
    step: "04",
    title: "Launch & Optimization",
    description: "Deploying your website with analytics setup, performance monitoring, and ongoing optimization support."
  }
];

const kpis = [
  { metric: "Conversion Rate", value: "+35%", description: "Average improvement" },
  { metric: "Page Speed", value: "< 2.5s", description: "Load time target" },
  { metric: "Mobile Score", value: "95+", description: "PageSpeed Insights" }
];

export default function WebDesignPage() {
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
            Web Design
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl"
          >
            Beautiful, conversion-focused websites that engage your audience and drive business growth through strategic design.
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
              aria-label="Get your free web design blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Design Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us about web design services"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50 transition"
            >
              Start Design Project
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
            Complete web design package that transforms your online presence and converts visitors into customers.
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
            A proven design process that combines user research, strategic planning, and conversion optimization for maximum impact.
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
            Ready to Transform Your Website?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Get a website that not only looks amazing but also converts visitors into customers and grows your business.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blueprint"
              aria-label="Get your free web design blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Design Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us to start your design project"
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