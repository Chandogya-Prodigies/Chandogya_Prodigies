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
    label: "The Problem",
    title: "Beyond Memorization",
    text: "Modern education often teaches children what to remember, but not always how to think, question and understand life deeply.",
    cloudClass:
      "left-1/2 top-8 w-[min(88vw,500px)] lg:left-[32%] lg:top-[-8%] lg:w-[540px]",
    contentClass: "px-14 pb-8 pt-16 sm:px-20 sm:pt-20 lg:px-24 lg:pt-24",
  },
  {
    video: "/videos/video02.mp4",
    cloud: "/images/clouds.png",
    label: "The Origin",
    title: "A Return to Gurukul Wisdom",
    text: "Chandogya Prodigies brings back mentorship, discipline, curiosity and learning through real experiences.",
    cloudClass:
      "left-1/2 top-8 w-[min(88vw,500px)] lg:left-[76%] lg:top-[-9%] lg:w-[560px]",
    contentClass: "px-14 pb-8 pt-16 sm:px-20 sm:pt-20 lg:px-24 lg:pt-24",
  },
  {
    video: "/videos/video03.mp4",
    cloud: "/images/clouds.png",
    label: "The Vision",
    title: "Prepared for the Future",
    text: "We blend ancient Indian wisdom with modern skills so children become confident, thoughtful and future-ready learners.",
    cloudClass:
      "left-1/2 top-8 w-[min(88vw,500px)] lg:left-[25%] lg:top-[-9%] lg:w-[560px]",
    contentClass: "px-14 pb-8 pt-16 sm:px-20 sm:pt-20 lg:px-24 lg:pt-24",
  },
];

export default function StorySection() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_SLIDE_TIME);

    return () => clearInterval(timer);
  }, []);

  const story = stories[active];

  return (
    <section className="relative overflow-hidden bg-[#FFF9EE] py-20 text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FFFDF7_0%,#FFF9EE_42%,#F7EAD7_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,#2A1910_0%,#21130C_42%,#160C07_100%)]" />

      <div className="relative z-10">
        <div className="mx-auto mb-10  px-5 text-center sm:px-8">
          <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
            OUR STORY
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
            Where Ancient Wisdom Meets Modern Learning
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-[#D4A72C]/65" />
        </div>

        <div className="relative h-[620px] w-full overflow-hidden border-y border-[#D4A72C]/25 bg-[#2E2118] shadow-[0_24px_70px_rgba(64,31,9,0.18)] sm:h-[590px] lg:h-[560px] dark:border-[#D4A72C]/20 dark:bg-[#0C0503] dark:shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
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
                style={{
                  filter: "brightness(0.82) saturate(0.96)",
                }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,12,7,0.42),rgba(22,12,7,0.08)_45%,rgba(22,12,7,0.34)),linear-gradient(0deg,rgba(22,12,7,0.42),transparent_45%)]" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FFF9EE]/12 to-transparent dark:from-[#D4A72C]/8" />

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
                  className="w-full object-contain opacity-[0.94] drop-shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                  priority
                />

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center ${story.contentClass}`}
                >
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#C96F1A]">
                    {story.label}
                  </p>

                  <h3 className="mt-2 max-w-[26rem] font-serif text-xl font-semibold leading-tight text-[#2E2118] sm:text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 max-w-[22rem] text-sm leading-6 text-[#6B5646] sm:text-base">
                    {story.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            aria-label="Previous story"
            className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-[#160C07]/45 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#315C45]/80 sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next story"
            className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-[#160C07]/45 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#315C45]/80 sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to story ${index + 1}`}
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
