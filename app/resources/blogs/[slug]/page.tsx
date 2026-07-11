import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#F7F1EA] text-[#2A211B] dark:bg-[#160C07] dark:text-[#F8EBCF]">
      <article className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <nav className="text-sm text-[#8B7C70] dark:text-[#BBA98D]">
            <Link href="/" className="hover:text-[#2A211B] dark:hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/resources/blogs"
              className="hover:text-[#2A211B] dark:hover:text-white"
            >
              Journal
            </Link>
            <span className="mx-2">/</span>
            <span>{post.category}</span>
          </nav>

          <p className="mt-10 font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#C18A4A] dark:text-[#D4A72C]">
            {post.category}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] text-[#2A211B] sm:text-6xl lg:text-7xl dark:text-[#F8EBCF]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#75695F] dark:text-[#CDBB9E]">
            {post.excerpt}
          </p>
          <p className="mt-8 text-sm text-[#8B7C70] dark:text-[#BBA98D]">
            {post.date} / {post.readTime}
          </p>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[22px] bg-[#E8DDD2]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-14 max-w-2xl space-y-7 text-base leading-8 text-[#75695F] dark:text-[#CDBB9E]">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-[#E1D4C8] px-5 py-14 sm:px-8 lg:py-20 dark:border-[#D4A72C]/14">
        <div className="mx-auto max-w-7xl">
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#C18A4A] dark:text-[#D4A72C]">
            Related Reading
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#2A211B] sm:text-5xl dark:text-[#F8EBCF]">
            More From The Journal
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/resources/blogs/${relatedPost.slug}`}
                className="group block"
              >
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#E8DDD2]">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B8A7E] dark:text-[#BBA98D]">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#2A211B] dark:text-[#F8EBCF]">
                    {relatedPost.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17120F] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-[0.28em] text-[#D4A72C]">
              Stay Inspired
            </p>
            <h2 className="mt-5 max-w-xl font-serif text-5xl font-semibold leading-[1.02]">
              Join Our Circle Of Thoughtful Learners
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-7 text-white/72">
              Receive curated learning notes, parenting ideas and skill-building
              resources directly in your inbox.
            </p>
            <Link
              href="/courses"
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[#160C07]"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
