"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  description,
  className,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative bg-navy text-white py-20 md:py-28 lg:py-32 overflow-hidden",
        className
      )}
    >
      {/* Optional full-bleed background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          aria-hidden
        />
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-emerald/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-gold text-sm font-semibold uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
