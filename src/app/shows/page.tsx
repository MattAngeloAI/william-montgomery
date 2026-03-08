import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ShowCard } from "@/components/cards/ShowCard";
import { mockShows } from "@/lib/mock-data";
import { ShowsTabs } from "./ShowsTabs";

export const metadata: Metadata = {
  title: "Tour Dates",
  description:
    "See William Montgomery live. Tour dates, ticket links, and show information for The Big Red Machine.",
};

export default function ShowsPage() {
  const upcoming = mockShows
    .filter((s) => s.status === "upcoming" || s.status === "sold_out")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const past = mockShows
    .filter((s) => s.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="pt-28 pb-16 md:pb-24">
      <Container>
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
            Tour Dates
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <ShowsTabs upcoming={upcoming} past={past} />
      </Container>
    </section>
  );
}
