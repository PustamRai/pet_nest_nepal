import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/types/product.types";

// Define props for the card component
interface CardComponentsProps {
   products: Product[];
   title?: string;
}

export function CardComponents({ products, title = "" }: CardComponentsProps) {
   return (
      <div className="">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-center  mb-6 sm:mb-8 lg:mb-10 bg-secondary text-gray-800 rounded py-4">
            {title}
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
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

                     {product.sizes && product.sizes.length > 0 && (
                        <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4">
                           {product.sizes.map((size, idx) => (
                              <span
                                 key={idx}
                                 className="border border-gray-300 text-gray-700 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-0.5"
                              >
                                 <span className="font-bold">{size.label}</span>
                                 <span className="text-red-500">
                                    {size.percent}
                                 </span>
                              </span>
                           ))}
                        </div>
                     )}

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
