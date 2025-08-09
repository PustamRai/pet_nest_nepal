import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-blue-50 p-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
               {/* Company Info */}
               <div className="lg:col-span-1 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🏠</span>
                     </div>
                     <h3 className="font-bold text-lg text-gray-800">
                        PetNestNepal
                     </h3>
                  </div>
                  <div className="text-primary space-y-2 text-sm">
                     <p className="font-semibold">Get in touch</p>
                     <p>98639****</p>
                     <p>petnestnepal@gmail.com</p>
                  </div>
               </div>

               {/* Online Shopping */}
               <div>
                  <h4 className="font-semibold text-gray-800 mb-4">
                     ONLINE SHOPPING
                  </h4>
                  <ul className="space-y-2 text-[8px] font-bold text-gray-600">
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Dogs
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Cats
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Small Pets
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Guinea a Vet
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Dog Behavior
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Pet Pharmacy
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Explore */}
               <div>
                  <h4 className="font-semibold text-gray-800 mb-4">EXPLORE</h4>
                  <ul className="space-y-2 text-sm text-gray-600 text-[8px] font-bold">
                     <li>
                        <Link href="/about" className="hover:text-gray-800">
                           About Pet Nest Nepal
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Supertalks Clinic
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           At Home Vet Services
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Our story
                        </Link>
                     </li>
                     <li>
                        <Link href="/faq" className="hover:text-gray-800">
                           FAQs
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Blog
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Contact Us
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Supertalks Companion
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Supertalks Vet
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="font-semibold text-gray-800 mb-4">
                     QUICK LINKS
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 text-[8px] font-bold">
                     {/* <li>
                        <Link href="#" className="hover:text-gray-800">
                           My Account
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Track Your Order
                        </Link>
                     </li> */}
                     <li>
                        <Link
                           href="/privacy-policy"
                           className="hover:text-gray-800"
                        >
                           Privacy Policy
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Refund policy
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Return policy
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Terms of Service
                        </Link>
                     </li>
                     <li>
                        <Link href="#" className="hover:text-gray-800">
                           Refer and Save
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Social Media & Apps */}
               <div>
                  <div className="mb-6 flex flex-col items-center justify-center">
                     <p className="text-[8px] text-gray-600 mb-3">
                        <span className="text-orange-500 font-bold">
                           For your daily dose of happiness, follow us on
                        </span>{" "}
                        🐾
                     </p>
                     <div className="flex gap-3 justify-center lg:justify-start">
                        <Link
                           href="#"
                           className="text-blue-600 hover:text-blue-800"
                        >
                           <Instagram className="w-5 h-5" />
                        </Link>
                        <Link
                           href="#"
                           className="text-red-600 hover:text-red-800"
                        >
                           <Youtube className="w-5 h-5" />
                        </Link>
                        <Link
                           href="#"
                           className="text-blue-600 hover:text-blue-800"
                        >
                           <Facebook className="w-5 h-5" />
                        </Link>
                        <Link
                           href="#"
                           className="text-blue-700 hover:text-blue-900"
                        >
                           <Linkedin className="w-5 h-5" />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
