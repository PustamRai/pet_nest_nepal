import React from "react";
// import { CategoryNavigation } from "./CategoryNavigation";
import { WeeklyOffers } from "./WeeklyOffers";
import ResponsiveBannerCarousel from "./HeroCarousel";
import PetBreed from "../shopPetBreeds/pet-breeds";

export function MainHeroBannerSection() {
   return (
      <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-10">
         <ResponsiveBannerCarousel />
         {/* <CategoryNavigation /> */}
         <PetBreed />
         <WeeklyOffers />
      </div>
   );
}
