"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_SLIDE_TIME = 30000;

const stories = [
  {
    video: "/videos/video01.mp4",
    cloud: "/images/clouds.png",
    label: "The Gap",
    title: "More Than Memorization",
    text: "Children learn facts every day, but they also need clarity, confidence, curiosity and values to use knowledge wisely.",
    cloudClass:
      "left-1/2 top-8 w-[min(86vw,480px)] lg:left-[32%] lg:top-[-7%] lg:w-[520px]",
    contentClass: "px-12 pb-4 pt-16 sm:px-18 sm:pt-20 lg:px-22 lg:pt-23",
  },
  {
    video: "/videos/video02.mp4",
    cloud: "/images/clouds.png",
    label: "The Calling",
    title: "A Return to Guided Learning",
    text: "Chandogya was created to bring mentorship, discipline and thoughtful learning back into a modern child's journey.",
    cloudClass:
      "left-1/2 top-8 w-[min(86vw,500px)] lg:left-[76%] lg:top-[-8%] lg:w-[540px]",
    contentClass: "px-11 pb-4 pt-18 sm:px-18 sm:pt-20 lg:px-22 lg:pt-23",
  },
  {
    video: "/videos/video03.mp4",
    cloud: "/images/clouds.png",
    label: "The Path",
    title: "Wisdom With Modern Skills",
    text: "We combine Indian wisdom with communication, critical thinking, technology awareness and personality development.",
    cloudClass:
      "left-1/2 top-8 w-[min(86vw,500px)] lg:left-[25%] lg:top-[-8%] lg:w-[540px]",
    contentClass: "px-12 pb-4 pt-16 sm:px-18 sm:pt-20 lg:px-22 lg:pt-23",
  },
];

export default function AboutStorySection() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const timer = window.setInterval(nextSlide, AUTO_SLIDE_TIME);

    return () => window.clearInterval(timer);
  }, []);

  const story = stories[active];

  return (
    <section className="relative overflow-hidden bg-[#FFF9EE] py-12 text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FFFDF7_0%,#FFF9EE_42%,#F7EAD7_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,#2A1910_0%,#21130C_42%,#160C07_100%)]" />

      <div className="relative z-10">
        <div className="mx-auto mb-5 max-w-3xl px-5 text-center sm:px-8">
          <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
            OUR ORIGIN
          </p>

          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#2E2118] md:text-4xl dark:text-[#F8EBCF]">
            Why Chandogya Was Created
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#6B5646] sm:text-base dark:text-[#CDBB9E]">
            Our story begins with a simple belief: education should shape how a
            child thinks, expresses, chooses and grows.
          </p>

          <div className="mx-auto mt-3 h-px w-20 bg-[#D4A72C]/65" />
        </div>

        <div className="relative h-[560px] w-full overflow-hidden border-y border-[#D4A72C]/25 bg-[#2E2118] shadow-[0_22px_62px_rgba(64,31,9,0.16)] sm:h-[530px] lg:h-[500px] dark:border-[#D4A72C]/20 dark:bg-[#0C0503] dark:shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.video}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <video
                key={story.video}
                src={story.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.8) saturate(0.95)" }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,12,7,0.44),rgba(22,12,7,0.08)_45%,rgba(22,12,7,0.36)),linear-gradient(0deg,rgba(22,12,7,0.44),transparent_45%)]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FFF9EE]/12 to-transparent dark:from-[#D4A72C]/8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`cloud-${active}`}
              initial={{ opacity: 0, scale: 0.86, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -20 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className={`absolute z-20 -translate-x-1/2 ${story.cloudClass}`}
            >
              <div className="relative">
                <Image
                  src={story.cloud}
                  alt=""
                  width={700}
                  height={420}
                  priority
                  className="w-full object-contain opacity-80 drop-shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                />

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center ${story.contentClass}`}
                >
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#C96F1A]">
                    {story.label}
                  </p>

                  <h3 className="mt-2 max-w-[25rem] font-serif text-xl font-semibold leading-tight text-[#2E2118] sm:text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 max-w-[21rem] text-sm leading-6 text-[#6B5646] sm:text-base">
                    {story.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous story"
            className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-[#160C07]/45 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#315C45]/80 sm:left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next story"
            className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-[#160C07]/45 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#315C45]/80 sm:right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            {stories.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Go to ${item.label}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-9 bg-[#E9962F]"
                    : "w-2 bg-[#F8EBCF]/80 hover:bg-[#F8EBCF]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
