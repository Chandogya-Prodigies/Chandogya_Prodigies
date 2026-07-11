import {
  ClipboardCheck,
  MessageSquareText,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

const flowSteps = [
  {
    title: "Watch",
    description:
      "Students begin with recorded lessons or live sessions that explain the concept clearly and set the learning goal for the week.",
    icon: PlayCircle,
  },
  {
    title: "Practice",
    description:
      "Assignments, worksheets and short projects help students apply the concept instead of only consuming the lesson.",
    icon: ClipboardCheck,
  },
  {
    title: "Discuss",
    description:
      "Mentor-led doubt sessions create space for questions, corrections and deeper understanding through conversation.",
    icon: MessageSquareText,
  },
  {
    title: "Improve",
    description:
      "Progress is reviewed, gaps are identified and the next learning path is adjusted so every student keeps moving forward.",
    icon: TrendingUp,
  },
];

export default function OnlineLearningFlow() {
  return (
    <section className="bg-[#EEF3E4] px-5 py-16 text-[#2A1B18] transition-colors duration-500 dark:bg-[#130B07] dark:text-[#F8EBCF] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
              Student Journey
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl dark:text-[#F8EBCF]">
              How online learning flows
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5B2B24] dark:text-[#CDBB9E]">
              A simple rhythm of learning, practice, feedback and growth keeps
              the online model organized and easy to follow.
            </p>
          </div>

          <div className="rounded-md border border-[#D4A72C]/22 bg-[#FFFDF7]/78 p-5 text-sm leading-7 text-[#5B2B24] shadow-[0_14px_34px_rgba(95,52,8,0.08)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/78 dark:text-[#CDBB9E] sm:p-6">
            Students do not move randomly from one video to another. Each step
            has a purpose, so the experience feels guided, accountable and
            steady.
          </div>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[#D4A72C]/40 md:block lg:left-0 lg:right-0 lg:top-1/2 lg:h-px lg:w-full lg:-translate-y-1/2" />

          <div className="grid gap-5 lg:grid-cols-4">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative rounded-md border border-[#D4A72C]/24 bg-[#FFFDF7] p-5 shadow-[0_16px_36px_rgba(95,52,8,0.1)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4A72C]/35 bg-[#F8E7CF] text-[#315C45] dark:border-[#D4A72C]/22 dark:bg-[#160C07] dark:text-[#D4A72C]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A5A18] dark:text-[#D4A72C]">
                        Step {index + 1}
                      </p>
                      <h3 className="font-serif text-2xl font-semibold text-[#2A1B18] dark:text-[#F8EBCF]">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#5B2B24] dark:text-[#CDBB9E]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
