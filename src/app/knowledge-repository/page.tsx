import type { Metadata } from "next";
import { KnowledgePageClient } from "./client";

export const metadata: Metadata = {
  title: "Knowledge Repository",
  description:
    "Access our library of whitepapers, research publications, frameworks, and practical tools for sustainability and compliance.",
};

export default function KnowledgeRepositoryPage() {
  return <KnowledgePageClient />;
}
