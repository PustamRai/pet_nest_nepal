"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, GraduationCap } from "lucide-react";
import { Doctor } from "@/data/doctor.db";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push(`/appointment/${doctor.id}`);
  };

  return (
    <Card className="bg-card border-border hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-muted">
            <Image
              src={doctor.image || "/placeholder.svg"}
              alt={doctor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-card-foreground text-balance">
              {doctor.name}
            </h3>
            <p className="text-primary font-medium text-pretty">
              {doctor.specialization}
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{doctor.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{doctor.experience} years exp.</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm text-pretty">
          {doctor.description}
        </p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-2">
              Qualifications
            </h4>
            <div className="space-y-1">
              {doctor.qualifications.map((qualification, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <GraduationCap className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span className="text-pretty">{qualification}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-card-foreground mb-2">
              Available Days
            </h4>
            <div className="flex flex-wrap gap-1">
              {doctor.availableDays.map((day) => (
                <Badge key={day} variant="secondary" className="text-xs">
                  {day.slice(0, 3)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div>
              <span className="text-sm text-muted-foreground">
                Consultation Fee
              </span>
              <p className="text-lg font-bold text-primary">
                NPR {doctor.consultationFee.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleBookAppointment}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}
