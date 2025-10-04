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
  "Brand Aligned", 
  "Data-Driven"
];

const deliverables = [
  "Brand Positioning Strategy",
  "Voice & Tone Guidelines",
  "Messaging Framework",
  "Website Copy",
  "Marketing Materials",
  "Content Strategy",
  "Copy Templates",
  "A/B Testing Plans",
  "Performance Analytics",
  "Ongoing Optimization"
];

const processSteps = [
  {
    step: "01",
    title: "Brand Discovery",
    description: "Understanding your brand, audience, competitors, and unique value proposition to create compelling messaging."
  },
  {
    step: "02", 
    title: "Message Development",
    description: "Crafting clear, persuasive messaging that resonates with your audience and drives action across all touchpoints."
  },
  {
    step: "03",
    title: "Copy Creation",
    description: "Writing conversion-focused copy for websites, marketing materials, and campaigns that align with your brand voice."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "A/B testing copy variations and continuously optimizing based on performance data and user feedback."
  }
];

const kpis = [
  { metric: "Conversion Rate", value: "+40%", description: "Average improvement" },
  { metric: "Engagement", value: "+65%", description: "Content interaction" },
  { metric: "Brand Recall", value: "+50%", description: "Message retention" }
];

export default function BrandingCopyPage() {
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
            Brand & Copy
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl"
          >
            Strategic brand messaging and conversion-focused copy that connects with your audience and drives measurable results.
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
              aria-label="Get your free brand and copy blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Copy Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us about brand and copy services"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-50 transition"
            >
              Start Copy Project
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
            Complete brand messaging and copywriting package that establishes your voice and converts prospects into customers.
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
            A strategic approach to brand messaging and copywriting that combines market research, creative writing, and performance optimization.
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
            Copy Performance
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
            Ready to Transform Your Brand Message?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto"
          >
            Get copy that clearly communicates your value, connects with your audience, and converts visitors into loyal customers.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/blueprint"
              aria-label="Get your free brand and copy blueprint"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-6 py-3 text-white font-medium hover:bg-[var(--brand)]/90 transition"
            >
              Get Copy Blueprint
            </Link>
            <Link
              href="/contact"
              aria-label="Contact us to start your copy project"
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