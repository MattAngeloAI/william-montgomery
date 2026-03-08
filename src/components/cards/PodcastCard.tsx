import Link from "next/link";
import { Calendar, Headphones, Clock, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PodcastEpisode {
  title: string;
  date: string;
  description: string;
  duration: string;
  guest?: string;
  listenUrl?: string;
}

interface PodcastCardProps {
  episode: PodcastEpisode;
}

export function PodcastCard({ episode }: PodcastCardProps) {
  const date = new Date(episode.date + "T00:00:00");
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex gap-4 rounded-lg border border-card-border bg-card-bg p-4 transition hover:border-brand-red">
      {/* Left Icon */}
      <div className="flex shrink-0 items-start">
        <div className="flex size-12 items-center justify-center rounded-lg bg-brand-red/10">
          <Mic className="size-6 text-brand-red" />
        </div>
      </div>

      {/* Right Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        {/* Title */}
        <h3 className="font-heading text-sm uppercase text-white md:text-base">
          {episode.title}
        </h3>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar className="size-3" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" />
            {episode.duration}
          </span>
        </div>

        {/* Guest Badge */}
        {episode.guest && (
          <div className="mt-0.5">
            <Badge variant="secondary" className="text-xs">
              Guest: {episode.guest}
            </Badge>
          </div>
        )}

        {/* Description */}
        <p className="line-clamp-2 text-sm text-text-muted">
          {episode.description}
        </p>

        {/* Listen Link */}
        {episode.listenUrl && (
          <div className="mt-1">
            <Link
              href={episode.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-red transition hover:opacity-80"
            >
              <Headphones className="size-4" />
              Listen
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
