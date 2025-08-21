import type React from "react";

export interface TrustBadge {
  icon: React.ReactNode;
  title: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface EmptyCartProps {
  // Main content
  title?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  onContinueShopping?: () => void;

  // Trust badges
  trustBadges?: TrustBadge[];
  showTrustBadges?: boolean;

  // Features section
  features?: Feature[];
  showFeatures?: boolean;
  featuresBackgroundColor?: string;
  featuresTextColor?: string;

  // Styling
  className?: string;
  containerClassName?: string;
}

// Vendor Dashboard Types
export interface VendorDashboardProps {
  vendorName?: string;
  platformName?: string;
  commissionRate?: number;
  platformFee?: number;
  minimumPayout?: number;
  processingDays?: number;
  supportedPaymentMethods?: string[];
  privacyPoints?: string[];
  vendorResponsibilities?: string[];
  onQRUpload?: (file: File) => void;
  onQRSelect?: (qrCode: string) => void;
  className?: string;
}

export interface PaymentMethod {
  name: string;
  processingTime: string;
}

export interface PrivacyPolicy {
  title: string;
  points: string[];
}
