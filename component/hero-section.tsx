"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#FAF7F2] transition-colors duration-500 dark:bg-[radial-gradient(circle_at_center,#2A140A_0%,#160A05_45%,#0B0402_100%)]">
      {/* Top Left Wave */}
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 z-0"
      >
        <Image src="/top-left.png" alt="" width={420} height={420} priority />
      </motion.div>

      {/* Top Right Wave */}
      <motion.div
        initial={{ x: 250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-0 top-0 z-0"
      >
        <Image src="/top-right.png" alt="" width={420} height={420} priority />
      </motion.div>

      {/* Bottom Left Lotus */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 left-0 z-0"
      >
        <Image src="/bottom-left.png" alt="" width={350} height={350} />
      </motion.div>

      {/* Bottom Right Wave */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-0 right-0 z-0"
      >
        <Image src="/bottom-right.png" alt="" width={350} height={350} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Center Lotus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Image src="/lotus.png" alt="Lotus" width={100} height={100} />
        </motion.div>

        {/* Sanskrit Verse */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-[#8B5A2B]"
        ></motion.p>

        {/* Animated Text */}
        <div className="mt-10 min-h-[220px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-serif text-5xl  text-[#2D2118] md:text-7xl dark:text-[#F8E7B0]">
                {slides[currentSlide].title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5B4A3A] md:text-xl dark:text-[#E7D3AE]">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="rounded-full bg-[#C89A3D] px-8 py-4 text-white shadow-lg transition hover:scale-105"
        >
          Start Learning
        </motion.button>

        {/* Indicators */}
        <div className="mt-10 flex gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-[#C89A3D]" : "w-2 bg-[#D6C7B8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
