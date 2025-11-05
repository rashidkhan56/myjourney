import React from "react";
import { createClient } from "@/prismicio";
import NavBar from "@/components/NavBar";
import type { SettingsDocument } from "../../prismicio-types";
import * as prismic from "@prismicio/client";

// Fallback settings structure
const getFallbackSettings = (): SettingsDocument => {
  const now = new Date().toISOString();
  return {
    id: "fallback",
    uid: null,
    url: "",
    type: "settings",
    href: "",
    tags: [],
    first_publication_date: now as prismic.TimestampField,
    last_publication_date: now as prismic.TimestampField,
    slugs: [],
    linked_documents: [],
    lang: "en-us",
    alternate_languages: [],
    data: {
      name: "Abdul Rashid Khan" as prismic.KeyTextField,
      nav_item: [],
      cta_link: { link_type: prismic.LinkType.Media } as prismic.LinkField,
      cta_label: "" as prismic.KeyTextField,
      x_link: { link_type: prismic.LinkType.Media } as prismic.LinkField,
      github_link: { link_type: prismic.LinkType.Media } as prismic.LinkField,
      linkedin_link: { link_type: prismic.LinkType.Media } as prismic.LinkField,
      instagram_link: { link_type: prismic.LinkType.Media } as prismic.LinkField,
      meta_title: "Portfolio" as prismic.KeyTextField,
      meta_description: "Portfolio website" as prismic.KeyTextField,
      og_image: {} as prismic.ImageField<never>,
    },
  } as unknown as SettingsDocument;
};

export default async function Header() {
  try {
    const client = createClient();
    const settings = await client.getSingle("settings");
    return (
      <header className="sticky top-0 z-50 mx-auto max-w-7xl">
        <NavBar settings={settings} />
      </header>
    );
  } catch (error) {
    console.error("Failed to fetch settings for Header:", error);
    const fallbackSettings = getFallbackSettings();
    return (
      <header className="sticky top-0 z-50 mx-auto max-w-7xl">
        <NavBar settings={fallbackSettings} />
      </header>
    );
  }
}