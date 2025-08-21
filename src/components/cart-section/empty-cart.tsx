"use client";

import { Button } from "@/components/ui/button";
import { EmptyCartProps, Feature, TrustBadge } from "@/types/empty-cart.types";
import {
  Shield,
  Package,
  CreditCard,
  Clock,
  Users,
  Stethoscope,
  Pill,
} from "lucide-react";
import Link from "next/link";

const defaultTrustBadges: TrustBadge[] = [
  {
    icon: <Shield className="w-12 h-12 text-black" />,
    title: "Trusted brands",
  },
  {
    icon: <Package className="w-12 h-12 text-black" />,
    title: "Free returns",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-black" />,
    title: "Secure payments",
  },
];

const defaultFeatures: Feature[] = [
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: "24hr Delivery",
    subtitle: "In 24 cities",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "1,50,000+",
    subtitle: "Happy pet parents",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-green-600" />,
    title: "Complimentary vet consult",
    subtitle: "For every new member",
  },
  {
    icon: <Pill className="w-8 h-8 text-green-600" />,
    title: "Pet Pharmacy",
    subtitle: "Exclusive",
  },
];

export default function EmptyCart({
  title = "Cart",
  description = "Oops, your cart is feeling a bit light. Time to give it some love and add some goodies!",
  buttonText = "Continue shopping",
  buttonVariant = "default",
  // onContinueShopping,
  trustBadges = defaultTrustBadges,
  showTrustBadges = true,
  features = defaultFeatures,
  showFeatures = true,
  featuresBackgroundColor = "bg-green-50",
  featuresTextColor = "text-green-800",
}: EmptyCartProps) {
  // const handleContinueShopping = () => {
  //   if (onContinueShopping) {
  //     onContinueShopping();
  //   } else {
  //     router.push('/cart')
  //   }
  // };

  return (
    <div className={`min-h-screen `}>
      <div className=" mx-auto px-4 mb-4">
        {/* Main Empty Cart Section */}
        <div className="text-center py-16">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
            {title}
          </h1>

          <h3 className="text-gray-700 mt-6 mb-6">{description}</h3>
          <Link href="/">
            <Button
              // onClick={handleContinueShopping}
              variant={buttonVariant}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-medium rounded-md"
            >
              {buttonText}
            </Button>
          </Link>
        </div>

        {/* Trust Badges Section */}
        {showTrustBadges && (
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{badge.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {badge.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Section */}
        {showFeatures && (
          <div className={`${featuresBackgroundColor} py-12 rounded-lg`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto px-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4
                      className={`font-semibold text-base ${featuresTextColor}`}
                    >
                      {feature.title}
                    </h4>
                    <p className={`text-sm ${featuresTextColor} opacity-80`}>
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
