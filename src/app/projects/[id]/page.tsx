import { Metadata } from "next";
import { notFound } from "next/navigation";
import StaticProjectBody from "@/components/StaticProjectBody";
import { staticProjects } from "@/data/staticProjects";
import { generateMetadata as generateSiteMetadata, siteConfig } from "@/data/siteConfig";

type Params = { id: string };

export default function ProjectPage({ params }: { params: Params }) {
  const project = staticProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <StaticProjectBody project={project} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = staticProjects.find((p) => p.id === params.id);

  if (!project) {
    return generateSiteMetadata({
      title: "Project Not Found | Portfolio",
      description: "The requested project could not be found",
    });
  }

  return generateSiteMetadata({
    title: `${project.title} | ${siteConfig.owner.name}`,
    description: project.description,
  });
}

export async function generateStaticParams() {
  return staticProjects.map((project) => ({
    id: project.id,
  }));
}

