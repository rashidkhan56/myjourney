import type { Metadata } from "next";
import {Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import  clsx  from "clsx";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";


const urbanist = Urbanist({ subsets: ["latin"] });

// Static metadata - fully under your control
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100 mt-0">
     
      <body className={clsx(urbanist.className, "relative min-h-screen")}>        
        <Header />
        {children} 
        <div className="absolute inset-0 -z-40 max-h-screen background-gradient"></div>
        <div className="absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
      <Footer />
      <PrismicPreview repositoryName= {repositoryName} />
      </body>
    </html>
  );
}
