import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageSections } from "@/components/page-sections";
import { pages } from "@/content/site";
import { findPage } from "@/lib/pages";

export function generateStaticParams() {
  return pages.filter((page) => page.slug).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const page = findPage((await params).slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function Page({ params }: PageProps<"/[slug]">) {
  const page = findPage((await params).slug);
  if (!page || !page.slug) notFound();
  return <PageSections key={page.slug} sections={page.sections} />;
}
