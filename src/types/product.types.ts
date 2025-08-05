export type Product = {
   id: number;
   promo: string;
   image: string;
   title: string;
   brand: string;
   originalPrice?: string; // Optional
   discountedPrice: string;
   discountPercent?: string; // Optional
   sizes?: { label: string; percent: string }[]; // Optional
};