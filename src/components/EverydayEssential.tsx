import Image from "next/image";

const categories = [
   // Top row
   {
      name: "Dog food",
      image: "/kitten.png",
   },
   {
      name: "Cat food",
      image: "/kitten.png",
   },
   { name: "Treats", image: "/kitten.png" },
   {
      name: "Litter supplies",
      image: "/kitten.png",
   },
   {
      name: "Prescription diet",
      image: "/kitten.png",
   },
   {
      name: "Premium food",
      image: "/kitten.png",
   },
   {
      name: "Fresh food",
      image: "/kitten.png",
   },
   {
      name: "Supplements",
      image: "/kitten.png",
   },

   // Bottom row
   {
      name: "Monsoon",
      image: "/kitten.png",
   },
   { name: "Toys", image: "/kitten.png" },
   {
      name: "Fashion",
      image: "/kitten.png",
   },
   {
      name: "Grooming essentials",
      image: "/kitten.png",
   },
   {
      name: "Beds and mats",
      image: "/kitten.png",
   },
   {
      name: "Collars & leash",
      image: "/kitten.png",
   },
   {
      name: "Bowls and feeders",
      image: "/kitten.png",
   },
   {
      name: "Pet tracker",
      image: "/kitten.png",
   },
];

export function EverydayEssentials() {
   return (
      <div className=" p-3 sm:p-4 lg:p-6 mx-auto  sm:mt-6">
         {/* Header */}
         <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-center mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-[#752c52] to-[#723445] bg-clip-text text-transparent py-4">
            Everyday essentials
         </h2>

         {/* Category Grid */}
         <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((category, index) => (
               <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
               >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
                     <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        width={100}
                        height={200}
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain"
                     />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
                     {category.name}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
}
