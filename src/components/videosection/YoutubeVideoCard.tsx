"use client";

import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

interface Video {
   id: string;
   title?: string;
}

interface YouTubeVideoCardProps {
   videoId: Video[];
   title?: string;
   description?: string;
   aspectRatio?: "16:9" | "4:3" | "21:9" | "9:16";
}

export function YouTubeVideoCard({
   videoId,
   title = "",
   description,
   aspectRatio = "9:16",
}: YouTubeVideoCardProps) {
   const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
      videoId.reduce((acc, video) => ({ ...acc, [video.id]: true }), {})
   );

   const getPaddingBottom = () => {
      switch (aspectRatio) {
         case "4:3":
            return "75%";
         case "21:9":
            return "42.857%";
         case "9:16":
            return "177.77%";
         case "16:9":
         default:
            return "56.25%";
      }
   };

   const handleIframeLoad = (videoId: string) => {
      setLoadingStates((prev) => ({ ...prev, [videoId]: false }));
   };

   return (
      <div>
         <h2 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-center mb-6 sm:mb-8 lg:mb-10 text-title bg-clip-text text-transparent py-4">
            {title}
         </h2>

         {/* ===== MOBILE VIEW SECTION ===== */}
         {/* Horizontal scroll layout for mobile devices (hidden on md and larger screens) */}
         <div className="block md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
               {videoId.map((video, index) => (
                  <CardContent
                     key={video.id}
                     className="flex-none w-48 p-0 rounded-2xl snap-center"
                     style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "slideInFromLeft 0.6s ease-out forwards",
                     }}
                  >
                     <div
                        className="relative w-full rounded-b-lg overflow-hidden"
                        style={{ paddingBottom: getPaddingBottom() }}
                     >
                        {loadingStates[video.id] && (
                           <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                              <Skeleton className="w-full h-full rounded-2xl" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                              </div>
                           </div>
                        )}

                        <iframe
                           src={`https://www.youtube.com/embed/${video.id}`}
                           title="YouTube video player"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           loading="lazy"
                           allowFullScreen
                           onLoad={() => handleIframeLoad(video.id)}
                           className="absolute top-0 left-0 w-full h-full rounded-2xl"
                        />
                     </div>
                     {description && (
                        <p className="text-sm text-gray-600 mt-4 px-4 pb-4">
                           {description}
                        </p>
                     )}
                  </CardContent>
               ))}
            </div>
         </div>

         {/* ===== DESKTOP/TABLET VIEW SECTION ===== */}
         {/* Grid layout for tablet and desktop devices (hidden on mobile) */}
         <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {videoId.map((video, index) => (
               <CardContent
                  key={video.id}
                  className="flex-1 p-0 rounded-2xl hover:scale-105 transition-transform duration-300"
                  style={{
                     animationDelay: `${index * 100}ms`,
                     animation: "fadeInUp 0.6s ease-out forwards",
                  }}
               >
                  <div
                     className="relative w-full rounded-b-lg overflow-hidden"
                     style={{ paddingBottom: getPaddingBottom() }}
                  >
                     {loadingStates[video.id] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                           <Skeleton className="w-full h-full rounded-2xl" />
                           <div className="absolute inset-0 flex items-center justify-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                           </div>
                        </div>
                     )}

                     <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        loading="lazy"
                        allowFullScreen
                        onLoad={() => handleIframeLoad(video.id)}
                        className="absolute top-0 left-0 w-full h-full rounded-2xl"
                     />
                  </div>
                  {description && (
                     <p className="text-sm text-gray-600 mt-4 px-4 pb-4">
                        {description}
                     </p>
                  )}
               </CardContent>
            ))}
         </div>
      </div>
   );
}
