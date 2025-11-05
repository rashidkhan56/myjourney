import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { StaticProject } from "@/data/staticProjects";
import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export default function StaticProjectBody({ project }: { project: StaticProject }) {
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

  const formattedDate = formatDate(project.date);

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1" className="text-2xl md:text-6xl lg:text-8xl">{project.title}</Heading>
        <div className="flex flex-wrap gap-2 md:gap-4 text-green-400 text-sm md:text-xl font-bold pt-2 lg:pt-2">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-600 pb-4">
          <p className="text-base md:text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-lg transition-colors duration-200 text-sm md:text-base"
            >
              <span>View Live Site</span>
              <MdOpenInNew className="text-lg md:text-xl" />
            </Link>
          )}
        </div>
        <div className="prose prose-base md:prose-lg prose-invert mt-8 md:mt-12 w-full max-w-full lg:mt-20">
          {project.content.map((block, index) => {
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
                    alt={`${project.title} screenshot`}
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

