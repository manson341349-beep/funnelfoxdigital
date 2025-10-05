/* app/[locale]/terms/page.tsx */
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

export default function TermsPage() {
  const updated = "October 05, 2025";

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,104,23,0.10),transparent_60%)] pointer-events-none" />
        <div className="container-max py-16 md:py-24">
          <motion.div initial="initial" whileInView="animate" viewport={{ once:true }} variants={stagger()}>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
              Terms of Service
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              Our engagement terms
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-neutral-600 max-w-2xl">
              These Terms govern your use of our website and services. By engaging FunnelFox Digital, you agree to the clauses below.
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
            <Item title="1) Definitions">
              <p>“We/Us/Our” means FunnelFox Digital. “Client/You” means the party purchasing our services. “Services” include but are not limited to web design, WordPress, SEO, UX, branding/copy, and growth strategy.</p>
            </Item>

            <Item title="2) Scope & Deliverables">
              <p>Scope, milestones, and deliverables are described in the proposal/statement of work (SOW). Changes outside the agreed scope are handled via change requests and may affect budget and timeline.</p>
            </Item>

            <Item title="3) Client Obligations">
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide timely content, feedback, and approvals.</li>
                <li>Ensure all materials supplied do not infringe third-party rights.</li>
                <li>Provide required accounts/access (hosting, analytics, CMS, etc.).</li>
              </ul>
            </Item>

            <Item title="4) Fees & Payment">
              <ul className="list-disc pl-5 space-y-1">
                <li>Fees are specified in the SOW or pricing page and quoted in USD unless stated otherwise.</li>
                <li>Deposits are non-refundable once work commences.</li>
                <li>Invoices are due within 7 days unless otherwise stated; late payments may pause delivery.</li>
              </ul>
            </Item>

            <Item title="5) Intellectual Property">
              <p>Upon full payment, final deliverables are assigned to you, excluding third-party assets, fonts, stock, code libraries, and our pre-existing know-how or frameworks, which remain our property or their respective owners’.</p>
            </Item>

            <Item title="6) License & Usage">
              <p>We grant you a non-exclusive, perpetual license to use the final deliverables for your business. You grant us a non-exclusive right to display non-confidential work outcomes in our portfolio and marketing.</p>
            </Item>

            <Item title="7) Confidentiality">
              <p>Both parties shall keep confidential information secret and use it only for the project purpose. This survives termination.</p>
            </Item>

            <Item title="8) Data & Privacy">
              <p>We process personal data as described in our <Link href="/privacy" className="underline">Privacy Policy</Link>. You are responsible for your own regulatory compliance (e.g., consent banners, notices) where applicable.</p>
            </Item>

            <Item title="9) Third-Party Services">
              <p>Hosting, domains, analytics, email, A/B platforms, etc. are run by third parties under their own terms. We are not liable for their outages, pricing, policies, or changes.</p>
            </Item>

            <Item title="10) Timelines & Acceptance">
              <p>Estimated timelines assume timely inputs and approvals. Deliverables are deemed accepted unless rejection with reasonable grounds is provided within 7 days of delivery.</p>
            </Item>

            <Item title="11) Warranty Disclaimer">
              <p>Services are provided “as is”. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            </Item>

            <Item title="12) Limitation of Liability">
              <p>To the maximum extent permitted by law, our aggregate liability under these Terms shall not exceed the fees paid by you for the specific Services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.</p>
            </Item>

            <Item title="13) Indemnity">
              <p>You agree to indemnify and hold us harmless against claims arising from materials you supply, misuse of deliverables, or breach of these Terms.</p>
            </Item>

            <Item title="14) Termination">
              <p>Either party may terminate for material breach not cured within 14 days of notice. On termination, amounts due for work performed remain payable; we may withhold deliverables until settlement.</p>
            </Item>

            <Item title="15) Cancellation & Refunds">
              <p>Pre-paid retainers are consumed against time/materials. Deposits and completed phases are non-refundable. Unused future retainers may be refunded at our discretion, less costs incurred.</p>
            </Item>

            <Item title="16) Force Majeure">
              <p>Neither party is liable for delays beyond reasonable control (e.g., outages, disasters, strikes). Obligations resume when the event ends.</p>
            </Item>

            <Item title="17) Governing Law & Disputes">
              <p>Unless otherwise agreed in writing, these Terms are governed by the laws of Malaysia. Disputes shall first be negotiated in good faith; if unresolved, parties may pursue mediation or competent courts in Malaysia.</p>
            </Item>

            <Item title="18) Changes to Terms">
              <p>We may update these Terms from time to time. Updates take effect upon posting. Continued use or engagement constitutes acceptance of the updated Terms.</p>
            </Item>

            <Item title="19) Contact">
              <p>Questions? Email <a href="mailto:hello@funnelfoxdigital.com" className="underline">hello@funnelfoxdigital.com</a> or use our <Link href="/contact" className="underline">contact form</Link>.</p>
            </Item>
          </div>

          {/* Right column */}
          <div className="md:col-span-5 grid gap-4">
            <Item title="Project Artifacts & Access">
              <p>We provide reasonable handover materials at launch (credentials, documentation). For managed or retainers, access is maintained while invoices are up-to-date.</p>
            </Item>

            <Item title="SEO & Performance Notes">
              <p>Rankings and speed depend on many external factors (competition, hosting, content ops). We do not guarantee specific positions or quantitative outcomes.</p>
            </Item>

            <Item title="Content & Compliance">
              <p>You are responsible for the accuracy and legality of provided content, claims, and regulated disclosures relevant to your industry and geography.</p>
            </Item>

            <Item title="Portfolio Rights">
              <p>We may showcase project name, logo, screenshots, and public URLs unless you request a confidential embargo in writing prior to launch.</p>
            </Item>

            <motion.div variants={fadeUp} className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-5">
              <h3 className="text-base font-semibold">Acceptance</h3>
              <p className="mt-2 text-sm text-neutral-700">
                By signing a proposal, paying an invoice, or using our Services, you acknowledge and agree to these Terms.
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
              <h3 className="text-2xl md:text-3xl font-bold">Ready to proceed?</h3>
              <p className="mt-2 text-neutral-300">Grab a free Growth Blueprint — we’ll map the right scope and next steps.</p>
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