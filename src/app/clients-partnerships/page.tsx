import type { Metadata } from "next";
import { ClientsPageClient } from "./client";

export const metadata: Metadata = {
  title: "Clients & Partnerships",
  description:
    "Building strategic collaborations with government, corporates, SMEs, and development agencies for sustainable transformation.",
};

export default function ClientsPage() {
  return <ClientsPageClient />;
}
