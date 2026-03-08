"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShowCard } from "@/components/cards/ShowCard";
import { Calendar } from "lucide-react";
import type { Show } from "@/types/show";

interface ShowsTabsProps {
  upcoming: Show[];
  past: Show[];
}

export function ShowsTabs({ upcoming, past }: ShowsTabsProps) {
  return (
    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList className="mx-auto mb-8 flex w-fit gap-1 bg-card-bg">
        <TabsTrigger
          value="upcoming"
          className="font-heading uppercase tracking-wider data-[state=active]:bg-brand-red data-[state=active]:text-white"
        >
          Upcoming
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="font-heading uppercase tracking-wider data-[state=active]:bg-brand-red data-[state=active]:text-white"
        >
          Past
        </TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        {upcoming.length > 0 ? (
          <div className="space-y-4">
            {upcoming.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-16 text-center">
            <Calendar className="h-12 w-12 text-text-muted/50" />
            <p className="mt-4 font-heading text-lg uppercase text-text-muted">
              No upcoming shows
            </p>
            <p className="mt-2 text-sm text-text-muted/70">
              Follow on Instagram for announcements
            </p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="past">
        {past.length > 0 ? (
          <div className="space-y-4">
            {past.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-text-muted">
            No past shows to display.
          </p>
        )}
      </TabsContent>
    </Tabs>
  );
}
