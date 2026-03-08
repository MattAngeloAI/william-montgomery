import type { Metadata } from "next";
import { MerchClient } from "./MerchClient";

export const metadata: Metadata = {
  title: "Merch",
  description:
    "Official William Montgomery merchandise. Tees, hoodies, hats, and more from The Big Red Machine.",
};

export default function MerchPage() {
  return <MerchClient />;
}
