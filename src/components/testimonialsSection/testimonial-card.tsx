"use client";

import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   CarouselDots,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonilas.types";
import Image from "next/image";

interface TestimonialsProps {
   testimonials: Testimonial[];
   title?: string;
   subtitle?: string;
}

export default function TestimonialsCard({
   testimonials,
   title = "What Pet Parents Say",
   subtitle = "Real stories from our happy customers and their beloved pets",
}: TestimonialsProps) {
   const renderStars = (rating: number) => {
      return Array.from({ length: 5 }, (_, i) => (
         <Star
            key={i}
            className={cn(
               "w-4 h-4 transition-colors duration-300",
               i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            )}
         />
      ));
   };

   if (testimonials.length === 0) {
      return null;
   }

   return (
      <section className="py-16">
         <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {title}
               </h2>
               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
               </p>
            </div>

            <Carousel
               autoplay={5000}
               className="w-full max-w-7xl mx-auto  py-4 px-4"
            >
               <CarouselContent className="-ml-2 md:-ml-4 py-6 px-6">
                  {testimonials.map((testimonial) => (
                     <CarouselItem
                        key={testimonial.id}
                        className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                     >
                        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl group h-full">
                           {/* Quote Icon */}
                           <div className="absolute -top-3 -left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                              <Quote className="w-4 h-4 text-white" />
                           </div>

                           {/* Rating */}
                           <div className="flex items-center gap-1 mb-4">
                              {renderStars(testimonial.rating)}
                           </div>

                           {/* Testimonial Text */}
                           <blockquote className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 italic">
                              &quot;{testimonial.text}&quot;
                           </blockquote>

                           {/* Customer Info */}
                           <div className="flex items-center gap-4 mt-auto">
                              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                 <Image
                                    src={
                                       testimonial.image ||
                                       "/placeholder.svg?height=48&width=48&query=pet owner portrait"
                                    }
                                    alt={`${testimonial.name} with ${testimonial.petName}`}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                 />
                              </div>
                              <div className="flex-1 min-w-0">
                                 <p className="font-semibold text-gray-900 text-sm lg:text-base">
                                    {testimonial.name}
                                 </p>
                                 <p className="text-gray-600 text-sm">
                                    {testimonial.petName} the{" "}
                                    {testimonial.petType}
                                 </p>
                                 <p className="text-blue-600 text-xs font-medium mt-1">
                                    {testimonial.service}
                                 </p>
                              </div>
                           </div>

                           {/* Hover Effect Border */}
                           <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>

               <CarouselPrevious className="left-0 -translate-x-4" />
               <CarouselNext className="right-0 translate-x-4" />
               <CarouselDots className="mt-4" />
            </Carousel>
         </div>
      </section>
   );
}
