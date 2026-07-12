"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const models = {
  online: {
    label: "Online",
    eyebrow: "Online Learning",
    title: "Learn From Anywhere",
    image: "/images/images.jpg",
    href: "/learning-model/online",
    description:
      "A flexible digital learning experience where students access lessons, assignments, quizzes and live mentorship from home.",
    points: [
      "Recorded video lessons",
      "Live interactive sessions",
      "Quizzes and assignments",
      "Progress tracking dashboard",
    ],
  },
  offline: {
    label: "Offline",
    eyebrow: "Offline Gurukul",
    title: "Learn Through Experience",
    image: "/images/offline.jpg",
    href: "/learning-model/offline",
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
    label: "Hybrid",
    eyebrow: "Hybrid Model",
    title: "Best of Both Worlds",
    image: "/images/kit.jpg",
    href: "/learning-model/hybrid",
    description:
      "A blended learning approach combining online flexibility with offline Gurukul experiences for a complete skill-building journey.",
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
    <section className="relative overflow-hidden bg-[#EEF3E4] px-5 py-16 text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,253,247,0.92)_0%,transparent_34%),radial-gradient(circle_at_82%_18%,rgba(212,167,44,0.24)_0%,transparent_28%),linear-gradient(135deg,#F8E7CF_0%,#EEF3E4_44%,#DDE8D1_100%)] dark:bg-[radial-gradient(circle_at_16%_12%,#2A1910_0%,transparent_34%),radial-gradient(circle_at_82%_18%,rgba(212,167,44,0.13)_0%,transparent_28%),linear-gradient(135deg,#160C07_0%,#1D140D_48%,#132118_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#315C45]/35 to-transparent dark:via-[#D4A72C]/35" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
              HOW WE TEACH
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
              The Learning Model
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
              Choose the learning path that fits every student&apos;s journey:
              online, offline or a complete hybrid Gurukul experience.
            </p>

            <div className="mt-4 h-px w-20 bg-[#D4A72C]/65" />
          </div>

          <div className="flex rounded-md border border-[#D4A72C]/25 bg-[#FFFDF7]/80 p-1.5 shadow-[0_14px_34px_rgba(95,52,8,0.08)] backdrop-blur-sm dark:border-[#D4A72C]/18 dark:bg-[#21130C]/75">
            {(Object.keys(models) as ModelKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                className={`flex-1 rounded-md px-3 py-2.5 text-sm font-semibold transition-all duration-300 sm:text-base ${
                  active === key
                    ? "bg-[#315C45] text-white shadow-[0_10px_22px_rgba(49,92,69,0.2)]"
                    : "text-[#6B5646] hover:bg-[#F8E7CF] dark:text-[#CDBB9E] dark:hover:bg-[#2A1910]"
                }`}
              >
                {models[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-md border border-[#315C45]/18 bg-[#FFFDF7]/86 shadow-[0_18px_50px_rgba(49,92,69,0.13)] backdrop-blur-sm lg:grid-cols-[0.95fr_1.05fr] dark:border-[#D4A72C]/18 dark:bg-[#21130C]/82 dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${active}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="relative min-h-[260px] lg:min-h-[390px]"
            >
              <Image
                src={model.image}
                alt={model.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#160C07]/68 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-md border border-[#F8EBCF]/25 bg-[#160C07]/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F8EBCF] backdrop-blur-md">
                {model.eyebrow}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.42, ease: "easeOut" }}
              className="flex flex-col justify-center p-5 sm:p-7 lg:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C96F1A] dark:text-[#D4A72C]">
                {model.eyebrow}
              </p>

              <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#2E2118] sm:text-4xl dark:text-[#F8EBCF]">
                {model.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
                {model.description}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {model.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 rounded-md border border-[#D4A72C]/18 bg-[#FFF9EE] px-3 py-2.5 text-[#2E2118] dark:border-[#D4A72C]/14 dark:bg-[#160C07] dark:text-[#F8EBCF]"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#315C45] dark:text-[#D4A72C]" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                href={model.href}
                className="mt-6 inline-flex h-11 w-fit items-center justify-center gap-2 rounded-md bg-[#315C45] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(49,92,69,0.18)] transition hover:bg-[#274B38]"
              >
                Explore Model
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
