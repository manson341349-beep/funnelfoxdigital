import React from "react";
import Link from "next/link";
import { getAllMdx } from "@/lib/content";

export const metadata = {
  title: "Case Studies | FunnelFox Digital"
};

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
  const cases = getAllMdx("cases");

  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Case Studies</h1>
      <p className="text-lg text-neutral-600 mt-4 mb-8">
        Real results from our digital marketing campaigns
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map(({ slug, frontmatter }) => (
          <Link key={slug} href={`/${locale}/cases/${slug}`} className="card hover:shadow-xl transition group">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                Case Study
              </span>
              <div className="text-sm text-neutral-500">
                {new Date(frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short'
                })}
              </div>
            </div>
            <h3 className="text-xl font-semibold group-hover:text-[var(--brand)] transition-colors">
              {frontmatter.title}
            </h3>
            <p className="mt-2 text-neutral-600">{frontmatter.excerpt}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand)]">
              View Case Study →
            </span>
          </Link>
        ))}
      </div>

      {cases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500">No case studies found.</p>
        </div>
      )}
    </main>
  );
}