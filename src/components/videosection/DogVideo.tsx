import React from "react";
import { YouTubeVideoCard } from "./YoutubeVideoCard";
import { Video } from "@/types/video.types";

const videoList: Video[] = [
   {
      id: "dFg8Nu2X5Mo",
   },
   {
      id: "76W1ZtZfgFk",
   },
   {
      id: "Mf7lTe55LY4",
   },
   {
      id: "EYve6EfdcpU",
   },
];

function DogVideo() {
   return (
      <div className="py-6 sm:py-8 mx-auto">
         <YouTubeVideoCard
            videoId={videoList}
            title="Video For Dog Parents"
            // title={video.title}
            // description={video.description}
            // aspectRatio={
            //    video.aspectRatio as "16:9" | "4:3" | "21:9" | "9:16"
            // } // Pass the aspect ratio
         />
      </div>
   );
}

export default DogVideo;
