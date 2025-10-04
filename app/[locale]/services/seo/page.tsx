import React from "react";
import { JsonLd } from "@/components/Schema";

export const metadata = {
  title: "SEO Services | FunnelFox Digital"
};

export default function Page() {
  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">SEO Services</h1>
      <p className="mt-4 text-neutral-600">
        Topic clusters, technical SEO, and content that ranks & converts.
      </p>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SEO Services",
          "provider": {
            "@type": "Organization",
            "name": "FunnelFox Digital"
          }
        }}
      />
    </main>
  );
}