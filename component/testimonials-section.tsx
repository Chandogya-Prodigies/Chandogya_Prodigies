"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    image: "/images/girl.png",
    review:
      "My daughter has become more confident in speaking and asking questions. The mentors make learning feel personal.",
    name: "Ananya Sharma",
    role: "Parent, Mumbai",
  },
  {
    image: "/images/girl1.png",
    review:
      "The sessions helped my child think beyond textbooks. I can see better discipline, curiosity and expression.",
    name: "Priya Mehta",
    role: "Parent, Jaipur",
  },
  {
    image: "/images/girl3.png",
    review:
      "Chandogya feels warm and structured at the same time. The learning model is thoughtful and very supportive.",
    name: "Rohit Verma",
    role: "Parent, Delhi",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF4E2] px-5 py-16 text-[#2E2118] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,253,247,0.82)_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(233,150,47,0.18)_0%,transparent_28%),linear-gradient(180deg,#FFF4E2_0%,#F8E7CF_100%)] dark:bg-[radial-gradient(circle_at_18%_18%,#2A1910_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(212,167,44,0.13)_0%,transparent_28%),linear-gradient(180deg,#160C07_0%,#21130C_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A72C]/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Image
              src="/images/lotus.png"
              alt=""
              width={74}
              height={74}
              className="mb-5 opacity-85"
            />

            <p className="font-serif text-sm font-semibold tracking-[0.22em] text-[#C96F1A] sm:text-base dark:text-[#D4A72C]">
              TESTIMONIALS
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#2E2118] md:text-5xl dark:text-[#F8EBCF]">
              Loved By Families
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
              Parents notice the difference when learning builds confidence,
              clarity and character together.
            </p>

            <div className="mt-5 h-px w-20 bg-[#D4A72C]/65" />

            <Link
              href="/resources/testimonials"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#315C45] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(49,92,69,0.18)] transition hover:bg-[#274B38]"
            >
              Read More Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <div className="grid gap-5 md:grid-cols-2">
              {visibleTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${active}-${index}`}
                  className="relative overflow-hidden rounded-md border border-[#D4A72C]/24 bg-[#FFFDF7]/88 shadow-[0_16px_42px_rgba(95,52,8,0.12)] backdrop-blur-sm dark:border-[#D4A72C]/18 dark:bg-[#21130C]/84 dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative h-[210px] overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 34vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160C07]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-1 text-[#D4A72C]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <Quote className="h-7 w-7 text-[#C96F1A]/70 dark:text-[#D4A72C]/75" />

                    <p className="mt-3 text-base leading-7 text-[#6B5646] dark:text-[#CDBB9E]">
                      {testimonial.review}
                    </p>

                    <div className="mt-5 border-t border-[#D4A72C]/18 pt-4">
                      <p className="font-serif text-lg font-semibold text-[#2E2118] dark:text-[#F8EBCF]">
                        {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm text-[#C96F1A] dark:text-[#D4A72C]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-9 bg-[#E9962F]"
                      : "w-2 bg-[#6B5646]/30 hover:bg-[#C96F1A]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
