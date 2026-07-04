"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, MessageCircle, Laptop, Sparkles } from "lucide-react";

const skills = [
  {
    title: "YOGA & CONSCIOUSNESS STUDIES",
    desc: "Develop self-regulation, resilience, and mind-body awareness",
    icon: Brain,
  },
  {
    title: "AI & DHARMIC COMPUTING",
    desc: "Ethical tech use, logical thinking, and understanding AI’s societal impact",
    icon: MessageCircle,
  },
  {
    title: "ARTHA ŚĀSTRA & MODERN FINANCE",
    desc: " Financial literacy, resource ethics, and entrepreneurial mindset.",
    icon: Laptop,
  },
  {
    title: "DHARMA ŚĀSTRA & MODERN LAW",
    desc: "Civic awareness, ethical reasoning, and rights-responsibility balance.",
    icon: Sparkles,
  },
   {
    title: "PRAKRITI VIJNANA (ECOLOGY & SUSTAINABILITY)",
    desc: " Environmental stewardship, scientific temper, and holistic health.",
    icon: Brain,
  },
  {
    title: "KALA & CREATIVE INTELLIGENCE",
    desc: "Creative expression, design thinking, and cultural appreciation.",
    icon: MessageCircle,
  },
  {
    title: "SANGAH & LEADERSHIP",
    desc: "Teamwork, conflict resolution, and ethical leadership",
    icon: Laptop,
  },
  {
    title: "VĀK SHAKTI (COMMUNICATION & RHETORIC)",
    desc: "Effective communication, public speaking, and active listening",
    icon: Sparkles,
  },
   {
    title: "ANCIENT FUTURISM & INNOVATION",
    desc: "Systems thinking, innovation, and future-readiness.",
    icon: Laptop,
  },
  {
    title: "SVASTHYA & WELLNESS SCIENCE",
    desc: " Holistic health awareness, preventive care, and mental wellness.",
    icon: Sparkles,
  },
  
];

export default function SkillsSection() {
  const [showMore, setShowMore] = useState(false);

  const visibleSkills = showMore ? skills : skills.slice(0, 2);

  return (
    <section className="relative overflow-hidden bg-[#FFF9EE] px-6 py-20 dark:bg-[#160A05]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-[#2D2118] dark:text-[#F8E7B0]">
          Skills You Will Learn
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2">
          <AnimatePresence>
            {visibleSkills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative rounded-[28px] bg-[#F3A942] p-8 shadow-[0_10px_25px_rgba(95,52,8,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(95,52,8,0.32)] dark:bg-[#B8661D]"
                >
                  <div className="max-w-[70%]">
                    <h3 className="text-2xl font-bold text-[#1F140C]">
                      {skill.title}
                    </h3>

                    <p className="mt-4 text-lg leading-snug text-[#2D2118]">
                      {skill.desc}
                    </p>

                    <button className="mt-4 border-b border-dashed border-[#2D2118] text-lg text-[#2D2118]">
                      Explore more →
                    </button>
                  </div>

                  <Icon className="absolute bottom-6 right-8 h-24 w-24 stroke-[1.2] text-[#2D2118]/65" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="rounded-full bg-[#D99A18] px-10 py-3 text-xl font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#B8780F]"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      {/* Decorations */}
      <div className="absolute -bottom-20 left-44 h-56 w-56 rounded-full bg-[#BEEB55]/50 blur-sm" />
      <div className="absolute bottom-4 right-20 h-32 w-32 rounded-full bg-[#EDF044]/80" />
      <div className="absolute -right-10 top-1/2 h-20 w-20 rounded-full bg-[#6B2F2F]" />
    </section>
  );
}
