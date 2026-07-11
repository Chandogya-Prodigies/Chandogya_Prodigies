import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  MessageCircleHeart,
  PlayCircle,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const featuredStory = {
  name: "Priya Mehta",
  role: "Parent of Aarav, age 11",
  image: "/images/girl1.png",
  quote:
    "The biggest change is not only confidence. Aarav now explains his thoughts with patience, listens better, and takes learning like a responsibility.",
};

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Parent, Mumbai",
    image: "/images/girl.png",
    quote:
      "My daughter has become more expressive in class and at home. The mentor feedback feels personal and very grounded.",
  },
  {
    name: "Rohit Verma",
    role: "Parent, Delhi",
    image: "/images/girl3.png",
    quote:
      "Chandogya has a calm structure. It helped my child build discipline without making learning feel forced.",
  },
  {
    name: "Neha Kapoor",
    role: "Parent, Jaipur",
    image: "/images/blog-hero-2.avif",
    quote:
      "The online sessions are clear, warm and practical. We can see better curiosity and more confident speaking.",
  },
  {
    name: "Sanjay Rao",
    role: "Parent, Pune",
    image: "/images/blog-hero-3.jpeg",
    quote:
      "The hybrid model gave us flexibility while keeping the feeling of real mentorship and guided practice.",
  },
  {
    name: "Meera Iyer",
    role: "Parent, Bengaluru",
    image: "/images/demo-2.png",
    quote:
      "The demo helped us understand the teaching style before enrolling. That made the decision much easier.",
  },
  {
    name: "Kavita Singh",
    role: "Parent, Lucknow",
    image: "/images/demo-3.png",
    quote:
      "It feels rooted but modern. My child enjoys the activities and we appreciate the focus on character.",
  },
];

const videoStories = [
  {
    title: "How demo classes helped us choose",
    image: "/images/demo-1.png",
    href: "/demo-videos",
  },
  {
    title: "A parent view of online learning",
    image: "/images/demo-2.png",
    href: "/demo-videos",
  },
  {
    title: "Confidence after guided practice",
    image: "/images/demo-3.png",
    href: "/demo-videos",
  },
];

const stats = [
  { value: "500+", label: "learners guided", icon: Users },
  { value: "4.8/5", label: "family rating", icon: Star },
  { value: "25+", label: "skill modules", icon: BookOpenCheck },
  { value: "3", label: "learning models", icon: Sparkles },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[#F7F1EA] text-[#2A211B] dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-24">
        <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#E9962F]/14 blur-3xl dark:bg-[#D4A72C]/10" />
        <div className="absolute bottom-8 right-0 h-72 w-72 rounded-full bg-[#315C45]/10 blur-3xl dark:bg-[#315C45]/20" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#C18A4A] dark:text-[#D4A72C]">
              Testimonials
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[0.98] text-[#2A211B] sm:text-6xl lg:text-7xl dark:text-[#F8EBCF]">
              Stories From Our Learning Community
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#75695F] dark:text-[#CDBB9E]">
              Real experiences from families who chose a learning path rooted
              in mentorship, confidence, discipline and modern skill-building.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/demo-videos"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#315C45] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#274B38]"
              >
                Watch Stories
                <PlayCircle className="h-4 w-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8C7B7] bg-white px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#2A211B] transition hover:border-[#C18A4A] dark:border-[#D4A72C]/20 dark:bg-[#21130C] dark:text-[#F8EBCF]"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-[24px] border border-[#E1D4C8] bg-white shadow-[0_20px_60px_rgba(64,45,30,0.1)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-[340px] bg-[#E8DDD2]">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="object-cover"
                  preload
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160C07]/54 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <Quote className="h-10 w-10 text-[#C18A4A] dark:text-[#D4A72C]" />
                <p className="mt-6 font-serif text-3xl font-semibold leading-tight text-[#2A211B] dark:text-[#F8EBCF]">
                  {featuredStory.quote}
                </p>
                <div className="mt-8 border-t border-[#E1D4C8] pt-5 dark:border-[#D4A72C]/16">
                  <p className="text-lg font-semibold">{featuredStory.name}</p>
                  <p className="mt-1 text-sm text-[#8B7C70] dark:text-[#BBA98D]">
                    {featuredStory.role}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#C18A4A] dark:text-[#D4A72C]">
                Family Notes
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-[#2A211B] sm:text-5xl dark:text-[#F8EBCF]">
                What Parents Are Saying
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#75695F] dark:text-[#CDBB9E]">
              Short reflections that show how the programme feels in real life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group rounded-[20px] border border-[#E1D4C8] bg-white p-6 shadow-[0_16px_42px_rgba(64,45,30,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(64,45,30,0.12)] dark:border-[#D4A72C]/16 dark:bg-[#21130C]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[#E8DDD2]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A211B] dark:text-[#F8EBCF]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#8B7C70] dark:text-[#BBA98D]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-[#D4A72C]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-7 text-[#75695F] dark:text-[#CDBB9E]">
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF4E2] px-5 py-16 sm:px-8 dark:bg-[#21130C]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <MessageCircleHeart className="h-10 w-10 text-[#C18A4A] dark:text-[#D4A72C]" />
              <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#2A211B] sm:text-5xl dark:text-[#F8EBCF]">
                Watch A Few Learning Moments
              </h2>
              <p className="mt-5 text-base leading-7 text-[#75695F] dark:text-[#CDBB9E]">
                A quick video view helps families understand the pace, warmth
                and teaching style before they choose a course.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {videoStories.map((story) => (
                <Link
                  key={story.title}
                  href={story.href}
                  className="group overflow-hidden rounded-[18px] border border-[#E1D4C8] bg-white shadow-[0_16px_42px_rgba(64,45,30,0.08)] transition hover:-translate-y-1 dark:border-[#D4A72C]/16 dark:bg-[#160C07]"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-[#160C07]/18">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-[#C18A4A] shadow-lg">
                        <PlayCircle className="h-6 w-6" />
                      </span>
                    </span>
                  </div>
                  <h3 className="p-5 font-serif text-xl font-semibold leading-snug text-[#2A211B] dark:text-[#F8EBCF]">
                    {story.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-[18px] border border-[#E1D4C8] bg-white p-6 dark:border-[#D4A72C]/16 dark:bg-[#21130C]"
              >
                <Icon className="h-7 w-7 text-[#C18A4A] dark:text-[#D4A72C]" />
                <p className="mt-5 font-serif text-4xl font-semibold text-[#2A211B] dark:text-[#F8EBCF]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#8B7C70] dark:text-[#BBA98D]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#17120F] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A72C]">
              Ready To Begin?
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Start with a demo and see if the learning style feels right.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/demo-videos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#160C07]"
            >
              Watch Demos
              <PlayCircle className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/24 px-7 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#D4A72C]"
            >
              Talk To Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
