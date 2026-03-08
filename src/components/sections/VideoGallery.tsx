"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { VideoCard } from "@/components/cards/VideoCard";
import { Container } from "@/components/layout/Container";
import { mockVideos } from "@/lib/mock-data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VideoGalleryProps {
  limit?: number;
  category?: string | null;
}

export function VideoGallery({ limit = 6, category = null }: VideoGalleryProps) {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videos = mockVideos
    .filter((v) => (category ? v.category === category : true))
    .filter((v) => v.is_featured)
    .sort((a, b) => a.sort_order - b.sort_order)
    .slice(0, limit);

  return (
    <section className="bg-[#0d0d15] py-16 md:py-24">
      <Container>
        <SectionHeader title="Watch William" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={setActiveVideoId}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-text-muted transition-colors hover:text-brand-red"
          >
            More Videos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>

      {/* Video Lightbox */}
      <Dialog
        open={!!activeVideoId}
        onOpenChange={() => setActiveVideoId(null)}
      >
        <DialogContent className="max-w-4xl border-card-border bg-background p-0">
          <div className="aspect-video w-full">
            {activeVideoId && (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
