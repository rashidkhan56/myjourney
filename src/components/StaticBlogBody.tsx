import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { StaticBlog } from "@/data/staticBlogs";
import Image from "next/image";

export default function StaticBlogBody({ blog }: { blog: StaticBlog }) {
  function formatDate(dateString: string) {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", dateOptions).format(
      new Date(dateString)
    );
  }

  const formattedDate = formatDate(blog.date);

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1" className="text-3xl md:text-6xl lg:text-8xl">{blog.title}</Heading>
        <div className="flex flex-wrap gap-2 md:gap-4 text-green-400 text-sm md:text-xl font-bold pt-2 lg:pt-2">
          {blog.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <p className="mt-6 md:mt-8 border-b border-slate-600 text-base md:text-xl font-medium text-slate-300 pb-2">
          {formattedDate}
        </p>
        <div className="prose prose-base md:prose-lg prose-invert mt-8 md:mt-12 w-full max-w-full lg:mt-20">
          {blog.content.map((block, index) => {
            if (block.type === "text") {
              return (
                <p key={index} className="text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  {block.content}
                </p>
              );
            } else if (block.type === "image") {
              return (
                <div key={index} className="my-6 md:my-8 relative w-full">
                  <Image
                    src={block.content}
                    alt={`${blog.title} illustration`}
                    width={1200}
                    height={675}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </Bounded>
  );
}

