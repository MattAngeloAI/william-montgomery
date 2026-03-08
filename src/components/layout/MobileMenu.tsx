"use client";

import Link from "next/link";
import { X, Instagram, Youtube, Music2, Twitter, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/navigation";
import { socialLinks } from "@/constants/social";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Youtube,
  Music2,
  Twitter,
  MessageCircle,
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col"
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-brand-red transition-colors duration-300"
              aria-label="Close navigation menu"
            >
              <X className="size-7" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-3xl uppercase tracking-wider text-white hover:text-brand-red transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Get Tickets CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navLinks.length * 0.05 }}
              className="mt-4"
            >
              <Link href="/shows" onClick={onClose}>
                <Button
                  className="bg-gradient-red text-white font-heading uppercase tracking-wider text-lg px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 glow-red border-none"
                >
                  Get Tickets
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5 pb-10">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              if (!Icon) return null;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-brand-red transition-colors duration-300"
                  aria-label={social.label}
                >
                  <Icon className="size-6" />
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
