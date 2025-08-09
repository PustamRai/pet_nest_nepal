"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { PolicySection } from "@/types/policy";

const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeInOut" },
   }),
};

interface AboutSectionProps {
   title?: string;
   description?: string;
   aboutSections: PolicySection[];
}

export function AboutSection({
   title = "About Pet Nest Nepal",
   description = "Your trusted partner in pet care, dedicated to bringing joy and health to your beloved companions.",
   aboutSections,
}: AboutSectionProps) {
   const cardAnimationStartIndex = 2;

   return (
      <section>
         {/* Main Title and Description - custom={0} */}
         <motion.div
            className="text-center mb-10 md:mb-12"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animate once when 20% of element is in view
            variants={fadeUp}
         >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
               {title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
               {description}
            </p>
         </motion.div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
               className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-lg"
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
               {aboutSections.map((section, i) => (
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
