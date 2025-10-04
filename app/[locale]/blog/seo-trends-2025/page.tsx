/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SEO Trends 2025: What Malaysian Businesses Need to Know | FunnelFox Digital",
  description: "Stay ahead of the curve with the latest SEO trends and algorithm updates",
};

export default function Page(){
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="container-max py-10 md:py-14">
          <div className="text-xs text-neutral-500">January 2, 2025</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">SEO Trends 2025: What Malaysian Businesses Need to Know</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">Stay ahead of the curve with the latest SEO trends and algorithm updates</p>
          <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image src="/blog/local-seo.webp" alt="SEO Trends 2025" width={1280} height={720} className="h-full w-full object-cover" priority />
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="container-max py-10 md:py-14 prose prose-neutral max-w-3xl">
        <p><strong>Summary.</strong> The SEO landscape is constantly evolving, and 2025 brings new challenges and opportunities for Malaysian businesses. Stay competitive by understanding the latest trends, algorithm updates, and optimization strategies that will shape search rankings in the coming year.</p>
        <h2>Key ideas</h2>
        <ul>
          <li>AI-powered search experiences are changing how users find information.</li>
          <li>Core Web Vitals and user experience signals continue to gain importance.</li>
          <li>Local SEO becomes more sophisticated with enhanced location-based features.</li>
        </ul>
        <h2>Checklist</h2>
        <ol>
          <li>Audit current SEO performance and identify gaps</li>
          <li>Optimize for AI-powered search features</li>
          <li>Improve Core Web Vitals and page experience</li>
          <li>Enhance local SEO strategies for Malaysian market</li>
          <li>Monitor algorithm updates and adjust strategies</li>
        </ol>
        <p>Have questions? <Link href="/contact">Talk to us</Link> or <Link href="/blueprint">get a free Growth Blueprint</Link>.</p>
      </section>
    </main>
  );
}