"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { VideoCard } from "@/components/cards/VideoCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockVideos } from "@/lib/mock-data";

const categories = [
  { value: "all", label: "All" },
  { value: "special", label: "Specials" },
  { value: "clip", label: "Clips" },
  { value: "kill_tony", label: "Kill Tony" },
  { value: "podcast", label: "Podcast" },
  { value: "interview", label: "Interviews" },
];

export function VideosClient() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section className="pt-28 pb-16 md:pb-24">
      <Container>
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
            Watch William
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="scrollbar-hide mx-auto mb-8 flex w-full max-w-2xl gap-1 overflow-x-auto bg-card-bg">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="font-heading text-xs uppercase tracking-wider whitespace-nowrap data-[state=active]:bg-brand-red data-[state=active]:text-white"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockVideos
                  .filter(
                    (v) => cat.value === "all" || v.category === cat.value
                  )
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onPlay={setActiveVideoId}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>

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
