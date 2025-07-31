import React from "react";
import { HeroBanner } from "./HeroBanner";
import { CategoryNavigation } from "./CategoryNavigation";
import { WeeklyOffers } from "./WeeklyOffers";

export function MainHeroBannerSection() {
  return (
    <div className="mx-auto max-w-4xl">
      <HeroBanner />
      <CategoryNavigation />
      <WeeklyOffers />
    </div>
  );
}
