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
    "/cat2.jpg?height=400&width=800",
    "/dog1.jpg?height=400&width=800",
    "/cat1.jpg?height=400&width=800",
    "/dog2.jpg?height=400&width=800",
    "/dogandkitten.webp?height=400&width=800",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 sm:mt-6 lg:mt-10">
      {" "}
      {/* Added px-20 for arrow space */}
      <Carousel className="w-full  max-w-7xl">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-lg overflow-hidden py-0 rounded-none">
                <CardContent className="p-0">
                  <div className="aspect-[16/6] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[26/9] xl:aspect-[24/6] w-full">
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
