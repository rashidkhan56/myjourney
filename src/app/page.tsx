import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

// Static homepage metadata - fully under your control
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.homepage.meta_title,
  description: siteConfig.homepage.meta_description,
});

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return <SliceZone slices={page.data.slices} components={components} />;
}