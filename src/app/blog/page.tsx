import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import StaticBlogsList from "@/components/StaticBlogsList";
import { staticBlogs } from "@/data/staticBlogs";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

// Static blog page metadata - fully under your control
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.blog.meta_title,
  description: siteConfig.blog.meta_description,
});

export default function BlogPage() {
  return (
    <Bounded>
      <Heading size="xl" className="mb-8">
        ARK&apos;s Blog
      </Heading>
      <div className="mb-10">
        <p className="text-xl text-slate-300">
          Welcome to <strong>Abdul Rashid Khan (ARK)</strong>&apos;s blog. 
          Explore articles on web development, AI, blockchain, and the latest in technology.
        </p>
      </div>
      <StaticBlogsList blogs={staticBlogs} viewMoreText="Read More" />
    </Bounded>
  );
}

