import { PolicyDisplaySection } from "@/components/policySection/policy-display-section";
import WidthWrapper from "@/components/WidthWrapper";
import type { PolicySection } from "@/types/policy";

export default function RefundPolicyPage() {
   const refundPolicyContent: PolicySection[] = [
      {
         title: "1. Eligibility for Refunds",
         content: (
            <>
               <p className="mb-2">
                  To be eligible for a refund, your item must be unused and in
                  the same condition that you received it. It must also be in
                  the original packaging.
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     Refunds are generally processed for products returned
                     within 14 days of purchase.
                  </li>
                  <li>
                     Perishable goods, custom-made items, and digital products
                     are non-refundable.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "2. Refund Process",
         content: (
            <>
               <p className="mb-2">
                  Once your return is received and inspected, we will send you
                  an email to notify you that we have received your returned
                  item. We will also notify you of the approval or rejection of
                  your refund.
               </p>
               <p>
                  If approved, your refund will be processed, and a credit will
                  automatically be applied to your original method of payment,
                  within a certain amount of days.
               </p>
            </>
         ),
      },
      {
         title: "3. Late or Missing Refunds",
         content: (
            <>
               <p className="mb-2">
                  If you haven’t received a refund yet, first check your bank
                  account again. Then contact your credit card company, it may
                  take some time before your refund is officially posted.
               </p>
               <p>
                  Next contact your bank. There is often some processing time
                  before a refund is posted. If you’ve done all of this and you
                  still have not received your refund yet, please contact us at
                  petnestnepal@gmail.com.
               </p>
            </>
         ),
      },
      {
         title: "4. Shipping Costs for Returns",
         content: (
            <p>
               You will be responsible for paying for your own shipping costs
               for returning your item. Shipping costs are non-refundable. If
               you receive a refund, the cost of return shipping will be
               deducted from your refund.
            </p>
         ),
      },
   ];

   return (
      <WidthWrapper>
         <main>
            <PolicyDisplaySection
               pageTitle="Refund Policy"
               pageDescription="Understand our guidelines for refunds and how to initiate a return for your purchases."
               policyContent={refundPolicyContent}
            />
         </main>
      </WidthWrapper>
   );
}
