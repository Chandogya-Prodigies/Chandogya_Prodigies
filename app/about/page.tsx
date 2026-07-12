import CtaSection from "@/component/cta-section";
import CustomerStories from "@/component/customersection";
import Foundationsection from "@/component/foundation";
import FounderNoteSection from "@/component/founder";
import AboutHeroSection from "@/component/about-hero-section";
import AboutStorySection from "@/component/about-story-section";
import MissionSection from "@/component/mission-section";
import TeamSection from "@/component/teamsection";

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <Foundationsection />
      <MissionSection />
      <TeamSection />
      <FounderNoteSection />
      <CustomerStories />
      <CtaSection />
    </>
  );
}
