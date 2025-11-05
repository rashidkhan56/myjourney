import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Component for "Education" - Static version
 */
const Education = (): JSX.Element => {
  return (
    <Bounded
      data-slice-type="education"
      data-slice-variation="default"
    >
      <Heading as="h2" size="lg">
        Education
      </Heading>
      
      {/* Karakoram International University */}
      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          Karakoram International University
        </Heading>
        <span>Bachelor of Science</span>{" "}
        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>Software Engineering</span>
        </div>
        <div className="mt-1 flex w-fit items-center gap-1 text-1xl font-semibold tracking-tight text-slate-400">
          <span>2025 - 2029</span>{" "}
        </div>
      </div>

      {/* Yaisn Higher Secondary School */}
      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          Yaisn Higher Secondary School Taus
        </Heading>
        <span>HSSC</span>{" "}
        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>Higher Secondary School Certificate</span>
        </div>
        <div className="mt-1 flex w-fit items-center gap-1 text-1xl font-semibold tracking-tight text-slate-400">
          <span> 2021 - 2023</span>{" "}
        </div>
      </div>
    </Bounded>
  );
};

export default Education;
