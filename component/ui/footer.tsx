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

const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "X", href: "#", icon: "x" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M14 8.3V6.7c0-.8.5-1 1-1h2V2.2A25.7 25.7 0 0 0 14.1 2c-2.9 0-4.9 1.8-4.9 5v1.3H6v3.8h3.2V22H13v-9.9h3l.5-3.8H14Z" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4 fill-current"
      >
        <path d="M18.2 2h3.3l-7.2 8.2L22.8 22h-6.7l-5.2-6.8L4.9 22H1.6l7.7-8.8L1.2 2h6.8l4.7 6.2L18.2 2Zm-1.1 17.9h1.8L7 4H5l12.1 15.9Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-current"
      >
        <path d="M21.6 7.2s-.2-1.7-.9-2.4c-.9-.9-1.9-.9-2.4-1C15 3.5 12 3.5 12 3.5s-3 0-6.3.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.4-.9 2.4S2 9.2 2 11.1v1.8c0 1.9.4 3.9.4 3.9s.2 1.7.9 2.4c.9.9 2.1.9 2.6 1 1.9.2 6.1.3 6.1.3s3 0 6.3-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.4.9-2.4s.4-2 .4-3.9v-1.8c0-1.9-.4-3.9-.4-3.9ZM10 15.3V8.7l5.8 3.3L10 15.3Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M4.7 3.3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3 9h3.4v12H3V9Zm6 0h3.3v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9V9Z" />
    </svg>
  );
}

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
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[#2D2118] shadow-md transition hover:-translate-y-1 hover:bg-[#8E2F2F] hover:text-white"
              >
                <SocialIcon icon={item.icon} />
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
