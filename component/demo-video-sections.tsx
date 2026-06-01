"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const videos = [
  {
    title: "Critical Thinking Demo",
    mentor: "Chandogya Mentor",
    views: "12K views",
    duration: "12:45",
    thumbnail: "/images/demo-1.png",
    slug: "critical-thinking-demo",
  },
  {
    title: "Public Speaking Demo",
    mentor: "Chandogya Mentor",
    views: "18K views",
    duration: "15:30",
    thumbnail: "/images/demo-2.png",
    slug: "public-speaking-demo",
  },
  {
    title: "AI & Technology Demo",
    mentor: "Chandogya Mentor",
    views: "21K views",
    duration: "10:32",
    thumbnail: "/images/demo-3.png",
    slug: "ai-technology-demo",
  },
];

export default function DemoVideoSection() {
  return (
    <section className="relative overflow-hidden bg-[#E0BE5A] px-6 py-20 dark:bg-[#170A04]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.25),transparent_35%)]" />

      {/* Illustrations */}
      <Image
        src="/images/flowers.png"
        alt=""
        width={220}
        height={300}
        className="pointer-events-none absolute bottom-0 left-0 z-0 opacity-80"
      />

      <Image
        src="/images/leaves.png"
        alt=""
        width={180}
        height={150}
        className="pointer-events-none absolute right-20 top-10 z-0 opacity-80"
      />

      <Image
        src="/images/flower.png"
        alt=""
        width={170}
        height={220}
        className="pointer-events-none absolute bottom-0 right-6 z-0 opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="font-serif text-5xl font-semibold text-[#2D2118] md:text-6xl dark:text-[#F8E7B0]">
          Demo Videos
        </h2>

        <p className="mt-2 font-serif text-xl text-[#4A2B0C] dark:text-[#D4AF37]">
          संवाद • शिक्षा • अनुभव
        </p>

        <div className="relative mt-12">
          <button className="demo-prev absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4A2B0C]/80 text-white shadow-lg transition hover:scale-105 md:flex">
            <ChevronLeft />
          </button>

          <button className="demo-next absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4A2B0C]/80 text-white shadow-lg transition hover:scale-105 md:flex">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".demo-next",
              prevEl: ".demo-prev",
            }}
            pagination={{
              clickable: true,
              el: ".demo-pagination",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.slug}>
                <Link
                  href={`/demo-videos/${video.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-[28px] border border-white/40 bg-[#FFF4D8]/40 p-3 shadow-[0_20px_45px_rgba(70,38,6,0.25)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_30px_70px_rgba(70,38,6,0.35)]">
                    <div className="relative h-[230px] overflow-hidden rounded-[22px]">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-black/35 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#2D2118]">
                          <Play className="ml-1 h-7 w-7 fill-current" />
                        </div>
                      </div>

                      <span className="absolute bottom-4 right-4 rounded-md bg-black/70 px-2 py-1 text-sm text-white">
                        {video.duration}
                      </span>

                      <div className="absolute bottom-4 left-4 right-16 text-left">
                        <h3 className="font-serif text-xl font-bold leading-tight text-white">
                          {video.title}
                        </h3>
                        <p className="mt-1 text-xs text-white/80">
                          {video.mentor} • {video.views}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="demo-pagination mt-2 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
}
