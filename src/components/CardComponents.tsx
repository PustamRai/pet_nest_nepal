import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { Product } from "@/types/product.types";

// Define props for the card component
interface CardComponentsProps {
   products: Product[];
   title?: string;
}

export function CardComponents({ products, title = "" }: CardComponentsProps) {
   return (
      <div className="">
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-center mb-6 sm:mb-8 lg:mb-10 bg-secondary text-gray-800 rounded py-4">
            {title}
         </h2>

         <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-6">
            {/* Mobile horizontal scroll container */}
            <div className="flex overflow-x-auto gap-3 pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
               {products.map((product) => (
                  <Card
                     key={product.id}
                     className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-[160px] sm:w-[180px] flex flex-col snap-start"
                  >
                     {/* Promotional Banner */}
                     <div className="absolute top-0 left-0 right-0 bg-cyan-400 text-white text-xs font-medium text-center py-1 px-2 z-10">
                        {product.promo}
                     </div>

                     <CardContent className="p-3 pt-12 flex flex-col items-center text-center flex-1">
                        <Image
                           src={product.image || "/placeholder.svg"}
                           alt={product.title}
                           width={60}
                           height={90}
                           className="w-[60px] h-[90px] object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="text-xs font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
                           {product.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2 min-h-[1rem]">
                           {product.brand}
                        </p>

                        <div className="flex items-center justify-center gap-1 mb-3">
                           {product.originalPrice && (
                              <span className="text-xs text-gray-500 line-through">
                                 {product.originalPrice}
                              </span>
                           )}
                           <span className="text-sm font-bold text-gray-800">
                              {product.discountedPrice}
                           </span>
                           {product.discountPercent && (
                              <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                                 {product.discountPercent}
                              </span>
                           )}
                        </div>

                        {product.sizes && product.sizes.length > 0 && (
                           <div className="flex gap-1 mb-3 min-h-[2rem] items-center justify-center flex-wrap">
                              {product.sizes.map((size, idx) => (
                                 <span
                                    key={idx}
                                    className="border border-gray-300 text-gray-700 text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5"
                                 >
                                    <span className="font-bold">
                                       {size.label}
                                    </span>
                                    <span className="text-red-500">
                                       {size.percent}
                                    </span>
                                 </span>
                              ))}
                           </div>
                        )}

                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs py-1.5 mt-auto">
                           Add to cart
                        </Button>
                     </CardContent>
                  </Card>
               ))}
            </div>

            {/* Desktop grid layout */}
            <div className="hidden md:contents">
               {products.map((product) => (
                  <Card
                     key={product.id}
                     className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
                  >
                     {/* Promotional Banner */}
                     <div className="absolute top-0 left-0 right-0 bg-cyan-400 text-white text-xs sm:text-sm font-medium text-center py-1 sm:py-2 px-2 z-10">
                        {product.promo}
                     </div>

                     <CardContent className="p-2 sm:p-3 md:p-4 pt-12 sm:pt-14 md:pt-16 flex flex-col items-center text-center flex-1">
                        <Image
                           src={product.image || "/placeholder.svg"}
                           alt={product.title}
                           width={60}
                           height={90}
                           className="sm:w-[80px] sm:h-[120px] md:w-[100px] md:h-[150px] object-contain mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-105"
                        />
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
                           {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 md:mb-3 min-h-[1rem]">
                           {product.brand}
                        </p>

                        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
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
                           <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4 min-h-[2rem] items-center justify-center">
                              {product.sizes.map((size, idx) => (
                                 <span
                                    key={idx}
                                    className="border border-gray-300 text-gray-700 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-0.5"
                                 >
                                    <span className="font-bold">
                                       {size.label}
                                    </span>
                                    <span className="text-red-500">
                                       {size.percent}
                                    </span>
                                 </span>
                              ))}
                           </div>
                        )}

                        <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm py-1.5 sm:py-2 mt-auto">
                           Add to cart
                        </Button>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </div>
   );
}
