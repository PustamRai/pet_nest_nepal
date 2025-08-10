import { PolicyDisplaySection } from "@/components/policySection/policy-display-section";
import type { PolicySection } from "@/types/policy";

export default function TermsOfServicePage() {
   const termsOfServiceContent: PolicySection[] = [
      {
         title: "1. Acceptance of Terms",
         content: (
            <p>
               By accessing or using the PetNestNepal website and services, you
               agree to be bound by these Terms of Service and all terms
               incorporated by reference. If you do not agree to all of these
               terms, do not use our services.
            </p>
         ),
      },
      {
         title: "2. Changes to Terms",
         content: (
            <p>
               We reserve the right to modify or update these Terms of Service
               at any time. We will notify you of any changes by posting the new
               Terms of Service on this page. Your continued use of the services
               after any such changes constitutes your acceptance of the new
               Terms of Service.
            </p>
         ),
      },
      {
         title: "3. User Accounts",
         content: (
            <>
               <p className="mb-2">
                  When you create an account with us, you must provide
                  information that is accurate, complete, and current at all
                  times. You are responsible for safeguarding the password that
                  you use to access the service and for any activities or
                  actions under your password.
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     You agree not to disclose your password to any third party.
                  </li>
                  <li>
                     You must notify us immediately upon becoming aware of any
                     breach of security or unauthorized use of your account.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "4. Products and Services",
         content: (
            <>
               <p className="mb-2">
                  All products and services listed on PetNestNepal are subject
                  to availability. We reserve the right to limit the sales of
                  our products or services to any person, geographic region, or
                  jurisdiction.
               </p>
               <ul className="list-disc list-inside space-y-1">
                  <li>
                     Prices for our products are subject to change without
                     notice.
                  </li>
                  <li>
                     We do not warrant that the quality of any products,
                     services, information, or other material purchased or
                     obtained by you will meet your expectations.
                  </li>
               </ul>
            </>
         ),
      },
      {
         title: "5. Intellectual Property",
         content: (
            <p>
               The service and its original content (excluding content provided
               by users), features, and functionality are and will remain the
               exclusive property of PetNestNepal and its licensors. Our
               trademarks and trade dress may not be used in connection with any
               product or service without the prior written consent of
               PetNestNepal.
            </p>
         ),
      },
      {
         title: "6. Limitation of Liability",
         content: (
            <p>
               In no event shall PetNestNepal, nor its directors, employees,
               partners, agents, suppliers, or affiliates, be liable for any
               indirect, incidental, special, consequential or punitive damages,
               including without limitation, loss of profits, data, use,
               goodwill, or other intangible losses, resulting from (i) your
               access to or use of or inability to access or use the service;
               (ii) any conduct or content of any third party on the service;
               (iii) any content obtained from the service; and (iv)
               unauthorized access, use or alteration of your transmissions or
               content, whether based on warranty, contract, tort (including
               negligence) or any other legal theory, whether or not we have
               been informed of the possibility of such damage, and even if a
               remedy set forth herein is found to have failed of its essential
               purpose.
            </p>
         ),
      },
      {
         title: "7. Governing Law",
         content: (
            <p>
               These Terms shall be governed and construed in accordance with
               the laws of [Your Country/State], without regard to its conflict
               of law provisions.
            </p>
         ),
      },
      {
         title: "8. Contact Information",
         content: (
            <p>
               If you have any questions about these Terms of Service, please
               contact us:
               <br />
               By email: petnestnepal@gmail.com
               <br />
               By phone: 9863986791
            </p>
         ),
      },
   ];

   return (
      <main>
         <PolicyDisplaySection
            pageTitle="Terms of Service"
            pageDescription="Please read these terms carefully before using our services. They govern your use of the PetNestNepal website and services."
            policyContent={termsOfServiceContent}
         />
      </main>
   );
}
