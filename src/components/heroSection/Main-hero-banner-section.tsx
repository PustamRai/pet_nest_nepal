import React from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { WeeklyOffers } from "./WeeklyOffers";
import ResponsiveBannerCarousel from "./HeroCarousel";

export function MainHeroBannerSection() {
  return (
    <div>
      <ResponsiveBannerCarousel />
      <CategoryNavigation />
      <WeeklyOffers />
    </div>
  );
}
