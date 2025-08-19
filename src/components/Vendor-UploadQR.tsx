"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, QrCode, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface VendorDashboardProps {
  // vendorName?: string;
  commissionRate?: number;
  platformFee?: number;
}

export default function VendorUploadQR({
  // vendorName = "Your Store",
  commissionRate = 5,
  platformFee = 2,
}: VendorDashboardProps) {
  const [qrCode, setQrCode] = useState<File | null>(null);
  const [qrCodePreview, setQrCodePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleQrCodeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setQrCode(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setQrCodePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        toast.success("QR Code Selected", {
          description: `${file.name} is ready to upload.`,
        });
      } else {
        toast.error("Invalid File Type", {
          description: "Please select an image file for your QR code.",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!qrCode) {
      toast.error("No QR Code Selected", {
        description: "Please select a QR code image first.",
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload process
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("QR Code Uploaded Successfully!", {
        description:
          "Your payment QR code has been saved to your vendor profile.",
      });
      // Reset form after successful upload
      // setQrCode(null)
      // setQrCodePreview(null)
    } catch (error) {
      toast.error("Upload Failed", {
        description:
          "There was an error uploading your QR code. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Privacy Policy & Commission Section */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Privacy Policy & Commission Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Commission & Charges
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">
                      Platform Commission
                    </span>
                    <Badge variant="secondary">{commissionRate}%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Transaction Fee</span>
                    <Badge variant="secondary">{platformFee}%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <span className="text-sm font-medium">Total Deduction</span>
                    <Badge variant="default">
                      {commissionRate + platformFee}%
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Payment Terms</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Payments processed within 3-5 business days</li>
                  <li>• Minimum payout threshold: NPR 1,000</li>
                  <li>• QR code required for digital payments</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">
                  Privacy & Data Protection
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Your payment information is encrypted and secure</li>
                  <li>• QR codes are stored securely and never shared</li>
                  <li>
                    • Transaction data is protected under Nepal&apos;s privacy
                    laws
                  </li>
                  <li>• You can update or remove your QR code anytime</li>
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Vendor Responsibilities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ensure QR code is valid and functional</li>
                  <li>• Maintain accurate product listings</li>
                  <li>• Provide quality animal care products/services</li>
                  <li>• Comply with local animal welfare regulations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* QR Code Upload Section */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5 text-primary" />
              Payment QR Code Upload
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Upload your payment QR code (eSewa, Khalti, Bank QR, etc.) to
                receive payments from customers.
              </p>

              {/* QR Code Preview */}
              <div className="mb-6">
                {qrCodePreview ? (
                  <div className="relative inline-block">
                    <Image
                      src={qrCodePreview || "/placeholder.svg"}
                      alt="QR Code Preview"
                      width={400}
                      height={400}
                      className="w-48 h-48 object-contain border-2 border-dashed border-border rounded-lg mx-auto"
                    />
                    <div className="absolute -top-2 -right-2">
                      <CheckCircle className="h-6 w-6 text-green-500 bg-background rounded-full" />
                    </div>
                  </div>
                ) : (
                  <div className="w-48 h-48 border-2 border-dashed border-border rounded-lg mx-auto flex items-center justify-center bg-muted/50">
                    <div className="text-center">
                      <QrCode className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        No QR code selected
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Upload Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={triggerFileInput}
                  variant="outline"
                  className="w-full bg-transparent"
                  disabled={isUploading}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {qrCode ? "Change QR Code" : "Select QR Code"}
                </Button>

                <Button
                  onClick={handleUpload}
                  className="w-full"
                  disabled={!qrCode || isUploading}
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Upload QR Code
                    </>
                  )}
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleQrCodeUpload}
                className="hidden"
              />
            </div>

            {/* Additional Info */}
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-2 text-sm">
                Supported Payment Methods
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div>• eSewa QR</div>
                <div>• Khalti QR</div>
                <div>• Bank QR Codes</div>
                <div>• Digital Wallets</div>
              </div>
            </div>

            <div className="bg-muted/50 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>Note:</strong> Ensure your QR code is clear and
                scannable. Customers will use this to make payments directly to
                you.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
