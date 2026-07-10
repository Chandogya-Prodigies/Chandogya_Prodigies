"use client";

import Image from "next/image";

export default function FounderNoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7C75A] py-16 text-black dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,248,224,0.42),transparent_30%),radial-gradient(circle_at_84%_82%,rgba(49,92,69,0.16),transparent_30%),linear-gradient(135deg,#F8D86B_0%,#F7C75A_48%,#EBA13D_100%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(212,167,44,0.14),transparent_30%),linear-gradient(135deg,#160C07_0%,#21130C_56%,#132118_100%)]" />

      <Image
        src="/images/leaves.png"
        alt=""
        width={220}
        height={180}
        className="pointer-events-none absolute left-6 top-7 w-28 opacity-50 sm:w-36 lg:w-44"
      />

      <Image
        src="/images/pretflower.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-0 right-0 w-32 opacity-55 lg:w-44"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-9 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative">
          <div className="rounded-[28px] border border-white/45 bg-[#FFF3CF]/72 p-7 shadow-[0_20px_45px_rgba(84,47,12,0.12)] backdrop-blur-sm sm:p-9 lg:p-10 dark:border-[#D4A72C]/20 dark:bg-[#24150D]/78">
            <p className="font-serif text-sm font-semibold tracking-[0.24em] text-[#7A3A16] dark:text-[#D4A72C]">
              FOUNDER NOTE
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-black sm:text-5xl dark:text-[#F8EBCF]">
              From the Founder&apos;s Desk
            </h2>

            <div className="mt-7 flex gap-5">
              <span className="hidden font-serif text-7xl leading-none text-[#315C45]/35 sm:block dark:text-[#D4A72C]/35">
                &quot;
              </span>
              <div>
                <p className="font-serif text-xl leading-[1.65] text-black/84 sm:text-2xl dark:text-[#F8EBCF]/84">
                  Chandogya was created with a simple belief: learning should
                  shape both skill and character. Our aim is to bring the depth
                  of Gurukul guidance into a modern learning experience where
                  every child receives clarity, confidence and personal
                  attention.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-black/10 pt-5 dark:border-[#D4A72C]/20">
                  <span className="h-px w-12 bg-[#315C45] dark:bg-[#D4A72C]" />
                  <p className="font-serif text-lg font-semibold text-[#315C45] dark:text-[#D4A72C]">
                    Chandogya Prodigies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute -inset-4 rounded-full bg-[#315C45]/12 blur-2xl dark:bg-[#D4A72C]/12" />
          <div className="relative rounded-[32px] border border-white/45 bg-[#FFF8E6]/66 p-5 shadow-[0_22px_42px_rgba(84,47,12,0.14)] backdrop-blur-sm dark:border-[#D4A72C]/20 dark:bg-[#24150D]/72">
            <div className="rounded-[26px] bg-[#E8D86B] p-3 shadow-inner">
              <Image
                src="/images/img.png"
                alt="Founder"
                width={420}
                height={420}
                className="h-[300px] w-full rounded-[22px] object-cover sm:h-[340px]"
              />
            </div>

            <p className="mt-5 text-center font-serif text-xl font-semibold text-black dark:text-[#F8EBCF]">
              Founder
            </p>
            <p className="mt-1 text-center text-sm font-medium tracking-[0.18em] text-black/55 dark:text-[#F8EBCF]/55">
              GUIDANCE WITH PURPOSE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
