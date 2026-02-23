import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Anantariva. Whether you're exploring sustainability transformation or seeking compliance support, we'd welcome the opportunity to discuss.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
