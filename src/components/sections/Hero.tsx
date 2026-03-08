"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NicknameRotator } from "@/components/shared/NicknameRotator";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a] via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.15)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-5xl font-bold uppercase tracking-[0.1em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ textShadow: "0 0 60px rgba(230, 57, 70, 0.4)" }}
        >
          William
          <br />
          Montgomery
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 md:mt-6"
        >
          <NicknameRotator />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-4 font-body text-lg italic text-text-muted md:text-xl"
        >
          &ldquo;I ain&apos;t NEVER GONNA STAAAAAHP&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/shows"
            className="bg-gradient-red inline-flex items-center justify-center rounded-md px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--color-brand-red)]/40"
          >
            Get Tickets
          </Link>
          <Link
            href="/videos"
            className="inline-flex items-center justify-center rounded-md border-2 border-[var(--color-brand-red)] px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-all hover:bg-[var(--color-brand-red)] hover:text-white"
          >
            Watch Latest
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          className="h-8 w-8 animate-bounce text-text-muted"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}
