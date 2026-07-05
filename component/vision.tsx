"use client";

import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="bg-[#EFB13A] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="flex flex-col items-center">

            {/* Sanskrit */}
            <p className="mb-8 font-serif text-4xl text-black lg:text-5xl">
              तं मा सप्रथमा॑सि
            </p>

            <div className="relative">

              <Image
                src="/images/lotus.png"
                alt="Lotus"
                width={500}
                height={500}
                className="w-[360px] lg:w-[460px]"
              />

              {/* Center Circle */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#E8D86B] shadow-xl">

                  <span className="text-center font-serif text-5xl leading-tight text-black">
                    Vision
                    <br />
                    image
                  </span>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="mb-10 font-serif text-6xl font-semibold text-black lg:text-8xl">
              Vision
            </h2>

            <p className="max-w-3xl font-serif text-2xl leading-[1.6] text-black lg:text-[2rem]">
              To build a modern, skill-based education ecosystem rooted in the
              Ancient Indian Knowledge System, reimagined for today's world. We
              are not recreating the past. We are reviving its wisdom with
              modern execution.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}