import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="mt-10 relative bg-gradient-to-r from-cyan-300 to-cyan-400  overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-4 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-8 right-32 w-8 h-4 bg-white rounded-full opacity-80"></div>
      <div className="absolute top-12 right-40 w-6 h-3 bg-white rounded-full opacity-60"></div>

      <div className=" flex items-center justify-between p-8 min-h-[300px]">
        {/* Left side - Dog */}
        <div className="flex-shrink-0">
          <Image
            src="/dog.png"
            alt="Happy dog"
            width={180}
            height={200}
            className="object-cover"
          />
        </div>

        {/* Center content */}
        <div className="text-center flex-1 px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Almost Gone!
          </h1>

          <div className="flex items-center bg-gradient-to-r from-cyan-200 via-blue-100 to-white rounded-full px-2  shadow-sm">
            <div className=" px-4 py-1 w-full">
              <div className="flex text-xs mb-1 text-red-500 font-bold">
                GET UP TO
              </div>
              <div className="flex text-2xl font-extrabold font-serif text-red-500 ">
                50% OFF
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-6 rounded-full ml-2">
              SHOP <br /> NOW
            </Button>
          </div>

          <p className="text-gray-700 font-medium">
            Extra 5% off using code <span className="font-bold">PAMPERS</span>
          </p>
        </div>

        {/* Right side - Cat and products */}
        <div className="flex-shrink-0 flex items-end gap-4">
          <div className=" h-56 w-80">
            <Image
              src="/kitten.png"
              alt="Orange cat"
              width={200}
              height={400}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
