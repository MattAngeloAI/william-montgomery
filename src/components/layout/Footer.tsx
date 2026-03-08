import Link from "next/link";
import {
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MessageCircle,
  Mail,
} from "lucide-react";
import { navLinks } from "@/constants/navigation";
import { socialLinks, bookingEmail } from "@/constants/social";
import { Container } from "./Container";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MessageCircle,
};

export function Footer() {
  return (
    <footer className="bg-card-bg border-t border-card-border">
      <Container>
        <div className="py-12 md:py-16">
          {/* Grid: 3 columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-brand-red transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-4">
                Connect
              </h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = iconMap[social.icon];
                  if (!Icon) return null;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-text-muted hover:text-brand-red transition-colors duration-300 text-sm group"
                      >
                        <Icon className="size-4 group-hover:text-brand-red transition-colors duration-300" />
                        <span>{social.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Booking */}
            <div>
              <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-4">
                Booking
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${bookingEmail}`}
                  className="flex items-center gap-3 text-text-muted hover:text-brand-red transition-colors duration-300 text-sm group"
                >
                  <Mail className="size-4 group-hover:text-brand-red transition-colors duration-300" />
                  <span>{bookingEmail}</span>
                </a>
                <p className="text-text-muted text-sm leading-relaxed">
                  For booking inquiries, media requests, and management contact,
                  please reach out via email.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} William Montgomery. All rights reserved.</p>
          <p>
            Artwork by{" "}
            <span className="text-white hover:text-brand-red transition-colors duration-300">
              Ryan J Ebelt
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
