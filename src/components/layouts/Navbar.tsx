"use client";

import { useState } from "react";
import {
  Search,
  Phone,
  CircleUserRound,
  ShoppingCart,
  Menu,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    name: "Cat",
    items: ["Cat Food", "Cat Toys", "Cat Accessories", "Cat Health"],
  },
  {
    name: "Dog",
    items: ["Dog Food", "Dog Toys", "Dog Accessories", "Dog Health"],
  },
  {
    name: "Small Animals",
    items: ["Rabbit", "Hamster", "Guinea Pig", "Bird"],
  },
  {
    name: "Birds",
    items: ["Bird Food", "Bird Cages", "Bird Toys", "Bird Health"],
  },
  {
    name: "Phermecy",
    items: ["Medicines", "Supplements", "First Aid", "Treatments"],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      {/* Main Navbar */}
      <nav className="bg-teal-500 text-white px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-6 h-6 bg-teal-500 rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="hidden sm:block font-mono">PetNestNepal</span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative max-w-2xl">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2 rounded-full border-0 text-gray-900 placeholder-gray-500 bg-neutral-50"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-teal-500 hover:bg-teal-600 px-3"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-5 gap-2">
            {/* Phone */}
            <div className="hidden sm:flex text-white hover:text-green-100 h-9 w-9 rounded-full cursor-pointer transition-colors">
              <Phone className="h-8 w-8" />
            </div>

            {/* User Profile */}
            <div className="hidden sm:flex text-white hover:text-green-100 h-9 w-9 rounded-full cursor-pointer transition-colors">
              <CircleUserRound className="h-8 w-8" />
            </div>

            {/* Shopping Cart */}
            <div className="relative text-white hover:text-green-100 h-9 w-9 rounded-full cursor-pointer transition-colors">
              <ShoppingCart className="h-8 w-8" />
              {/* <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                5
              </Badge> */}
            </div>

            {/* Doctor Button */}
            <Button className="hidden sm:block bg-white text-teal-600   px-4 py-2 rounded-2xl font-bold cursor-pointer hover:bg-green-100 hover:scale-105">
              Doctor
            </Button>

            {/* Mobile Menu Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-4 pr-12 py-2 rounded-full"
                    />
                    <Button
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-teal-600 hover:bg-teal-700 px-3"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-2">
                    {categories.map((category) => (
                      <DropdownMenu key={category.name}>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="justify-between w-full"
                          >
                            {category.name}
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {category.items.map((item) => (
                            <DropdownMenuItem key={item}>
                              <Link
                                href={`/${category.name.toLowerCase()}/${item
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                              >
                                {item}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ))}
                    <Link
                      href="/stores"
                      className="block py-2 px-4 hover:bg-gray-100 rounded"
                    >
                      Our Stores
                    </Link>
                  </div>

                  {/* Mobile Actions */}
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="justify-start bg-transparent"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Us
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start bg-transparent"
                    >
                      <CircleUserRound className="h-4 w-4 mr-2" />
                      My Account
                    </Button>
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      Doctor
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Category Navigation - Hidden on mobile, shown in mobile menu */}
      <div className="hidden md:block bg-gray-100 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center max-h-7 bg-green-50">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-500 hover:text-teal-600 font-bold"
                  >
                    {category.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item}>
                      <Link
                        href={`/${category.name.toLowerCase()}/${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {item}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Link
              href="/stores"
              className="text-gray-500 hover:text-teal-600 font-bold text-xs px-3 py-2 rounded transition-colors"
            >
              Our Stores
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Shown below navbar on small screens */}
      <div className="md:hidden bg-white border-b px-4 py-3">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-2 rounded-full border-gray-300"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-teal-600 hover:bg-teal-700 px-3"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
