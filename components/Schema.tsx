import React from "react";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const OrgSchema = () => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FunnelFox Digital",
      "url": "https://funnelfoxdigital.com",
      "logo": "https://funnelfoxdigital.com/favicon.svg",
      "sameAs": []
    }}
  />
);