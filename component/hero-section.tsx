"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Rooted in Tradition",
    description:
      "Ancient Gurukul wisdom combined with modern skills to shape confident and capable learners.",
  },
  {
    title: "Prepared for the Future",
    description:
      "Develop communication, critical thinking, AI literacy and leadership skills for tomorrow.",
  },
  {
    title: "Building Future Leaders",
    description:
      "Helping students become disciplined, confident and purpose-driven individuals.",
  },
];

const cornerImages = [
  {
    src: "/images/top-left.png",
    className: "left-0 top-0 w-[185px] sm:w-[260px] lg:w-[360px] xl:w-[420px]",
  },
  {
    src: "/images/top-right.png",
    className: "right-0 top-0 w-[185px] sm:w-[260px] lg:w-[360px] xl:w-[420px]",
  },
  {
    src: "/images/bottom-left.png",
    className:
      "bottom-0 left-0 w-[165px] sm:w-[230px] lg:w-[310px] xl:w-[350px]",
  },
  {
    src: "/images/bottom-right.png",
    className:
      "bottom-0 right-0 w-[165px] sm:w-[230px] lg:w-[310px] xl:w-[350px]",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const entranceDelay = (delay: number) => (reduceMotion ? 0 : delay);

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#FFF9EE] text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,#FFFDF7_0%,#FFF9EE_48%,#F8E7CF_100%)] dark:bg-[radial-gradient(circle_at_center,#2A1910_0%,#21130C_48%,#160C07_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#E9962F]/8 to-transparent dark:from-[#D4A72C]/5" />

      {cornerImages.map((image) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: entranceDelay(0.05),
            ease: "easeOut",
          }}
          className={`pointer-events-none absolute z-0 ${image.className}`}
        >
          <Image
            src={image.src}
            alt=""
            width={420}
            height={420}
            priority
            className="h-auto w-full object-contain"
          />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-5 py-14 text-center sm:px-8 lg:py-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
            scale: reduceMotion ? 1 : 0.94,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(0.72),
            ease: "easeOut",
          }}
        >
          <Image
            src="/images/lotus.png"
            alt="Lotus"
            width={96}
            height={96}
            priority
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(1.02),
            ease: "easeOut",
          }}
          className="mt-3"
        >
          <p className="font-serif text-sm font-semibold text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
            विद्या दादाती विनायम
          </p>
          <div className="mx-auto mt-2 h-px w-16 bg-[#D4A72C]/65" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.56,
            delay: entranceDelay(1.2),
            ease: "easeOut",
          }}
          className="mt-7 min-h-[190px] w-full max-w-4xl sm:min-h-[220px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -18 }}
              transition={{ duration: reduceMotion ? 0 : 0.34 }}
            >
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-[#2E2118] sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#F8EBCF]">
                {slides[currentSlide].title}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B5646] sm:text-lg sm:leading-8 md:text-xl dark:text-[#CDBB9E]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(1.62),
            ease: "easeOut",
          }}
          className="mt-3 flex flex-col items-center gap-4"
        >
          <Link
            href="/courses"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#315C45] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(49,92,69,0.2)] transition hover:bg-[#274B38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EE] dark:focus-visible:ring-offset-[#160C07]"
          >
            Start Learning
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="flex items-center gap-3" aria-label="Hero slides">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show ${slide.title}`}
                aria-current={currentSlide === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#E9962F]"
                    : "w-2 bg-[#DFC69E] hover:bg-[#D4A72C]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
