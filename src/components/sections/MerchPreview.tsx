import { SectionHeader } from "@/components/shared/SectionHeader";
import { MerchCard } from "@/components/cards/MerchCard";
import { Container } from "@/components/layout/Container";
import { mockProducts } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MerchPreviewProps {
  limit?: number;
}

export function MerchPreview({ limit = 4 }: MerchPreviewProps) {
  const products = mockProducts
    .filter((p) => p.is_featured)
    .sort((a, b) => a.sort_order - b.sort_order)
    .slice(0, limit);

  return (
    <section className="bg-[#0d0d15] py-16 md:py-24">
      <Container>
        <SectionHeader title="The Merch" />
        <div className="scrollbar-hide mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[280px] flex-shrink-0 snap-center md:w-auto"
            >
              <MerchCard product={product} />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/merch"
            className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-text-muted transition-colors hover:text-brand-red"
          >
            View All Merch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
