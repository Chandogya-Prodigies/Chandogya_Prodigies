export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gurukul-learning-for-modern-children",
    category: "Parent Guide",
    title: "How Gurukul Learning Supports Modern Children",
    excerpt:
      "A calm guide to balancing mentorship, discipline, creativity and practical skills in a modern learning journey.",
    date: "July 11, 2026",
    readTime: "5 min read",
    image: "/images/blog-hero-1.png",
    paragraphs: [
      "A Gurukul-inspired learning environment begins with attention. Children need more than information; they need a mentor who notices how they think, where they hesitate and what kind of encouragement helps them move forward.",
      "Modern learning often becomes rushed and screen-heavy. The Gurukul approach slows the process down just enough for students to listen, ask, practice and reflect. That rhythm helps knowledge become behavior.",
      "The goal is not to recreate the past. It is to carry forward what still matters: character, discipline, curiosity, respect and a practical relationship with learning.",
      "When children learn through guided practice, they begin to connect lessons with daily choices. That is where confidence grows in a steady and natural way.",
    ],
  },
  {
    slug: "choosing-the-right-learning-model",
    category: "Learning Model",
    title: "Choosing the Right Learning Model for Your Child",
    excerpt:
      "Online, offline or hybrid: how families can choose a model that fits pace, confidence and consistency.",
    date: "July 12, 2026",
    readTime: "4 min read",
    image: "/images/blog-hero-2.avif",
    paragraphs: [
      "The right learning model depends on how a child focuses, practices and responds to guidance. Some students need the comfort of home, while others grow faster with in-person interaction.",
      "Online learning works well when flexibility matters and the child can follow a clear routine. Offline learning works well when direct correction, group activity and physical presence help the child stay engaged.",
      "Hybrid learning brings both worlds together. It lets students prepare and revise online while using offline sessions for practice, performance and mentor observation.",
      "Parents should look for consistency first. A good model is one the child can follow every week with confidence and accountability.",
    ],
  },
  {
    slug: "building-confidence-through-communication",
    category: "Communication",
    title: "Building Confidence Through Better Communication",
    excerpt:
      "Why speaking, listening and thoughtful expression are foundational skills for children.",
    date: "July 13, 2026",
    readTime: "6 min read",
    image: "/images/demo-2.png",
    paragraphs: [
      "Communication is not only about public speaking. It is about listening carefully, organizing thoughts and expressing ideas with respect.",
      "Children gain confidence when they are given safe opportunities to speak. Small presentations, discussions and mentor feedback can slowly remove hesitation.",
      "Good communication also improves thinking. When students explain an idea, they discover whether they truly understand it.",
      "A consistent practice routine helps children become clearer, calmer and more expressive in everyday situations.",
    ],
  },
  {
    slug: "why-practice-kits-help-children-learn",
    category: "Practice",
    title: "Why Practice Kits Help Children Learn Better",
    excerpt:
      "A look at how hands-on activities turn concepts into memorable learning experiences.",
    date: "July 14, 2026",
    readTime: "5 min read",
    image: "/images/kit.jpg",
    paragraphs: [
      "Practice kits make learning tangible. When children use materials, worksheets and activities, they can see the idea instead of only hearing it.",
      "Hands-on work also gives mentors a clearer view of how a child thinks. The process reveals confusion, creativity and effort.",
      "A good kit does not add more burden. It gives structure to practice so students know what to do after a lesson.",
      "This is especially useful in offline and hybrid models, where learning can move from explanation to activity to feedback.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
