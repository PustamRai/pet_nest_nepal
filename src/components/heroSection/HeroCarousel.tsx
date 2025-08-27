"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CarouselSkeleton from "../skeleton/carousel-skeleton";
import { images } from "@/data/image.db";

// interface Image {
//   _id: string;
//   url: string;
// }

// async function fetchImages(): Promise<Image[]> {
//   try {
//     const res = await axios.get("/api/images");

//     // Ensure we always return an array
//     if (!res?.data?.data) {
//       console.warn("No images returned from API");
//       return [];
//     }

//     return res.data.data;
//   } catch (error) {
//     console.error("Failed to fetch images:", error);
//     return [];
//   }
// }

export default function HeroCarousel() {
  // const {
  //   data: images = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["images"],
  //   queryFn: fetchImages,
  // });

  // if (isLoading) {
  //   return <CarouselSkeleton />;
  // }

  // if (error) {
  //   return (
  //     <div className="text-center py-10 text-red-500">
  //       Failed to load images
  //     </div>
  //   );
  // }

  return (
    <div className="w-full flex justify-center">
      <Carousel className="w-full max-w-7xl" autoplay={5000}>
        <CarouselContent>
          {images?.length > 0 &&
            images.map((image, index) => (
              <CarouselItem key={image._id} className="overflow-hidden">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[20/8] xl:aspect-[24/8] w-full rounded-2xl overflow-hidden">
                      <Image
                        src={image.imageurl || "/placeholder.svg"}
                        alt={`Slide ${index + 1}`}
                        width={1200}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4" />
        <CarouselNext className="right-2 sm:right-4" />
        <CarouselDots className="mt-4" />
      </Carousel>
    </div>
  );
}
