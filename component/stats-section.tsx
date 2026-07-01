"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Mentors",
    detail: "Guiding young learners",
  },
  {
    value: 35,
    suffix: "+",
    label: "Courses",
    detail: "Skill-focused programs",
  },
  {
    value: 100,
    suffix: "+",
    label: "Students",
    detail: "Learning with purpose",
  },
  {
    value: 12,
    suffix: "+",
    label: "Tie-ups",
    detail: "Growing partnerships",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    let frameId = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9EE] py-20 text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FFFDF7_0%,#FFF9EE_44%,#F7EAD7_100%)] dark:bg-[radial-gradient(circle_at_50%_0%,#2A1910_0%,#21130C_44%,#160C07_100%)]" />

      <div className="relative z-10 mx-auto mb-10 max-w-3xl px-5 text-center sm:px-8">
        <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
          OUR IMPACT
        </p>

        <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
          Growing With Gurukul-Inspired Learning
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
          A focused learning ecosystem built through mentors, courses, students
          and meaningful collaborations.
        </p>

        <div className="mx-auto mt-4 h-px w-20 bg-[#D4A72C]/65" />
      </div>

      <div className="relative z-10">
        <div className="relative min-h-[640px] overflow-hidden border-y border-[#D4A72C]/25 bg-[#2E2118] sm:min-h-[560px] lg:min-h-[520px] dark:border-[#D4A72C]/20 dark:bg-[#0C0503]">
          <Image
            src="/images/stat.png"
            alt="Chandogya learning stats"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,12,7,0.68),rgba(22,12,7,0.28)_48%,rgba(22,12,7,0.54)),linear-gradient(0deg,rgba(22,12,7,0.74),transparent_48%)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF9EE]/14 to-transparent dark:from-[#D4A72C]/8" />

          <div className="relative z-10 mx-auto flex min-h-[640px] max-w-6xl flex-col justify-end px-5 py-10 sm:min-h-[560px] sm:px-8 lg:min-h-[520px]">
            <div className="max-w-xl">
              <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#D4A72C]">
                CHANDOGYA IN NUMBERS
              </p>

              <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#FFF9EE] sm:text-4xl">
                Small numbers today, strong foundations for tomorrow.
              </h3>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  className="group"
                >
                  <div className="h-full rounded-md border border-[#F8EBCF]/18 bg-[#FFF9EE]/12 p-4 text-[#FFF9EE] shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#D4A72C]/45 group-hover:bg-[#FFF9EE]/18 sm:p-5">
                    <h4 className="font-serif text-4xl font-semibold leading-none text-[#FFF9EE] sm:text-5xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </h4>

                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#D4A72C]">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#F8EBCF]/78">
                      {stat.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
