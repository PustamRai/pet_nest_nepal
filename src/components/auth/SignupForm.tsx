// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//    Card,
//    CardContent,
//    CardDescription,
//    CardHeader,
//    CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";
// import { toast } from "sonner";

// export function SignupForm() {
//    const [name, setName] = useState("");
//    const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");
//    const [confirmPassword, setConfirmPassword] = useState("");
//    const [showPassword, setShowPassword] = useState(false);
//    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//    const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault();
//       if (!name || !email || !password || !confirmPassword) {
//          toast.error("Please fill in all fields.");
//          return;
//       }
//       if (password !== confirmPassword) {
//          toast.error("Passwords do not match.");
//          return;
//       }

//       toast.success(
//          "Signup successful! (This is a demo, no actual signup occurred)"
//       );
//       console.log("Signup attempt:", { name, email, password });
//    };

//    return (
//       <Card className="w-full">
//          {" "}
//          {/* Responsive classes: w-full, max-w-md, mx-auto */}
//          <CardHeader className="text-center">
//             <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
//             <CardDescription>
//                Create your account to get started.
//             </CardDescription>
//          </CardHeader>
//          <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                {" "}
//                {/* space-y-4 for vertical spacing */}
//                <div className="grid gap-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input
//                      id="name"
//                      type="text"
//                      placeholder="John Doe"
//                      required
//                      value={name}
//                      onChange={(e) => setName(e.target.value)}
//                   />
//                </div>
//                <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                      id="email"
//                      type="email"
//                      placeholder="m@example.com"
//                      required
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                   />
//                </div>
//                <div className="grid gap-2">
//                   <Label htmlFor="password">Password</Label>
//                   <div className="relative">
//                      {" "}
//                      {/* relative for absolute positioning of toggle button */}
//                      <Input
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                      />
//                      <Button
//                         type="button"
//                         variant="ghost"
//                         size="sm"
//                         className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                         onClick={() => setShowPassword((prev) => !prev)}
//                      >
//                         {showPassword ? (
//                            <EyeOff className="h-4 w-4 text-gray-500" />
//                         ) : (
//                            <Eye className="h-4 w-4 text-gray-500" />
//                         )}
//                         <span className="sr-only">
//                            {showPassword ? "Hide password" : "Show password"}
//                         </span>
//                      </Button>
//                   </div>
//                </div>
//                <div className="grid gap-2">
//                   <Label htmlFor="confirm-password">Confirm Password</Label>
//                   <div className="relative">
//                      {" "}
//                      {/* relative for absolute positioning of toggle button */}
//                      <Input
//                         id="confirm-password"
//                         type={showConfirmPassword ? "text" : "password"}
//                         required
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                      />
//                      <Button
//                         type="button"
//                         variant="ghost"
//                         size="sm"
//                         className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                         onClick={() => setShowConfirmPassword((prev) => !prev)}
//                      >
//                         {showConfirmPassword ? (
//                            <EyeOff className="h-4 w-4 text-gray-500" />
//                         ) : (
//                            <Eye className="h-4 w-4 text-gray-500" />
//                         )}
//                         <span className="sr-only">
//                            {showConfirmPassword
//                               ? "Hide confirm password"
//                               : "Show confirm password"}
//                         </span>
//                      </Button>
//                   </div>
//                </div>
//                <Button type="submit" className="w-full">
//                   {" "}
//                   Sign Up
//                </Button>
//             </form>
//             <div className="mt-4 text-center text-sm">
//                Already have an account?{" "}
//                <Link href="/login" className="underline">
//                   Login
//                </Link>
//             </div>
//          </CardContent>
//       </Card>
//    );
// }
