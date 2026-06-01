"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Mentors",
  },
  {
    value: 35,
    suffix: "+",
    label: "Courses",
  },
  {
    value: 100,
    suffix: "+",
    label: "Students",
  },
  {
    value: 12,
    suffix: "+",
    label: "Tieups",
  },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1400;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
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
    <section className="relative overflow-hidden bg-[#F7EAD7] py-12 dark:bg-[#100603]">
      <div className="mx-auto  px-6">
        <div className="relative h-[520px] overflow-hidden rounded-[34px] border border-[#D4AF37]/40 shadow-[0_25px_70px_rgba(64,31,9,0.22)]">
          <Image
            src="/images/stat.png"
            alt="Chandogya learning stats"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/10" />

          <div className="absolute inset-x-0 top-20 z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="group text-center"
              >
                <div className="mx-auto rounded-3xl border border-white/35 bg-white/10 px-6 py-5 text-white shadow-[0_12px_35px_rgba(0,0,0,0.15)] backdrop-blur-[2px] transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/20">
                  <h3 className="font-serif text-5xl font-semibold drop-shadow-md md:text-6xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </h3>

                  <p className="mt-1 font-serif text-2xl drop-shadow-md">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/30 bg-white/15 px-6 py-2 text-sm font-medium text-white backdrop-blur-md">
            Growing with Gurukul-inspired learning
          </div>
        </div>
      </div>
    </section>
  );
}
