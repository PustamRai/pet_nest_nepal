"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { ContactInfo } from "@/types/contact.types";

interface ContactSectionProps {
   title?: string;
   subtitle?: string;
   contactInfo: ContactInfo;
   mapUrl?: string;
}

export default function ContactSection({
   title,
   subtitle,
   contactInfo,
   mapUrl,
}: ContactSectionProps) {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [focusedField, setFocusedField] = useState<string | null>(null);

   const handleInputChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      setFormData((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
         setIsSubmitted(false);
         setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
         });
      }, 3000);
   };

   return (
      <section className="py-8 sm:py-12">
         <div className="container mx-auto px-3 xs:px-4 sm:px-6 max-w-7xl">
            {/* Header */}
            <div className="text-center mb-12 xs:mb-16 animate-fade-in">
               <h2 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 font-serif leading-tight">
                  {title}
               </h2>
               <p className="text-base xs:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                  {subtitle}
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12 lg:gap-16">
               {/* Contact Form */}
               <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-slide-in-left hover:shadow-2xl transition-shadow duration-500">
                  <CardContent className="p-4 xs:p-6 sm:p-8">
                     <h3 className="text-xl xs:text-2xl font-semibold text-gray-900 mb-4 xs:mb-6 font-serif">
                        Send us a Message
                     </h3>

                     {!isSubmitted ? (
                        <form
                           onSubmit={handleSubmit}
                           className="space-y-4 xs:space-y-6"
                        >
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                              <div className="group relative">
                                 <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("name")}
                                    required
                                    className={`transition-all duration-300 focus:scale-105 focus:shadow-md border-gray-200 focus:border-blue-400 text-sm xs:text-base ${
                                       focusedField === "name"
                                          ? "ring-2 ring-blue-200"
                                          : ""
                                    }`}
                                 />
                              </div>
                              <div className="group relative">
                                 <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("email")}
                                    required
                                    className={`transition-all duration-300 focus:scale-105 focus:shadow-md border-gray-200 focus:border-blue-400 text-sm xs:text-base ${
                                       focusedField === "email"
                                          ? "ring-2 ring-blue-200"
                                          : ""
                                    }`}
                                 />
                              </div>
                           </div>

                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                              <div className="group relative">
                                 <Input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("phone")}
                                    onBlur={() => setFocusedField(null)}
                                    className={`transition-all duration-300 focus:scale-105 focus:shadow-md border-gray-200 focus:border-blue-400 text-sm xs:text-base ${
                                       focusedField === "phone"
                                          ? "ring-2 ring-blue-200"
                                          : ""
                                    }`}
                                 />
                              </div>
                              <div className="group">
                                 <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("service")}
                                    onBlur={() => setFocusedField(null)}
                                    className={`w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 focus:scale-105 focus:shadow-md bg-white text-sm xs:text-base ${
                                       focusedField === "service"
                                          ? "ring-2 ring-blue-200"
                                          : ""
                                    }`}
                                 >
                                    <option value="">Select a Service</option>
                                    <option value="grooming">
                                       🛁 Grooming
                                    </option>
                                    <option value="training">
                                       🎓 Training
                                    </option>
                                    <option value="petshotel">
                                       🏨 Pet Hotel
                                    </option>
                                    <option value="daycamp">
                                       🎾 Doggie Day Camp
                                    </option>
                                    <option value="other">❓ Other</option>
                                 </select>
                              </div>
                           </div>

                           <div className="group relative">
                              <Textarea
                                 name="message"
                                 placeholder="Tell us about your pet and how we can help..."
                                 value={formData.message}
                                 onChange={handleInputChange}
                                 onFocus={() => setFocusedField("message")}
                                 required
                                 rows={4}
                                 className={`transition-all duration-300 focus:scale-105 focus:shadow-md border-gray-200 focus:border-blue-400 resize-none text-sm xs:text-base ${
                                    focusedField === "message"
                                       ? "ring-2 ring-blue-200"
                                       : ""
                                 }`}
                              />
                           </div>

                           <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 xs:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 text-sm xs:text-base"
                           >
                              {isSubmitting ? (
                                 <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                 </div>
                              ) : (
                                 <div className="flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                    Send Message
                                 </div>
                              )}
                           </Button>
                        </form>
                     ) : (
                        <div className="text-center py-6 xs:py-8 animate-fade-in relative">
                           <CheckCircle className="w-12 xs:w-16 h-12 xs:h-16 text-green-500 mx-auto mb-3 xs:mb-4 animate-bounce" />
                           <h4 className="text-lg xs:text-xl font-semibold text-gray-900 mb-2">
                              Message Sent!
                           </h4>
                           <p className="text-gray-600 text-sm xs:text-base">
                              Thank you for contacting us. We&apos;ll get back
                              to you soon!
                           </p>
                           <div className="absolute inset-0 pointer-events-none">
                              <div
                                 className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                                 style={{ animationDelay: "0.5s" }}
                              />
                              <div
                                 className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"
                                 style={{ animationDelay: "1s" }}
                              />
                              <div
                                 className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping"
                                 style={{ animationDelay: "1.5s" }}
                              />
                           </div>
                        </div>
                     )}
                  </CardContent>
               </Card>

               {/* Contact Information */}
               <div className="space-y-6 xs:space-y-8 animate-slide-in-right">
                  {/* Contact Details */}
                  <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                     <CardContent className="p-4 xs:p-6 sm:p-8">
                        <h3 className="text-xl xs:text-2xl font-semibold text-gray-900 mb-4 xs:mb-6 font-serif">
                           Contact Information
                        </h3>

                        <div className="space-y-4 xs:space-y-6">
                           <div className="flex items-start gap-3 xs:gap-4 group cursor-pointer">
                              <div className="p-2 xs:p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                                 <MapPin className="w-4 xs:w-5 h-4 xs:h-5 text-blue-600" />
                              </div>
                              <div className="min-w-0">
                                 <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300 text-sm xs:text-base">
                                    Address
                                 </h4>
                                 <p className="text-gray-600 leading-relaxed text-sm xs:text-base">
                                    {contactInfo.address}
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3 xs:gap-4 group cursor-pointer">
                              <div className="p-2 xs:p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                                 <Phone className="w-4 xs:w-5 h-4 xs:h-5 text-green-600" />
                              </div>
                              <div className="min-w-0">
                                 <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300 text-sm xs:text-base">
                                    Phone
                                 </h4>
                                 <p className="text-gray-600 text-sm xs:text-base">
                                    {contactInfo.phone}
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3 xs:gap-4 group cursor-pointer">
                              <div className="p-2 xs:p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                                 <Mail className="w-4 xs:w-5 h-4 xs:h-5 text-purple-600" />
                              </div>
                              <div className="min-w-0">
                                 <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300 text-sm xs:text-base">
                                    Email
                                 </h4>
                                 <p className="text-gray-600 text-sm xs:text-base break-all">
                                    {contactInfo.email}
                                 </p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3 xs:gap-4 group">
                              <div className="p-2 xs:p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                                 <Clock className="w-4 xs:w-5 h-4 xs:h-5 text-orange-600" />
                              </div>
                              <div className="min-w-0">
                                 <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-300 text-sm xs:text-base">
                                    Hours
                                 </h4>
                                 <div className="text-gray-600 space-y-1">
                                    {contactInfo.hours.map((hour, index) => (
                                       <p
                                          key={index}
                                          className="hover:text-gray-900 transition-colors duration-200 text-sm xs:text-base"
                                       >
                                          {hour}
                                       </p>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Map */}
                  {mapUrl && (
                     <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                        <CardContent className="p-0 overflow-hidden">
                           <div className="aspect-video xs:aspect-video bg-gray-200 relative group">
                              <iframe
                                 src={mapUrl}
                                 width="100%"
                                 height="100%"
                                 style={{ border: 0 }}
                                 allowFullScreen
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 className="rounded-lg transition-all duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300 pointer-events-none rounded-lg" />
                           </div>
                        </CardContent>
                     </Card>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
