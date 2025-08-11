"use client"; // This component needs to be a Client Component to use Framer Motion

import type { PolicySection } from "@/types/policy"; // Import the PolicySection type

interface PolicyDisplaySectionProps {
   pageTitle: string; // Main title for the page (e.g., "Refund Policy")
   pageDescription: string; // Main description for the page
   policyContent: PolicySection[]; // Array of policy sections
}

export function PolicyDisplaySection({
   pageTitle,
   pageDescription,
   policyContent,
}: PolicyDisplaySectionProps) {
   return (
      <section>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title and Description */}
            <div className="text-center mb-10 md:mb-12">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  {pageTitle}
               </h2>
               <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
                  {pageDescription}
               </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-8">
               {policyContent.map((section, i) => (
                  <div key={i} className=" p-6">
                     <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                        {section.title}
                     </h3>
                     <div className="text-gray-800 sm:text-xl text-base leading-relaxed">
                        {section.content}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
