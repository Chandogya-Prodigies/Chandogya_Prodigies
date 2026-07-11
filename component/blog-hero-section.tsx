"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Blogs",
    title: "Prefer a Discussion before deciding?",
    description:
      "Our team is here to help you with resources, guidance and course clarity before you take the next step.",
    image: "/images/blog-hero-1.png",
  },
  {
    eyebrow: "Learning Notes",
    title: "Ancient wisdom, modern parenting questions.",
    description:
      "Read practical reflections on mentorship, discipline, confidence and the Gurukul way of learning.",
    image: "/images/blog-hero-2.avif",
  },
  {
    eyebrow: "Guides",
    title: "Understand the journey before choosing a course.",
    description:
      "Explore thoughtful articles that help families choose the right model, pace and skill path for every learner.",
    image: "/images/blog-hero-3.jpeg",
  },
];

export default function BlogHeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#D9E6D7] text-[#3A1D18] dark:bg-[#160C07] dark:text-[#F8EBCF]">
      {slides.map((item, index) => (
        <Image
          key={item.image}
          src={item.image}
          alt=""
          fill
          preload={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#EAF2EA]/18 via-[#EAF2EA]/48 to-[#EAF2EA]/14 dark:from-[#160C07]/68 dark:via-[#160C07]/52 dark:to-[#160C07]/36" />
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[#EAF2EA]/58 backdrop-blur-[2px] dark:bg-[#160C07]/58" />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-end px-5 pb-16 sm:px-8 lg:px-16">
        <div className="max-w-6xl">
          <div className="inline-flex rounded-full bg-[#8E3A21]/82 px-8 py-4 text-3xl text-white shadow-[0_14px_34px_rgba(58,29,24,0.22)] dark:bg-[#D4A72C]/82 dark:text-[#160C07]">
            {slide.eyebrow}
          </div>

          <h1 className="mt-5 max-w-5xl font-serif text-5xl font-semibold leading-tight text-[#4B1F1B] sm:text-6xl lg:text-7xl dark:text-[#F8EBCF]">
            {slide.title}
          </h1>

          <p className="mt-5 max-w-5xl text-2xl leading-[1.45] text-[#3F3836] sm:text-3xl dark:text-[#CDBB9E]">
            {slide.description}
          </p>

          <div className="mt-8 flex gap-4" aria-label="Blog hero slides">
            {slides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={active === index}
                className={`h-5 w-5 rounded-full border-2 border-white transition ${
                  active === index
                    ? "bg-white"
                    : "bg-transparent hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
