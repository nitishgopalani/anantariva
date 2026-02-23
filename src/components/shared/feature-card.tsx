"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  variant?: "default" | "bordered" | "filled";
  index?: number;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "default",
  index = 0,
}: FeatureCardProps) {
  const variants = {
    default: "bg-white border border-gray-100",
    bordered: "bg-white border-2 border-gray-200 hover:border-gold",
    filled: "bg-gray-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-lg group",
        variants[variant],
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
          <Icon name={icon} className="text-navy group-hover:text-gold transition-colors" size={24} />
        </div>
      )}
      <h3 className="text-lg font-semibold text-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}
