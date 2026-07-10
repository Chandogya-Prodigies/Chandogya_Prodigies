"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F3AB26] py-16 text-black dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#F6B637_0%,#F3AB26_52%,#E9962F_100%)] dark:bg-[linear-gradient(135deg,#160C07_0%,#21130C_55%,#132118_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[470px]">
          <p className="absolute left-1/2 top-0 z-20 -translate-x-1/2 font-serif text-2xl font-semibold tracking-wide text-black sm:text-3xl dark:text-[#D4A72C]">
            Jnana Sanskar Kaushal
          </p>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mt-8 flex h-[330px] w-[330px] items-center justify-center sm:h-[420px] sm:w-[420px] lg:h-[500px] lg:w-[500px]"
          >
            <Image
              src="/images/lotus.png"
              alt=""
              width={520}
              height={520}
              className="absolute inset-0 h-full w-full object-contain opacity-90 drop-shadow-[0_20px_36px_rgba(80,45,9,0.2)]"
              priority
            />

            <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full bg-[#E8D86B] text-center shadow-[0_18px_36px_rgba(80,45,9,0.16)] sm:h-56 sm:w-56">
              <span className="font-serif text-4xl font-semibold leading-tight text-black sm:text-5xl">
                Vision
              </span>
            </div>
          </motion.div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="font-serif text-6xl font-semibold leading-none text-black sm:text-7xl lg:text-8xl dark:text-[#F8EBCF]">
            Vision
          </h2>

          <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-[1.45] text-black sm:text-3xl lg:mx-0 dark:text-[#F8EBCF]">
            To build a modern, skill-based education ecosystem rooted in the
            Ancient Indian Knowledge System, reimagined for today&apos;s world.
            We are not recreating the past. We are reviving its wisdom with
            modern execution.
          </p>
        </div>
      </div>
    </section>
  );
}
