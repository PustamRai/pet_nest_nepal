import PetServicesCard from "./pet-services-card";
import type { ServiceCard } from "@/types/pet-service-card.types";
import { Scissors, GraduationCap, Users } from "lucide-react";

const petServicesData: ServiceCard[] = [
   {
      id: "grooming",
      title: "GROOMING",
      icon: <Scissors className="w-5 h-5" />,
      image: "/dog1.jpg",
      offer: "New Customer Special",
      description: "$20 OFF your pet's first bath or groom*",
      color: "text-red-600",
      learnMoreUrl: "/services/grooming",
   },
   {
      id: "training",
      title: "TRAINING",
      icon: <GraduationCap className="w-5 h-5" />,
      image: "/cat2.jpg",
      offer: "Any 6-week Training Class",
      description: "ONLY $129 (that's $21.50 a week)*",
      color: "text-orange-600",
      learnMoreUrl: "/services/training",
   },
   {
      id: "petshotel",
      title: "PETSHOTEL",
      icon: <Users className="w-5 h-5" />,
      image: "/placeholder.svg?height=200&width=300",
      offer: "Add-on Service",
      description: "Stay 5 nights, get a FREE add-on*",
      color: "text-red-700",
      learnMoreUrl: "/services/petshotel",
   },
   {
      id: "doggie-day-camp",
      title: "DOGGIE DAY CAMP",
      icon: <Users className="w-5 h-5" />,
      image: "/placeholder.svg?height=200&width=300",
      offer: "Play & Save™ Pass",
      description: "Get up to 5 days FREE with purchase*",
      color: "text-blue-600",
      learnMoreUrl: "/services/doggie-day-camp1",
   },
];

export default function PetServices() {
   return (
      <main>
         <PetServicesCard
            services={petServicesData}
            title="Pet Services"
            subtitle="Personalized expert care for all breeds & needs"
         />
      </main>
   );
}
