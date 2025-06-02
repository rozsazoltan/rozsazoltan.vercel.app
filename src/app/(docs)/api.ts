import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function findMDXSlugs(dir: string, baseDir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const slugs: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (entry.isDirectory()) {
      const nestedSlugs = await findMDXSlugs(fullPath, baseDir);
      slugs.push(...nestedSlugs);
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      slugs.push(relativePath.slice(0, relativePath.length - 4));
    }
  }

  return slugs;
}

export async function getDocsPostBySlug(slug: string): Promise<{
  Component: React.FC;
  meta: {
    title: string;
    date?: string;
    excerpt?: React.ReactElement;
    description: string;
    image?: {
      src: string;
    };
    private?: boolean;
  };
  slug: string;
} | null> {
  try {
    const fullPath = path.join(__dirname, `../../docs/${slug}.mdx`);
    const exists = await fs.stat(fullPath).catch(() => null);
    if (!exists) return null;

    const module = await import(`../../docs/${slug}.mdx`);
    if (!module.default) return null;

    return {
      Component: module.default,
      meta: {
        title: module.title,
        description: module.description,
      },
      slug,
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getDocsPostSlugs(): Promise<string[]> {
  const docsDir = path.join(process.cwd(), "src/docs");
  const slugs = await findMDXSlugs(docsDir, docsDir);

  return slugs;
}

export function formatDate(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function nonNullable<T>(x: T | null): x is NonNullable<T> {
  return x !== null;
}
