import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import StaticProjectsList from "@/components/StaticProjectsList";
import { staticProjects } from "@/data/staticProjects";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

// Static projects page metadata - fully under your control
export const metadata: Metadata = generateSiteMetadata({
  title: siteConfig.projects.meta_title,
  description: siteConfig.projects.meta_description,
});

export default function ProjectsPage() {
  return (
    <Bounded>
      <Heading size="xl" className="mb-6 md:mb-8">
        ARK&apos;s Projects
      </Heading>
      <div className="prose prose-lg md:prose-xl prose-invert mb-6 md:mb-10">
        <p className="text-base md:text-lg">
          Welcome to <strong>Abdul Rashid Khan (ARK)</strong>&apos;s project portfolio. 
          Here are some of the projects I&apos;ve worked on. Each project showcases
          different technologies and problem-solving approaches.
        </p>
      </div>
      <StaticProjectsList projects={staticProjects} viewMoreText="View Details" />
    </Bounded>
  );
}

