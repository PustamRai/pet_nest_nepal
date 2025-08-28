"use client";

import { DoctorList } from "@/components/doctor-section/doctor-list";
import { SearchAndFilter } from "@/components/doctor-section/search-and-filter";
import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-balance">
              Book appointments with trusted veterinarians for your beloved pets
            </h2>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2 text-balance">
            Find the Perfect Veterinarian
          </h2>
          <p className="text-muted-foreground text-pretty">
            Choose from our experienced veterinarians and book your appointment
            today
          </p>
        </div>

        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
        />
        <DoctorList
          searchTerm={searchTerm}
          selectedSpecialty={selectedSpecialty}
        />
      </main>
    </div>
  );
}
