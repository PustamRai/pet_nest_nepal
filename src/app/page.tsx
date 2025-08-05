import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";
import { EverydayEssentials } from "@/components/EverydayEssential";
import TopSelling from "@/components/TopSelling";
import BestSellerForCats from "@/components/BestSellerForCats";
import BestSellerForDogs from "@/components/BestSellerForDogs";

export default function HomePage() {
   return (
      <div className="mx-auto sm:px-10">
         <MainHeroBannerSection />
         <EverydayEssentials />
         <TopSelling />
         <BestSellerForCats />
         <BestSellerForDogs />
      </div>
   );
}
