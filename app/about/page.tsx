import CtaSection from "@/component/cta-section";
import CustomerStories from "@/component/customersection";
import Foundationsection from "@/component/foundation";
import FounderNoteSection from "@/component/founder";
import AboutHeroSection from "@/component/about-hero-section";
import StorySection from "@/component/story-section";
import TeamSection from "@/component/teamsection";
import VisionSection from "@/component/vision";

export default function about() {

  return (
    <>

    <AboutHeroSection />
    <StorySection />
    <Foundationsection/>
    <VisionSection/>
    <TeamSection/>
    <FounderNoteSection/>
    <CustomerStories/>
    <CtaSection/>
    </>
        );
}
