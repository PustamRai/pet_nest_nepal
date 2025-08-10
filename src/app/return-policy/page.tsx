import { PolicyDisplaySection } from "@/components/policySection/policy-display-section";
import WidthWrapper from "@/components/WidthWrapper";
import type { PolicySection } from "@/types/policy";

export default function ReturnPolicyPage() {
   const returnPolicyContent: PolicySection[] = [
      {
         title: "1. Return Period",
         content: (
            <>
               <p className="mb-2">
                  You have 14 calendar days to return an item from the date you
                  received it.
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     Items returned after 14 days may not be eligible for a
                     refund or exchange.
                  </li>
                  <li>
                     Special conditions may apply to certain products, as
                     indicated on their product pages.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "2. Conditions for Return",
         content: (
            <>
               <p className="mb-2">
                  For a return to be accepted, the item must meet the following
                  conditions:
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     The item must be unused and in the same condition that you
                     received it.
                  </li>
                  <li>
                     It must be in the original packaging with all tags and
                     labels attached.
                  </li>
                  <li>
                     Proof of purchase (receipt or order number) is required.
                  </li>
                  <li>
                     Items that are damaged, soiled, or altered will not be
                     accepted.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "3. How to Initiate a Return",
         content: (
            <>
               <p className="mb-2">
                  To initiate a return, please follow these steps:
               </p>
               <ol className="list-decimal list-inside space-y-1">
                  <li>
                     Contact our customer service team at petnestnepal@gmail.com
                     to request a Return Authorization (RA) number.
                  </li>
                  <li>
                     Package the item securely, including the original packaging
                     and proof of purchase.
                  </li>
                  <li>
                     Clearly write the RA number on the outside of the package.
                  </li>
                  <li>
                     Ship the item to the address provided by our customer
                     service team.
                  </li>
               </ol>
               <p className="mt-2">
                  Please do not send your purchase back to the manufacturer.
               </p>
            </>
         ),
      },
      {
         title: "4. Exchanges",
         content: (
            <p>
               We only replace items if they are defective or damaged. If you
               need to exchange it for the same item, send us an email at
               petnestnepal@gmail.com and send your item to the address
               provided.
            </p>
         ),
      },
   ];

   return (
      <WidthWrapper>
         <main>
            <PolicyDisplaySection
               pageTitle="Return Policy"
               pageDescription="Learn about our return policy, including eligibility, conditions, and how to initiate a return."
               policyContent={returnPolicyContent}
            />
         </main>
      </WidthWrapper>
   );
}
