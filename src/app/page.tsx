import { EverydayEssentials } from "@/components/EverydayEssential";
import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";

export default function HomePage() {
  return (
    <div>
      <MainHeroBannerSection />
      <EverydayEssentials />
    </div>
  );
}
