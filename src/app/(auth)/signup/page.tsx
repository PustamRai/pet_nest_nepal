import { SignupForm } from "@/components/auth/SignupForm";
import React from "react";

function SignupPage() {
   return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 max-w-md mx-auto">
         <SignupForm />
      </div>
   );
}

export default SignupPage;
