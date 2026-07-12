"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const foundationLines = [
  "Wisdom that helps children think clearly.",
  "Mentorship that builds confidence and discipline.",
  "Modern skills shaped by timeless values.",
];

export default function Foundationsection() {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((current) => (current + 1) % foundationLines.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F7C94A] py-16 text-[#2E2118] dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8D14F] via-[#F7C94A] to-[#F4C43E] dark:bg-[linear-gradient(135deg,#160C07_0%,#21130C_55%,#132118_100%)]" />
      <div className="absolute -left-16 -top-20 h-72 w-72 rounded-full bg-[#F27B42]/35 blur-3xl" />
      <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-[#F58A3A]/30 blur-2xl" />
      <div className="absolute -right-24 top-28 h-[380px] w-[240px] rotate-12 rounded-full bg-[#F55E3C]/30 blur-3xl" />
      <div className="absolute bottom-0 right-44 h-48 w-72 rounded-full bg-[#F55638]/25 blur-3xl" />

      <Image
        src="/images/flowers.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute bottom-0 left-0 w-40 opacity-75 sm:w-52 lg:w-60"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex justify-center lg:justify-start">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72"
          >
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.08, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 top-8 text-[#FFF9EE] drop-shadow-sm dark:text-[#D4A72C]"
            >
              <Sparkles className="h-6 w-6" />
            </motion.div>

            <motion.div
              animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.85, 1, 0.85] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute bottom-10 left-9 text-[#7A3A16] drop-shadow-sm dark:text-[#D4A72C]"
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>

            <Image
              src="/images/logo.png"
              alt="Chandogya Prodigies logo"
              width={300}
              height={300}
              className="relative z-10 w-56 object-contain drop-shadow-[0_18px_35px_rgba(95,52,8,0.2)] sm:w-64"
            />
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [0.8, 1.12, 0.8] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.35,
            }}
            className="pointer-events-none absolute right-4 top-0 hidden text-[#FFF9EE] drop-shadow-sm dark:text-[#D4A72C] sm:block"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>

          <motion.div
            animate={{ opacity: [0.18, 0.75, 0.18], scale: [0.82, 1, 0.82] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1,
            }}
            className="pointer-events-none absolute right-20 top-16 hidden text-[#7A3A16] drop-shadow-sm dark:text-[#D4A72C] md:block"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#7A3A16] sm:text-base dark:text-[#D4A72C]">
            OUR FOUNDATION
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
            Built on Wisdom, Designed for Today
          </h2>

          <div className="mt-5 min-h-[34px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={foundationLines[activeLine]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-lg font-semibold leading-7 text-[#315C45] dark:text-[#D4A72C]"
              >
                {foundationLines[activeLine]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5E432C] dark:text-[#CDBB9E]">
            Chandogya Prodigies was formed to bring depth back into learning:
            not only what children study, but how they think, communicate,
            choose and grow. This foundation guides every course, mentor
            interaction and learning model we create.
          </p>
        </div>
      </div>
    </section>
  );
}
