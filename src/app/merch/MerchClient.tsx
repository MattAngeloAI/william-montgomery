"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { MerchCard } from "@/components/cards/MerchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { mockProducts } from "@/lib/mock-data";

const categories = [
  { value: "all", label: "All" },
  { value: "apparel", label: "Apparel" },
  { value: "accessories", label: "Accessories" },
  { value: "digital", label: "Digital" },
];

export function MerchClient() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pb-24">
      <Container>
        <div className="mb-12 flex items-start justify-between">
          <div>
            <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
              The Merch
            </h1>
            <div className="mt-4 h-1 w-16 bg-brand-red" />
          </div>

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger className="relative mt-2 rounded-lg bg-card-bg p-3 text-text-muted transition-colors hover:text-white">
              <ShoppingBag className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="border-card-border bg-background">
              <SheetHeader>
                <SheetTitle className="font-heading uppercase tracking-wider text-white">
                  Your Cart
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-64 items-center justify-center">
                <p className="text-text-muted">Your cart is empty</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex w-fit gap-1 bg-card-bg">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="font-heading text-xs uppercase tracking-wider data-[state=active]:bg-brand-red data-[state=active]:text-white"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {mockProducts
                  .filter(
                    (p) => cat.value === "all" || p.category === cat.value
                  )
                  .sort((a, b) => a.sort_order - b.sort_order)
                  .map((product) => (
                    <MerchCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
