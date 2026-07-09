"use client";

import Image from "next/image";

export default function CustomerStories() {
  return (
    <section className="relative overflow-hidden bg-[#F8DFB6] py-24">

      <div className="mx-auto max-w-7xl">

        <div className="grid lg:grid-cols-[0.95fr_1.45fr]">

          {/* LEFT */}

          <div className="relative flex flex-col items-center justify-center border-r border-[#d5c2a2] px-10">

            {/* Lotus */}

            <Image
              src="/images/lotus.png"
              alt=""
              width={240}
              height={240}
              className="mb-10 w-56"
            />

            <p className="text-2xl text-black">
              look what shared by
            </p>

            <h2 className="mt-3 font-serif text-6xl text-[#7C2228]">
              Dear customers
            </h2>

            <div className="mt-8 space-y-1 text-center">

              <p className="text-4xl leading-tight">
                Share your valuable
              </p>

              <p className="text-4xl leading-tight">
                experience with us
              </p>

              <p className="mt-3 text-4xl">
                Tag us on
                <span className="text-[#7C2228] font-semibold">
                  {" "}@Chandogya
                </span>
              </p>

              <p className="text-4xl text-[#7C2228]">
                Prodigies
              </p>

              <p className="text-4xl leading-tight">
                to get a chance to
              </p>

              <p className="text-4xl">
                be featured
              </p>

            </div>

            {/* Bottom Flower */}

            <Image
              src="/images/flowers.png"
              alt=""
              width={180}
              height={180}
              className="absolute bottom-0 right-10 w-40"
            />

          </div>

          {/* RIGHT */}

          <div className="relative px-14">

            <div className="grid grid-cols-2 gap-16">

              {/* IMAGE ONE */}

              <div className="relative">

                <Image
                  src="/images/img.png"
                  alt=""
                  width={420}
                  height={650}
                  className="h-[620px] w-full object-cover"
                />

                {/* Review */}

                <div className="absolute -bottom-14 left-1/2 w-[390px] -translate-x-1/2 bg-white p-8 shadow-xl">

                  <p className="text-center text-[34px] italic font-serif leading-tight">
                    “Mom says it sustainable,
                    I said it comfy!”
                  </p>

                  <p className="mt-6 text-center text-2xl text-gray-500">
                    — Dhruvi, Mumbai
                  </p>

                </div>

                {/* Flower */}

                <Image
                  src="/images/small-flower.png"
                  alt=""
                  width={70}
                  height={70}
                  className="absolute bottom-20 right-0 w-16"
                />

              </div>

              {/* IMAGE TWO */}

              <div className="relative pt-6">

                <Image
                  src="/images/img.png"
                  alt=""
                  width={420}
                  height={650}
                  className="h-[620px] w-full object-cover"
                />

                {/* Floating Review */}

                <div className="absolute -top-10 right-[-80px] w-[340px] bg-white p-6 shadow-xl">

                  <p className="text-center text-[30px] italic font-serif leading-tight">
                    “Mom says it sustainable,
                    it comfy!”
                  </p>

                  <p className="mt-5 text-center text-xl text-gray-500">
                    — Dhruvi, Mumbai
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}