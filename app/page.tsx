import DemoVideoSection from "@/component/demo-video-sections";
import HeroSection from "@/component/hero-section";
import LearningModelSection from "@/component/learning-model-section";
import LovedCoursesSection from "@/component/loved-courses-section";
import Navbar from "@/component/navbar";
import SkillsSection from "@/component/skills-section";
import StatsSection from "@/component/stats-section";
import StorySection from "@/component/story-section";
import TestimonialsSection from "@/component/testimonials-section";
import Footer from "@/component/ui/footer";

export default function Home() {
  return (
    <>
  

      <HeroSection />
      <SkillsSection />
      <StorySection />
      <DemoVideoSection />
      <StatsSection />
      <LovedCoursesSection />
      <LearningModelSection />
      <TestimonialsSection />
   
    </>
  );
}
