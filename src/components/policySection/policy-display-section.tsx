"use client";

import { motion, type Variants } from "framer-motion";
import type { PolicySection } from "@/types/policy";

const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeInOut" },
   }),
};

interface PolicyDisplaySectionProps {
   pageTitle: string;
   pageDescription: string;
   policyContent: PolicySection[];
}

export function PolicyDisplaySection({
   pageTitle,
   pageDescription,
   policyContent,
}: PolicyDisplaySectionProps) {
   return (
      <section>
         <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            {/* Section Title and Description */}
            <motion.div
               className="text-center mb-10 md:mb-12"
               custom={0} // Staggering starts from 0
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeUp}
            >
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  {pageTitle}
               </h2>
               <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  {pageDescription}
               </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
               {policyContent.map((section, i) => (
                  <motion.div
                     key={i}
                     custom={i + 1}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                     variants={fadeUp}
                     className="bg-white p-6 rounded-lg shadow-sm"
                  >
                     <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {section.title}
                     </h3>
                     <div className="text-gray-700 text-base leading-relaxed">
                        {section.content}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
