import { SectionHeader } from "@/components/shared/SectionHeader";
import { ShowCard } from "@/components/cards/ShowCard";
import { Container } from "@/components/layout/Container";
import { mockShows } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TourDatesProps {
  limit?: number;
  showViewAll?: boolean;
}

export function TourDates({ limit = 4, showViewAll = true }: TourDatesProps) {
  const shows = mockShows
    .filter((s) => s.status === "upcoming" || s.status === "sold_out")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, limit);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader title="Upcoming Shows" />
        <div className="mt-10 space-y-4">
          {shows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
        {showViewAll && (
          <div className="mt-8 text-center">
            <Link
              href="/shows"
              className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-text-muted transition-colors hover:text-brand-red"
            >
              View All Shows
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
