"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import { Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call (replace with actual /api/newsletter call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
    toast.success("You're in! Welcome to the Red Machine Army.");

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="py-16 md:py-24">
      <Container size="md">
        <div className="rounded-xl border border-card-border bg-card-bg p-8 md:p-12 relative overflow-hidden">
          {/* Red accent bar */}
          <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" />

          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-white md:text-3xl">
              Join the Red Machine Army
            </h2>
            <p className="mt-3 text-text-muted">
              Get tour dates, new content & exclusive drops straight to your
              inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-card-border bg-background px-4 text-white placeholder:text-text-muted/50 focus:border-brand-red focus:ring-brand-red sm:w-80"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-gradient-red inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 font-heading text-sm uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/30 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "loading" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {status === "success" && <Check className="h-4 w-4" />}
                {status === "idle" && <Send className="h-4 w-4" />}
                {status === "success" ? "You're In!" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
