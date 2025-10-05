/* app/[locale]/privacy/page.tsx */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,0.61,0.36,1] } },
};
const stagger = (delay=0)=>({ animate:{ transition:{ staggerChildren:0.08, delayChildren:delay } } });

const Item = ({title, children}:{title:string; children: React.ReactNode}) => (
  <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-white p-5">
    <h3 className="text-base font-semibold">{title}</h3>
    <div className="mt-2 text-sm text-neutral-700 leading-relaxed">{children}</div>
  </motion.div>
);

export default function PrivacyPage() {
  const updated = "October 05, 2025"; // last updated

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              Privacy Policy
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              We respect your privacy
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              This page explains what we collect, why we collect it, and how we keep it safe when you use FunnelFox Digital.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-5 text-xs text-neutral-500">
              Last updated: {updated}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-max py-14 md:py-20">
        <motion.div
          initial="initial" whileInView="animate" viewport={{ once:true, amount:0.2 }}
          variants={stagger(0.05)} className="grid md:grid-cols-12 gap-6"
        >
          {/* Left column */}
          <div className="md:col-span-7 grid gap-4">
            <Item title="What we collect">
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details you submit (name, email, company, website, message, goals).</li>
                <li>Usage data (pages viewed, actions, device & browser metadata) via analytics.</li>
                <li>Technical data (IP address, timestamps) for security/logging.</li>
              </ul>
            </Item>

            <Item title="How we use your data">
              <ul className="list-disc pl-5 space-y-1">
                <li>Reply to enquiries, deliver the Growth Blueprint, and provide services you request.</li>
                <li>Measure and improve site performance, content relevance, and conversions.</li>
                <li>Maintain security, prevent abuse, and meet legal or compliance requirements.</li>
              </ul>
            </Item>

            <Item title="Cookies & analytics">
              <p>
                We use essential cookies for site functionality and analytics cookies (e.g., GA4) to understand usage and funnels.
                You can control cookies in your browser settings. Aggregated analytics never includes form message content.
              </p>
            </Item>

            <Item title="Forms & email">
              <p>
                When you submit forms on <Link href="/contact" className="underline">Contact</Link> or <Link href="/blueprint" className="underline">Blueprint</Link>,
                we process your data to respond within 48 hours. We may send transactional emails (e.g., confirmations, follow-ups).
                You can opt out of non-essential emails anytime by replying “unsubscribe”.
              </p>
            </Item>

            <Item title="Data retention">
              <p>
                We keep enquiry records as long as needed to serve you and for legitimate business or legal purposes.
                If you become a client, we retain project records for contract and accounting requirements.
              </p>
            </Item>

            <Item title="Your rights">
              <ul className="list-disc pl-5 space-y-1">
                <li>Access: request a copy of your data we hold.</li>
                <li>Rectify: correct incomplete or inaccurate information.</li>
                <li>Delete: ask us to erase data where applicable.</li>
                <li>Object/Restrict: limit certain processing activities.</li>
              </ul>
              <p className="mt-2">Contact us at <a href="mailto:hello@funnelfoxdigital.com" className="underline">hello@funnelfoxdigital.com</a> to exercise your rights.</p>
            </Item>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 grid gap-4">
            <Item title="Security">
              <p>
                We use industry-standard safeguards (TLS/HTTPS, access controls, least privilege).
                No method is 100% secure, but we continuously improve our technical and organizational measures.
              </p>
            </Item>

            <Item title="International transfers">
              <p>
                Your data may be processed outside your country. Where required, we use lawful transfer mechanisms and
                ensure recipients offer adequate protection.
              </p>
            </Item>

            <Item title="Third parties">
              <p>
                We may use trusted service providers (hosting, analytics, email delivery). They process data on our behalf
                under data protection terms and only for specified purposes.
              </p>
            </Item>

            <Item title="Children’s privacy">
              <p>
                Our services are not directed to children under 13. If you believe a child provided us personal data,
                contact us and we will take appropriate steps to remove it.
              </p>
            </Item>

            <Item title="Policy changes">
              <p>
                We may update this policy to reflect changes in practices or legal requirements. We’ll revise the “Last updated”
                date and, where appropriate, provide additional notice.
              </p>
            </Item>

            <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5">
              <h3 className="text-base font-semibold">Questions?</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Email us at <a href="mailto:hello@funnelfoxdigital.com" className="underline">hello@funnelfoxdigital.com</a>, or use our{" "}
                <Link href="/contact" className="underline">contact form</Link>. We typically respond within 48 hours.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="initial" whileInView="animate" viewport={{ once:true }} variants={fadeUp}
          className="mt-10 rounded-3xl bg-neutral-900 text-white p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to grow with privacy in mind?</h3>
              <p className="mt-2 text-neutral-300">Get a free Growth Blueprint — conversion-first, analytics-clean, and privacy-aware.</p>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <Link href="/blueprint" className="btn bg-white text-neutral-900 hover:bg-neutral-100">Get my blueprint</Link>
                <Link href="/contact" className="btn border border-white/20 hover:bg-white/10">Talk to us</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}