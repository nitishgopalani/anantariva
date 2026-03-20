"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "gray" | "navy" | "gradient";
  animated?: boolean;
  id?: string;
}

function Section({
  children,
  className,
  containerClassName,
  variant = "default",
  animated = true,
  id,
}: SectionProps) {
  const variantStyles = {
    default: "bg-white",
    gray: "bg-gray-50",
    navy: "bg-navy text-white",
    gradient: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
  };

  const content = (
    <div className={cn("container mx-auto px-4 lg:px-8 max-w-7xl", containerClassName)}>
      {children}
    </div>
  );

  const sectionClassName = cn(
    "py-16 md:py-24 lg:py-32",
    variantStyles[variant],
    className
  );

  if (animated) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={sectionClassName}
      >
        {content}
      </motion.section>
    );
  }

  return (
    <section id={id} className={sectionClassName}>
      {content}
    </section>
  );
}


interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider mb-3",
            light ? "text-gold" : "text-gold"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
          light ? "text-white" : "text-navy",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-gray-300" : "text-gray-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export { Section, SectionHeader };
