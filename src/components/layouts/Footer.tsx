import Link from "next/link";
import type { FooterProps, FooterSection } from "@/types/footer.types";

export default function Footer({
   companyName = "PetNestNepal",
   companyLogoText = "🏠",
   contactPhone = "9863986791",
   contactEmail = "petnestnepal@gmail.com",
   onlineShoppingSections = [],
   exploreSections = [],
   quickLinksSections = [],
   socialLinks = [],
}: FooterProps) {
   const renderSection = (section: FooterSection) => (
      <div>
         <h4 className="font-semibold text-white mb-4">{section.title}</h4>
         <ul className="space-y-2 text-sm text-gray-300">
            {section.links.map((link, i) => (
               <li key={i}>
                  <Link href={link.href} className="hover:text-white">
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );

   return (
      <footer className="bg-stone-950 p-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
               {/* Company Info */}
               <div className="lg:col-span-1 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                           {companyLogoText}
                        </span>
                     </div>
                     <h3 className="font-bold text-lg text-white">
                        {companyName}
                     </h3>
                  </div>
                  <div className="space-y-2 text-sm text-primary">
                     <p className="font-semibold">Get in touch</p>
                     <p>{contactPhone}</p>
                     <p>{contactEmail}</p>
                  </div>
               </div>

               {/* Online Shopping */}
               {onlineShoppingSections.map((section, i) => (
                  <div key={`online-shopping-${i}`}>
                     {renderSection(section)}
                  </div>
               ))}

               {/* Explore */}
               {exploreSections.map((section, i) => (
                  <div key={`explore-${i}`}>{renderSection(section)}</div>
               ))}

               {/* Quick Links */}
               {quickLinksSections.map((section, i) => (
                  <div key={`quick-links-${i}`}>{renderSection(section)}</div>
               ))}

               {/* Social Media & Apps */}
               <div>
                  <div className="mb-6 text-center lg:text-left">
                     <p className="text-sm text-gray-300 mb-3">
                        <span className="text-orange-300">
                           For your daily dose of happiness, follow us on
                        </span>{" "}
                        🐾
                     </p>
                     <div className="flex gap-3 justify-center lg:justify-start">
                        {socialLinks.map((social, i) => {
                           const IconComponent = social.icon;
                           return (
                              <Link
                                 key={i}
                                 href={social.href}
                                 className={social.colorClass}
                              >
                                 <IconComponent className="w-5 h-5" />
                              </Link>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
