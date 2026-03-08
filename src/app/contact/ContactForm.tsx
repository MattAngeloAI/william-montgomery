"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Send, Loader2, Check } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", type: "general", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block font-heading text-xs uppercase tracking-wider text-text-muted"
        >
          Name
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          className="h-12 border-card-border bg-card-bg text-white placeholder:text-text-muted/50 focus:border-brand-red"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block font-heading text-xs uppercase tracking-wider text-text-muted"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          className="h-12 border-card-border bg-card-bg text-white placeholder:text-text-muted/50 focus:border-brand-red"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="type"
          className="mb-1.5 block font-heading text-xs uppercase tracking-wider text-text-muted"
        >
          Inquiry Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, type: e.target.value }))
          }
          className="h-12 w-full rounded-md border border-card-border bg-card-bg px-3 text-white focus:border-brand-red focus:outline-none"
        >
          <option value="general">General</option>
          <option value="booking">Booking</option>
          <option value="press">Press</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-heading text-xs uppercase tracking-wider text-text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          required
          rows={5}
          className="w-full rounded-md border border-card-border bg-card-bg px-3 py-2 text-white placeholder:text-text-muted/50 focus:border-brand-red focus:outline-none"
          placeholder="Your message..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="bg-gradient-red inline-flex h-12 w-full items-center justify-center gap-2 rounded-md font-heading text-sm uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-red/30 disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "success" && <Check className="h-4 w-4" />}
        {status === "idle" && <Send className="h-4 w-4" />}
        {status === "success" ? "Sent!" : "Send Message"}
      </button>
    </form>
  );
}
