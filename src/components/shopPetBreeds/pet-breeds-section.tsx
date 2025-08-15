"use client";

import Image from "next/image";
import Link from "next/link";

interface PetBreed {
   id: string;
   name: string;
   image: string;
   backgroundColor: string;
   shopUrl: string;
}

interface PetBreedsSectionProps {
   title?: string;
   subtitle?: string;
   breeds: PetBreed[];
}

export default function PetBreedsSection({
   title = "Shop By Pet Breeds",
   subtitle = "Find products tailored for your pet's specific breed",
   breeds,
}: PetBreedsSectionProps) {
   return (
      <section className="mt-6">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
               <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {title}
               </h2>
               <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
               </p>
            </div>

            {/* Breeds Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
               {breeds.map((breed) => (
                  <div
                     key={breed.id}
                     className="relative overflow-hidden rounded transition-all duration-300 ease-out
                  transform group"
                  >
                     {/* Pet Image */}
                     <div className="relative aspect-square p-3 sm:p-4 lg:p-6">
                        <div className=" w-full h-full">
                           <Image
                              src={breed.image || "/placeholder.svg"}
                              alt={breed.name}
                              fill
                              className="object-cover object-center rounded transition-transform duration-300 group-hover:scale-105 bg-blue-100"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                           />
                        </div>
                     </div>

                     {/* Breed Name */}
                     <div className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 mt-4">
                        <Link href={breed.shopUrl}>
                           <h3 className="text-xs  font-bold text-gray-900 text-center uppercase  hover:underline ">
                              {breed.name}
                           </h3>
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
