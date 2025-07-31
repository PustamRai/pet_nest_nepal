import React from "react";
import { HeroBanner } from "./HeroBanner";
import { CategoryNavigation } from "./CategoryNavigation";

export function MainHeroBannerSection() {
  return (
    <div className="mx-auto max-w-4xl">
      <HeroBanner />
      <CategoryNavigation />
    </div>
  );
}
