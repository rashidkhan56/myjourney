"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

// Dummy data - update this according to your needs
const dummyTechData = [
  { tech_name: "React", tech_color: "#61DAFB" },
  { tech_name: "Next.js", tech_color: "#FFFFFF" },
  { tech_name: "Express", tech_color: "#F7DF1E" },
  { tech_name: "MongoDB", tech_color: "#47A248" },
  { tech_name: "AWS", tech_color: "#FF9900" },
  { tech_name: "Web3", tech_color: "#627EEA" },
  { tech_name: "Solidity", tech_color: "#E34F26" },
];

const dummyHeading = "Technologies I Work With";

/**
 * Component for "TechList" Slices.
 */
const TechList = (): JSX.Element => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        },
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section
      className="wrapper overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="md" className="mb-8 lg:text-8xl" as="h2">
          {dummyHeading}
        </Heading>
      </Bounded>

      {dummyTechData.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  "tech-item text-6xl font-extrabold uppercase tracking-tighter"
                }
                style={{
                  color: index === 7 && tech_color ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-2xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;