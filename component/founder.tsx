"use client";

import Image from "next/image";

export default function FounderNoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8E2B9] py-24">

      {/* Decorative Orange Waves */}

      <Image
        src="/images/orange-wave.png"
        alt=""
        width={1200}
        height={900}
        className="absolute left-0 top-0 w-[75%] opacity-90 pointer-events-none select-none"
      />

      {/* Bottom Right Flowers */}

      <Image
        src="/images/pretflower.png"
        alt=""
        width={250}
        height={250}
        className="absolute bottom-0 right-0 w-52 lg:w-64"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center">

        {/* Founder Note */}

        <div className="relative flex-1">

          <div className="rounded-[48px] border border-white/30 bg-white/35 p-10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <h2 className="mb-8 text-center font-serif text-5xl text-black">
              Founder’s Note:-
            </h2>

            <p className="font-serif text-[1.9rem] leading-[1.55] text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae justo sed augue gravida convallis. Integer
              feugiat erat non ipsum facilisis, sed tincidunt libero
              pellentesque. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae doloremque minima magni temporibus, saepe fugiat
              exercitationem aliquam doloribus illum incidunt.
            </p>

          </div>

        </div>

        {/* Founder Image */}

        <div className="relative shrink-0">

          <div className="rounded-full bg-[#F5B13D] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.15)]">

            <Image
              src="/images/img.png"
              alt="Founder"
              width={420}
              height={420}
              className="h-[340px] w-[340px] rounded-full object-cover lg:h-[420px] lg:w-[420px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}