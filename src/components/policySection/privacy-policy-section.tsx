"use client"; // This component needs to be a Client Component to use Framer Motion

import { motion, type Variants } from "framer-motion";

// Define the fadeUp variants for staggering animation
const fadeUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: "easeInOut" },
   }),
};

export function PrivacyPolicySection() {
   const policySections = [
      {
         title: "1. Information We Collect",
         content: (
            <>
               <p className="mb-2">
                  We collect various types of information in connection with the
                  services we provide, including:
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     <span className="font-semibold">
                        Personal Information:
                     </span>{" "}
                     Name, email address, phone number, shipping address,
                     payment information.
                  </li>
                  <li>
                     <span className="font-semibold">Usage Data:</span>{" "}
                     Information about how you access and use our services, such
                     as IP address, browser type, pages visited, and time spent
                     on pages.
                  </li>
                  <li>
                     <span className="font-semibold">Device Information:</span>{" "}
                     Information about the device you use to access our
                     services, including hardware model, operating system, and
                     unique device identifiers.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "2. How We Use Your Information",
         content: (
            <>
               <p className="mb-2">
                  We use the information we collect for various purposes,
                  including:
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>To provide, operate, and maintain our services.</li>
                  <li>To process your transactions and manage your orders.</li>
                  <li>To improve, personalize, and expand our services.</li>
                  <li>To understand and analyze how you use our services.</li>
                  <li>
                     To develop new products, services, features, and
                     functionality.
                  </li>
                  <li>
                     To communicate with you, either directly or through one of
                     our partners, including for customer service, to provide
                     you with updates and other information relating to the
                     service, and for marketing and promotional purposes.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "3. Sharing Your Information",
         content: (
            <>
               <p className="mb-2">
                  We may share your information with third parties in the
                  following situations:
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     <span className="font-semibold">Service Providers:</span>{" "}
                     With third-party vendors, consultants, and other service
                     providers who perform services on our behalf.
                  </li>
                  <li>
                     <span className="font-semibold">Business Transfers:</span>{" "}
                     In connection with, or during negotiations of, any merger,
                     sale of company assets, financing, or acquisition of all or
                     a portion of our business to another company.
                  </li>
                  <li>
                     <span className="font-semibold">Legal Requirements:</span>{" "}
                     If required to do so by law or in response to valid
                     requests by public authorities (e.g., a court or a
                     government agency).
                  </li>
                  <li>
                     <span className="font-semibold">With Your Consent:</span>{" "}
                     We may share your information with your consent or at your
                     direction.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "4. Your Data Protection Rights",
         content: (
            <>
               <p className="mb-2">
                  Depending on your location, you may have the following data
                  protection rights:
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     The right to access, update, or delete the information we
                     have on you.
                  </li>
                  <li>
                     The right of rectification to correct any inaccurate or
                     incomplete information.
                  </li>
                  <li>
                     The right to object to our processing of your Personal
                     Data.
                  </li>
                  <li>
                     The right to request that we restrict the processing of
                     your personal information.
                  </li>
                  <li>
                     The right to data portability to receive a copy of your
                     Personal Data in a structured, machine-readable, and
                     commonly used format.
                  </li>
                  <li>
                     The right to withdraw consent at any time where
                     PetNestNepal relied on your consent to process your
                     personal information.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "5. Security of Your Information",
         content: (
            <p>
               The security of your data is important to us, but remember that
               no method of transmission over the Internet, or method of
               electronic storage is 100% secure. While we strive to use
               commercially acceptable means to protect your Personal Data, we
               cannot guarantee its absolute security.
            </p>
         ),
      },
      {
         title: "6. Changes to This Privacy Policy",
         content: (
            <p>
               We may update our Privacy Policy from time to time. We will
               notify you of any changes by posting the new Privacy Policy on
               this page. You are advised to review this Privacy Policy
               periodically for any changes. Changes to this Privacy Policy are
               effective when they are posted on this page.
            </p>
         ),
      },
      {
         title: "7. Contact Us",
         content: (
            <p>
               If you have any questions about this Privacy Policy, please
               contact us:
               <br />
               By email: petnestnepal@gmail.com
               <br />
               By phone: 9863****
            </p>
         ),
      },
   ];

   return (
      <section>
         {/* Section Title */}
         <motion.div
            className="text-center mb-10 md:mb-12"
            custom={0} // Staggering starts from 0
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
         >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
               Privacy Policy
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
               Your privacy is important to us. This policy explains how we
               collect, use, and protect your personal information.
            </p>
         </motion.div>

         {/* Policy Sections */}
         <div className="space-y-8">
            {policySections.map((section, i) => (
               <motion.div
                  key={i}
                  custom={i + 1} // Staggering continues from 1 (after title)
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
      </section>
   );
}
