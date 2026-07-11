import DemoHeroSection from "@/component/demo-hero-section";
import DemoVideoSection from "@/component/demo-video-sections";
import DemoVideoLibrarySection from "@/component/demo-video-library-section";
import DemoTestimonialsSection from "@/component/demo-testimonials-section";
import DemoCtaSection from "@/component/demo-cta-section";

export default function DemoVideosPage() {
  return (
    <main>
      <DemoHeroSection />
      <div id="demo-videos" className="scroll-mt-24">
        <DemoVideoSection />
      </div>
      <DemoVideoLibrarySection />
      <DemoTestimonialsSection />
      <DemoCtaSection />
    </main>
  );
}
