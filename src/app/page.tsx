import { MainHeroBannerSection } from "@/components/heroSection/Main-hero-banner-section";
import { EverydayEssentials } from "@/components/EverydayEssential";
import TopSelling from "@/components/cardSection/TopSelling";
import BestSellerForCats from "@/components/cardSection/BestSellerForCats";
import BestSellerForDogs from "@/components/cardSection/BestSellerForDogs";
import CatVideo from "@/components/videosection/CatVideo";
import DogVideo from "@/components/videosection/DogVideo";
import PetServices from "@/components/petServices/pet-services";
import TestimonialsPage from "@/components/testimonialsSection/testimonial";

export default function HomePage() {
  return (
    <div>
      <MainHeroBannerSection />
      <EverydayEssentials />
      <TopSelling />
      <BestSellerForCats />
      <CatVideo />
      <BestSellerForDogs />
      <DogVideo />
      <PetServices />
      <TestimonialsPage />
    </div>
  );
}
