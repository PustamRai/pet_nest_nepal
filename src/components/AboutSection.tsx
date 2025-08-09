"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeInOut" },
   }),
};

export function AboutSection() {
   const cardSections = [
      {
         title: "Our Mission",
         content: (
            <p className="text-gray-700">
               At PetNestNepal, our mission is to enrich the lives of pets and
               their families by providing high-quality products, expert advice,
               and compassionate services. We believe every pet deserves a
               happy, healthy, and fulfilling life.
            </p>
         ),
      },
      {
         title: "Our Values",
         content: (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
               <li>
                  <span className="font-semibold">Passion for Pets:</span> {""}
                  We genuinely love animals and are committed to their
                  well-being.
               </li>
               <li>
                  <span className="font-semibold">Quality & Trust:</span> {""}
                  We offer only the best products and services, earning your
                  trust.
               </li>
               <li>
                  <span className="font-semibold">Community Focus:</span> {""}
                  We foster a supportive community for pet parents.
               </li>
               <li>
                  <span className="font-semibold">Continuous Learning:</span>{" "}
                  {""}
                  We stay updated on the latest in pet care to serve you better.
               </li>
            </ul>
         ),
      },
      {
         title: "Our Story",
         content: (
            <p className="text-gray-700">
               Founded in 2025, PetNestNepal started with a simple idea: to
               create a one-stop shop where pet owners could find everything
               they need, backed by genuine care and knowledge. From humble
               beginnings, we&apos;ve grown into a beloved community hub, thanks
               to the loyalty of our customers and the dedication of our team.
            </p>
         ),
      },
   ];

   // Define the starting custom index for the cards after the title and image
   const cardAnimationStartIndex = 2; // 0 for title, 1 for image, so cards start from 2

   return (
      <section>
         <motion.div
            className="text-center mb-10 md:mb-12"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
         >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
               About Pet Nest Nepal
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
               Your trusted partner in pet care, dedicated to bringing joy and
               health to your beloved companions.
            </p>
         </motion.div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
               className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
               custom={1}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeUp}
            >
               <Image
                  src="/dog1.jpg"
                  alt="Happy pets and owner"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
               />
            </motion.div>

            {/* Content Sections (Cards) - Looped */}
            <div className="space-y-6">
               {cardSections.map((section, i) => (
                  <motion.div
                     key={i}
                     custom={cardAnimationStartIndex + i}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                     variants={fadeUp}
                  >
                     <Card className="shadow-sm">
                        <CardHeader>
                           <CardTitle className="text-xl font-semibold text-gray-800">
                              {section.title}
                           </CardTitle>
                        </CardHeader>
                        <CardContent>{section.content}</CardContent>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
