import type { Metadata } from "next";
import { FootprintsPageClient } from "./client";

export const metadata: Metadata = {
  title: "Our Presence",
  description:
    "Rooted in India with a network spanning key regions globally. Global reach with deep local expertise.",
};

export default function FootprintsPage() {
  return <FootprintsPageClient />;
}
