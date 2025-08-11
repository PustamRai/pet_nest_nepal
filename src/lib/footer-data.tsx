import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { FooterProps } from "@/types/footer.types";

export const defaultFooterData: FooterProps = {
   companyName: "PetNestNepal",
   companyLogoText: "🏠",
   contactPhone: "98639****",
   contactEmail: "petnestnepal@gmail.com",
   onlineShoppingSections: [
      {
         title: "ONLINE SHOPPING",
         links: [
            { label: "Dogs", href: "#" },
            { label: "Cats", href: "#" },
            { label: "Small Pets", href: "#" },
            { label: "Guinea a Vet", href: "#" },
            { label: "Dog Behavior", href: "#" },
            { label: "Pet Pharmacy", href: "#" },
         ],
      },
   ],
   exploreSections: [
      {
         title: "EXPLORE",
         links: [
            { label: "Supertalks Clinic", href: "#" },
            { label: "At Home Vet Services", href: "#" },
            { label: "Our story", href: "/about" },
            { label: "FAQs", href: "/faq" },
            { label: "Blog", href: "#" },
            { label: "Contact Us", href: "#" },
            { label: "Supertalks Companion", href: "#" },
            { label: "Supertalks Vet", href: "#" },
         ],
      },
   ],
   quickLinksSections: [
      {
         title: "QUICK LINKS",
         links: [
            // { label: "My Account", href: "#" },
            // { label: "Track Your Order", href: "#" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Refund policy", href: "/refund-policy" },
            { label: "Return policy", href: "/return-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
            { label: "Refer and Save", href: "#" },
         ],
      },
   ],
   socialLinks: [
      {
         name: "Instagram",
         href: "#",
         icon: Instagram,
         colorClass: "text-blue-600 hover:text-blue-800",
      },
      {
         name: "Youtube",
         href: "#",
         icon: Youtube,
         colorClass: "text-red-600 hover:text-red-800",
      },
      {
         name: "Facebook",
         href: "#",
         icon: Facebook,
         colorClass: "text-blue-600 hover:text-blue-800",
      },
      {
         name: "LinkedIn",
         href: "#",
         icon: Linkedin,
         colorClass: "text-blue-700 hover:text-blue-900",
      },
   ],
};
