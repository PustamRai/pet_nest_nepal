import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";
import { EverydayEssentials } from "@/components/EverydayEssential";

export default function HomePage() {
  return (
    <div className="mx-auto sm:px-10">
      <MainHeroBannerSection />
      <EverydayEssentials />
    </div>
  );
}
