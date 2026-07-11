"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const titles = [
  "The Learning Model",
  "The Offline Model",
  "The Online Model",
];

const cornerImages = [
  {
    src: "/images/top-left.png",
    width: 551,
    height: 452,
    className: "left-0 top-0 w-[185px] sm:w-[260px] lg:w-[360px] xl:w-[420px]",
  },
  {
    src: "/images/top-right.png",
    width: 551,
    height: 452,
    className: "right-0 top-0 w-[185px] sm:w-[260px] lg:w-[360px] xl:w-[420px]",
  },
  {
    src: "/images/bottom-left.png",
    width: 693,
    height: 360,
    className:
      "bottom-0 left-0 w-[165px] sm:w-[230px] lg:w-[310px] xl:w-[350px]",
  },
  {
    src: "/images/bottom-right1.png",
    width: 682,
    height: 366,
    className:
      "bottom-0 right-0 w-[165px] sm:w-[230px] lg:w-[310px] xl:w-[350px]",
  },
];

export default function LearningModelHero() {
  const [activeTitle, setActiveTitle] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTitle((current) => (current + 1) % titles.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(86svh-5rem)] items-center justify-center overflow-hidden bg-[#F9F3E8] px-5 py-20 text-black sm:px-8 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,253,247,0.95),rgba(249,243,232,0.86)_42%,rgba(244,231,208,0.72)_100%)] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(42,25,16,0.94),rgba(22,12,7,0.95)_55%,rgba(19,33,24,0.82)_100%)]" />

      {cornerImages.map((image) => (
        <div
          key={image.src}
          className={`pointer-events-none absolute z-0 ${image.className}`}
        >
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            className="h-auto w-full object-contain"
            preload
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <Image
          src="/images/feature-lotus.png"
          alt=""
          width={150}
          height={150}
          className="h-24 w-24 object-contain sm:h-32 sm:w-32"
          preload
        />

        <div className="mt-7 min-h-[5.2rem] sm:min-h-[7rem] lg:min-h-[8.2rem]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={titles[activeTitle]}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="font-serif text-5xl font-medium leading-none text-black sm:text-7xl lg:text-8xl dark:text-[#F8EBCF]"
            >
              {titles[activeTitle]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="mt-5 max-w-4xl text-lg font-medium leading-8 text-black sm:text-2xl sm:leading-9 dark:text-[#F8EBCF]/82">
          Our mentors blend traditional Gurukul values with modern teaching
          methods, ensuring holistic development in skill, character, and
          discipline.
        </p>

        <Link
          href="/courses"
          className="mt-12 inline-flex min-h-14 items-center justify-center rounded-full bg-[#ECA51B] px-12 text-xl font-medium text-white shadow-[0_16px_34px_rgba(155,91,11,0.18)] transition hover:-translate-y-1 hover:bg-[#D99012] sm:min-h-16 sm:px-16 sm:text-3xl"
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
