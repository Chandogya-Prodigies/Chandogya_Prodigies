"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const models = {
  online: {
    label: "Online Learning",
    title: "Learn From Anywhere",
    image: "/images/images.jpg",
    description:
      "A flexible digital learning experience where students can access recorded lessons, assignments, quizzes and live mentorship from home.",
    points: [
      "Recorded video lessons",
      "Live interactive sessions",
      "Quizzes and assignments",
      "Progress tracking dashboard",
    ],
  },
  offline: {
    label: "Offline Gurukul",
    title: "Learn Through Experience",
    image: "/images/offline.jpg",
    description:
      "A Gurukul-inspired offline model where students learn through workshops, mentor guidance, practical activities and real-world skill practice.",
    points: [
      "Physical center-based learning",
      "Weekend workshops",
      "Mentor-student interaction",
      "Activity-based skill development",
    ],
  },
  hybrid: {
    label: "Hybrid Model",
    title: "Best of Both Worlds",
    image: "/images/kit.jpg",
    description:
      "A blended learning approach combining online flexibility with offline Gurukul experiences, creating a complete skill-building journey.",
    points: [
      "Online + offline learning",
      "Workshop-based practice",
      "Learning kits included",
      "Continuous mentor support",
    ],
  },
};

type ModelKey = keyof typeof models;

export default function LearningModelSection() {
  const [active, setActive] = useState<ModelKey>("online");
  const model = models[active];

  return (
    <section className="relative overflow-hidden bg-[#F7EAD7] px-6 py-24 dark:bg-[#100603] h-270">
      <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#E0BE5A]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-serif text-lg font-semibold tracking-[0.3em] text-[#B96A1B] dark:text-[#D4AF37]">
            HOW WE TEACH
          </p>

          <h2 className="mt-3 font-serif text-5xl font-semibold text-[#2D2118] md:text-6xl dark:text-[#F8E7B0]">
            The Learning Model
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5B4A3A] dark:text-[#E8D6B0]">
            Choose the learning path that fits every student’s journey — online,
            offline or a complete hybrid Gurukul experience.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-8 flex max-w-3xl rounded-full border border-[#D4AF37]/40 bg-white/35 p-2 shadow-lg backdrop-blur-md dark:bg-white/5">
          {(Object.keys(models) as ModelKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex-1 rounded-full px-4 py-3 font-serif text-lg font-semibold transition-all duration-300 ${
                active === key
                  ? "bg-[#C89A3D] text-white shadow-md dark:bg-[#D4AF37] dark:text-[#160A05]"
                  : "text-[#2D2118] hover:bg-white/40 dark:text-[#F8E7B0] dark:hover:bg-white/10"
              }`}
            >
              {models[key].label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${active}`}
              initial={{ opacity: 0, x: -40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.96 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative h-[420px] overflow-hidden rounded-[36px] border border-[#D4AF37]/35 bg-[#FFF4D8]/50 shadow-[0_25px_70px_rgba(64,31,9,0.25)]"
            >
              <Image
                src={model.image}
                alt={model.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/85 px-5 py-3 backdrop-blur-md">
                <p className="font-serif text-xl font-semibold text-[#2D2118]">
                  {model.label}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-[36px] border border-[#D4AF37]/35 bg-white/45 p-8 shadow-[0_20px_60px_rgba(64,31,9,0.12)] backdrop-blur-md dark:bg-white/5"
            >
              <h3 className="font-serif text-4xl font-semibold text-[#2D2118] md:text-5xl dark:text-[#F8E7B0]">
                {model.title}
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-[#5B4A3A] dark:text-[#E8D6B0]">
                {model.description}
              </p>

              <div className="mt-8 grid gap-4">
                {model.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl bg-[#FFF4D8]/70 px-4 py-3 text-[#2D2118] dark:bg-white/10 dark:text-[#F8E7B0]"
                  >
                    <CheckCircle className="h-5 w-5 text-[#B96A1B] dark:text-[#D4AF37]" />
                    <span className="text-base font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C89A3D] px-7 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#9A461A] dark:bg-[#D4AF37] dark:text-[#160A05]">
                Explore Model
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
