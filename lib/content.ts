import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export function getMdx(dir: string, slug: string) {
  const file = path.join(root, "content", dir, `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as any, content };
}

export function listMdx(dir: string) {
  const d = path.join(root, "content", dir);
  return fs.readdirSync(d).filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

export function getAllMdx(dir: string) {
  const slugs = listMdx(dir);
  return slugs.map(slug => {
    const { frontmatter } = getMdx(dir, slug);
    return {
      slug,
      frontmatter
    };
  }).sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}