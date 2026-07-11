import { notFound } from "next/navigation";
import CourseDetailClient from "@/component/course-detail-client";
import { courses, getCourseBySlug } from "@/lib/courses";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
