"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const members = [
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/team1.jpg",
  },
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/team2.jpg",
  },
  {
    name: "Yamini Sharma",
    role: "Leader",
    image: "/images/team1.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#E8BC45] py-24">

      {/* Decorative flowers */}
      <Image
        src="/images/flowers-left.png"
        alt=""
        width={300}
        height={500}
        className="absolute left-0 top-0 w-56 lg:w-72"
      />

      <Image
        src="/images/flowers-right.png"
        alt=""
        width={180}
        height={180}
        className="absolute bottom-0 right-0 w-36 lg:w-44"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <h2 className="mb-12 text-center font-serif text-5xl text-black lg:text-7xl">
          The Help you need, when need it.
        </h2>

        {/* Main Card */}

        <div className="rounded-[50px] bg-[#F1D588] p-12 shadow-xl">

          {/* Tabs */}

          <div className="mb-14 flex flex-wrap justify-center gap-10">

            <button className="rounded-full bg-white px-10 py-4 text-2xl shadow-lg transition hover:shadow-xl">
              Our best team
            </button>

            <button className="px-6 py-4 text-2xl">
              Our Educators
            </button>

            <button className="px-6 py-4 text-2xl">
              Our Partnerships
            </button>

          </div>

          {/* Content */}

          <div className="grid gap-10 lg:grid-cols-[3fr_1.2fr]">

            {/* Cards */}

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {members.map((member, index) => (
                <div
                  key={index}
                  className="rounded-[40px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <h3 className="mb-8 text-center text-2xl font-semibold">
                    {member.name}
                  </h3>

                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="mx-auto h-52 w-52 rounded-full object-cover"
                  />

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-3xl">
                      {member.role}
                    </span>

                    <button className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black transition hover:bg-black hover:text-white">
                      <ArrowUpRight size={36} />
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Right Side */}

            <div className="flex items-center">

              <div>

                <h3 className="mb-6 text-5xl font-semibold leading-tight">
                  Enhancing the work by our supported team
                </h3>

                <p className="mb-8 text-2xl leading-10">
                  Enhancing the work by our supported team.
                  Enhancing the work by our supported team.
                  Enhancing the work by our supported team.
                </p>

                <button className="border-b-2 border-black text-3xl hover:opacity-70">
                  Read More
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}