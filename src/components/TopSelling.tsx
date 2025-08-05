import React from "react";
import { CardComponents } from "./CardComponents";
import { Product } from "@/types/product.types";

const TopSellingProducts: Product[] = [
   {
      id: 1,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Applod Yak & Roll Peanut Butter & Banana Yak Chew...",
      brand: "Applod",
      originalPrice: "₹249",
      discountedPrice: "₹236",
      discountPercent: "-5%",
      sizes: [],
   },
   {
      id: 2,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Furpro Lilly of the Lake Cologne for Dogs - 100ml...",
      brand: "Furpro",
      originalPrice: "₹599",
      discountedPrice: "₹479",
      discountPercent: "-20%",
      sizes: [],
   },
   {
      id: 3,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Festive Red Dog Rakhi - Handmade with Tassel, Fabr...",
      brand: "Paper Me",
      originalPrice: "",
      discountedPrice: "₹199",
      discountPercent: "",
      sizes: [],
   },
   {
      id: 4,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Furpro Self-Cleaning Slicker Brush For Dogs...",
      brand: "Furpro",
      originalPrice: "₹899",
      discountedPrice: "₹764",
      discountPercent: "-15%",
      sizes: [],
   },
   {
      id: 5,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Furpro Self-Cleaning Slicker Brush For Dogs...",
      brand: "Furpro",
      originalPrice: "₹899",
      discountedPrice: "₹764",
      discountPercent: "-15%",
      sizes: [],
   },
   {
      id: 6,
      promo: "Extra 4% off on orders above NRS 2499",
      image: "/food2.webp",
      title: "Furpro Self-Cleaning Slicker Brush For Dogs...",
      brand: "Furpro",
      originalPrice: "₹899",
      discountedPrice: "₹764",
      discountPercent: "-15%",
      sizes: [],
   },
];

function TopSelling() {
   return (
      <div className="py-6 sm:py-8 mx-auto">
         <CardComponents products={TopSellingProducts} title="Top Selling" />
      </div>
   );
}

export default TopSelling;
