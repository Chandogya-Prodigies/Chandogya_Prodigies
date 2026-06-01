"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTO_SLIDE_TIME = 30000;

const stories = [
  {
    image: "/images/01.jpeg",
    cloud: "/images/cloud.png",
    label: "The Problem",
    title: "Beyond Memorization",
    text: "Modern education often teaches children what to remember, but not always how to think, question and understand life deeply.",
    cloudClass: "left-[18%] top-[-18%] w-[560px]",
    contentClass: "px-24 pt-8 pb-36",
  },
  {
    image: "/images/02.jpeg",
    cloud: "/images/cloudy.png",
    label: "The Origin",
    title: "A Return to Gurukul Wisdom",
    text: "Chandogya Prodigies brings back mentorship, discipline, curiosity and learning through real experiences.",
    cloudClass: "left-[44%] top-[-16%] w-[600px]",
    contentClass: "px-24 pt-8 pb-30",
  },
  {
    image: "/images/03.jpeg",
    cloud: "/images/cloud.png",
    label: "The Vision",
    title: "Prepared for the Future",
    text: "We blend ancient Indian wisdom with modern skills so children become confident, thoughtful and future-ready learners.",
    cloudClass: "left-[47%] top-[-17%] w-[600px]",
    contentClass: "px-24 pt-8 pb-34",
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
    <section className="relative overflow-hidden bg-[#F7EAD7] py-20 dark:bg-[#100603]">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="mb-10 text-center">
          <p className="font-serif text-lg font-semibold tracking-[0.25em] text-[#B96A1B] dark:text-[#D4AF37]">
            OUR STORY
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#2D2118] md:text-5xl dark:text-[#F8E7B0]">
            Where Ancient Wisdom Meets Modern Learning
          </h2>
        </div>

        <div className="relative h-[560px] overflow-hidden rounded-[34px] border border-[#D4AF37]/30 shadow-[0_25px_70px_rgba(64,31,9,0.25)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.image}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={story.image}
                alt={story.title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

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
                  alt="Thought cloud"
                  width={700}
                  height={420}
                  className="w-full object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                  priority
                />

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center ${story.contentClass}`}
                >
                  <p className="font-serif text-xs font-bold uppercase  text-[#B96A1B]">
                    {story.label}
                  </p>

                  <h3 className="mt-1 max-w-103.5 font-serif text-lg font-bold leading-tight text-[#2D2118] md:text-2xl">
                    {story.title}
                  </h3>

                  <p className="mt-2 max-w-85 text-base leading-relaxed text-[#3E2B1D] md:text-lg">
                    {story.text}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            aria-label="Previous story"
            className="absolute left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/55"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next story"
            className="absolute right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/55"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to story ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index
                    ? "w-10 bg-[#D4AF37]"
                    : "w-2 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
