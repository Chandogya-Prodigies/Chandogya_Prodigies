"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const members = [
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/img.png",
  },
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/img.png",
  },
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/img.png",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#E8BC45] py-24">
      {/* Decorative Flowers */}

      <Image
        src="/images/leavy.png"
        alt=""
        width={300}
        height={500}
        className="absolute left-0 top-0 w-52 lg:w-72"
      />

      <Image
        src="/images/pretflower.png"
        alt=""
        width={180}
        height={180}
        className="absolute bottom-0 right-0 w-32 lg:w-44"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}

        <h2 className="mb-14 text-center font-serif text-5xl text-black lg:text-7xl">
          The Help you need, when need it.
        </h2>

        {/* Main Container */}

        <div className="rounded-[40px] bg-[#F4DC95] px-10 py-10 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
          {/* Tabs */}

          <div className="mb-12 flex flex-wrap items-center justify-center gap-10">
            <button className="rounded-full bg-white px-10 py-3 text-xl font-medium shadow-md transition-all duration-300 hover:shadow-lg">
              Our best team
            </button>

            <button className="text-xl font-medium transition hover:text-black/70">
              Our Educators
            </button>

            <button className="text-xl font-medium transition hover:text-black/70">
              Our Partnerships
            </button>
          </div>

          {/* Content */}

          <div className="grid items-center gap-12 lg:grid-cols-[2.8fr_1fr]">
            {/* Cards */}

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="mx-auto w-full max-w-[290px] rounded-[28px] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
                >
                  <h3 className="mb-5 text-center text-xl font-semibold">
                    {member.name}
                  </h3>

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={180}
                    height={180}
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                  />

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xl font-medium">
                      {member.role}
                    </span>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-[#FAFAFA] transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white">
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side */}

            <div className="flex items-center lg:pl-6">
              <div>
                <h3 className="mb-5 font-serif text-4xl font-semibold leading-tight text-black lg:text-5xl">
                  Enhancing the work by our supported team
                </h3>

                <p className="mb-8 text-lg leading-9 text-black/75">
                  Enhancing the work by our supported team. We believe in
                  creating an ecosystem where passionate educators, mentors and
                  professionals work together to provide the best learning
                  experience for every child.
                </p>

                <button className="group text-xl font-semibold text-black">
                  Read More
                  <span className="mt-1 block h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}