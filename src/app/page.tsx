import { Hero } from "@/components/sections/Hero";
import { TourDates } from "@/components/sections/TourDates";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { MerchPreview } from "@/components/sections/MerchPreview";
import { Podcast } from "@/components/sections/Podcast";
import { SocialProof } from "@/components/sections/SocialProof";
import { Newsletter } from "@/components/sections/Newsletter";
import { StatsBar } from "@/components/sections/StatsBar";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollAnimation>
        <TourDates limit={4} />
      </ScrollAnimation>
      <StatsBar />
      <ScrollAnimation>
        <Podcast />
      </ScrollAnimation>
      <ScrollAnimation>
        <VideoGallery limit={6} />
      </ScrollAnimation>
      <ScrollAnimation>
        <InstagramFeed />
      </ScrollAnimation>
      <ScrollAnimation>
        <MerchPreview limit={4} />
      </ScrollAnimation>
      <ScrollAnimation>
        <SocialProof />
      </ScrollAnimation>
      <ScrollAnimation>
        <Newsletter />
      </ScrollAnimation>
    </>
  );
}
