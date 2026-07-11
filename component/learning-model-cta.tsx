import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";

type LearningModelCtaProps = {
  model: "online" | "offline" | "hybrid";
};

const ctaContent = {
  online: {
    eyebrow: "Begin Online Learning",
    title: "Give your child a structured online Gurukul routine.",
    description:
      "Start with guided lessons, mentor support and practical assignments designed to keep learning consistent from home.",
    primary: "Explore Online Courses",
    secondary: "Book a Mentor Call",
  },
  offline: {
    eyebrow: "Begin Offline Learning",
    title: "Bring your child into a focused Gurukul learning space.",
    description:
      "Choose center-based sessions where mentors guide students through activity, practice, correction and confident growth.",
    primary: "Explore Offline Programs",
    secondary: "Schedule a Visit",
  },
  hybrid: {
    eyebrow: "Begin Hybrid Learning",
    title: "Give your child the strength of online and offline learning.",
    description:
      "Blend flexible digital lessons with mentor-led offline practice for a complete Gurukul learning experience.",
    primary: "Explore Hybrid Programs",
    secondary: "Plan a Learning Path",
  },
};

export default function LearningModelCta({ model }: LearningModelCtaProps) {
  const content = ctaContent[model];

  return (
    <section className="bg-[#FFF8E6] px-5 py-16 text-[#2A1B18] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-md border border-[#D4A72C]/28 bg-[#F8C84D] px-6 py-12 shadow-[0_22px_54px_rgba(95,52,8,0.14)] dark:border-[#D4A72C]/18 dark:bg-[#21130C] sm:px-10 lg:px-14 lg:py-16">
          <Image
            src="/images/learning-model-cta-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FFD761]/72 dark:bg-[#160C07]/82" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8E6]/45 via-[#FFF8E6]/18 to-transparent dark:from-[#160C07]/80 dark:via-[#160C07]/45" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#7A3A16] dark:text-[#D4A72C]">
                {content.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl lg:text-6xl dark:text-[#F8EBCF]">
                {content.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5B2B24] sm:text-lg dark:text-[#CDBB9E]">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
              <Link
                href="/courses"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#315C45] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(49,92,69,0.2)] transition hover:bg-[#274B38] dark:bg-[#D4A72C] dark:text-[#160C07] dark:hover:bg-[#E4BB46]"
              >
                {content.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-[#315C45]/35 bg-[#FFFDF7]/72 px-6 text-sm font-semibold text-[#2A1B18] transition hover:bg-[#FFFDF7] dark:border-[#D4A72C]/28 dark:bg-[#160C07]/55 dark:text-[#F8EBCF] dark:hover:bg-[#21130C]"
              >
                <CalendarCheck className="h-4 w-4" />
                {content.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
