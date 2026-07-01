import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/contact" },
];

const learningLinks = [
  { label: "Learning Model", href: "/learning-model" },
  { label: "Demo Videos", href: "/demo-videos" },
  { label: "Resources", href: "/resources" },
  { label: "Mentors", href: "/mentors" },
];

const socialLinks = [
  { label: "FB", href: "#" },
  { label: "IG", href: "#" },
  { label: "YT", href: "#" },
  { label: "IN", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#142019] px-5 py-14 text-[#F8EBCF] dark:bg-[#0C0503] sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(212,167,44,0.16),transparent_28%),linear-gradient(135deg,#142019_0%,#20130C_52%,#160C07_100%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(212,167,44,0.12),transparent_28%),linear-gradient(135deg,#0C0503_0%,#160C07_55%,#101A13_100%)]" />
      <Image
        src="/images/pretflower.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute bottom-0 left-0 opacity-16"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Chandogya Prodigies"
                width={48}
                height={48}
                className="h-12 w-12 rounded-md object-contain"
              />
              <span className="font-serif text-2xl font-semibold text-[#FFF9EE]">
                Chandogya Prodigies
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-base leading-7 text-[#CDBB9E]">
              Building confident, thoughtful learners through Gurukul-inspired
              wisdom and modern skill development.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-[#D4A72C]/25 bg-[#FFF9EE]/8 text-xs font-bold tracking-[0.12em] text-[#F8EBCF] transition hover:-translate-y-0.5 hover:border-[#D4A72C]/55 hover:bg-[#D4A72C] hover:text-[#160C07]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#CDBB9E] transition hover:text-[#FFF9EE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Learning
            </h3>

            <ul className="mt-5 space-y-3">
              {learningLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[#CDBB9E] transition hover:text-[#FFF9EE]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Newsletter
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#CDBB9E]">
              Get updates on new courses, workshops and Chandogya learning
              resources.
            </p>

            <form className="mt-5 flex max-w-md overflow-hidden rounded-md border border-[#D4A72C]/25 bg-[#FFF9EE]/10 p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#FFF9EE] outline-none placeholder:text-[#CDBB9E]/65"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#315C45] text-white transition hover:bg-[#D4A72C] hover:text-[#160C07]"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#D4A72C]/18 pt-6 text-sm text-[#CDBB9E] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} Chandogya Prodigies. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-[#FFF9EE]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-[#FFF9EE]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
