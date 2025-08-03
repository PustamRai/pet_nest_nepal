import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Royal Canin Maxi Adult Dry Dog Food & Applied Pump",
    originalPrice: "₹2999",
    discountedPrice: "₹2040",
    discount: "32%",
    image: "/cat2.jpg",
  },
  {
    id: 2,
    title: "Royal Canin Maxi Adult Dry Dog Food & Applied Pump",
    originalPrice: "₹2999",
    discountedPrice: "₹2040",
    discount: "32%",
    image: "/placeholder.svg?height=120&width=100&text=Royal+Canin+2",
  },
  {
    id: 3,
    title: "Royal Canin Maxi Adult Dry Dog Food & Applied Pump",
    originalPrice: "₹2999",
    discountedPrice: "₹2040",
    discount: "32%",
    image: "/placeholder.svg?height=120&width=100&text=Royal+Canin+3",
  },
];

export function WeeklyOffersTest() {
  return (
    <div className="py-6 sm:py-8 ">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 sm:max-h-96">
        {/* Weekly Offers Header */}
        <div className="bg-red-500 text-white p-4 sm:p-6 rounded-lg flex-shrink-0 w-full lg:w-48 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-xl sm:text-2xl font-bold">Weekly</h2>
          <h2 className="text-xl sm:text-2xl font-bold">Offers</h2>
        </div>
        {/* Product Cards and More Button */}
        <div className="flex flex-col flex-1 sm:max-h-96">
          <div className="flex flex-wrap gap-4">
            {offers.map((offer) => (
              <div
                key={offer.id}
                // Wrapper for badge and card, handles responsive width
                className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-10.66px)] lg:w-[calc(32%-12px)]"
              >
                {/* Promotional Badge - now outside the Card */}
                <div className="bg-cyan-400 text-white px-2 sm:px-3 py-1 rounded text-xs font-medium z-10 w-full mb-2 text-center">
                  <span className="hidden sm:inline">
                    Extra 5% off on orders above 999 with code PAMPERS
                  </span>
                  <span className="sm:hidden">Extra 5% off with PAMPERS</span>
                </div>
                <Card className="py-0">
                  <CardContent className="p-3 sm:p-4 pt-6 sm:pt-8">
                    <div className="text-center">
                      <div className="relative h-32 w-full mx-auto mb-3">
                        <Image
                          src={offer.image || "/placeholder.svg"}
                          alt={offer.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">
                        {offer.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 flex-wrap">
                        {/* Reordered price and discount */}
                        <span className="text-base sm:text-lg font-bold text-gray-800">
                          {offer.discountedPrice}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 line-through">
                          {offer.originalPrice}
                        </span>
                        <span className="bg-red-500 text-white text-xs px-1 sm:px-2 py-1 rounded">
                          {offer.discount}
                        </span>
                      </div>
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm py-2">
                        Add to cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          {/* More Button */}
          {/* <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              More
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
