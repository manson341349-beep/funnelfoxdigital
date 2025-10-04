import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdx, listMdx } from "@/lib/content";

export async function generateStaticParams() {
  return listMdx("blog").map(slug => ({ slug }));
}

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const { frontmatter, content } = getMdx("blog", slug);
  
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="text-gray-600 mb-4">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {frontmatter.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {frontmatter.excerpt}
            </p>
          )}
        </header>
        <div className="prose-content">
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
  );
}