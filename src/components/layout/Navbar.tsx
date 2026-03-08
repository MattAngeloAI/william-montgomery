"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks } from "@/constants/navigation";
import { MobileMenu } from "./MobileMenu";
import { Container } from "./Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScrolled(50);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-card-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-heading text-lg md:text-xl font-bold uppercase tracking-wider text-white hover:text-brand-red transition-colors duration-300"
            >
              William Montgomery
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-heading text-sm uppercase tracking-wider text-white/80 hover:text-brand-red transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <Link href="/shows" className="hidden lg:block">
                <Button
                  className="bg-gradient-red text-white font-heading uppercase tracking-wider text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300 glow-red border-none"
                >
                  Get Tickets
                </Button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-brand-red transition-colors duration-300"
                aria-label="Open navigation menu"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
