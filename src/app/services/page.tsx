import type { Metadata } from "next";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Services & Industries",
  description:
    "Comprehensive consulting, assurance, and advisory services across agriculture, manufacturing, climate, technology, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
