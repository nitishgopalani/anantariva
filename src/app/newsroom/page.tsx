import type { Metadata } from "next";
import { NewsroomPageClient } from "./client";

export const metadata: Metadata = {
  title: "Newsroom",
  description:
    "Stay informed about Anantariva's latest developments, industry insights, and contributions to the sustainability discourse.",
};

export default function NewsroomPage() {
  return <NewsroomPageClient />;
}
