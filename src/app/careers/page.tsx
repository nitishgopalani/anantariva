import type { Metadata } from "next";
import { CareersPageClient } from "./client";

export const metadata: Metadata = {
  title: "Careers - Join Our Continuum",
  description:
    "Build a career with purpose and impact. Join Anantariva's team of sustainability professionals, ESG analysts, and compliance specialists.",
};

export default function CareersPage() {
  return <CareersPageClient />;
}
