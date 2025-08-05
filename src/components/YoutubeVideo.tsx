import { Video } from "@/types/video.types";
import { YouTubeVideoCard } from "./YoutubeVideoCard";

const videoList: Video[] = [
   {
      id: "4F1dbot6a8A",
   },
   {
      id: "4F1dbot6a8A",
   },
   {
      id: "4F1dbot6a8A",
   },
   {
      id: "4F1dbot6a8A",
   },
];

export default function YoutubeVideo() {
   return (
      <div className="py-6 sm:py-8 mx-auto">
         <YouTubeVideoCard
            videoId={videoList}
            title="Videos of Cats"
            // title={video.title}
            // description={video.description}
            // aspectRatio={
            //    video.aspectRatio as "16:9" | "4:3" | "21:9" | "9:16"
            // } // Pass the aspect ratio
         />
      </div>
   );
}
