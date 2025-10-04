/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Kpi = ({num,label}:{num:string;label:string}) => (
  <div className="card">
    <div className="text-2xl font-extrabold tracking-tight">{num}</div>
    <div className="text-xs text-neutral-500 mt-1">{label}</div>
  </div>
);

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' },
    { locale: 'ms' }
  ];
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }){
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,104,23,0.15),transparent_60%)] pointer-events-none" />
        <div className="container-max py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              We turn <span className="bg-[var(--brand)] bg-clip-text text-transparent" style={{WebkitTextFillColor:"transparent", WebkitBackgroundClip:"text"}}>clicks</span> into clients — for real.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-neutral-600 max-w-2xl">Conversion-first websites, SEO, and funnels for SMEs in Malaysia & SEA.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={`/${locale}/blueprint`} className="btn-primary">Get a Free Growth Blueprint</Link>
              <Link href={`/${locale}/cases`} className="btn-outline">See Case Studies</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-80">
              {["Acme Health","Nova SaaS","Prime Legal","KopiKlinik","Metro Builders"].map((b) => (
                <span key={b} className="text-sm text-neutral-500">{b}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[var(--brand)]/15 blur-2xl" />
              <div className="relative rounded-3xl border border-neutral-200 bg-white/70 backdrop-blur p-4 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <Kpi num="+42%" label="Checkout CVR" />
                  <Kpi num="+80%" label="ROAS (90d)" />
                  <Kpi num="-35%" label="INP" />
                  <Kpi num="+50/mo" label="Qualified leads" />
                </div>
                <div className="mt-4 card-muted text-sm text-neutral-700">
                  <p className="font-medium">Blueprint includes:</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Priority fixes for INP/LCP & conversion</li>
                    <li>Keyword & topic-cluster map</li>
                    <li>90-day content & A/B plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="container-max py-16 md:py-24">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-4xl font-bold">What we do</h2>
            <Link href={`/${locale}/services`} className="text-sm font-medium text-[var(--brand)] hover:underline">All services →</Link>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t:"Web Design", d:"Conversion-first websites that turn clicks into clients.", h:`/${locale}/services/web-design` },
              { t:"SEO", d:"Topic clusters, technical SEO, and content that ranks & converts.", h:`/${locale}/services/seo` },
              { t:"WordPress", d:"Fast, secure, scalable WordPress builds and care plans.", h:`/${locale}/services/wordpress` },
              { t:"App UI/UX", d:"Usable, beautiful product design.", h:`/${locale}/services/app-design` },
              { t:"Brand & Copy", d:"Positioning, messaging, and on-brand copy that sells.", h:`/${locale}/services/branding-copy` },
              { t:"Growth Strategy", d:"Audits to roadmaps—moves that drive ROI.", h:`/${locale}/services/business-strategy` },
            ].map(s => (
              <Link key={s.t} href={s.h} className="card hover:shadow-xl transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand)] text-white"><span className="text-sm font-bold">↗</span></div>
                <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand)]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-neutral-200">
        <div className="container-max py-16 md:py-24 relative">
          <div className="rounded-3xl bg-neutral-900 text-white p-8 md:p-14 shadow-xl">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl md:text-4xl font-bold">Get your free 30-minute Growth Blueprint</h2>
                <p className="mt-3 text-neutral-300">A practical, prioritized plan for better conversions, faster pages, and more qualified leads.</p>
              </div>
              <div className="md:col-span-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                  <Link href={`/${locale}/blueprint`} className="btn bg-white text-neutral-900 hover:bg-neutral-100">Book a timeslot</Link>
                  <Link href={`/${locale}/pricing`} className="btn border border-white/20 hover:bg-white/10">See pricing</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
