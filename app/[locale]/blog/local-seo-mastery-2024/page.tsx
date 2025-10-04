/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Local SEO Mastery: Dominating Search Results in Your City | FunnelFox Digital",
  description: "Master the art of local SEO with proven strategies that help businesses rank higher in local search results, attract more customers, and build a strong online presence in their target geographic areas.",
};

export default function Page(){
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="container-max py-10 md:py-14">
          <div className="text-xs text-neutral-500">January 22, 2024</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Local SEO Mastery: Dominating Search Results in Your City</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">Master the art of local SEO with proven strategies that help businesses rank higher in local search results, attract more customers, and build a strong online presence in their target geographic areas.</p>
          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image src="/media/blog/local-seo.webp" alt="Local SEO Strategy Guide" width={1280} height={720} className="h-full w-full object-cover" priority />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container-max py-10 md:py-14 prose prose-neutral max-w-3xl">
        <p><strong>Summary.</strong> Local SEO is essential for businesses targeting customers in specific geographic areas. By optimizing for local search, businesses can improve their visibility in local search results, attract more qualified leads, and build a strong online presence in their target markets.</p>
        <h2>Key ideas</h2>
        <ul>
          <li>Optimize Google My Business profile with complete and accurate information.</li>
          <li>Build local citations and maintain consistent NAP (Name, Address, Phone) data.</li>
          <li>Generate positive customer reviews and respond to feedback professionally.</li>
        </ul>
        <h2>Checklist</h2>
        <ol>
          <li>Claim and optimize Google My Business listing</li>
          <li>Conduct local keyword research and optimization</li>
          <li>Build local citations and directory listings</li>
          <li>Implement local schema markup</li>
          <li>Monitor and manage online reviews</li>
        </ol>
        <p>Have questions? <Link href="/contact">Talk to us</Link> or <Link href="/blueprint">get a free Growth Blueprint</Link>.</p>
      </section>
    </main>
  );
}