import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

// Static about page metadata - fully under your control
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.about.meta_title,
  description: siteConfig.about.meta_description,
});

export default async function AboutPage() {
  const client = createClient();
  const page = await client
    .getByUID("page", "about")
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

