"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const episodes = [
  {
    id: "ep-222",
    number: 222,
    title: "Meditation Walnuts?",
    guest: null,
    youtube_id: "cU4_7QBcFwE",
  },
  {
    id: "ep-221",
    number: 221,
    title: "Luke Bischoff",
    guest: "Luke Bischoff",
    youtube_id: "h_t7vEonoUg",
  },
  {
    id: "ep-220",
    number: 220,
    title: "Drew Nickens",
    guest: "Drew Nickens",
    youtube_id: "V4UuwtfRdxE",
  },
  {
    id: "ep-219",
    number: 219,
    title: "Tai Nguyen",
    guest: "Tai Nguyen",
    youtube_id: "rGH2mNx0u8w",
  },
  {
    id: "ep-218",
    number: 218,
    title: "Kelsey Hudgins",
    guest: "Kelsey Hudgins",
    youtube_id: "1Y40H6Wfiq8",
  },
  {
    id: "ep-217",
    number: 217,
    title: "Life After 40?",
    guest: null,
    youtube_id: "gWKsCTqji_w",
  },
  {
    id: "ep-216",
    number: 216,
    title: "Dusty Carter",
    guest: "Dusty Carter",
    youtube_id: "mL7o1aCt0l0",
  },
  {
    id: "ep-215",
    number: 215,
    title: "Ehsan Ahmad",
    guest: "Ehsan Ahmad",
    youtube_id: "bekw9MG3W4U",
  },
];

export function PodcastEpisodes() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <>
      {/* YouTube Player Modal */}
      {playingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setPlayingId(null)}
              className="absolute -top-10 right-0 text-white transition-colors hover:text-brand-red"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://www.youtube.com/embed/${playingId}?autoplay=1`}
                title="Podcast Episode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-16">
        <h2 className="mb-6 font-heading text-xl font-bold uppercase tracking-wider text-white">
          Recent Episodes
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {episodes.map((ep) => (
            <div
              key={ep.id}
              className="group cursor-pointer overflow-hidden rounded-lg border border-card-border bg-card-bg transition hover:border-brand-red"
              onClick={() => setPlayingId(ep.youtube_id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setPlayingId(ep.youtube_id);
                }
              }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${ep.youtube_id}/mqdefault.jpg`}
                  alt={`Ep. ${ep.number} - ${ep.title}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-black/60 text-white transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-5 fill-white" />
                  </div>
                </div>

                {/* Episode Number Badge */}
                <div className="absolute left-2 top-2">
                  <span className="rounded bg-brand-red px-2 py-0.5 font-heading text-xs text-white">
                    EP. {ep.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="p-3">
                <h3 className="font-heading line-clamp-2 text-sm uppercase text-white">
                  {ep.title}
                </h3>
                {ep.guest && (
                  <p className="mt-1 text-xs text-text-muted">
                    w/ {ep.guest}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
