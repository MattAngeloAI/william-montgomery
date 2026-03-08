import type { Metadata } from "next";
import { VideosClient } from "./VideosClient";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch William Montgomery's best comedy clips, Kill Tony moments, podcast episodes, and more.",
};

export default function VideosPage() {
  return <VideosClient />;
}
