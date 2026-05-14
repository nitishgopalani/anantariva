import { siteConfig } from "@/content";
import { cn } from "@/lib/utils";

interface BrandLogoMarkProps {
  className?: string;
}

export function BrandLogoMark({ className }: BrandLogoMarkProps) {
  return (
    <video
      src={siteConfig.logoMark}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className={cn("h-full w-full object-contain object-center", className)}
      aria-label={`${siteConfig.shortName} logo`}
    />
  );
}
