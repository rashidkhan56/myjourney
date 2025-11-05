import clsx from "clsx";
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { isFilled } from "@prismicio/client";
import { FaGithub, FaTwitter, FaLinkedin, FaX, FaInstagram, FaXTwitter } from "react-icons/fa6";
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

export default async function Footer() {
  let settings: SettingsDocument;
  try {
    const client = createClient();
    settings = await client.getSingle("settings");
  } catch (error) {
    console.error("Failed to fetch settings for Footer:", error);
    settings = getFallbackSettings();
  }
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-green-400"
          >
           Abdul Rashid Khan
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} Abdul Rashid Khan
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <PrismicNextLink
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-green-400",
                    )}
                    field={link}
                  >
                    {label}
                  </PrismicNextLink>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          <Link
            href="https://github.com/rashidkhan56"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-green-400"
            aria-label={settings.data.name + " on GitHub"}
          >
            <FaGithub />
          </Link>
          
          <Link
            href="https://www.linkedin.com/in/abdul-rashid-khan-maitla11/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-green-400"
            aria-label={settings.data.name + " on LinkedIn"}
          >
            <FaLinkedin />
          </Link>
          
        </div>
      </div>
    </Bounded>
  );
}