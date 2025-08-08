import { SignupForm } from "@/components/auth/SignupForm";
import WidthWrapper from "@/components/WidthWrapper";
import React from "react";

function SignupPage() {
   return (
      <WidthWrapper>
         <div className="flex py-10 sm:mt-10 sm:mb-10 items-center justify-center max-w-md mx-auto">
            <SignupForm />
         </div>
      </WidthWrapper>
   );
}

export default SignupPage;
