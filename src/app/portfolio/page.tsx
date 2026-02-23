import type { Metadata } from "next";
import { PortfolioPageClient } from "./client";

export const metadata: Metadata = {
  title: "Video & Work Portfolio",
  description:
    "Explore project documentaries, expert insights, and demonstrations of our work across sectors and geographies.",
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
