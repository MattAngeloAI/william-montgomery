import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Mic, Headphones, ExternalLink } from "lucide-react";
import { Newsletter } from "@/components/sections/Newsletter";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "The William Montgomery Show - new episodes every Wednesday at 8:30 PM CT. Listen on Apple Podcasts, Spotify, and YouTube.",
};

const platforms = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/the-william-montgomery-show/id1596006008",
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/the-william-montgomery-show",
    color: "from-green-600 to-green-800",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@thewilliammontgomeryshow",
    color: "from-red-600 to-red-800",
  },
];

const recentEpisodes = [
  {
    number: 200,
    title: "Milestone Episode - Special Guests",
    date: "Feb 26, 2026",
    duration: "1:23:45",
  },
  {
    number: 199,
    title: "Road Stories from Nashville",
    date: "Feb 19, 2026",
    duration: "58:30",
  },
  {
    number: 198,
    title: "Comedy Mothership Tales",
    date: "Feb 12, 2026",
    duration: "1:05:12",
  },
  {
    number: 197,
    title: "Memphis Memories",
    date: "Feb 5, 2026",
    duration: "52:18",
  },
];

export default function PodcastPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pb-24">
        <Container size="lg">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wider text-white md:text-5xl">
              The William Montgomery Show
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
            <p className="mt-4 flex items-center justify-center gap-2 font-heading text-sm uppercase tracking-wider text-brand-red">
              <Headphones className="h-4 w-4" />
              New episodes every Wednesday at 8:30 PM CT
            </p>
          </div>

          {/* Artwork + Description */}
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            <div className="flex h-72 w-72 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red/30 to-brand-red-dark/50 shadow-2xl">
              <Mic className="h-28 w-28 text-brand-red" strokeWidth={1} />
            </div>
            <div className="max-w-xl text-center md:text-left">
              <p className="text-lg leading-relaxed text-text-muted">
                The Big Red Machine himself brings you weekly conversations,
                comedy, and chaos. Featuring special guests from the Austin
                comedy scene and beyond, The William Montgomery Show dives
                deep into the world of stand-up, life on the road, and
                everything in between.
              </p>

              {/* Platform Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${platform.color} px-6 py-3 font-heading text-sm uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    {platform.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Episodes */}
          <div className="mt-16">
            <h2 className="mb-6 font-heading text-xl font-bold uppercase tracking-wider text-white">
              Recent Episodes
            </h2>
            <div className="space-y-3">
              {recentEpisodes.map((ep) => (
                <div
                  key={ep.number}
                  className="flex items-center gap-4 rounded-lg border border-card-border bg-card-bg p-4 transition-colors hover:border-brand-red"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red/20 font-heading text-sm text-brand-red">
                    #{ep.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-heading text-sm uppercase tracking-wider text-white">
                      {ep.title}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {ep.date} &middot; {ep.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
