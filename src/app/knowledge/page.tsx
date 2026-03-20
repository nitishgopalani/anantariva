import type { Metadata } from "next";
import { KnowledgePageClient } from "./client";

export const metadata: Metadata = {
  title: "Knowledge Repository",
  description:
    "Access our library of whitepapers, research publications, frameworks, and practical tools to support your sustainability and compliance journey.",
};

export default function KnowledgePage() {
  return <KnowledgePageClient />;
}
