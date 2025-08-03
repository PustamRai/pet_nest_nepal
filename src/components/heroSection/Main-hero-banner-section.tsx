import React from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { WeeklyOffers } from "./WeeklyOffers";
import ResponsiveBannerCarousel from "./HeroCarousel";

export function MainHeroBannerSection() {
  return (
    <div className="mx-auto max-w-4xl">
      <ResponsiveBannerCarousel />
      <CategoryNavigation />
      <WeeklyOffers />
    </div>
  );
}
