import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MonitorPlay,
} from "lucide-react";

const modelDetails = [
  "Students use online lessons for flexibility, revision and guided preparation before or after offline sessions.",
  "Offline workshops create space for practice, discussion, mentor observation and real-time correction.",
  "The model keeps learning continuous: concepts can begin online, become stronger through offline activity and return online for revision.",
  "Mentors can support both consistency and confidence because they see the student across digital learning and physical practice.",
];

const linkedModels = [
  {
    title: "Offline Model",
    description:
      "Physical sessions for mentor-led practice, activity-based learning and direct classroom feedback.",
    href: "/learning-model/offline",
    icon: Building2,
  },
  {
    title: "Online Model",
    description:
      "Flexible digital lessons, live guidance and assignments that keep learning consistent from home.",
    href: "/learning-model/online",
    icon: MonitorPlay,
  },
];

export default function HybridModelOverview() {
  return (
    <section className="bg-[#FFF8E6] px-5 py-16 text-[#2A1B18] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-md border border-[#D4A72C]/28 bg-[#FFFDF7] shadow-[0_18px_44px_rgba(95,52,8,0.12)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kit.jpg"
                  alt="Hybrid learning kit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-[#E7D5AC] p-5 dark:border-[#D4A72C]/14">
                <p className="font-serif text-xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                  One journey, two learning spaces
                </p>
                <p className="mt-2 text-sm leading-6 text-[#6B5646] dark:text-[#CDBB9E]">
                  Online flexibility and offline depth work together as one
                  structured Gurukul experience.
                </p>
              </div>
            </div>
          </aside>

          <article className="rounded-md border border-[#D4A72C]/22 bg-[#FFFDF7]/86 p-6 shadow-[0_18px_44px_rgba(95,52,8,0.08)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/82 sm:p-8 lg:p-10">
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
              Hybrid Model
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl dark:text-[#F8EBCF]">
              A blended path where online learning and offline practice support
              each other.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[#5B2B24] sm:text-lg dark:text-[#CDBB9E]">
              <p>
                The hybrid model is created for students who need the freedom
                of online learning and the energy of offline mentorship. It
                keeps learning flexible without losing the discipline,
                correction and human connection of a Gurukul environment.
              </p>
              <p>
                A student may learn a concept online, practice it in an offline
                session, receive mentor feedback and then return to online
                revision. This creates a complete loop of understanding,
                application and improvement.
              </p>
            </div>

            <div className="my-8 h-px bg-gradient-to-r from-[#D4A72C]/60 via-[#D4A72C]/20 to-transparent" />

            <h3 className="font-serif text-2xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
              How the hybrid model works
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

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {linkedModels.map((model) => {
                const Icon = model.icon;

                return (
                  <Link
                    key={model.title}
                    href={model.href}
                    className="group rounded-md border border-[#D4A72C]/24 bg-white/72 p-5 shadow-[0_12px_28px_rgba(95,52,8,0.08)] transition hover:-translate-y-1 hover:border-[#315C45]/35 hover:shadow-[0_18px_38px_rgba(95,52,8,0.13)] dark:border-[#D4A72C]/16 dark:bg-[#160C07]/62 dark:hover:border-[#D4A72C]/34"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F8E7CF] text-[#315C45] dark:bg-[#21130C] dark:text-[#D4A72C]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-[#9A5A18] transition group-hover:translate-x-1 dark:text-[#D4A72C]" />
                    </div>
                    <h4 className="mt-5 font-serif text-2xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                      {model.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#5B2B24] dark:text-[#CDBB9E]">
                      {model.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[#315C45] dark:text-[#D4A72C]">
                      Learn more
                    </span>
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
