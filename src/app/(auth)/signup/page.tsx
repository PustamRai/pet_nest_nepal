import { SignupSection } from "@/components/auth/signup/signup-section";
import WidthWrapper from "@/components/WidthWrapper";
import React from "react";

function SignupPage() {
   return (
      <WidthWrapper>
         <main>
            <SignupSection />
         </main>
      </WidthWrapper>
   );
}

export default SignupPage;
