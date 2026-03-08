import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Show } from "@/types/show";

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  const date = new Date(show.date);
  const month = date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const day = date.getDate();
  const dayOfWeek = date
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();

  function formatTime(time: string | null): string | null {
    if (!time) return null;
    const [hours, minutes] = time.split(":");
    const h = parseInt(hours, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const display = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return minutes === "00" ? `${display}${suffix}` : `${display}:${minutes}${suffix}`;
  }

  const doorsFormatted = formatTime(show.doors_time);
  const showFormatted = formatTime(show.show_time);

  const timeString = [
    doorsFormatted ? `Doors ${doorsFormatted}` : null,
    showFormatted ? `Show ${showFormatted}` : null,
  ]
    .filter(Boolean)
    .join(" / ");

  const location = [show.city, show.state].filter(Boolean).join(", ");

  return (
    <div className="group flex flex-col gap-4 rounded-lg border border-card-border bg-card-bg p-4 transition hover:border-brand-red md:flex-row md:items-center md:gap-6 md:p-6">
      {/* Date Column */}
      <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-center md:gap-0 md:text-center">
        <span className="font-heading text-sm uppercase tracking-wider text-brand-red">
          {month}
        </span>
        <span className="font-heading text-4xl font-bold leading-none text-brand-red md:text-5xl">
          {day}
        </span>
        <span className="font-heading text-sm uppercase tracking-wider text-brand-red">
          {dayOfWeek}
        </span>
      </div>

      {/* Details Column */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-heading text-base font-bold uppercase text-white md:text-lg">
          {show.venue}
        </h3>
        {location && (
          <p className="text-sm text-text-muted">{location}</p>
        )}
        {timeString && (
          <p className="text-sm text-text-muted">{timeString}</p>
        )}
        {show.notes && (
          <p className="mt-1 text-xs text-text-muted italic">{show.notes}</p>
        )}
      </div>

      {/* Action Column */}
      <div className="flex shrink-0 items-center">
        {show.status === "sold_out" && (
          <Badge variant="destructive" className="font-heading text-xs uppercase tracking-wider">
            SOLD OUT
          </Badge>
        )}

        {show.status === "cancelled" && (
          <Badge variant="secondary" className="font-heading text-xs uppercase tracking-wider opacity-60">
            CANCELLED
          </Badge>
        )}

        {show.status === "upcoming" && show.ticket_url && (
          <Link
            href={show.ticket_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-red inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-white transition hover:opacity-90"
          >
            TICKETS
            <ArrowRight className="size-4" />
          </Link>
        )}

        {show.status === "upcoming" && !show.ticket_url && (
          <span className="font-heading text-xs uppercase tracking-wider text-text-muted">
            TBA
          </span>
        )}
      </div>
    </div>
  );
}
