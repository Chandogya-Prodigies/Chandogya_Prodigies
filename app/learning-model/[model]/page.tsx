import { notFound } from "next/navigation";
import LearningModelHero from "@/component/learning-model-hero";
import LearningModelSection from "@/component/learning-model-section";
import GurukulIntroSection from "@/component/gurukul-intro-section";

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
      <LearningModelSection />
    </>
  );
}
