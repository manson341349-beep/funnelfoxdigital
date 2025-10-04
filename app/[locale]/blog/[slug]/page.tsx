import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdx, listMdx } from "@/lib/content";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ShareButton from "@/components/blog/ShareButton";

export async function generateStaticParams() {
  return listMdx("blog").map(slug => ({ slug }));
}

export async function generateMetadata({ 
  params: { slug } 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const { frontmatter } = getMdx("blog", slug);
  
  return {
    title: `${frontmatter.title} | FunnelFox Digital`,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: ['FunnelFox Digital'],
      images: frontmatter.cover ? [
        {
          url: frontmatter.cover,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.cover ? [frontmatter.cover] : [],
    },
  };
}

export default async function BlogPost({ params: { slug } }: { params: { slug: string } }) {
  const { frontmatter, content } = getMdx("blog", slug);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="bg-neutral-50 border-b border-neutral-200">
        <div className="container-max py-4">
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Link href="/en" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-orange-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-neutral-900">{frontmatter.title}</span>
          </div>
        </div>
      </nav>

      <article className="container-max py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            {/* Cover Image */}
            {frontmatter.cover && (
              <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-neutral-100">
                <Image
                  src={frontmatter.cover}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            )}

            {/* Tags */}
            {frontmatter.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {frontmatter.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-8 border-b border-neutral-200">
              <div className="flex items-center space-x-4 text-neutral-600">
                <time dateTime={frontmatter.date} className="text-sm">
                  {new Date(frontmatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-neutral-300">•</span>
                <span className="text-sm">By FunnelFox Digital</span>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-neutral-600">Share:</span>
                <ShareButton title={frontmatter.title} excerpt={frontmatter.excerpt} />
              </div>
            </div>

            {/* Excerpt */}
            {frontmatter.excerpt && (
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light">
                {frontmatter.excerpt}
              </p>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-neutral max-w-none
                         prose-headings:font-bold prose-headings:text-neutral-900
                         prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6
                         prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5
                         prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                         prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
                         prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-neutral-900 prose-strong:font-semibold
                         prose-ul:my-6 prose-ol:my-6
                         prose-li:text-neutral-700 prose-li:mb-2
                         prose-blockquote:border-l-4 prose-blockquote:border-orange-500 
                         prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600
                         prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                         prose-pre:bg-neutral-900 prose-pre:text-white prose-pre:rounded-lg
                         prose-img:rounded-lg prose-img:shadow-sm">
            <MDXRemote source={content} />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-12 border-t border-neutral-200">
            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Ready to Implement These Strategies?
              </h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                Get a free consultation to discuss how we can help you apply these insights to grow your business.
              </p>
              <Link
                href="/en/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-8 text-center">
              <Link
                href="/en/blog"
                className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Articles
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}