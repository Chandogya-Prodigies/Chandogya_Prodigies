import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is Chandogya Prodigies?",
    answer:
      "Chandogya Prodigies is a Gurukul-inspired skill development platform for children. We combine mentorship, discipline, practical learning and modern courses.",
  },
  {
    question: "Which learning models are available?",
    answer:
      "Students can learn through online, offline or hybrid models. Online is flexible from home, offline is mentor-led in person, and hybrid combines both.",
  },
  {
    question: "How do I choose the right course?",
    answer:
      "You can start by exploring the course page or watching demo videos. If you are unsure, you can contact us and we will help you choose based on your child's age, interests and learning needs.",
  },
  {
    question: "Are demo videos available before enrolling?",
    answer:
      "Yes. The demo videos page lets families experience the teaching style before selecting a full course.",
  },
  {
    question: "Do students get mentor support?",
    answer:
      "Yes. Mentorship is central to our learning model. Students receive guidance, feedback and structured practice depending on the selected model.",
  },
  {
    question: "Can parents track progress?",
    answer:
      "Yes. Our approach keeps parents informed about consistency, participation and growth so they can understand how the child is progressing.",
  },
];

export default function FaqsPage() {
  return (
    <main className="bg-[#F7F1EA] text-[#2A211B] dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#C18A4A] dark:text-[#D4A72C]">
            Help Center
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl dark:text-[#F8EBCF]">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#75695F] dark:text-[#CDBB9E]">
            Simple answers about courses, learning models, demos and mentor
            support.
          </p>

          <div className="mt-12 divide-y divide-[#E1D4C8] overflow-hidden rounded-[22px] border border-[#E1D4C8] bg-white shadow-[0_18px_52px_rgba(64,45,30,0.08)] dark:divide-[#D4A72C]/14 dark:border-[#D4A72C]/16 dark:bg-[#21130C]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-serif text-xl font-semibold text-[#2A211B] marker:hidden dark:text-[#F8EBCF] sm:px-8">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F7F1EA] text-lg transition group-open:rotate-45 dark:bg-[#160C07]">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-base leading-7 text-[#75695F] dark:text-[#CDBB9E] sm:px-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17120F] px-5 py-14 text-white sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A72C]">
              Still Confused?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Talk to our team before choosing a course.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#160C07]"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
