import type { Metadata } from "next";
import { InvestorsPageClient } from "./client";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Anantariva operates at the convergence of ESG transition, climate finance, certification ecosystems, and sustainable value chains.",
};

export default function InvestorsPage() {
  return <InvestorsPageClient />;
}
