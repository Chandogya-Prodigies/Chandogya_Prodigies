import Image from "next/image";
import Link from "next/link";
import { ArrowDown, CheckCircle2 } from "lucide-react";

const kits = [
  {
    id: "foundation-kit",
    title: "Foundation Practice Kit",
    summary:
      "A guided starter kit with worksheets, activities and simple tools that help students practice core concepts after mentor sessions.",
    details: [
      "Weekly practice sheets connected to the current learning module.",
      "Hands-on activities that make concepts visible and memorable.",
      "Reflection prompts so students can write what they understood.",
    ],
  },
  {
    id: "application-kit",
    title: "Application Project Kit",
    summary:
      "A deeper project kit for students who are ready to apply learning through small builds, presentations and practical challenges.",
    details: [
      "Project-based tasks for communication, thinking and problem-solving.",
      "Mentor review checkpoints for correction and improvement.",
      "Showcase-ready outputs that help students build confidence.",
    ],
  },
];

export default function LearningKitsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF4E4] px-5 py-10 text-[#2A1B18] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8 lg:py-12">
      <Image
        src="/images/bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-40 dark:opacity-10"
      />
      <div className="absolute inset-0 bg-[#FFF4E4]/72 dark:bg-[#160C07]/86" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
            Practice Materials
          </p>
          <h2 className="mt-2 font-serif text-4xl font-semibold leading-tight text-[#8E3A21] sm:text-5xl dark:text-[#F8EBCF]">
            Kits
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#5B2B24] sm:text-base dark:text-[#CDBB9E]">
            Each kit supports the learning model with structured practice,
            guided activities and mentor-reviewed outcomes.
          </p>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          {kits.map((kit, index) => (
            <Link
              key={kit.id}
              href={`#${kit.id}`}
              className="group rounded-[26px] border border-[#D4A72C]/28 bg-[#FFDA64]/88 p-4 shadow-[0_14px_30px_rgba(95,52,8,0.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(95,52,8,0.16)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/86"
            >
              <div className="rounded-[22px] bg-[#FFFDF7] p-3 dark:bg-[#160C07]/82">
                <div className="relative aspect-[16/7] overflow-hidden rounded-[18px]">
                  <Image
                    src="/images/kit.jpg"
                    alt={kit.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <h3 className="font-serif text-2xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                  Kit {index + 1}
                </h3>
                <span className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#C99A33] px-5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(95,52,8,0.14)] transition group-hover:bg-[#315C45] dark:bg-[#D4A72C] dark:text-[#160C07]">
                  Learn more
                  <ArrowDown className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-5">
          {kits.map((kit, index) => (
            <article
              id={kit.id}
              key={kit.id}
              className="scroll-mt-28 rounded-md border border-[#D4A72C]/24 bg-[#FFFDF7]/86 p-5 shadow-[0_14px_34px_rgba(95,52,8,0.09)] backdrop-blur-sm dark:border-[#D4A72C]/16 dark:bg-[#21130C]/84 sm:p-6 lg:grid lg:grid-cols-[0.72fr_1.28fr] lg:gap-7"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#FFDA64] dark:bg-[#160C07]">
                <Image
                  src="/images/kit.jpg"
                  alt={kit.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-7 lg:mt-0">
                <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
                  Kit {index + 1}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#8E3A21] dark:text-[#F8EBCF]">
                  {kit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5B2B24] sm:text-base dark:text-[#CDBB9E]">
                  {kit.summary}
                </p>

                <div className="mt-4 grid gap-2">
                  {kit.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex gap-3 rounded-md border border-[#E7D5AC] bg-[#FFF8E6]/72 p-3 dark:border-[#D4A72C]/14 dark:bg-[#160C07]/58"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#315C45] dark:text-[#D4A72C]" />
                      <p className="text-sm leading-6 text-[#5B2B24] dark:text-[#CDBB9E]">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
