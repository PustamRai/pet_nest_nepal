import { AboutSection } from "@/components/AboutSection";
import WidthWrapper from "@/components/WidthWrapper";
import type { PolicySection } from "@/types/policy";

export default function AboutPage() {
   const aboutContent: PolicySection[] = [
      {
         title: "Our Mission",
         content: (
            <p className="text-gray-700">
               At Pet Nest Nepal, our mission is to enrich the lives of pets and
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
                  <span className="font-semibold">Passion for Pets:</span>
                  We genuinely love animals and are committed to their
                  well-being.
               </li>
               <li>
                  <span className="font-semibold">Quality & Trust:</span> We
                  offer only the best products and services, earning your trust.
               </li>
               <li>
                  <span className="font-semibold">Community Focus:</span>
                  We foster a supportive community for pet parents.
               </li>
               <li>
                  <span className="font-semibold">Continuous Learning:</span>
                  We stay updated on the latest in pet care to serve you better.
               </li>
            </ul>
         ),
      },
      {
         title: "Our Story",
         content: (
            <p className="text-gray-700">
               Founded in [Year], Pet Nest Nepal started with a simple idea: to
               create a one-stop shop where pet owners could find everything
               they need, backed by genuine care and knowledge. From humble
               beginnings, we've grown into a beloved community hub, thanks to
               the loyalty of our customers and the dedication of our team.
            </p>
         ),
      },
   ];

   return (
      <WidthWrapper>
         <main>
            <AboutSection aboutSections={aboutContent} />
         </main>
      </WidthWrapper>
   );
}
