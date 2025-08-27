import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarouselSkeleton() {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-7xl">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="overflow-hidden">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[20/8] xl:aspect-[24/8] w-full rounded-2xl overflow-hidden relative">
                      {/* Animated Skeleton */}
                      <Skeleton className="w-full h-full animate-pulse bg-gradient-to-r from-gray-400 via-gray-500 to-gray-300" />
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
    </div>
  );
}
