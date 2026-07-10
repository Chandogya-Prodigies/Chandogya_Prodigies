"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    quote:
      "The sessions helped my child become more confident and disciplined. The learning feels personal, not rushed.",
    name: "Parent of Aarav",
    place: "Delhi",
  },
  {
    quote:
      "Chandogya brings a rare mix of clarity, values and practical skill building. My daughter now enjoys learning again.",
    name: "Parent of Anaya",
    place: "Mumbai",
  },
];

export default function CustomerStories() {
  return (
    <section className="relative overflow-hidden bg-[#F8D26A] py-16 text-black dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,248,224,0.42),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(49,92,69,0.16),transparent_30%),linear-gradient(135deg,#F8D86B_0%,#F8C95A_50%,#EBA13D_100%)] dark:bg-[radial-gradient(circle_at_15%_18%,rgba(212,167,44,0.14),transparent_30%),linear-gradient(135deg,#160C07_0%,#21130C_56%,#132118_100%)]" />

      <Image
        src="/images/leaves.png"
        alt=""
        width={220}
        height={180}
        className="pointer-events-none absolute right-6 top-6 w-28 opacity-50 sm:w-36 lg:w-44"
      />

      <Image
        src="/images/flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-0 left-0 w-32 opacity-50 lg:w-44"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8E6]/70 shadow-[0_16px_34px_rgba(84,47,12,0.12)] dark:bg-white/10">
            <Image
              src="/images/lotus.png"
              alt=""
              width={92}
              height={92}
              className="h-20 w-20 object-contain"
            />
          </div>

          <p className="font-serif text-sm font-semibold tracking-[0.24em] text-[#7A3A16] dark:text-[#D4A72C]">
            LEARNER STORIES
          </p>

          <h2 className="mt-3 max-w-xl font-serif text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl dark:text-[#F8EBCF]">
            What families feel after learning with us
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-black/72 dark:text-[#F8EBCF]/72">
            Real growth is seen in confidence, consistency and curiosity. These
            stories reflect the guided, value-rooted learning experience we are
            building at Chandogya.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {stories.map((story, index) => (
            <article
              key={story.name}
              className={`relative overflow-hidden rounded-[28px] border border-white/45 bg-[#FFF8E6]/78 p-6 shadow-[0_20px_42px_rgba(84,47,12,0.12)] backdrop-blur-sm dark:border-[#D4A72C]/20 dark:bg-[#24150D]/78 ${
                index === 1 ? "sm:mt-10" : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1 text-[#D68B20] dark:text-[#D4A72C]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>

                <Quote className="h-7 w-7 text-[#315C45]/45 dark:text-[#D4A72C]/45" />
              </div>

              <p className="font-serif text-xl leading-[1.55] text-black/84 dark:text-[#F8EBCF]/84">
                &quot;{story.quote}&quot;
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-black/10 pt-5 dark:border-[#D4A72C]/20">
                <Image
                  src="/images/img.png"
                  alt=""
                  width={52}
                  height={52}
                  className="h-12 w-12 rounded-full border-2 border-[#E8D86B] object-cover"
                />
                <div>
                  <p className="font-serif text-lg font-semibold text-black dark:text-[#F8EBCF]">
                    {story.name}
                  </p>
                  <p className="text-sm font-medium tracking-[0.16em] text-black/50 dark:text-[#F8EBCF]/50">
                    {story.place}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
