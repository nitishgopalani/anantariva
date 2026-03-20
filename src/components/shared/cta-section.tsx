"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "navy" | "gradient";
}

export function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "navy",
}: CTASectionProps) {
  return (
    <section
      className={`py-20 md:py-28 relative overflow-hidden ${
        variant === "navy"
          ? "bg-navy"
          : "bg-gradient-to-br from-navy via-navy-light to-navy"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryButton && (
              <Button variant="gold" size="lg" asChild>
                <Link href={primaryButton.href}>
                  {primaryButton.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {secondaryButton && (
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
                asChild
              >
                <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
