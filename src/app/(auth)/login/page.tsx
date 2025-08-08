import { LoginForm } from "@/components/auth/LoginForm";
import WidthWrapper from "@/components/WidthWrapper";

export default function LoginPage() {
   return (
      <WidthWrapper>
         <div className="flex py-10 mt-6 mb-24 sm:mt-10 sm:mb-32 items-center justify-center max-w-md mx-auto">
            <LoginForm />
         </div>
      </WidthWrapper>
   );
}
