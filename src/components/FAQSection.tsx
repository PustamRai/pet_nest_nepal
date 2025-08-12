"use client";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeInOut" },
   }),
};

export function FaqSection() {
   const faqs = [
      {
         question: "What types of pets does Pet Nest Nepal cater to?",
         answer:
            "Pet Nest Nepal caters to a wide range of pets including dogs, cats, small pets (like hamsters, rabbits, guinea pigs), and birds. We offer products and services tailored to the unique needs of each animal.",
      },
      {
         question: "Do you offer vet consultation services?",
         answer:
            "Yes, we offer online vet consultation services through our 'Guinea a Vet' and 'Supertalks Vet' platforms. You can also find information on 'At Home Vet Services' in select areas.",
      },
      {
         question: "How can I track my order?",
         answer:
            "You can easily track your order by visiting the 'Track Your Order' link under the 'Quick Links' section in our footer. You will need your order number and email address.",
      },
      {
         question: "What is your return and refund policy?",
         answer:
            "Our return and refund policies are detailed under the 'Quick Links' section in the footer. We aim for customer satisfaction and have clear guidelines for returns and refunds.",
      },
      {
         question: "Do you have physical stores or experience centers?",
         answer:
            "Yes, we have 'Experience Centers' where you can visit, interact with our products, and get expert advice. Please check our website for locations near you.",
      },
      {
         question: "How can I contact customer support?",
         answer:
            "You can get in touch with us via phone at 9863986791 or email us at petnestnepal@gmail.com. Our contact details are available in the footer.",
      },
   ];

   return (
      <section>
         {/* Section Title */}
         <div className="max-w-4xl mx-auto  sm:px-6 lg:px-8">
            <motion.div
               className="text-center mb-10 md:mb-12"
               custom={0} // Staggering starts from 0
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={fadeUp}
            >
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Frequently Asked Questions
               </h2>
               <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Find answers to the most common questions about Pet Nest
                  Nepal, our products, and services.
               </p>
            </motion.div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-4">
               {faqs.map((faq, i) => (
                  <motion.div
                     key={i}
                     custom={i + 1} // Staggering continues from 1 (after title)
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                     variants={fadeUp}
                  >
                     <AccordionItem
                        value={`item-${i + 1}`}
                        className="border rounded-lg bg-white shadow-sm px-4"
                     >
                        <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-800 py-4 hover:cursor-pointer hover:no-underline">
                           {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 pb-4">
                           {faq.answer}
                        </AccordionContent>
                     </AccordionItem>
                  </motion.div>
               ))}
            </Accordion>
         </div>
      </section>
   );
}
