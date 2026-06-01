"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    image: "/images/girl.png",
    review: "Mom says it sustainable, I said it comfy!",
    name: "Dhruvi",
    city: "Mumbai",
  },
  {
    image: "/images/girl1.png",
    review: "My child became more confident and expressive.",
    name: "Priya",
    city: "Jaipur",
  },
  {
    image: "/images/girl3.png",
    review: "The mentors are amazing and very supportive.",
    name: "Rohit",
    city: "Delhi",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const first = testimonials[active];
  const second = testimonials[(active + 1) % testimonials.length];

  return (
    <section className="relative overflow-hidden bg-[#F8D9A4] px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.8fr]">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center border-r border-[#2D2118]/20 px-6 text-center">
          <Image
            src="/images/lotus.png"
            alt="Lotus"
            width={145}
            height={145}
            className="opacity-80"
          />

          <p className="mt-10 text-lg text-[#2D2118]">look what shared by</p>

          <h2 className="mt-6 font-serif text-5xl font-bold leading-tight text-[#9A3030]">
            Dear <br /> customers
          </h2>

          <p className="mt-8 max-w-xs text-xl leading-snug text-[#2D2118]">
            Share your valuable experience with us
            <br />
            Tag us on @Chandogya Prodigies to get a chance to be featured
          </p>

          <div className="mt-12 h-20 w-32 rounded-full border border-[#2D2118]/20 opacity-40" />
        </div>

        {/* Right Gallery */}
        <div className="relative min-h-[560px]">
          {/* Image 1 */}
          <div className="absolute left-[5%] top-10 w-[330px]">
            <div className="relative h-[430px] overflow-hidden shadow-[0_18px_45px_rgba(70,38,6,0.25)]">
              <Image
                src={first.image}
                alt={first.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-12 left-1/2 w-[260px] -translate-x-1/2 bg-white px-5 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="mb-1 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="font-serif text-sm italic text-[#2D2118]">
                “{first.review}”
              </p>
              <p className="mt-2 text-xs text-[#777]">
                — {first.name}, {first.city}
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="absolute right-[4%] top-10 w-[330px]">
            <div className="relative h-[430px] overflow-hidden shadow-[0_18px_45px_rgba(70,38,6,0.25)]">
              <Image
                src={second.image}
                alt={second.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -top-10 right-[-40px] w-[260px] bg-white px-5 py-4 text-center shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="mb-1 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>
              <p className="font-serif text-sm italic text-[#2D2118]">
                “{second.review}”
              </p>
              <p className="mt-2 text-xs text-[#777]">
                — {second.name}, {second.city}
              </p>
            </div>
          </div>

          {/* Small decoration */}
          <div className="absolute bottom-0 left-[35%] text-5xl opacity-50">
            🌷
          </div>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index ? "w-8 bg-[#9A3030]" : "w-2 bg-[#2D2118]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
