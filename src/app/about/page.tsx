import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Anantariva Global - our identity, mission, values, and the expert team driving sustainable transformation across industries.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
