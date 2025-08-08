"use client";

import { useState } from "react";
import Link from "next/link";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ForgotPasswordForm() {
   const [email, setEmail] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
         toast.error("Please enter your email address.");
         return;
      }

      setIsSubmitting(true);

      toast.success("password reset link has been sent.");
      setEmail("");
      setIsSubmitting(false);
   };

   return (
      <Card className="w-full max-w-md mx-auto">
         <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
               Forgot Password?
            </CardTitle>
            <CardDescription>
               Enter your email below to receive a password reset link.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="m@gmail.com"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     disabled={isSubmitting}
                  />
               </div>
               <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Reset Link"}
               </Button>
            </form>
            <div className="mt-4 text-center text-sm">
               <Link href="/login" className="underline">
                  Back to Login
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
