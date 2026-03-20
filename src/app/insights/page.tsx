import type { Metadata } from "next";
import { InsightsPageClient } from "./client";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert perspectives on sustainability, ESG, compliance, climate, and the evolving landscape of responsible business.",
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
