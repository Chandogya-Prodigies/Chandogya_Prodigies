"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Users,
  Star,
  Eye,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const courses = [
  {
    title: "Advanced Communication Skills & Public Speaking Masterclass",
    image: "/images/cr.jpg",
    duration: "12 Weeks",
    likes: "1,850+",
    enrolled: "8,430",
    mentor: "Sarah Johnson",
    rating: "4.8",
    reviews: "320 Reviews",
    slug: "advanced-communication-skills",
  },
  {
    title: "Creative & Critical Thinking Skills Masterclass",
    image: "/images/financial-Planning.jpg",
    duration: "10 Weeks",
    likes: "1,920+",
    enrolled: "9,150",
    mentor: "David Chen",
    rating: "4.9",
    reviews: "410 Reviews",
    slug: "creative-critical-thinking",
  },
  {
    title: "Personality Development for Young Leaders",
    image: "/images/crirical.jpg",
    duration: "8 Weeks",
    likes: "1,450+",
    enrolled: "6,200",
    mentor: "Chandogya Mentor",
    rating: "4.7",
    reviews: "260 Reviews",
    slug: "personality-development",
  },
];

export default function LovedCoursesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6A84B] py-20 h-160">
      {/* Background image */}
      <Image
        src="/images/bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover opacity-95"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-4xl font-semibold text-[#2D2118] md:text-5xl">
          Courses people loved
        </h2>

        <div className="relative mt-12">
          <button className="courses-prev absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#2D2118]/80 text-white transition hover:scale-105">
            <ChevronLeft />
          </button>

          <button className="courses-next absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#2D2118]/80 text-white transition hover:scale-105">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            rewind
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".courses-prev",
              nextEl: ".courses-next",
            }}
            spaceBetween={34}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.slug}>
                <Link href={`/courses/${course.slug}`} className="group block">
                  <article className="overflow-hidden rounded-[22px] border-[6px] border-white bg-[#EDF5F9] shadow-[0_20px_45px_rgba(70,38,6,0.25)] transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_30px_65px_rgba(70,38,6,0.35)]">
                    <div className="relative h-[110px] overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="min-h-[70px] text-xl font-bold leading-tight text-[#2D2118]">
                        {course.title}
                      </h3>

                      <div className="mt-4 grid grid-cols-3 gap-3 border-y border-[#C9D8DD] py-3 text-xs text-[#42545C]">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            Duration:
                            <br />
                            <b>{course.duration}</b>
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          <span>
                            Likes:
                            <br />
                            <b>{course.likes}</b>
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>
                            Enrolled:
                            <br />
                            <b>{course.enrolled}</b>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-[#2D2118]">
                            {course.mentor}
                          </p>
                          <div className="mt-1 flex items-center gap-1 text-xs text-[#5B4A3A]">
                            <span>{course.rating}</span>
                            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                            <span>⭐⭐⭐⭐</span>
                            <span>{course.reviews}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-xs text-[#5B4A3A]">
                          <Eye className="h-4 w-4" />
                          Watched
                        </div>
                      </div>

                      <button className="mt-5 w-full rounded-md bg-[#9A461A] py-3 text-sm font-bold uppercase tracking-wide text-white transition group-hover:bg-[#2D2118]">
                        Enroll Now →
                      </button>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
