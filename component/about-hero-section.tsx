"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cornerImages = [
  {
    src: "/images/top-left.png",
    width: 551,
    height: 452,
    className: "left-0 top-0 w-[175px] sm:w-[250px] lg:w-[345px] xl:w-[390px]",
  },
  {
    src: "/images/top-right.png",
    width: 551,
    height: 452,
    className: "right-0 top-0 w-[175px] sm:w-[250px] lg:w-[345px] xl:w-[390px]",
  },
  {
    src: "/images/bottom-left.png",
    width: 693,
    height: 360,
    className:
      "bottom-0 left-0 w-[155px] sm:w-[220px] lg:w-[295px] xl:w-[330px]",
  },
  {
    src: "/images/bottom-right1.png",
    width: 682,
    height: 366,
    className:
      "bottom-0 right-0 w-[155px] sm:w-[220px] lg:w-[295px] xl:w-[330px]",
  },
];



export default function AboutHeroSection() {
  const reduceMotion = useReducedMotion();
  const entranceDelay = (delay: number) => (reduceMotion ? 0 : delay);

  return (
    <section className="relative isolate min-h-[calc(82svh-5rem)] overflow-hidden bg-[#FFF9EE] text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,#FFFDF7_0%,#FFF9EE_48%,#F8E7CF_100%)] dark:bg-[radial-gradient(circle_at_center,#2A1910_0%,#21130C_48%,#160C07_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-[#E9962F]/8 to-transparent dark:from-[#D4A72C]/5" />

      {cornerImages.map((image) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 0.92, scale: 1 }}
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
            width={image.width}
            height={image.height}
            priority
            className="h-auto w-full object-contain"
          />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(82svh-5rem)] max-w-6xl flex-col items-center justify-center px-5 py-14 text-center sm:px-8 lg:py-16">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 16,
            scale: reduceMotion ? 1 : 0.94,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(0.56),
            ease: "easeOut",
          }}
        >
          <Image
            src="/images/lotus.png"
            alt="Lotus"
            width={92}
            height={92}
            priority
            className="h-20 w-20 object-contain sm:h-[92px] sm:w-[92px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(0.82),
            ease: "easeOut",
          }}
          className="mt-3"
        >
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
            About Chandogya Prodigies
          </p>
          <div className="mx-auto mt-2 h-px w-16 bg-[#D4A72C]/65" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.56,
            delay: entranceDelay(1.02),
            ease: "easeOut",
          }}
          className="mt-7 w-full max-w-4xl"
        >
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-[#2E2118] sm:text-5xl md:text-6xl lg:text-7xl dark:text-[#F8EBCF]">
            The story behind our Gurukul-inspired learning.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B5646] sm:text-lg sm:leading-8 md:text-xl dark:text-[#CDBB9E]">
            We blend timeless Indian wisdom with modern skill development so
            children grow into confident, thoughtful and future-ready learners.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.48,
            delay: entranceDelay(1.32),
            ease: "easeOut",
          }}
          className="mt-8 flex flex-col items-center gap-5"
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#315C45] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(49,92,69,0.2)] transition hover:bg-[#274B38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF9EE] dark:focus-visible:ring-offset-[#160C07]"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#D4A72C]/45 bg-[#FFFDF7]/65 px-6 text-sm font-semibold text-[#2E2118] transition hover:border-[#315C45]/45 hover:bg-[#F8E7CF] dark:bg-[#21130C]/65 dark:text-[#F8EBCF] dark:hover:bg-[#2A1910]"
            >
              Talk to Us
            </Link>
          </div>

   
        </motion.div>
      </div>
    </section>
  );
}
