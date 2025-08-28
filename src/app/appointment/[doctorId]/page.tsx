"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Star, GraduationCap } from "lucide-react";
import { doctors } from "@/data/doctor.db";
import type { Doctor } from "@/data/doctor.db";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";

// axios create
const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default function AppointmentPage() {
  const params = useParams();
  const router = useRouter();
  const doctorId = params.doctorId as string;

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [formData, setFormData] = useState({
    petOwnerName: "",
    petName: "",
    petType: "",
    phoneNumber: "",
    email: "",
    reason: "",
  });

  const createAppointmentMutation = useMutation({
    mutationFn: async (appointmentData: unknown) => {
      const response = await API.post("/api/appointments", appointmentData);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Appointment booked successfully!");
      console.log("Appointment booking successful:", data);
      router.push("/");
    },
    onError: (error: unknown) => {
      const axiosError = error as AxiosError<{ error?: string }>;

      const errorMessage =
        axiosError.response?.data?.error ||
        axiosError.message ||
        "Failed to book appointment";
      toast.error(errorMessage);
      console.error("Appointment booking failed:", axiosError);
    },
  });

  useEffect(() => {
    const foundDoctor = doctors.find((d) => d.id === doctorId);
    if (foundDoctor) {
      setDoctor(foundDoctor);
    } else {
      router.push("/");
    }
  }, [doctorId, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedTimeSlot || !doctor) {
      alert("Please select a date and time slot");
      return;
    }

    const appointmentData = {
      ...formData,
      doctorId: doctor.id,
      doctorName: doctor.name,
      appointmentDate: selectedDate,
      timeSlot: selectedTimeSlot,
    };

    console.log("appointment data: ", appointmentData);

    createAppointmentMutation.mutate(appointmentData);

    // try {
    //   const response = await fetch("/api/appointments", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(appointmentData),
    //   });

    //   if (response.ok) {
    //     alert("Appointment booked successfully!");
    //     router.push("/");
    //   } else {
    //     alert("Failed to book appointment. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error booking appointment:", error);
    //   alert("An error occurred. Please try again.");
    // }
  };

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/doctor")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Doctors
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Information */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-balance">
                      {doctor.name}
                    </CardTitle>
                    <p className="text-primary font-medium text-pretty">
                      {doctor.specialization}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{doctor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{doctor.experience} years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm text-pretty">
                  {doctor.description}
                </p>

                <div>
                  <h4 className="text-sm font-medium text-card-foreground mb-2">
                    Qualifications
                  </h4>
                  <div className="space-y-1">
                    {doctor.qualifications.map((qualification, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <GraduationCap className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        <span className="text-pretty">{qualification}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Consultation Fee
                  </span>
                  <p className="text-lg font-bold text-primary">
                    NPR {doctor.consultationFee.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-balance">
                  Book Appointment with {doctor.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Pet Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Pet Owner Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="petOwnerName">Your Name *</Label>
                        <Input
                          id="petOwnerName"
                          value={formData.petOwnerName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              petOwnerName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phoneNumber">Phone Number *</Label>
                        <Input
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNumber: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pet Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Pet Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="petName">Pet Name *</Label>
                        <Input
                          id="petName"
                          value={formData.petName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              petName: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="petType">Pet Type *</Label>
                        <Select
                          value={formData.petType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, petType: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select pet type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dog">Dog</SelectItem>
                            <SelectItem value="cat">Cat</SelectItem>
                            <SelectItem value="bird">Bird</SelectItem>
                            <SelectItem value="rabbit">Rabbit</SelectItem>
                            <SelectItem value="hamster">Hamster</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      Appointment Details
                    </h3>

                    <div>
                      <Label>Select Date *</Label>
                      <div className="mt-2">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          className="rounded-md border border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Available Time Slots *</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                        {doctor.timeSlots.map((slot) => (
                          <Button
                            key={slot}
                            type="button"
                            variant={
                              selectedTimeSlot === slot ? "default" : "outline"
                            }
                            size="sm"
                            onClick={() => setSelectedTimeSlot(slot)}
                            className="text-sm"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {slot}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reason">Reason for Visit *</Label>
                      <Textarea
                        id="reason"
                        placeholder="Please describe your pet's condition or reason for the visit..."
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                        required
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  {selectedDate && selectedTimeSlot && (
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">
                        Appointment Summary
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>
                          <strong>Doctor:</strong> {doctor.name}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {selectedDate.toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Time:</strong> {selectedTimeSlot}
                        </p>
                        <p>
                          <strong>Fee:</strong> NPR{" "}
                          {doctor.consultationFee.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => router.push("/")}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
