import { Metadata } from "next";
import { notFound } from "next/navigation";
import StaticBlogBody from "@/components/StaticBlogBody";
import { staticBlogs } from "@/data/staticBlogs";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

type Params = { id: string };

export default function Page({ params }: { params: Params }) {
  const blog = staticBlogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  return <StaticBlogBody blog={blog} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const blog = staticBlogs.find((b) => b.id === params.id);

  if (!blog) {
    return generateSiteMetadata({
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found",
    });
  }

  return generateSiteMetadata({
    title: `${blog.title} | ${siteConfig.owner.name}`,
    description: blog.description,
  });
}

export async function generateStaticParams() {
  return staticBlogs.map((blog) => ({
    id: blog.id,
  }));
}

