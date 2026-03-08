import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Mic, Headphones } from "lucide-react";

const platforms = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/the-william-montgomery-show/id1596006008",
    icon: "🎧",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/the-william-montgomery-show",
    icon: "🎵",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@thewilliammontgomeryshow",
    icon: "▶️",
  },
];

export function Podcast() {
  return (
    <section className="py-16 md:py-24">
      <Container size="lg">
        <SectionHeader title="The William Montgomery Show" />
        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          {/* Podcast Artwork Placeholder */}
          <div className="flex h-64 w-64 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red/30 to-brand-red-dark/50 md:h-72 md:w-72">
            <Mic className="h-24 w-24 text-brand-red" strokeWidth={1} />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-brand-red">
              <Headphones className="h-4 w-4" />
              New episodes every Wednesday at 8:30 PM CT
            </p>
            <p className="mt-4 max-w-lg text-text-muted">
              The Big Red Machine himself brings you weekly conversations,
              comedy, and chaos. Featuring special guests from the Austin
              comedy scene and beyond.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              {platforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-card-bg px-5 py-3 font-heading text-sm uppercase tracking-wider text-white transition-all hover:bg-card-border"
                >
                  <span>{platform.icon}</span>
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
