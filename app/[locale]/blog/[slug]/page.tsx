import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blogFs";

const fmt = (d: string) => 
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" });

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog | FunnelFox Digital" };
  const { title, excerpt, cover } = post.meta;
  return { 
    title: `${title} | FunnelFox Digital`, 
    description: excerpt, 
    openGraph: { images: [{ url: cover }] } 
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const { meta, source } = post;
  return (
    <main>
      <section className="border-b border-neutral-200">
        <div className="container-max py-10 md:py-14">
          <div className="text-xs text-neutral-500">{fmt(meta.date)}</div>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{meta.title}</h1>
          {meta.excerpt ? <p className="mt-3 text-neutral-600 max-w-2xl">{meta.excerpt}</p> : null}
          {meta.cover ? (
            <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
              <Image src={meta.cover} alt={meta.alt || meta.title} width={1280} height={720} className="h-full w-full object-cover" priority />
            </div>
          ) : null}
        </div>
      </section>

      <section className="container-max py-10 md:py-14 prose prose-neutral max-w-3xl">
        <MDXRemote source={source} />
      </section>
    </main>
  );
}