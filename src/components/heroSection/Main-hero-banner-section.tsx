import React from "react";
// import { CategoryNavigation } from "./CategoryNavigation";
import { WeeklyOffers } from "../cardSection/WeeklyOffers";
import PetBreed from "../shopPetBreeds/pet-breeds";
import HeroCarousel from "./HeroCarousel";

export function MainHeroBannerSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-10">
      <HeroCarousel />
      {/* <CategoryNavigation /> */}
      <PetBreed />
      <WeeklyOffers />
    </div>
  );
}
