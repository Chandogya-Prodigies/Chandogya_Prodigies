import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
const navLinks = [
  "Home",
  "About Us",
  "Courses",
  "The Learning model",
  "Resources",
  "Contact",
];
const socialLinks = ["f", "𝕏", "◎", "▶", "in"];
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F6B65A] px-6 py-16 dark:bg-[#170A04]">
      <Image
        src="/images/pretflower.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute bottom-0 left-0 opacity-85"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-3xl font-bold text-[#8E2F2F] dark:text-[#D4AF37]">
            Chandogya Prodogies
          </h3>

          <p className="mt-6 max-w-sm text-xl font-medium leading-snug text-[#2D2118] dark:text-[#F8E7B0]">
            explore the models to enroll easily.Get the premium courses in
            affordable ranges explore the models to enroll easily.Get the
            premium courses in affordable ranges explore the models to enroll
            easily.Get the
          </p>
        </div>

        <div>
          <h3 className="font-serif text-3xl font-bold text-[#8E2F2F] dark:text-[#D4AF37]">
            Nav Links
          </h3>

          <ul className="mt-5 space-y-2">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  className="text-xl font-semibold text-[#2D2118] transition hover:text-[#8E2F2F] dark:text-[#F8E7B0]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-3xl font-bold text-[#8E2F2F] dark:text-[#D4AF37]">
            Social Links
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[#2D2118] shadow-md transition hover:-translate-y-1 hover:bg-[#8E2F2F] hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-3xl font-bold text-[#8E2F2F] dark:text-[#D4AF37]">
              Subscribe to our Newsletter
            </h3>

            <form className="mt-5 flex max-w-md items-center rounded-full bg-white px-5 py-3 shadow-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-[#2D2118] outline-none placeholder:text-[#2D2118]/50"
              />

              <button
                type="submit"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#F6B65A]"
              >
                <ArrowRight className="h-7 w-7 text-[#2D2118]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
