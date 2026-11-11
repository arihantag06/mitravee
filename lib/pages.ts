import { pages, type Cta, type PageConfig } from "@/content/site";

export function pageHref(page: PageConfig) {
  return `/${page.slug}`;
}

export function findPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}

export const homePage = findPage("") ?? pages[0];

export const navLinks: Cta[] = pages
  .filter((page) => page.showInNav !== false)
  .map((page) => ({ label: page.label, href: pageHref(page) }));
