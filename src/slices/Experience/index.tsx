import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Component for "Experience" - Static version
 */
const Experience = (): JSX.Element => {
  return (
    <Bounded
      data-slice-type="experience"
      data-slice-variation="default"
    >
      <Heading as="h2" size="lg">
        Experience
      </Heading>
      
      {/* Calibreon International */}
      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          BACKEND & BLOCKCHAIN DEVELOPER
        </Heading>
        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>Calibreon International</span>
        </div>
        <div className="mt-1 flex w-fit items-center gap-1 text-1xl font-semibold tracking-tight text-slate-400">
          <span>Aug 2024 - Present</span>
        </div>
      </div>

      {/* uExel */}
      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
        <Heading as="h3" size="sm">
          BACKEND & BLOCKCHAIN DEVELOPER
        </Heading>
        <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
          <span>uExel</span>
        </div>
        <div className="mt-1 flex w-fit items-center gap-1 text-1xl font-semibold tracking-tight text-slate-400">
          <span>Sep 2022 - June 2024</span>
        </div>
      </div>
    </Bounded>
  );
};

export default Experience;