"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Video } from "@/types/video";

interface VideoCardProps {
  video: Video;
  onPlay?: (youtubeId: string) => void;
}

export function VideoCard({ video, onPlay }: VideoCardProps) {
  const thumbnailUrl =
    video.thumbnail_url ||
    `https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`;

  function handleClick() {
    if (onPlay) {
      onPlay(video.youtube_id);
    }
  }

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-lg border border-card-border bg-card-bg transition hover:border-brand-red"
      onClick={handleClick}
      role={onPlay ? "button" : undefined}
      tabIndex={onPlay ? 0 : undefined}
      onKeyDown={
        onPlay
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-black/60 text-white transition-transform duration-300 group-hover:scale-110">
            <Play className="size-6 fill-white" />
          </div>
        </div>

        {/* Category Badge - Top Left */}
        <div className="absolute left-2 top-2">
          <Badge variant="secondary" className="text-xs capitalize">
            {video.category.replace("_", " ")}
          </Badge>
        </div>

        {/* Duration Badge - Bottom Right */}
        {video.duration && (
          <div className="absolute bottom-2 right-2">
            <span className="rounded bg-black/80 px-2 py-0.5 text-xs text-white">
              {video.duration}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="p-3">
        <h3 className="font-heading line-clamp-2 text-sm uppercase text-white">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
