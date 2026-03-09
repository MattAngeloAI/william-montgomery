import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { Headphones, ExternalLink } from "lucide-react";
import { Newsletter } from "@/components/sections/Newsletter";
import { PodcastEpisodes } from "./PodcastEpisodes";

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
    href: "https://youtube.com/@thewilliammontgomeryshow5447",
    color: "from-red-600 to-red-800",
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
            <div className="relative h-72 w-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/wm-show-logo.jpg"
                alt="The William Montgomery Show"
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
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
          <PodcastEpisodes />
        </Container>
      </section>

      <Newsletter />
    </>
  );
}
