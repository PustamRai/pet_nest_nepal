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
      <section className="mt-8">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
               <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-center mb-6  text-title bg-clip-text text-transparent py-4">
                  {title}
               </h2>
               <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                  {subtitle}
               </p>
            </div>

            {/* Mobile horizontal scroll container */}
            <div className="block md:hidden">
               <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x snap-mandatory">
                  {breeds.map((breed, index) => (
                     <div
                        key={breed.id}
                        className="relative overflow-hidden rounded transition-all duration-300 ease-out
                    transform group flex-shrink-0 w-40 snap-center"
                        style={{
                           animationDelay: `${index * 100}ms`,
                        }}
                     >
                        {/* Pet Image */}
                        <div className="relative aspect-square p-3">
                           <div className="w-full h-full">
                              <Image
                                 src={breed.image || "/placeholder.svg"}
                                 alt={breed.name}
                                 fill
                                 className="object-cover object-center rounded transition-transform duration-300 group-hover:scale-105 bg-blue-100"
                                 sizes="160px"
                              />
                           </div>
                        </div>

                        {/* Breed Name */}
                        <div className="px-3 pb-3 mt-4">
                           <Link href={breed.shopUrl}>
                              <h3 className="text-xs font-bold text-gray-900 text-center uppercase hover:underline hover:text-blue-600 transition-colors duration-300">
                                 {breed.name}
                              </h3>
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:block">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                  {breeds.map((breed, index) => (
                     <div
                        key={breed.id}
                        className="relative overflow-hidden rounded transition-all duration-300 ease-out
                    transform group"
                        style={{
                           animationDelay: `${index * 100}ms`,
                        }}
                     >
                        {/* Pet Image */}
                        <div className="relative aspect-square p-4 lg:p-6">
                           <div className="w-full h-full">
                              <Image
                                 src={breed.image || "/placeholder.svg"}
                                 alt={breed.name}
                                 fill
                                 className="object-cover object-center rounded transition-transform duration-300 group-hover:scale-105 bg-blue-100"
                                 sizes="(max-width: 1024px) 33vw, 16vw"
                              />
                           </div>
                        </div>

                        {/* Breed Name */}
                        <div className="px-4 lg:px-6 pb-4 lg:pb-6 mt-4">
                           <Link href={breed.shopUrl}>
                              <h3 className="text-xs font-bold text-gray-900 text-center uppercase hover:underline hover:text-blue-600 transition-colors duration-300">
                                 {breed.name}
                              </h3>
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
