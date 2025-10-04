import React from "react";

export const metadata = {
  title: "About Us | FunnelFox Digital"
};

export default function Page() {
  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-neutral-600">
        We are a growth-first studio delivering conversion-focused websites, SEO and funnels.
      </p>
    </main>
  );
}