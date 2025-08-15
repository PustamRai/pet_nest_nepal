const petBreedsData = [
   {
      id: "golden-retriever",
      name: "Golden Retriever",
      image: "/pet-shop/dog1.webp",
      backgroundColor: "#FEF3E2",
      shopUrl: "/breeds/golden-retriever",
   },
   {
      id: "german-shepherd",
      name: "German Shepherd",
      image: "/pet-shop/dog2.webp",
      backgroundColor: "#F3E8FF",
      shopUrl: "/breeds/german-shepherd",
   },
   {
      id: "labrador",
      name: "Labrador",
      image: "/pet-shop/dog4.webp",
      backgroundColor: "#ECFDF5",
      shopUrl: "/breeds/labrador",
   },
   {
      id: "shih-tzu",
      name: "Shih Tzu",
      image: "/pet-shop/dog3.webp",
      backgroundColor: "#EFF6FF",
      shopUrl: "/breeds/shih-tzu",
   },
   {
      id: "persian-cat",
      name: "Persian Cat",
      image: "/pet-shop/cat2.webp",
      backgroundColor: "#FAF5FF",
      shopUrl: "/breeds/persian-cat",
   },
   {
      id: "indie-cat",
      name: "Indie Cat",
      image: "/pet-shop/cat1.webp",
      backgroundColor: "#F0FDF4",
      shopUrl: "/breeds/indie-cat",
   },
];

import React from "react";
import PetBreedsSection from "./pet-breeds-section";

export default function PetBreed() {
   return (
      <main>
         <PetBreedsSection
            title="Shop By Pet Breeds"
            subtitle="Find products tailored for your pet's specific breed"
            breeds={petBreedsData}
         />
      </main>
   );
}
