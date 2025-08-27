// import Image from "next/image";

// export function HeroBanner() {
//   return (
//     <div className="mt-4 sm:mt-6 lg:mt-10 relative bg-gradient-to-r from-cyan-400 to-cyan-300 overflow-hidden mx-auto max-w-6xl">
//       {/* Background elements - Sun and clouds */}
//       <div className="absolute top-3 right-8 sm:top-4 sm:right-16 lg:top-6 lg:right-24 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full"></div>
//       <div className="absolute top-4 right-16 sm:top-6 sm:right-24 lg:top-8 lg:right-36 w-8 h-4 sm:w-10 sm:h-5 lg:w-12 lg:h-6 bg-white rounded-full opacity-90"></div>
//       <div className="absolute top-6 right-20 sm:top-8 sm:right-32 lg:top-12 lg:right-48 w-6 h-3 sm:w-7 sm:h-3 lg:w-8 lg:h-4 bg-white rounded-full opacity-70"></div>

//       <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-8 min-h-[250px] sm:min-h-[280px] lg:min-h-[320px] gap-6 lg:gap-0">
//         {/* Left side - Dog in frame */}
//         <div className="flex-shrink-0 order-2 lg:order-1">
//           <div className="bg-gradient-to-b from-purple-200 to-blue-200 p-2 sm:p-3 lg:p-4 rounded-lg border-2 sm:border-3 lg:border-4 border-white shadow-lg">
//             <Image
//               src="/dog.png"
//               alt="Happy dog"
//               width={120}
//               height={140}
//               className="sm:w-[140px] sm:h-[160px] lg:w-[160px] lg:h-[180px] object-contain"
//             />
//           </div>
//         </div>

//         {/* Center content */}
//         <div className="text-center flex-1 px-2 sm:px-4 lg:px-8 order-1 lg:order-2">
//           <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
//             Almost Gone!
//           </h1>

//           {/* Promotional banner */}
//           <div className="inline-flex items-center bg-gradient-to-r from-white via-gray-50 to-white rounded-full px-2 sm:px-3 py-2 sm:py-1 shadow-lg mb-4 sm:mb-6 border border-gray-200">
//             <div className="px-3 sm:px-4 lg:px-6 py-1 sm:py-2">
//               <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-1">
//                 GET UP TO
//               </div>
//               <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">
//                 50% OFF
//               </div>
//             </div>

//             <div className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-5 lg:py-2 rounded-full text-sm sm:text-base lg:text-lg shadow-md">
//               SHOP <br /> NOW
//             </div>
//           </div>

//           <p className="text-sm sm:text-base lg:text-lg text-gray-800 font-semibold">
//             Extra 5% off using code{" "}
//             <span className="font-bold text-blue-800">PAMPERS</span>
//           </p>
//         </div>

//         {/* Right side - Cat and products */}
//         <div className="flex-shrink-0 flex items-end gap-3 sm:gap-4 lg:gap-6 order-3">
//           {/* Product stack */}
//           {/* <div className="flex flex-col items-center">
//             <div className="grid grid-cols-2 gap-1 sm:gap-2 mb-2 sm:mb-4">
//               <Image
//                 src="/placeholder.svg?height=60&width=45&text=Milk"
//                 alt="Pet milk product"
//                 width={35}
//                 height={45}
//                 className="sm:w-[40px] sm:h-[50px] lg:w-[45px] lg:h-[60px] object-contain bg-white rounded p-1"
//               />
//               <Image
//                 src="/placeholder.svg?height=60&width=45&text=Treats"
//                 alt="Pet treats"
//                 width={35}
//                 height={45}
//                 className="sm:w-[40px] sm:h-[50px] lg:w-[45px] lg:h-[60px] object-contain bg-white rounded p-1"
//               />
//               <Image
//                 src="/placeholder.svg?height=60&width=45&text=Food+1"
//                 alt="Pet food 1"
//                 width={35}
//                 height={45}
//                 className="sm:w-[40px] sm:h-[50px] lg:w-[45px] lg:h-[60px] object-contain bg-white rounded p-1"
//               />
//               <Image
//                 src="/placeholder.svg?height=60&width=45&text=Food+2"
//                 alt="Pet food 2"
//                 width={35}
//                 height={45}
//                 className="sm:w-[40px] sm:h-[50px] lg:w-[45px] lg:h-[60px] object-contain bg-white rounded p-1"
//               />
//             </div>
//             <div className="grid grid-cols-3 gap-1">
//               <Image
//                 src="/placeholder.svg?height=50&width=35&text=Applod+1"
//                 alt="Applod product 1"
//                 width={25}
//                 height={35}
//                 className="sm:w-[30px] sm:h-[40px] lg:w-[35px] lg:h-[50px] object-contain bg-white rounded p-1"
//               />
//               <Image
//                 src="/placeholder.svg?height=50&width=35&text=Applod+2"
//                 alt="Applod product 2"
//                 width={25}
//                 height={35}
//                 className="sm:w-[30px] sm:h-[40px] lg:w-[35px] lg:h-[50px] object-contain bg-white rounded p-1"
//               />
//               <Image
//                 src="/placeholder.svg?height=50&width=35&text=Applod+3"
//                 alt="Applod product 3"
//                 width={25}
//                 height={35}
//                 className="sm:w-[30px] sm:h-[40px] lg:w-[35px] lg:h-[50px] object-contain bg-white rounded p-1"
//               />
//             </div>
//           </div> */}

//           {/* Cat */}
//           <div className="relative">
//             <Image
//               src="/kitten.png"
//               alt="Orange cat"
//               width={120}
//               height={140}
//               className="sm:w-[120px] sm:h-[140px] lg:w-[140px] lg:h-[160px] object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
