"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Testimonial {
   id: number;
   name: string;
   role: string;
   image: string;
   testimonial: string;
}

interface TestimonialsSectionProps {
   title?: string;
   description?: string;
   testimonials: Testimonial[];
}

export function TestimonialsSection({
   title,
   description,
   testimonials,
}: TestimonialsSectionProps) {
   return (
      <section>
         <div>
            <h2 className="text-3xl sm:text-4xl text-center lg:text-5xl font-bold text-gray-800 mb-4">
               {title}
            </h2>
            <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-4">
               {description}
            </p>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
               {testimonials.map((testimonial) => (
                  <Card
                     key={testimonial.id}
                     className="h-full flex flex-col justify-between p-6 rounded-lg shadow-md bg-white"
                  >
                     <CardContent className="p-0 mb-4">
                        <p className="text-gray-700 text-base italic leading-relaxed">
                           &quot;{testimonial.testimonial}&quot;
                        </p>
                     </CardContent>
                     <CardHeader className="flex flex-row items-center p-0">
                        <Image
                           src={
                              testimonial.image ||
                              "/placeholder.svg?height=64&width=64&text=Avatar"
                           }
                           alt={testimonial.name}
                           width={64}
                           height={64}
                           className="rounded-full object-cover w-16 h-16 mr-4"
                        />
                        <div>
                           <CardTitle className="text-lg font-semibold text-gray-800">
                              {testimonial.name}
                           </CardTitle>
                           <p className="text-sm text-gray-600">
                              {testimonial.role}
                           </p>
                        </div>
                     </CardHeader>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
}
