import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#D97824] px-6 py-16 text-[#FFF8E6] dark:bg-[#160C07]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,248,224,0.22),transparent_30%),radial-gradient(circle_at_84%_78%,rgba(49,92,69,0.26),transparent_30%),linear-gradient(135deg,#B83216_0%,#D97824_48%,#F0A22A_100%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(212,167,44,0.14),transparent_30%),linear-gradient(135deg,#160C07_0%,#21130C_56%,#132118_100%)]" />
      <Image
        src="/images/leaves.png"
        alt=""
        width={220}
        height={180}
        className="pointer-events-none absolute left-6 top-6 w-28 opacity-35 sm:w-36 lg:w-44"
      />
      <Image
        src="/images/flowers.png"
        alt=""
        width={190}
        height={190}
        className="pointer-events-none absolute bottom-0 right-0 w-32 opacity-35 lg:w-44"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-serif text-sm font-semibold tracking-[0.24em] text-[#FFE8A8]">
            BEGIN THE JOURNEY
          </p>

          <h2 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl dark:text-[#F8EBCF]">
            Prefer a conversation before deciding?
        </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg dark:text-[#F8EBCF]/76">
            Talk to our team and understand the right learning path for your
            child. We will guide you through the courses, mentorship approach
            and next steps with clarity.
        </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FFF8E6] px-7 py-4 text-base font-semibold text-[#8E3A22] shadow-[0_16px_34px_rgba(68,31,12,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:px-8"
          >
            <MessageCircle className="h-5 w-5" />
            Book a consultation
          </Link>

          <Link
            href="/learning-model/offline"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/35 px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 sm:px-8 dark:text-[#F8EBCF]"
          >
            Explore learning kits
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
