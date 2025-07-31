import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const offers = [
  {
    id: 1,
    title: "Royal Canin Maxi Adult ",
    originalPrice: "₹2999",
    discountedPrice: "₹2040",
    discount: "32%",
    image: "/dog.png",
  },
  {
    id: 2,
    title: "Royal Canin Maxi Adult Dry Dog Food & Applied Pump",
    originalPrice: "₹2999",
    discountedPrice: "₹2040",
    discount: "32%",
    image: "/dog.png",
  },
];

export function WeeklyOffers() {
  return (
    <div className="py-8">
      <div className="flex gap-6 items-center">
        {/* Weekly Offers Header */}
        <div className="h-72 w-36 bg-red-500 text-white p-6 rounded-2xl flex-shrink-0  flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Weekly</h2>
          <h2 className="text-2xl font-bold">Offers</h2>
        </div>

        {/* Product Cards */}
        <div className="flex gap-4 flex-1 max-w-2xl">
          {offers.map((offer) => (
            <Card key={offer.id} className="flex-1 gap-2 py-0 pb-2">
              <CardContent className="flex flex-col px-0">
                {/* Promotional Badge */}
                <div className="w-full bg-cyan-400 text-white px-3 py-1 rounded text-xs font-medium z-10">
                  Extra 5% off on orders above 999 with code PAMPERS
                </div>

                <div className="text-center">
                  <Image
                    src={offer.image || "/placeholder.svg"}
                    alt={offer.title}
                    width={100}
                    height={120}
                    className="mx-auto mb-3 object-contain"
                  />

                  <h3 className="text-sm font-medium text-gray-800 mb-3 line-clamp-2">
                    {offer.title}
                  </h3>

                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-lg font-bold text-gray-800">
                      {offer.discountedPrice}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {offer.originalPrice}
                    </span>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {offer.discount}
                    </span>
                  </div>

                  <div className="px-2">
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm rounded-full">
                      Add to cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* More Button */}
          <div className="flex items-center">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-2xl">
              More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
