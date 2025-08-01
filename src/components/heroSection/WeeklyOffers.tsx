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
    image: "/placeholder.svg?height=120&width=100&text=Royal+Canin+1",
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

export function WeeklyOffers() {
  return (
    <div className="py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Weekly Offers Header */}
        <div className="bg-red-500 text-white p-4 sm:p-6 rounded-lg flex-shrink-0 w-full lg:w-48 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-xl sm:text-2xl font-bold">Weekly</h2>
          <h2 className="text-xl sm:text-2xl font-bold">Offers</h2>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1 overflow-x-auto">
          <div className="flex gap-4 min-w-full sm:min-w-0">
            {offers.map((offer) => (
              <Card
                key={offer.id}
                className="flex-1 min-w-[250px] sm:min-w-0 relative"
              >
                {/* Promotional Badge */}
                <div className="absolute -top-2 left-2 sm:left-4 bg-cyan-400 text-white px-2 sm:px-3 py-1 rounded text-xs font-medium z-10 max-w-[90%]">
                  <span className="hidden sm:inline">
                    Extra 5% off on orders above 999 with code PAMPERS
                  </span>
                  <span className="sm:hidden">Extra 5% off with PAMPERS</span>
                </div>

                <CardContent className="p-3 sm:p-4 pt-6 sm:pt-8">
                  <div className="text-center">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      width={80}
                      height={100}
                      className="sm:w-[100px] sm:h-[120px] mx-auto mb-3 object-contain"
                    />

                    <h3 className="text-xs sm:text-sm font-medium text-gray-800 mb-3 line-clamp-2 min-h-[2.5rem]">
                      {offer.title}
                    </h3>

                    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 flex-wrap">
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
            ))}
          </div>

          {/* More Button */}
          <div className="flex items-center justify-center lg:justify-start mt-4 lg:mt-0">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full">
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
