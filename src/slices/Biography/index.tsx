"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import Avatar from "./Avatar";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="xl" className="col-start-1">
        About Me!
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
        I&apos;m Abdul Rashid Khan, a passionate Backend and Blockchain Developer with over five years of experience turning complex ideas into seamless digital realities. <br /><br />
        Born and raised in a world where technology constantly evolves, I&apos;ve always been fascinated by how code can shape the future. My journey has led me deep into the realms of Node.js, Express.js, Next.js, React, and Web3, building scalable backend systems and integrating blockchain solutions on Solana and Ethereum. <br /><br />
        What drives me isn&apos;t just writing efficient code it&apos;s creating systems that empower innovation and bring real-world impact. I thrive on challenges that push me to learn, adapt, and craft solutions that merge technology with purpose. <br /><br />
        In essence, I&apos;m a developer who bridges traditional backend engineering with the dynamic world of blockchain transforming abstract ideas into powerful, future-ready applications.
        </div>
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/pdf/myjourney.pdf.pdf';
            link.download = 'myjourney.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className={clsx(
            "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 cursor-pointer",
          )}
        >
          <span
            className={clsx(
              "absolute inset-0 z-0 h-full translate-y-9 bg-green-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
            )}
          />
          <span className="relative flex items-center justify-center gap-2">
            Resume <MdArrowOutward className="inline-block" />
          </span>
        </button>
        <Avatar
          image={slice.primary.avatar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
