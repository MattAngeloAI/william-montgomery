"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";

export function FloatingCTA() {
  const visible = useScrolled(500);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-4 z-40 md:hidden"
        >
          <Link
            href="/shows"
            className="inline-block bg-gradient-red font-heading uppercase tracking-wider text-white text-sm px-5 py-3 rounded-full shadow-lg shadow-brand-red/30 animate-[pulse-subtle_3s_ease-in-out_infinite]"
          >
            Get Tickets
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
