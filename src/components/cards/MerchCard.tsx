"use client";

import Image from "next/image";
import type { Product } from "@/types/merch";

interface MerchCardProps {
  product: Product;
}

export function MerchCard({ product }: MerchCardProps) {
  const hasDiscount =
    product.compare_at_price !== null &&
    product.compare_at_price > product.price;

  const primaryImage = product.images.length > 0 ? product.images[0] : null;

  function formatPrice(amount: number): string {
    return `$${amount.toFixed(2)}`;
  }

  return (
    <div className="group rounded-lg border border-card-border bg-card-bg p-3 transition hover:border-brand-red md:p-4">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-md bg-card-bg">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-text-muted">
            <span className="text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Product Name */}
      <h3 className="mt-3 font-heading text-sm uppercase text-white md:text-base">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        {hasDiscount && (
          <span className="text-sm text-text-muted line-through">
            {formatPrice(product.compare_at_price!)}
          </span>
        )}
        <span className="font-bold text-brand-red">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Buy Button */}
      {product.url ? (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-red mt-3 block w-full rounded-lg px-4 py-2.5 text-center font-heading text-sm uppercase tracking-wider text-white transition hover:opacity-90"
        >
          SHOP NOW
        </a>
      ) : (
        <button
          disabled={!product.in_stock}
          className="bg-gradient-red mt-3 w-full rounded-lg px-4 py-2.5 font-heading text-sm uppercase tracking-wider text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {product.in_stock ? "SHOP NOW" : "SOLD OUT"}
        </button>
      )}
    </div>
  );
}
