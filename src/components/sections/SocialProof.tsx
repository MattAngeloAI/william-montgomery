import { Container } from "@/components/layout/Container";

const logos = [
  { name: "Kill Tony", abbr: "KT" },
  { name: "Joe Rogan Experience", abbr: "JRE" },
  { name: "The Comedy Mothership", abbr: "TCM" },
  { name: "Deathsquad", abbr: "DS" },
];

export function SocialProof() {
  return (
    <section className="border-y border-card-border py-12 md:py-16">
      <Container>
        <p className="mb-8 text-center font-heading text-xs uppercase tracking-[0.2em] text-text-muted">
          As Seen On
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex flex-col items-center transition-all"
            >
              <span className="font-heading text-2xl font-bold uppercase tracking-wider text-text-muted/50 transition-colors group-hover:text-white md:text-3xl">
                {logo.abbr}
              </span>
              <span className="mt-1 text-xs text-text-muted/30 transition-colors group-hover:text-text-muted">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
