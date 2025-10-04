import React from "react";
import { JsonLd } from "@/components/Schema";

export const metadata = { title: "Local SEO for Clinics in KL: A 30-Day Playbook | FunnelFox Digital" };
export default function Post(){
  return (
    <main className="container-max py-16">
      <article className="prose max-w-none">
        <h1>Local SEO for Clinics in KL: A 30-Day Playbook</h1>
        <p>Optimize your Google Business Profile, build local citations, and publish intent-matching service pages.</p>
        <hr/>
        <p><strong>CTA:</strong> <a href="/blueprint">Get your free Growth Blueprint →</a></p>
      </article>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Local SEO for Clinics in KL: A 30-Day Playbook",
          "author": {
            "@type": "Organization",
            "name": "FunnelFox Digital"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FunnelFox Digital"
          },
          "mainEntityOfPage": "https://funnelfoxdigital.com/blog/local-seo-kl"
        }}
      />
    </main>
  );
}