"use client";

import { LoginForm } from "./login-form";

interface LoginSectionProps {
   title?: string;
   subtitle?: string;
   imageUrl?: string;
   imageAlt?: string;
}

export function LoginSection({
   title = "Welcome Back to Pet Nest",
   subtitle,
   imageUrl = "/signup-image/dog1.jpg",
   imageAlt = "Veterinarian with happy pets in clinic",
}: LoginSectionProps) {
   return (
      <section className="lg:px-24">
         <div className="grid min-h-screen lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
               <div className="relative w-full max-w-lg lg:max-w-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
                     <img
                        src={imageUrl || "/placeholder.svg"}
                        alt={imageAlt}
                        className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                     {/* Floating elements for visual interest */}
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                     </div>
                     <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form Column */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
               <div className="w-full max-w-md space-y-6">
                  {/* Header */}
                  <div className="text-center lg:text-left space-y-4">
                     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                        {title}
                     </h1>
                     <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {subtitle}
                     </p>
                  </div>

                  {/* Form */}
                  <div className="transform hover:scale-[1.02] transition-transform duration-300">
                     <LoginForm />
                  </div>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                     <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Secure Login</span>
                     </div>
                     <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span>Quick Access</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
