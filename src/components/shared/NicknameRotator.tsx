"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nicknames } from "@/constants/seo";

export function NicknameRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % nicknames.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 font-accent uppercase tracking-widest text-brand-red text-lg md:text-2xl">
      <span className="select-none" aria-hidden="true">
        ──
      </span>
      <div className="relative h-[1.5em] overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={nicknames[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="whitespace-nowrap"
          >
            {nicknames[index]}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="select-none" aria-hidden="true">
        ──
      </span>
    </div>
  );
}
