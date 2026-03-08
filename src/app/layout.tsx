import type { Metadata } from "next";
import { Oswald, Inter, Bebas_Neue } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "William Montgomery | Stand-Up Comedian",
    template: "%s | William Montgomery",
  },
  description:
    "Official website of William Montgomery - The Big Red Machine. Tour dates, videos, merch, and more. Kill Tony regular & Joe Rogan opener.",
  keywords: [
    "William Montgomery",
    "comedian",
    "stand up comedy",
    "Kill Tony",
    "Big Red Machine",
    "Austin comedy",
    "Comedy Mothership",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://williamfmontgomery.com",
    siteName: "William Montgomery",
    title: "William Montgomery | Stand-Up Comedian",
    description:
      "Official website of William Montgomery - The Big Red Machine. Tour dates, videos, merch, and more.",
    images: [{ url: "/images/og/default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@WMintgimery",
    title: "William Montgomery | Stand-Up Comedian",
    description:
      "Official website of William Montgomery - The Big Red Machine.",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://williamfmontgomery.com"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${oswald.variable} ${inter.variable} ${bebasNeue.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1A1A2E",
              border: "1px solid #2D2D44",
              color: "#FFFFFF",
            },
          }}
        />
      </body>
    </html>
  );
}
