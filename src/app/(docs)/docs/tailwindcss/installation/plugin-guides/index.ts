import { Page, Step, Tab, Tile } from "./utils";

export interface Guide {
  page: Page;
  slug: string;
  tile: Tile;
  steps: Step[];
  tabs?: Tab[];
}

const guides: Guide[] = await create({
  cli: () => import("./cli"),
  postcss: () => import("./postcss"),
  vite: () => import("./vite"),
});

async function create(list: Record<string, () => Promise<any>>): Promise<Guide[]> {
  return await Promise.all(
    Object.entries(list).map(async ([slug, mod]) => {
      return Object.create(await mod(), {
        slug: { value: slug },
      });
    }),
  );
}

export async function loadGuide(slug: string): Promise<Guide | null> {
  return guides.find((guide) => guide.slug === slug) ?? null;
}

export async function loadGuides(): Promise<Guide[]> {
  return Object.values(guides);
}