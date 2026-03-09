import { Hero } from "@/components/sections/Hero";
import { TourDates } from "@/components/sections/TourDates";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { MerchPreview } from "@/components/sections/MerchPreview";
import { Podcast } from "@/components/sections/Podcast";
import { SocialProof } from "@/components/sections/SocialProof";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TourDates limit={4} />
      <Podcast />
      <VideoGallery limit={6} />
      <InstagramFeed />
      <MerchPreview limit={4} />
      <SocialProof />
      <Newsletter />
    </>
  );
}
