import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent className={cn("", className)} size={size} />;
}
