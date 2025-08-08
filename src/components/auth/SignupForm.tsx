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
import { Label } from "../ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SignupForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!name || !email || !password) {
         setMessage("Please fill in all fields.");
         return;
      }
      // Simulate signup
      setMessage("Signup successful");
      console.log("Signup attempt:", { name, email, password });
   };

   console.log("");

   return (
      <Card className="w-full max-w-md mx-auto">
         <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
            <CardDescription>
               Create your account to get started.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                     id="name"
                     type="text"
                     placeholder="John Doe"
                     required
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
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
                  <Label htmlFor="password">Password</Label>
                  <Input
                     id="password"
                     type="password"
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <Button type="submit" className="w-full bg-primary">
                  Sign Up
               </Button>
               {message && (
                  <p className="text-center text-sm text-red-500">{message}</p>
               )}
            </form>
            <div className="mt-4 text-center text-sm">
               Already have an account?{" "}
               <Link href="/login" className="underline">
                  Login
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}
