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

const cloudBubbles = [
  "top-[1%] h-20 w-20",
  "top-[12%] h-28 w-28",
  "top-[27%] h-36 w-36",
  "top-[45%] h-24 w-24",
  "top-[57%] h-36 w-36",
  "top-[75%] h-28 w-28",
  "top-[90%] h-20 w-20",
];

export default function GurukulIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6DEAB] text-[#2A1B18] dark:bg-[#130B07] dark:text-[#F8EBCF]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#F2D48B_0%,#F2D48B_48%,#F9ECCE_48%,#F9ECCE_100%)] dark:bg-[linear-gradient(90deg,#241309_0%,#241309_48%,#150D09_48%,#150D09_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#B4791F]/45 dark:bg-[#D4A72C]/25" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#B4791F]/35 dark:bg-[#D4A72C]/20" />
      <div className="pointer-events-none absolute bottom-8 left-[48%] top-8 z-[1] hidden w-px bg-[#9CAA66]/45 dark:bg-[#D4A72C]/18 lg:block" />
      <div className="pointer-events-none absolute bottom-8 left-[48%] top-8 z-[2] hidden lg:block">
        {cloudBubbles.map((bubble) => (
          <span
            key={bubble}
            className={`absolute -translate-x-1/2 rounded-full border border-[#9CAA66]/28 bg-[#F9ECCE] shadow-[0_8px_22px_rgba(95,52,8,0.08)] dark:border-[#D4A72C]/14 dark:bg-[#150D09] ${bubble}`}
          />
        ))}
      </div>

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

      <div className="relative z-10 mx-auto grid min-h-[500px] max-w-7xl lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative flex items-center justify-center px-6 py-10 lg:px-10 lg:py-12">
          <div className="absolute h-32 w-[76%] max-w-[500px] rounded-[50%] bg-[#D89B37]/18 blur-2xl dark:bg-[#D4A72C]/8" />
          <div className="relative flex min-h-[410px] w-full max-w-[540px] items-center justify-center">
            <Image
              src="/images/guruji.png"
              alt="Guru reading from a book"
              width={700}
              height={700}
              className="relative z-10 h-auto w-full max-w-[430px] object-contain drop-shadow-[0_22px_24px_rgba(87,45,9,0.16)] dark:drop-shadow-[0_26px_30px_rgba(0,0,0,0.38)]"
              sizes="(max-width: 900px) 82vw, 430px"
            />
            <Image
              src="/images/feature-lotus.png"
              alt=""
              width={180}
              height={180}
              className="pointer-events-none absolute right-8 top-4 hidden w-24 opacity-24 md:block dark:opacity-10"
            />
            <Image
              src="/images/lotus.png"
              alt=""
              width={120}
              height={120}
              className="pointer-events-none absolute bottom-12 left-8 hidden w-16 opacity-24 md:block dark:opacity-10"
            />
            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#F8EBCF]/70 bg-[#ECA51B] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_28px_rgba(155,91,11,0.2)] dark:border-[#D4A72C]/25 dark:bg-[#9A5A18]">
              Guru-Shishya
            </div>
          </div>
        </div>

        <div className="flex items-center px-6 py-10 lg:px-16 lg:py-12">
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

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl dark:text-[#F8EBCF]">
              What is Gurukul?
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-[#5B2B24] sm:text-xl dark:text-[#CDBB9E]">
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

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.label}
                    className="rounded-md border border-[#CFA651]/35 bg-white/40 px-4 py-3 shadow-[0_12px_26px_rgba(95,52,8,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 dark:border-[#D4A72C]/16 dark:bg-[#24150D]/78"
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

            <div className="mt-6 flex items-center gap-4 border-l-2 border-[#D89B37] pl-5 text-base leading-7 text-[#74431C] dark:border-[#D4A72C]/60 dark:text-[#D8C29B]">
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
