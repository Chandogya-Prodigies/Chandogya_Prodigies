import Image from "next/image";
import { BookOpen, Sprout, UsersRound } from "lucide-react";

const pillars = [
  {
    label: "Character",
    description: "Discipline before shortcuts",
    icon: Sprout,
  },
  {
    label: "Guidance",
    description: "Mentorship with attention",
    icon: UsersRound,
  },
  {
    label: "Practice",
    description: "Learning through doing",
    icon: BookOpen,
  },
];

export default function GurukulIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6DEAB] text-[#2A1B18] dark:bg-[#130B07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F2D48B_0%,#F2D48B_48%,#F9ECCE_48%,#F9ECCE_100%)] dark:bg-[linear-gradient(90deg,#241309_0%,#241309_48%,#150D09_48%,#150D09_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#B4791F]/45 dark:bg-[#D4A72C]/25" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#B4791F]/35 dark:bg-[#D4A72C]/20" />

      <Image
        src="/images/feature-lotus.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-20 bottom-8 hidden w-52 opacity-22 lg:block dark:opacity-10"
      />
      <Image
        src="/images/feature-lotus.png"
        alt=""
        width={220}
        height={220}
        className="pointer-events-none absolute left-[44%] top-10 hidden w-40 opacity-25 lg:block dark:opacity-12"
      />
      <Image
        src="/images/lotus.png"
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute left-[53%] top-[42%] hidden w-20 opacity-30 lg:block dark:opacity-12"
      />

      <div className="relative z-10 mx-auto grid min-h-[580px] max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative flex items-end justify-center px-6 pt-12 lg:px-10 lg:pt-14">
          <div className="absolute bottom-0 right-[-4.5rem] hidden h-[24rem] w-[16rem] rounded-l-full border-l border-t border-[#98A85F]/45 bg-[#F9ECCE] lg:block dark:border-[#D4A72C]/20 dark:bg-[#150D09]" />
          <div className="absolute bottom-0 h-36 w-[86%] max-w-[580px] rounded-[50%] bg-[#D89B37]/22 blur-2xl dark:bg-[#D4A72C]/10" />
          <div className="relative flex min-h-[470px] w-full max-w-[560px] items-end justify-center">
            <Image
              src="/images/guruji.png"
              alt="Guru reading from a book"
              width={520}
              height={520}
              className="relative z-10 h-auto w-full max-w-[455px] object-contain drop-shadow-[0_24px_28px_rgba(87,45,9,0.18)] dark:drop-shadow-[0_28px_34px_rgba(0,0,0,0.42)]"
              sizes="(max-width: 768px) 82vw, 455px"
            />
            <Image
              src="/images/feature-lotus.png"
              alt=""
              width={180}
              height={180}
              className="pointer-events-none absolute right-2 top-5 hidden w-32 opacity-30 md:block dark:opacity-14"
            />
            <Image
              src="/images/lotus.png"
              alt=""
              width={120}
              height={120}
              className="pointer-events-none absolute bottom-28 left-0 hidden w-20 opacity-28 md:block dark:opacity-12"
            />
            <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#F8EBCF]/70 bg-[#ECA51B] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(155,91,11,0.2)] dark:border-[#D4A72C]/25 dark:bg-[#9A5A18]">
              Guru-Shishya
            </div>
          </div>
        </div>

        <div className="flex items-center px-6 py-12 lg:px-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#CFA651]/35 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A5A18] shadow-[0_10px_24px_rgba(95,52,8,0.07)] backdrop-blur-sm dark:border-[#D4A72C]/18 dark:bg-white/5 dark:text-[#D4A72C]">
              <Image
                src="/images/lotus.png"
                alt=""
                width={18}
                height={18}
                className="h-4 w-4 object-contain opacity-80 dark:opacity-65"
              />
              Rooted Learning
            </div>

            <h2 className="mt-5 font-serif text-5xl font-semibold leading-tight text-[#2A1B18] sm:text-6xl dark:text-[#F8EBCF]">
              What is Gurukul?
            </h2>

            <div className="mt-7 space-y-5 text-xl leading-[1.7] text-[#5B2B24] sm:text-[1.45rem] dark:text-[#CDBB9E]">
              <p>
                Gurukul is a way of learning where knowledge is shaped through
                close mentorship, disciplined practice and lived experience.
              </p>
              <p>
                At Chandogya Prodigies, we bring that ancient spirit into a
                modern skill ecosystem, so students grow in confidence,
                character and real-world capability.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.label}
                    className="rounded-md border border-[#CFA651]/35 bg-white/40 px-4 py-4 shadow-[0_12px_26px_rgba(95,52,8,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-[#D4A72C]/16 dark:bg-[#24150D]/78"
                  >
                    <Icon className="h-6 w-6 text-[#315C45] dark:text-[#D4A72C]" />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#2A1B18] dark:text-[#F8EBCF]">
                      {pillar.label}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-[#6A3D2E] dark:text-[#BBA98D]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-4 border-l-2 border-[#D89B37] pl-5 text-base leading-7 text-[#74431C] dark:border-[#D4A72C]/60 dark:text-[#D8C29B]">
              <span className="font-serif text-4xl leading-none text-[#9A5A18] dark:text-[#D4A72C]">
                &quot;
              </span>
              <p>
                Not just policy or theory, but guidance that becomes practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
