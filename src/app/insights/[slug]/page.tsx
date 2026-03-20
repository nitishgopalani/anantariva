import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { insightsContent } from "@/content";
import { InsightDetailClient } from "./client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insightsContent.posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return insightsContent.posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = insightsContent.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = insightsContent.posts
    .filter((p) => post.relatedSlugs.includes(p.slug))
    .slice(0, 3);

  return <InsightDetailClient post={post} relatedPosts={relatedPosts} />;
}
