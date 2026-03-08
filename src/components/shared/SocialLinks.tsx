import {
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { socialLinks } from "@/constants/social";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MessageCircle,
};

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const iconSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-text-muted hover:text-brand-red transition-colors duration-200"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
