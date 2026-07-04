"use client";

import Image from "next/image";

export default function Foundationsection() {
  return (
    <section className="relative overflow-hidden bg-[#F7C94A] py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#F8D14F] via-[#F7C94A] to-[#F4C43E]" />

      {/* Top Left Paint */}
      <div className="absolute -top-20 -left-16 h-80 w-80 rounded-full bg-[#F27B42]/35 blur-3xl" />

      <div className="absolute top-10 left-10 h-52 w-52 rounded-full bg-[#F58A3A]/30 blur-2xl" />

      {/* Right Paint */}
      <div className="absolute top-40 -right-24 h-[450px] w-[260px] rounded-full bg-[#F55E3C]/30 blur-3xl rotate-12" />

      <div className="absolute bottom-0 right-52 h-56 w-80 rounded-full bg-[#F55638]/25 blur-3xl" />

      {/* Decorative Flowers */}
      <Image
        src="/images/flowers.png"
        alt=""
        width={350}
        height={350}
        className="absolute bottom-0 left-0 w-72 lg:w-80"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-8 lg:grid-cols-2">

        {/* Left */}
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={320}
            height={320}
            className="w-60 lg:w-80"
          />
        </div>

        {/* Right */}
        <div>

          <h2 className="font-serif text-4xl font-semibold text-black lg:text-5xl">
            How it is formed :-
          </h2>

          <p className="mt-10 text-2xl leading-[1.8] text-black font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus omnis saepe quisquam ducimus inventore deserunt
            impedit officiis, laboriosam doloremque, quae cumque repellendus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestiae asperiores beatae recusandae quas
            repudiandae sint. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam, praesentium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, minima.
          </p>

        </div>

      </div>
    </section>
  );
}