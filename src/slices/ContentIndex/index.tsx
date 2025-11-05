import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ContentList from "./ContentList";
import StaticBlogsList from "@/components/StaticBlogsList";
import { createClient } from "@/prismicio";
import { staticBlogs } from "@/data/staticBlogs";

/**
 * Props for `ContentIndex`.
 */
export type ContentIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ContentIndex" Slices.
 */
const ContentIndex = async ({ slice, }: ContentIndexProps): Promise<JSX.Element> => {

  const client = createClient();
  const projects = await client.getAllByType("project");
  const contentType = slice.primary.content_type || "Blog"

  // Use static blogs instead of Prismic blog_post
  if (contentType === "Blog") {
    return (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <Heading size="xl" className="mb-8">
          {slice.primary.heading}
        </Heading>
        {isFilled.richText(slice.primary.description) && (
          <div className="prose prose-xl prose-invert mb-10">
            <PrismicRichText field={slice.primary.description}/>
          </div>
        )}
        <StaticBlogsList blogs={staticBlogs} viewMoreText={slice.primary.view_more_text || "Read More"} />
      </Bounded>
    );
  }

  // Use Prismic for projects
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description}/>
        </div>
      )}
      <ContentList
       items={projects} contentType={contentType} viewMoreText={slice.primary.view_more_text} fallbackItemImage={slice.primary.fallback_item_image}/>
    </Bounded>
  );
};

export default ContentIndex;
