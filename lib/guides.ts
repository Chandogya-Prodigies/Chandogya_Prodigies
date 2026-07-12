export type Guide = {
  slug: string;
  name: string;
  role: string;
  image: string;
  focus: string;
  bio: string;
  strengths: string[];
  quote: string;
};

export const guides: Guide[] = [
  {
    slug: "yamini-sharma",
    name: "Yamini Sharma",
    role: "Learning Lead",
    image: "/images/img.png",
    focus: "Curriculum guidance, parent communication and learner growth.",
    bio: "Yamini helps shape Chandogya's guided learning experience with a focus on clarity, consistency and meaningful practice. She works closely with learners and families so every child feels supported through the journey.",
    strengths: ["Learner mentorship", "Course planning", "Parent guidance"],
    quote:
      "A child grows best when learning feels structured, personal and full of purpose.",
  },
  {
    slug: "aarav-mehta",
    name: "Aarav Mehta",
    role: "Mentor",
    image: "/images/guruji.png",
    focus: "Gurukul values, reflective practice and discipline building.",
    bio: "Aarav brings a mentor-first approach to learning, helping students build patience, self-belief and thoughtful habits. His sessions focus on practice, reflection and confidence.",
    strengths: ["Value-based guidance", "Practice circles", "Confidence building"],
    quote:
      "Mentorship is not only teaching; it is helping the learner discover steadiness.",
  },
  {
    slug: "anaya-rao",
    name: "Anaya Rao",
    role: "Program Guide",
    image: "/images/girl1.png",
    focus: "Skill practice, learner engagement and program support.",
    bio: "Anaya supports learners through interactive activities and structured follow-up. She helps children stay curious while developing communication, teamwork and creative thinking.",
    strengths: ["Student engagement", "Activity design", "Progress support"],
    quote:
      "The right activity can turn hesitation into curiosity and curiosity into confidence.",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
