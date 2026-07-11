import { notFound } from "next/navigation";
import LearningModelHero from "@/component/learning-model-hero";
import GurukulIntroSection from "@/component/gurukul-intro-section";
import OnlineModelOverview from "@/component/online-model-overview";
import OnlineLearningFlow from "@/component/online-learning-flow";
import OfflineModelOverview from "@/component/offline-model-overview";
import OfflineLearningFlow from "@/component/offline-learning-flow";
import LearningModelCta from "@/component/learning-model-cta";
import HybridModelOverview from "@/component/hybrid-model-overview";
import HybridLearningFlow from "@/component/hybrid-learning-flow";
import LearningKitsSection from "@/component/learning-kits-section";

const models = ["online", "offline", "hybrid"] as const;

type LearningModelDetailPageProps = {
  params: Promise<{ model: string }>;
};

export function generateStaticParams() {
  return models.map((model) => ({
    model,
  }));
}

export default async function LearningModelDetailPage({
  params,
}: LearningModelDetailPageProps) {
  const { model } = await params;

  if (!models.includes(model as (typeof models)[number])) {
    notFound();
  }

  return (
    <>
      <LearningModelHero />
      <GurukulIntroSection />
      {model === "online" ? <OnlineModelOverview /> : null}
      {model === "online" ? <OnlineLearningFlow /> : null}
      {model === "online" ? <LearningModelCta model="online" /> : null}
      {model === "offline" ? <OfflineModelOverview /> : null}
      {model === "offline" ? <OfflineLearningFlow /> : null}
      {model === "offline" ? <LearningKitsSection /> : null}
      {model === "offline" ? <LearningModelCta model="offline" /> : null}
      {model === "hybrid" ? <HybridModelOverview /> : null}
      {model === "hybrid" ? <HybridLearningFlow /> : null}
      {model === "hybrid" ? <LearningKitsSection /> : null}
      {model === "hybrid" ? <LearningModelCta model="hybrid" /> : null}
    </>
  );
}
