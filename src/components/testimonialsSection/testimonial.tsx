import { TestimonialsSection } from "./testimonial-card";

export default function TestimonialsPage() {
   const testimonialsData = [
      {
         id: 1,
         name: "Priya Sharma",
         role: "Happy Dog Owner",
         image: "/testimonial-image/girl.jpg",
         testimonial:
            "PetNestNepal has been a game-changer for us! The quality of products is exceptional, and the vet consultation service saved us a trip to the clinic. Highly recommend!",
      },
      {
         id: 2,
         name: "Rajesh Gurung",
         role: "Cat Enthusiast",
         image: "/testimonial-image/boy.jpg",
         testimonial:
            "I love the variety of cat food and accessories available. My cat, Luna, is much happier and healthier since we started shopping here. The delivery is always prompt too!",
      },
      {
         id: 3,
         name: "Anjali Thapa",
         role: "Small Pet Parent",
         image: "/testimonial-image/girl.jpg",
         testimonial:
            "Finding good quality supplies for my hamster was always a challenge until I found PetNestNepal. Their small pet section is fantastic, and the customer service is top-notch.",
      },
      {
         id: 4,
         name: "Suresh Karki",
         role: "Bird Lover",
         image: "/testimonial-image/boy.jpg",
         testimonial:
            "The bird food selection is excellent, and I appreciate the detailed product descriptions. My parrots are thriving on the new diet I got from here. Thank you, PetNestNepal!",
      },
      {
         id: 4,
         name: "Hema Giri",
         role: "Bird Lover",
         image: "/testimonial-image/girl.jpg",
         testimonial:
            "The bird food selection is excellent, and I appreciate the detailed product descriptions. My parrots are thriving on the new diet I got from here. Thank you, PetNestNepal!",
      },
   ];

   return (
      <main>
         <TestimonialsSection
            title="What Our Customers Say"
            description="Hear directly from pet parents who trust PetNestNepal for their beloved companions."
            testimonials={testimonialsData}
         />
      </main>
   );
}
