"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "The demo class helped us understand the teaching style clearly. My child was engaged from the first few minutes.",
    name: "Priya Sharma",
    role: "Parent of Grade 6 learner",
    image: "/images/img.png",
  },
  {
    quote:
      "The session felt practical, warm and structured. It gave us confidence before choosing the full course.",
    name: "Rohan Mehta",
    role: "Parent, Online Model",
    image: "/images/guruji.png",
  },
  {
    quote:
      "The mentor explained ideas in a way children could actually apply. The demo made the programme feel trustworthy.",
    name: "Ananya Kapoor",
    role: "Parent, Hybrid Model",
    image: "/images/girl1.png",
  },
  {
    quote:
      "We liked the balance of discipline and creativity. The demo gave us a real glimpse of the learning experience.",
    name: "Kavita Rao",
    role: "Parent, Offline Gurukul",
    image: "/images/girl3.png",
  },
  {
    quote:
      "The demo was short but meaningful. It showed us how the mentor handles questions and keeps children involved.",
    name: "Meera Iyer",
    role: "Parent, Demo Class",
    image: "/images/girl.png",
  },
  {
    quote:
      "My son usually gets distracted online, but this demo had a clear flow. He wanted to watch one more lesson.",
    name: "Nitin Arora",
    role: "Parent, Online Demo",
    image: "/images/botboy.png",
  },
];

export default function DemoTestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9DCA8] px-5 py-14 text-black transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8">
      <style>
        {`
          @keyframes testimonial-rise-in {
            from {
              opacity: 0;
              transform: translateY(28px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
      <Image
        src="/images/testimonials-rainbow-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-left-bottom opacity-90 dark:opacity-18"
      />
      <div className="absolute inset-0 bg-[#F9DCA8]/28 dark:bg-[#160C07]/78" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-black sm:text-5xl dark:text-[#F8EBCF]">
          Don&apos;t take our words for it!
          <br />
          Hear it from our users
        </h2>

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="testimonial-prev absolute -left-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#3D2A13] text-white shadow-lg transition hover:-translate-y-[calc(50%+2px)] hover:bg-[#315C45] md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="testimonial-next absolute -right-2 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#3D2A13] text-white shadow-lg transition hover:-translate-y-[calc(50%+2px)] hover:bg-[#315C45] md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            loop
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              0: { slidesPerView: 1.08 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!overflow-visible pb-10"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name} className="h-auto">
                <article
                  style={{
                    animation: "testimonial-rise-in 700ms ease-out both",
                    animationDelay: `${index * 90}ms`,
                  }}
                  className="flex h-full min-h-[330px] flex-col rounded-[18px] bg-white px-6 py-6 text-black shadow-[0_16px_30px_rgba(74,43,12,0.18)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_42px_rgba(74,43,12,0.24)] dark:bg-[#21130C] dark:text-[#F8EBCF]"
                >
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#F8E7CF]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-7 text-sm font-medium leading-6 text-[#201711] dark:text-[#CDBB9E]">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <div className="mt-auto pt-10">
                    <p className="font-serif text-xl font-semibold leading-none text-[#2A1B18] dark:text-[#F8EBCF]">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 text-xs text-[#6B5646] dark:text-[#CDBB9E]">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
