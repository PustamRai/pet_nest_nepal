import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";

export default function ResponsiveBannerCarousel() {
  // Your image URLs - replace these with your actual images
  const images = [
    "/dogandkitten.webp?height=400&width=800",
    "/cat2.jpg",
    "/dog1.jpg",
    "/cat1.jpg?height=400&width=800",
    "/dog2.jpg?height=400&width=800",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-10">
      <Carousel className="w-full max-w-7xl" autoplay={5000}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-lg overflow-hidden py-0 rounded-none">
                <CardContent className="p-0">
                  <div className="aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[20/8] xl:aspect-[24/8] w-full">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Slide ${index + 1}`}
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
