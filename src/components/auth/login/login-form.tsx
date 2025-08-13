"use client";

import type React from "react";

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
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !password) {
         toast.error("Please enter both email and password.");
         return;
      }
      toast.success("Login successful");
      console.log("Login attempt:", { email, password });
   };

   return (
      <Card className="w-full">
         <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>
               Enter your credentials to access your account.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     type="email"
                     placeholder="m@example.com"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>
                     <Link
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                     >
                        Forgot your password?
                     </Link>
                  </div>
                  <div className="relative">
                     <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                     >
                        {showPassword ? (
                           <EyeOff className="h-4 w-4 text-gray-500" />
                        ) : (
                           <Eye className="h-4 w-4 text-gray-500" />
                        )}
                        <span className="sr-only">
                           {showPassword ? "Hide password" : "Show password"}
                        </span>
                     </Button>
                  </div>
               </div>
               <Button type="submit" className="w-full">
                  Login
               </Button>
            </form>
            <div className="mt-4 text-center text-sm">
               Don&apos;t have an account?{" "}
               <Link href="/signup" className="underline">
                  Sign up
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
