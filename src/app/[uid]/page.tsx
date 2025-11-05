import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  
  try {
    const page = await client.getByUID("page", params.uid);
    
    // Use Prismic data if available, otherwise use default from config
    return generateSiteMetadata({
      title: page.data.meta_title || `${params.uid} | ${siteConfig.owner.name}`,
      description: page.data.meta_description || siteConfig.about.meta_description,
    });
  } catch (error) {
    // If page not found in Prismic, return default metadata
    return generateSiteMetadata({
      title: `${params.uid} | ${siteConfig.owner.name}`,
      description: siteConfig.about.meta_description,
    });
  }
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
