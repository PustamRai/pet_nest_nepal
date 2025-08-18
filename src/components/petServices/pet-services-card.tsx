"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ServiceCard } from "@/types/pet-service-card.types";
import Link from "next/link";
import Image from "next/image";

export interface PetServicesProps {
   title?: string;
   subtitle?: string;
   services: ServiceCard[];
}

export default function PetServicesCard({
   title = "Pet Services",
   subtitle = "Personalized expert care for all breeds & needs",
   services,
}: PetServicesProps) {
   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

   return (
      <section>
         <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12">
               <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-center mb-6 sm:mb-8 lg:mb-10 text-title bg-clip-text text-transparent py-4">
                  {title}
               </h1>
               <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  {subtitle}
               </p>
               {/* <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
               >
                  {learnMoreText}
               </Button> */}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               {services.map((service) => (
                  <Card
                     key={service.id}
                     className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                     onMouseEnter={() => setHoveredCard(service.id)}
                     onMouseLeave={() => setHoveredCard(null)}
                  >
                     {/* Image Container */}
                     <div className="relative overflow-hidden">
                        <Image
                           src={service.image || "/placeholder.svg"}
                           alt={service.title}
                           width={300}
                           height={350}
                           className="w-full h-48 sm:h-52 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Service Banner */}
                        <div
                           className={` text-white px-4 py-3 flex items-center gap-3 bg-blue-500`}
                        >
                           <div className=" p-1.5 rounded-full bg-red-500">
                              {service.icon}
                           </div>
                           <span className="font-bold text-sm sm:text-lg tracking-wide text-gray-50">
                              {service.title}
                           </span>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-4 sm:p-5 bg-white">
                        <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                           {service.offer}
                        </h3>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                           {service.description}
                        </p>

                        {/* Hover Effect - Call to Action */}
                        <div
                           className={`mt-3 transition-all duration-300  ${
                              hoveredCard === service.id
                                 ? "opacity-100 translate-y-0"
                                 : "opacity-0 translate-y-2"
                           }`}
                        >
                           <Link href={service.learnMoreUrl} className="block">
                              <Button
                                 size="sm"
                                 className={`w-full bg-blue-500 hover:opacity-90 text-xs sm:text-sm`}
                              >
                                 Learn More
                              </Button>
                           </Link>
                        </div>
                     </div>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
}
