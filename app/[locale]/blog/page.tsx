import React from "react";
import Link from "next/link";
import { getAllMdx } from "@/lib/content";

export const metadata = { title: "Blog | FunnelFox Digital" };

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const posts = getAllMdx("blog");

  return (
    <main className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {posts.map(({ slug, frontmatter }) => (
          <Link key={slug} href={`/${locale}/blog/${slug}`} className="card hover:shadow-xl transition">
            <div className="text-sm text-neutral-500 mb-2">
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <h3 className="text-xl font-semibold">{frontmatter.title}</h3>
            <p className="mt-2 text-neutral-600">{frontmatter.excerpt}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--brand)]">Read →</span>
          </Link>
        ))}
      </div>
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500">No blog posts found.</p>
        </div>
      )}
    </main>
  );
}