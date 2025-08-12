import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";
import { EverydayEssentials } from "@/components/EverydayEssential";
import TopSelling from "@/components/TopSelling";
import BestSellerForCats from "@/components/BestSellerForCats";
import BestSellerForDogs from "@/components/BestSellerForDogs";
import CatVideo from "@/components/videosection/CatVideo";
import DogVideo from "@/components/videosection/DogVideo";
import PetServices from "@/components/petServices/pet-services";
import TestimonialsPage from "@/components/testimonialsSection/testimonial";
import WidthWrapper from "@/components/WidthWrapper";

export default function HomePage() {
   return (
      <WidthWrapper>
         <MainHeroBannerSection />
         <EverydayEssentials />
         <TopSelling />
         <BestSellerForCats />
         <CatVideo />
         <BestSellerForDogs />
         <DogVideo />
         <PetServices />
         <TestimonialsPage />
      </WidthWrapper>
   );
}
