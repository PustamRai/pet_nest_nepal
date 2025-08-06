import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";
import { EverydayEssentials } from "@/components/EverydayEssential";
import TopSelling from "@/components/TopSelling";
import BestSellerForCats from "@/components/BestSellerForCats";
import BestSellerForDogs from "@/components/BestSellerForDogs";
import CatVideo from "@/components/videosection/CatVideo";
import DogVideo from "@/components/videosection/DogVideo";

export default function HomePage() {
   return (
      <div className="mx-auto sm:px-10">
         <MainHeroBannerSection />
         <EverydayEssentials />
         <TopSelling />
         <BestSellerForCats />
         <CatVideo />
         <BestSellerForDogs />
         <DogVideo />
      </div>
   );
}
