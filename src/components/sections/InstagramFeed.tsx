"use client";

import { Instagram } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const placeholderImages = [
  { id: 1, color: "from-brand-red/30 to-brand-red-dark/30" },
  { id: 2, color: "from-purple-900/30 to-brand-red/20" },
  { id: 3, color: "from-brand-red/20 to-orange-900/30" },
  { id: 4, color: "from-orange-900/30 to-brand-red/30" },
  { id: 5, color: "from-brand-red-dark/30 to-purple-900/20" },
  { id: 6, color: "from-purple-900/20 to-brand-red/30" },
];

export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          title="@william.f.montgomery1"
          subtitle="Follow along on Instagram"
        />
        <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {placeholderImages.map((img) => (
            <a
              key={img.id}
              href="https://instagram.com/william.f.montgomery1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-card-bg"
            >
              <div
                className={`h-full w-full bg-gradient-to-br ${img.color}`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/50">
                <Instagram className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/william.f.montgomery1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-[var(--color-brand-red)] px-6 py-3 font-heading text-sm uppercase tracking-wider text-white transition-all hover:bg-[var(--color-brand-red)]"
          >
            <Instagram className="h-4 w-4" />
            Follow on Instagram
          </a>
        </div>
      </Container>
    </section>
  );
}
