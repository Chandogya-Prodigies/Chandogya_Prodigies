import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(110deg,#B83216_0%,#E88919_45%,#F0A22A_100%)] px-6 py-28 text-white">
      {/* Decorative soft overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(255,255,255,0.22),transparent_28%)]" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute -right-20 bottom-[-80px] h-[360px] w-[360px] rounded-full border-[22px] border-white/10" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
          Prefer a{" "}
          <span className="text-[#8E2F2F]">
            Discussion
          </span>{" "}
          before deciding?
        </h2>

        <p className="mx-auto mt-8 max-w-5xl text-2xl leading-relaxed md:text-4xl">
          our team is here to help you with our resources. just make sure a call
          you can.
          <br />
          we are here for guiding you through the procedure or our guidance of
          courses
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row">
          <Link
            href="/kits"
            className="rounded-full bg-[#8E3A22] px-24 py-5 text-3xl font-medium text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F2B18]"
          >
            Explore Kit
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#8E3A22] px-24 py-5 text-3xl font-medium text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#6F2B18]"
          >
            Contact now !
          </Link>
        </div>
      </div>
    </section>
  );
}