"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";

const megaMenus = [
  {
    label: "Courses",
    links: [
      { label: "Demos", href: "/courses/demos" },
      { label: "Free Courses", href: "/courses/free" },
      { label: "Paid Courses", href: "/courses/paid" },
    ],
    images: ["/images/crirical.jpg", "/images/cr.jpg"],
  },
  {
    label: "The Learning Module",
    links: [
      { label: "Offline Mode", href: "/learning-model/offline" },
      { label: "Online Mode", href: "/learning-model/online" },
      { label: "Hybrid Mode", href: "/learning-model/hybrid" },
    ],
    images: ["/images/financial-Planning.jpg", "/images/ai.jpg"],
  },
  {
    label: "Resources",
    links: [
      { label: "Blogs", href: "/resources/blogs" },
      { label: "News", href: "/resources/news" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Testimonials", href: "/resources/testimonials" },
      { label: "School & Partnerships", href: "/resources/schools" },
    ],
    images: ["/images/crirical.jpg", "/images/ai.jpg"],
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fba63e] shadow-sm transition-colors duration-300 dark:bg-[#1E120B]">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-8">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={72} height={72} priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            className="font-serif text-lg  text-[#2C1B12] dark:text-[#F8E7B0]"
            href="/"
          >
            Home
          </Link>

          <Link
            className="font-serif text-lg  text-[#2C1B12] dark:text-[#F8E7B0]"
            href="/about"
          >
            About
          </Link>

          {megaMenus.map((menu) => (
            <div key={menu.label} className="group relative">
              <button className="flex items-center gap-1 font-serif text-lg  text-[#2C1B12] transition dark:text-[#F8E7B0]">
                {menu.label}
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-10 w-[560px] -translate-x-1/2 translate-y-4 rounded-2xl border border-[#D99A38]/50 bg-[#FFE2B8] p-4 opacity-0 shadow-[0_12px_35px_rgba(63,28,5,0.22)] transition-all duration-300 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 dark:border-[#D4AF37]/25 dark:bg-[#2A140A]">
                <div className="grid grid-cols-[1fr_1.4fr] gap-5">
                  <div className="flex flex-col justify-center border-r border-[#D99A38]/40 pr-4">
                    {menu.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="rounded-lg px-3 py-1.5 font-serif text-lg  leading-tight text-[#2C1B12] transition hover:bg-white/35 hover:text-[#8A4300] dark:text-[#F8E7B0] dark:hover:bg-white/10"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {menu.images.map((img, index) => (
                      <div
                        key={img}
                        className="relative h-[95px] overflow-hidden rounded-xl bg-white/40 shadow-sm"
                      >
                        <Image
                          src={img}
                          alt={`${menu.label} preview ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            className="font-serif text-lg  text-[#2C1B12] dark:text-[#F8E7B0]"
            href="/contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <User className="h-6 w-6 text-[#2C1B12] dark:text-[#F8E7B0]" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/20"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-[#F8E7B0]" />
            ) : (
              <Moon className="h-5 w-5 text-[#2C1B12]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
