import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const newLaunchProducts = [
  {
    id: 1,
    promo: "Extra 4% off on orders above NRS 2499",
    image: "/rabbit.png",
    title: "Applod Yak & Roll Peanut Butter & Banana Yak Chew...",
    brand: "Applod",
    originalPrice: "₹249",
    discountedPrice: "₹236",
    discountPercent: "-5%",
    sizes: [],
  },
  {
    id: 2,
    promo: "Extra 4% off on orders above NRS 2499",
    image: "/dog.png",
    title: "Furpro Lilly of the Lake Cologne for Dogs - 100ml...",
    brand: "Furpro",
    originalPrice: "₹599",
    discountedPrice: "₹479",
    discountPercent: "-20%",
    sizes: [],
  },
  {
    id: 3,
    promo: "Extra 4% off on orders above NRS 2499",
    image: "/rabbit.png",
    title: "Festive Red Dog Rakhi - Handmade with Tassel, Fabr...",
    brand: "Paper Me",
    originalPrice: "",
    discountedPrice: "₹199",
    discountPercent: "",
    sizes: [],
  },
  {
    id: 4,
    promo: "Extra 4% off on orders above NRS 2499",
    image: "/dog.png",
    title: "Furpro Self-Cleaning Slicker Brush For Dogs...",
    brand: "Furpro",
    originalPrice: "₹899",
    discountedPrice: "₹764",
    discountPercent: "-15%",
    sizes: [],
  },
];

export function WeeklyOffers() {
  return (
    <div className="py-6 sm:py-8 mx-auto">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-white mb-6 sm:mb-8 lg:mb-10 py-2 rounded-lg bg-red-500">
        <h2 className="text-xl sm:text-2xl font-bold">Weekly</h2>
        <h2 className="text-xl sm:text-2xl font-bold">Offers</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {newLaunchProducts.map((product) => (
          <Card
            key={product.id}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            {/* Promotional Banner */}
            <div className="absolute top-0 left-0 right-0 bg-cyan-400 text-white text-xs sm:text-sm font-medium text-center py-1 sm:py-2 px-2 z-10">
              {product.promo}
            </div>

            <CardContent className="p-3 sm:p-4 pt-14 sm:pt-16 flex flex-col items-center text-center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={80}
                height={120}
                className="sm:w-[100px] sm:h-[150px] object-contain mb-3 sm:mb-4"
              />
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                {product.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                {product.brand}
              </p>

              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                <span className="text-base sm:text-lg font-bold text-gray-800">
                  {product.discountedPrice}
                </span>
                {product.discountPercent && (
                  <span className="bg-red-500 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                    {product.discountPercent}
                  </span>
                )}
              </div>

              {/* {product.sizes.length > 0 && (
                <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {product.sizes.map((size, idx) => (
                    <span
                      key={idx}
                      className="border border-gray-300 text-gray-700 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-0.5"
                    >
                      <span className="font-bold">{size.label}</span>
                      <span className="text-red-500">{size.percent}</span>
                    </span>
                  ))}
                </div>
              )} */}

              <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm py-2">
                Add to cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
