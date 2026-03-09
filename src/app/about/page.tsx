import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SocialProof } from "@/components/sections/SocialProof";
import { nicknames } from "@/constants/seo";
import { bookingEmail } from "@/constants/social";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "William Montgomery - The Big Red Machine. Kill Tony legend, Joe Rogan opener, and host of The William Montgomery Show.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pb-24">
        <Container size="lg">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
              About William
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
          </div>

          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            {/* Portrait */}
            <div className="relative h-80 w-64 flex-shrink-0 overflow-hidden rounded-xl md:h-96 md:w-80">
              <Image
                src="/images/william-portrait.jpg"
                alt="William Montgomery performing on stage"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>

            {/* Bio */}
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-text-muted">
                William Montgomery holds the record for the most one-minute
                performances on the legendary Kill Tony podcast, earning him
                the title of longest-serving regular in the show&apos;s
                history. Known by many names &mdash; The Big Red Machine, The
                Vanilla Gorilla, The Memphis Strangler &mdash; William has
                become one of the most recognizable figures in the Austin
                comedy scene.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Originally from Memphis, Tennessee, William made his way to
                Austin where he regularly opens for Joe Rogan at The Comedy
                Mothership. His high-energy, unapologetic style has built a
                massive and dedicated following that spans the globe.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Beyond stand-up, William hosts The William Montgomery Show
                podcast with new episodes every Wednesday at 8:30 PM CT,
                featuring conversations, comedy, and chaos with special
                guests from across the comedy world. He has previously
                co-hosted &ldquo;Brothers in Cursive&rdquo; alongside David
                Lucas and continues to be a fixture on the Deathsquad
                network.
              </p>
            </div>
          </div>

          {/* Nicknames */}
          <div className="mt-16">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Also Known As
            </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {nicknames.map((name) => (
                <div
                  key={name}
                  className="rounded-lg border border-card-border bg-card-bg p-4 text-center transition-colors hover:border-brand-red"
                >
                  <span className="font-accent text-lg uppercase tracking-wider text-brand-red md:text-xl">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking CTA */}
          <div className="mt-16 rounded-xl border border-card-border bg-card-bg p-8 text-center">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-white">
              Book William
            </h2>
            <p className="mt-3 text-text-muted">
              For booking inquiries, press, and management:
            </p>
            <a
              href={`mailto:${bookingEmail}`}
              className="mt-4 inline-flex items-center gap-2 font-heading text-lg uppercase tracking-wider text-brand-red transition-colors hover:text-white"
            >
              <Mail className="h-5 w-5" />
              {bookingEmail}
            </a>
          </div>
        </Container>
      </section>

      <SocialProof />
    </>
  );
}
