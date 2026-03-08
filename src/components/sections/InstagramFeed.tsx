"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const instagramPosts = [
  { id: 1, src: "/instagram/ig-1.jpg", shortcode: "C6_8F4kg3L8", alt: "Kill Tony stage moment" },
  { id: 2, src: "/instagram/ig-2.jpg", shortcode: "C8CyCv4g09X", alt: "William with championship belt" },
  { id: 3, src: "/instagram/ig-3.jpg", shortcode: "DMYSvMyAh85", alt: "Performing on outdoor festival stage" },
  { id: 4, src: "/instagram/ig-4.jpg", shortcode: "C7NGbs_Orol", alt: "Portrait in marching band jacket" },
  { id: 5, src: "/instagram/ig-5.jpg", shortcode: "DA3vY-tR_a3", alt: "Backstage photo" },
  { id: 6, src: "/instagram/ig-6.jpg", shortcode: "C1krZQogt3e", alt: "Silver outfit photoshoot" },
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
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={`https://instagram.com/p/${post.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-card-bg"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 33vw"
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
