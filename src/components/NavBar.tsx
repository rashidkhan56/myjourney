"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { Content, KeyTextField, asLink } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";

export default function NavBar({
  settings,
}: {
  settings: Content.SettingsDocument;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open and prevent horizontal scroll always
  React.useEffect(() => {
    // Prevent horizontal scroll
    document.body.style.overflowX = 'hidden';
    
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [open]);

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between bg-white/80 backdrop-blur-md px-3 py-3 md:m-4 md:flex-row md:items-center md:rounded-xl md:px-4 shadow-sm md:shadow-none">
        <div className="flex items-center justify-between w-full md:w-auto">
          <NameLogo name={settings.data.name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-2xl text-slate-800 md:hidden hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div
          className={clsx(
            "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
            open ? "opacity-100 z-[9998]" : "opacity-0 pointer-events-none -z-10"
          )}
          onClick={() => setOpen(false)}
        />
        
        {/* Mobile Menu Sidebar */}
        <div
          className={clsx(
            "fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
            open ? "translate-x-0 z-[9999]" : "translate-x-full -z-10"
          )}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4 border-b border-slate-200">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <MdClose className="text-2xl" />
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex flex-col p-4 gap-1 h-[calc(100%-80px)] overflow-y-auto">
            {settings.data.nav_item.map(({ link, label }) => (
              <li key={label} className="list-none">
                <PrismicNextLink
                  className={clsx(
                    "block px-4 py-3 rounded-lg font-medium transition-colors text-base",
                    pathname.includes(asLink(link) as string)
                      ? "bg-green-300 text-slate-900"
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                  field={link}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
            
            {/* CTA Button */}
            <li className="list-none mt-2">
              <a
                href="https://wa.me/923492777660"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group relative flex w-full text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105"
              >
                <span className="absolute inset-0 z-0 h-full translate-y-9 bg-green-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                <span className="relative flex items-center justify-center gap-2">
                  Contact
                </span>
              </a>
            </li>
          </nav>
        </div>
        <DesktopMenu settings={settings} pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: KeyTextField }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-base md:text-xl font-extrabold tracking-tight text-slate-900 truncate max-w-[200px] md:max-w-none"
    >
     Abdul Rashid Khan
    </Link>
  );
}

function DesktopMenu({
  settings,
  pathname,
}: {
  settings: Content.SettingsDocument;
  pathname: string;
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex">
      {settings.data.nav_item.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <PrismicNextLink
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900",
              )}
              field={link}
              aria-current={
                pathname.includes(asLink(link) as string) ? "page" : undefined
              }
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full rounded bg-green-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                  pathname.includes(asLink(link) as string)
                    ? "translate-y-6"
                    : "translate-y-8",
                )}
              />
              <span className="relative">{label}</span>
            </PrismicNextLink>
          </li>
          {index < settings.data.nav_item.length - 1 && (
            <span
              className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <a
          href="https://wa.me/923492777660"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ml-3"
        >
          <span className="absolute inset-0 z-0 h-full translate-y-9 bg-green-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
          <span className="relative flex items-center justify-center gap-2">
            Contact
          </span>
        </a>
      </li>
    </div>
  );
}