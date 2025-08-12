import ContactSection from "@/components/contactSection/contact-section";
import { ContactInfo } from "@/types/contact.types";
import React from "react";

const contactData: ContactInfo = {
   address: "New Baneshwor, Kathmandu",
   phone: "98999*****",
   email: "hello@petservices.com",
   hours: [
      "Monday - Friday: 7:00 AM - 7:00 PM",
      "Saturday: 8:00 AM - 6:00 PM",
      "Sunday: 9:00 AM - 5:00 PM",
   ],
};

export default function ContactPage() {
   return (
      <main>
         <ContactSection
            title="Get in Touch"
            subtitle="Ready to give your pet the care they deserve? Contact us today to schedule an appointment or learn more about our services."
            contactInfo={contactData}
            mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927050714696!2d85.32951860092679!3d27.69468421903343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1755006081869!5m2!1sen!2snp"
         />
      </main>
   );
}
