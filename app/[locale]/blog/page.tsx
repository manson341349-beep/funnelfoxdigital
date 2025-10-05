import { getAllPosts } from "@/lib/blogFs";
import BlogIndexClient from "@/components/blog/BlogIndexClient";

export const metadata = {
  title: "Blog | FunnelFox Digital",
  description: "Expert digital marketing insights, SEO strategies, and growth tactics. Learn from real case studies and actionable guides to scale your business online."
};

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const posts = getAllPosts(); // already sorted by date desc
  return <BlogIndexClient posts={posts} locale={params.locale} />;
}