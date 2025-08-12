import { Testimonial } from "@/types/testimonilas.types";
import TestimonialsCard from "./testimonial-card";

const testimonialsData: Testimonial[] = [
   {
      id: "sarah-max",
      name: "Sarah Johnson",
      petName: "Max",
      petType: "Golden Retriever",
      rating: 5,
      text: "The grooming service was exceptional! Max came home looking and smelling amazing. The staff was so gentle and caring with him.",
      image: "/testimonial-image/girl.jpg",
      service: "Grooming",
   },
   {
      id: "mike-luna",
      name: "Mike Chen",
      petName: "Luna",
      petType: "Border Collie",
      rating: 5,
      text: "The training program transformed Luna from a hyperactive puppy into a well-behaved companion. Highly recommend their 6-week course!",
      image: "/testimonial-image/boy.jpg",
      service: "Training",
   },
   {
      id: "emily-whiskers",
      name: "Emily Rodriguez",
      petName: "Whiskers",
      petType: "Persian Cat",
      rating: 5,
      text: "PetsHotel gave me peace of mind during my vacation. Whiskers was pampered and happy when I returned. The daily photo updates were wonderful!",
      image: "/testimonial-image/girl.jpg",
      service: "PetsHotel",
   },
   {
      id: "david-buddy",
      name: "David Thompson",
      petName: "Buddy",
      petType: "Labrador Mix",
      rating: 5,
      text: "Doggie Day Camp is perfect for Buddy's energy level. He comes home tired and happy every day. The staff truly cares about each pet.",
      image: "/testimonial-image/boy.jpg",
      service: "Doggie Day Camp",
   },
   {
      id: "lisa-coco",
      name: "Lisa Park",
      petName: "Coco",
      petType: "French Bulldog",
      rating: 5,
      text: "From grooming to training, every service exceeded my expectations. Coco loves coming here, and I love the professional care she receives.",
      image: "/testimonial-image/girl.jpg",
      service: "Full Service",
   },
   {
      id: "james-mittens",
      name: "James Wilson",
      petName: "Mittens",
      petType: "Maine Coon",
      rating: 5,
      text: "As a cat owner, I was nervous about boarding services. But Mittens was treated like royalty at PetsHotel. Will definitely use again!",
      image: "/testimonial-image/boy.jpg",
      service: "PetsHotel",
   },
];

export default function TestimonialsPage() {
   return (
      <main>
         <TestimonialsCard
            title="What Our Customers Say"
            // description="Hear directly from pet parents who trust PetNestNepal for their beloved companions."
            testimonials={testimonialsData}
         />
      </main>
   );
}
