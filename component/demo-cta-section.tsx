import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function DemoCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#D46E32] px-5 py-16 text-[#160C07] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8">
      <Image
        src="/images/demo-cta-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-74 dark:opacity-22"
      />
      <div className="absolute inset-0 bg-[#F3A064]/34 dark:bg-[#160C07]/72" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl dark:text-[#F8EBCF]">
          Did you make up your mind to join?
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-base font-medium leading-7 text-[#2A1B18] sm:text-lg dark:text-[#CDBB9E]">
          Explore the courses, watch a demo, or talk to us so we can help you
          choose the right learning path for your child.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/courses"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3D2A13] px-8 text-base font-semibold text-white shadow-[0_14px_28px_rgba(61,42,19,0.2)] transition hover:-translate-y-1 hover:bg-[#315C45] dark:bg-[#D4A72C] dark:text-[#160C07]"
          >
            Explore more
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/courses"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#3D2A13] px-8 text-base font-semibold text-white shadow-[0_14px_28px_rgba(61,42,19,0.2)] transition hover:-translate-y-1 hover:bg-[#315C45] dark:bg-[#D4A72C] dark:text-[#160C07]"
          >
            Join now!
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3D2A13] px-8 text-base font-semibold text-white shadow-[0_14px_28px_rgba(61,42,19,0.2)] transition hover:-translate-y-1 hover:bg-[#315C45] dark:bg-[#D4A72C] dark:text-[#160C07]"
          >
            <PhoneCall className="h-4 w-4" />
            Dial call
          </Link>
        </div>
      </div>
    </section>
  );
}
