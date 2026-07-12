"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Brain, Laptop, MessageCircle, Sparkles } from "lucide-react";

const skills = [
  {
    title: "YOGA & CONSCIOUSNESS STUDIES",
    desc: "Develop self-regulation, resilience, and mind-body awareness.",
    icon: Brain,
    href: "/courses",
  },
  {
    title: "AI & DHARMIC COMPUTING",
    desc: "Ethical tech use, logical thinking, and understanding AI's social impact.",
    icon: MessageCircle,
    href: "/courses/ai-foundations",
  },
  {
    title: "ARTHA SHASTRA & MODERN FINANCE",
    desc: "Financial literacy, resource ethics, and entrepreneurial mindset.",
    icon: Laptop,
    href: "/courses/financial-literacy-for-kids",
  },
  {
    title: "DHARMA SHASTRA & MODERN LAW",
    desc: "Civic awareness, ethical reasoning, and rights-responsibility balance.",
    icon: Sparkles,
    href: "/courses",
  },
  {
    title: "PRAKRITI VIJNANA",
    desc: "Environmental stewardship, scientific temper, and holistic health.",
    icon: Brain,
    href: "/courses",
  },
  {
    title: "KALA & CREATIVE INTELLIGENCE",
    desc: "Creative expression, design thinking, and cultural appreciation.",
    icon: MessageCircle,
    href: "/courses/creative-critical-thinking",
  },
  {
    title: "SANGAH & LEADERSHIP",
    desc: "Teamwork, conflict resolution, and ethical leadership.",
    icon: Laptop,
    href: "/courses",
  },
  {
    title: "VAK SHAKTI",
    desc: "Effective communication, public speaking, and active listening.",
    icon: Sparkles,
    href: "/courses/communication-public-speaking",
  },
];

export default function SkillsSection() {
  const [showMore, setShowMore] = useState(false);
  const visibleSkills = showMore ? skills : skills.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#FFF9EE] px-6 py-20 text-[#2E2118] dark:bg-[#160A05] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(49,92,69,0.08),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(233,150,47,0.14),transparent_26%)] dark:bg-[radial-gradient(circle_at_18%_10%,rgba(212,167,44,0.08),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(49,92,69,0.16),transparent_26%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
            SKILLS YOU WILL LEARN
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
            Ancient Wisdom, Practical Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
            A grounded skill ecosystem designed for confident thinking,
            expression, ethics and future readiness.
          </p>
          <div className="mx-auto mt-4 h-px w-20 bg-[#D4A72C]/65" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence>
            {visibleSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-md border border-[#D4A72C]/20 bg-[#FFFDF7]/92 p-7 shadow-[0_14px_34px_rgba(95,52,8,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#315C45]/35 hover:shadow-[0_20px_48px_rgba(49,92,69,0.14)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/86"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[#E9962F]/12 dark:bg-[#D4A72C]/10" />
                  <div className="relative z-10 max-w-[76%]">
                    <h3 className="text-xl font-bold leading-snug text-[#2E2118] dark:text-[#F8EBCF]">
                      {skill.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
                      {skill.desc}
                    </p>
                    <Link
                      href={skill.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#315C45] transition hover:text-[#C96F1A] dark:text-[#D4A72C]"
                    >
                      Explore more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                  <Icon className="absolute bottom-6 right-7 h-20 w-20 stroke-[1.2] text-[#315C45]/45 dark:text-[#D4A72C]/45" />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="rounded-md bg-[#315C45] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(49,92,69,0.18)] transition-all duration-300 hover:bg-[#274B38]"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-[#D4A72C]/16 blur-2xl" />
      <div className="pointer-events-none absolute -right-14 top-1/2 h-40 w-40 rounded-full bg-[#315C45]/12 blur-2xl" />
    </section>
  );
}
