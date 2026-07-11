import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const modelDetails = [
  "Students learn in a focused physical environment where mentors can observe their participation, discipline and practical effort closely.",
  "Sessions are built around interaction, activities, worksheets, group practice and real-time correction instead of passive listening.",
  "The offline model encourages peer learning, confident expression and hands-on skill development through guided classroom routines.",
  "Parents receive clearer visibility into consistency and growth because mentor feedback comes from direct observation.",
];

export default function OfflineModelOverview() {
  return (
    <section className="bg-[#FFF8E6] px-5 py-16 text-[#2A1B18] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-md border border-[#D4A72C]/28 bg-[#FFFDF7] shadow-[0_18px_44px_rgba(95,52,8,0.12)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/offline.jpg"
                  alt="Offline classroom learning session"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-4 border-t border-[#E7D5AC] p-5 dark:border-[#D4A72C]/14">
                <Image
                  src="/images/guruji.png"
                  alt="Guru mentor"
                  width={92}
                  height={130}
                  className="h-24 w-auto object-contain"
                />
                <div>
                  <p className="font-serif text-xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                    Guided offline learning
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6B5646] dark:text-[#CDBB9E]">
                    Personal mentorship, practice and discipline in one space.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <article className="rounded-md border border-[#D4A72C]/22 bg-[#FFFDF7]/86 p-6 shadow-[0_18px_44px_rgba(95,52,8,0.08)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/82 sm:p-8 lg:p-10">
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
              Offline Model
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl dark:text-[#F8EBCF]">
              A hands-on Gurukul environment for students who learn by doing.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#5B2B24] sm:text-lg dark:text-[#CDBB9E]">
              <p>
                The offline model is built for students who grow best through
                presence, routine and direct mentor interaction. It brings
                learning into a focused physical setting where students listen,
                practice, ask, perform and improve together.
              </p>
              <p>
                Each session is designed to feel active and accountable.
                Students do not only understand concepts; they build habits,
                confidence and practical skill through guided activities.
              </p>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-[#D4A72C]/60 via-[#D4A72C]/20 to-transparent" />

            <h3 className="font-serif text-2xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
              How the offline model works
            </h3>
            <div className="mt-5 grid gap-4">
              {modelDetails.map((detail) => (
                <div
                  key={detail}
                  className="flex gap-3 rounded-md border border-[#E7D5AC] bg-[#FFF8E6]/70 p-4 dark:border-[#D4A72C]/14 dark:bg-[#160C07]/60"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#315C45] dark:text-[#D4A72C]" />
                  <p className="text-sm leading-7 text-[#5B2B24] sm:text-base dark:text-[#CDBB9E]">
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md border-l-4 border-[#315C45] bg-[#F8E7CF]/80 px-5 py-4 dark:border-[#D4A72C] dark:bg-[#160C07]/72">
              <p className="font-serif text-xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                The goal is clear:
              </p>
              <p className="mt-2 text-base leading-7 text-[#5B2B24] dark:text-[#CDBB9E]">
                create a learning space where students are seen, corrected,
                encouraged and trained through the Gurukul values of discipline,
                attention and practical growth.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
