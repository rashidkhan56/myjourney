"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticBlog } from "@/data/staticBlogs";

gsap.registerPlugin(ScrollTrigger);

type StaticBlogsListProps = {
  blogs: StaticBlog[];
  viewMoreText?: string;
};

export default function StaticBlogsList({
  blogs,
  viewMoreText = "Read More",
}: StaticBlogsListProps) {
  const component = useRef(null);
  const revealRef = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Animate list-items
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });
      return () => ctx.revert(); // cleanup!
    }, component);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      // Calculate speed and direction
      const speed = Math.sqrt(
        Math.pow(mousePos.x - lastMousePos.current.x, 2)
      );
      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;
          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation:
              speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
            opacity: 1,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert();
      }, component);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentItem]);

  // Preload images
  useEffect(() => {
    blogs.forEach((blog) => {
      if (!blog.hoverImage) return;
      const img = new Image();
      img.src = blog.hoverImage;
    });
  }, [blogs]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
  };

  const onMouseLeave = () => {
    setCurrentItem(null);
  };

  return (
    <div ref={component}>
      <ul
        className="grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
      >
        {blogs.map((blog, index) => (
          <li
            key={blog.id}
            className="list-item opacity-0"
            onMouseEnter={() => onMouseEnter(index)}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <Link
              href={`/blog/${blog.id}`}
              className="flex flex-col justify-between border-t border-t-slate-100 py-6 md:py-10 text-slate-200 md:flex-row"
              aria-label={blog.title}
            >
              <div className="flex flex-col gap-2 md:gap-3">
                <span className="text-xl md:text-3xl font-bold leading-tight">{blog.title}</span>
                <div className="flex flex-wrap gap-2 md:gap-3 text-green-400 text-sm md:text-lg font-bold">
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
              <span className="mt-4 md:mt-0 ml-0 md:ml-auto flex items-center gap-2 text-lg md:text-xl font-medium">
                {viewMoreText}
                <MdArrowOutward />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Hover Element - Hidden on mobile */}
      <div
        className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[240px] w-[240px] rounded-3xl bg-cover bg-center oppacity-0 transition-[background] duration-300 hidden md:block"
        style={{
          backgroundImage:
            currentItem !== null
              ? `url(${blogs[currentItem].hoverImage})`
              : "",
        }}
        ref={revealRef}
      ></div>
    </div>
  );
}

