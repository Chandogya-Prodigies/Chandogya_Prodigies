import Image from "next/image";
import Link from "next/link";
import { MoreVertical, Play } from "lucide-react";

const demoVideos = [
  {
    title: "Critical Thinking Demo Class",
    category: "Thinking Skills",
    mentor: "Chandogya Mentor",
    views: "12K views",
    duration: "12:45",
    thumbnail: "/images/demo-1.png",
    href: "/courses/creative-critical-thinking",
  },
  {
    title: "Public Speaking Demo Class",
    category: "Communication",
    mentor: "Chandogya Mentor",
    views: "18K views",
    duration: "15:30",
    thumbnail: "/images/demo-2.png",
    href: "/courses/communication-public-speaking",
  },
  {
    title: "AI & Technology Demo Class",
    category: "Future Skills",
    mentor: "Chandogya Mentor",
    views: "21K views",
    duration: "10:32",
    thumbnail: "/images/demo-3.png",
    href: "/courses/ai-foundations",
  },
  {
    title: "Financial Literacy Demo Class",
    category: "Money Skills",
    mentor: "Chandogya Mentor",
    views: "9.8K views",
    duration: "14:18",
    thumbnail: "/images/financial-Planning.jpg",
    href: "/courses/financial-literacy-for-kids",
  },
  {
    title: "Creative Thinking Demo Class",
    category: "Creativity",
    mentor: "Chandogya Mentor",
    views: "11K views",
    duration: "13:20",
    thumbnail: "/images/cr.jpg",
    href: "/courses/creative-critical-thinking",
  },
  {
    title: "Confidence Building Demo Class",
    category: "Personality",
    mentor: "Chandogya Mentor",
    views: "16K views",
    duration: "11:25",
    thumbnail: "/images/offline.jpg",
    href: "/courses/offline-gurukul-lab",
  },
];

export default function DemoVideoLibrarySection() {
  const rows = [demoVideos.slice(0, 3), demoVideos.slice(3)];

  return (
    <section className="bg-[#FA9550] px-5 py-14 text-[#1F130D] transition-colors duration-500 dark:bg-[#160C07] dark:text-[#F8EBCF] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl font-semibold text-black sm:text-4xl dark:text-[#F8EBCF]">
          Watch the best demos here
        </h2>

        <div className="mt-10 space-y-7">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {rowIndex > 0 ? (
                <div className="mb-7 h-2 w-full bg-[#FFF8E6] dark:bg-[#D4A72C]/30" />
              ) : null}

              <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                {row.map((video) => (
                  <Link
                    key={`${video.href}-${video.title}`}
                    href={video.href}
                    className="group block"
                  >
                    <article className="overflow-hidden rounded-[28px] border border-white/80 bg-[#111] shadow-[0_18px_38px_rgba(88,43,11,0.18)] transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_52px_rgba(88,43,11,0.24)] dark:border-[#D4A72C]/20">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
                        <span className="absolute bottom-3 right-3 rounded bg-black/78 px-2 py-1 text-xs font-semibold text-white">
                          {video.duration}
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/88 text-[#1F130D] shadow-lg">
                            <Play className="ml-0.5 h-6 w-6 fill-current" />
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-[1fr_24px] gap-3 bg-[#101010] px-4 py-3 text-white">
                        <div>
                          <p className="text-xs text-white/62">
                            People also watched this video
                          </p>
                          <h3 className="mt-1 min-h-10 text-sm font-semibold leading-5 sm:text-base">
                            {video.title}
                          </h3>
                          <p className="mt-1 text-xs text-white/55">
                            {video.mentor} · {video.views} · {video.category}
                          </p>
                        </div>
                        <MoreVertical className="mt-5 h-5 w-5 text-white/75" />
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
