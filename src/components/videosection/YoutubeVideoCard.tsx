"use client";

import { CardContent } from "@/components/ui/card";
import { Video } from "@/types/video.types";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useState } from "react";

interface YouTubeVideoCardProps {
   videoId: Video[];
   title?: string;
   description?: string; // Optional description for the card
   aspectRatio?: "16:9" | "4:3" | "21:9" | "9:16"; // Common aspect ratios
}

export function YouTubeVideoCard({
   videoId,
   title = "",
   description,
   aspectRatio = "9:16",
}: YouTubeVideoCardProps) {
   // const [isLoading, setIsLoading] = useState(true);

   const getPaddingBottom = () => {
      switch (aspectRatio) {
         case "4:3":
            return "75%"; // 3 / 4 = 0.75
         case "21:9":
            return "42.857%"; // 9 / 21 = 0.42857
         case "9:16":
            return "177.77%"; // 16 / 9 = 1.7777
         case "16:9":
         default:
            return "56.25%"; // 9 / 16 = 0.5625
      }
   };

   return (
      <div>
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-center  mb-6 sm:mb-8 lg:mb-10 bg-secondary text-gray-800 rounded py-4">
            {title}
         </h2>
         {/* <Card className="w-full h-full flex flex-col overflow-hidden"> */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {videoId.map((video) => (
               <CardContent key={video.id} className="flex-1 p-0 rounded-2xl">
                  <div
                     className="relative w-full rounded-b-lg overflow-hidden"
                     style={{ paddingBottom: getPaddingBottom() }}
                  >
                     {/* {isLoading && (
                        <Skeleton className="absolute inset-0 rounded-b-lg" />
                     )} */}
                     <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        // className={`absolute top-0 left-0 w-full h-full ${
                        //    isLoading ? "hidden" : ""
                        // }`} // Hide iframe until loaded
                        // onLoad={() => setIsLoading(false)}

                        // dynamic
                        // suspense
                     ></iframe>
                  </div>
                  {description && (
                     <p className="text-sm text-gray-600 mt-4 px-4 pb-4">
                        {description}
                     </p>
                  )}
               </CardContent>
            ))}
         </div>

         {/* </Card> */}
      </div>
   );
}
