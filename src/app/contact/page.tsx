import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { bookingEmail, cameoUrl } from "@/constants/social";
import { Mail, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with William Montgomery. Booking inquiries, press, and general contact.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-16 md:pb-24">
      <Container size="lg">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-white md:text-6xl">
            Get in Touch
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-lg uppercase tracking-wider text-white">
                Booking & Press
              </h2>
              <a
                href={`mailto:${bookingEmail}`}
                className="mt-3 inline-flex items-center gap-2 text-brand-red transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {bookingEmail}
              </a>
            </div>

            <div>
              <h2 className="font-heading text-lg uppercase tracking-wider text-white">
                Personal Videos
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Want a personalized video from William?
              </p>
              <a
                href={cameoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-card-bg px-4 py-2 text-sm text-white transition-colors hover:bg-card-border"
              >
                <Video className="h-4 w-4 text-brand-red" />
                Book on Cameo
              </a>
            </div>

            <div>
              <h2 className="font-heading text-lg uppercase tracking-wider text-white">
                Connect
              </h2>
              <div className="mt-3">
                <SocialLinks size="lg" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
