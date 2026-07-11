import {
  ClipboardList,
  Handshake,
  MessageCircleQuestion,
  UsersRound,
} from "lucide-react";

const flowSteps = [
  {
    title: "Gather",
    description:
      "Students arrive into a focused learning space where the mentor sets the session goal, routine and expectations.",
    icon: UsersRound,
  },
  {
    title: "Learn",
    description:
      "Concepts are explained through discussion, examples and mentor-led demonstrations so students understand the purpose clearly.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Practice",
    description:
      "Students complete activities, worksheets, group tasks or presentations while mentors observe and correct in real time.",
    icon: ClipboardList,
  },
  {
    title: "Reflect",
    description:
      "The session closes with feedback, improvement notes and next steps so students carry the learning beyond the classroom.",
    icon: Handshake,
  },
];

export default function OfflineLearningFlow() {
  return (
    <section className="bg-[#EEF3E4] px-5 py-16 text-[#2A1B18] transition-colors duration-500 dark:bg-[#130B07] dark:text-[#F8EBCF] sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#9A5A18] dark:text-[#D4A72C]">
              Student Journey
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2A1B18] sm:text-5xl dark:text-[#F8EBCF]">
              How offline learning flows
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5B2B24] dark:text-[#CDBB9E]">
              A grounded rhythm of presence, interaction, practice and feedback
              makes every offline session purposeful.
            </p>
          </div>

          <div className="rounded-md border border-[#D4A72C]/22 bg-[#FFFDF7]/78 p-5 text-sm leading-7 text-[#5B2B24] shadow-[0_14px_34px_rgba(95,52,8,0.08)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]/78 dark:text-[#CDBB9E] sm:p-6">
            Offline learning gives mentors the chance to notice effort,
            confidence, attention and behavior directly. That makes feedback
            faster, warmer and more personal.
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
