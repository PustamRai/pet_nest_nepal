import { ForgotPasswordForm } from "@/components/auth/Forget-Password-Form";
import WidthWrapper from "@/components/WidthWrapper";

export default function ForgotPasswordPage() {
   return (
      <WidthWrapper>
         <div className="flex py-10 mb-40 sm:mt-18 sm:mb-48 items-center justify-center max-w-md mx-auto">
            <ForgotPasswordForm />
         </div>
      </WidthWrapper>
   );
}
