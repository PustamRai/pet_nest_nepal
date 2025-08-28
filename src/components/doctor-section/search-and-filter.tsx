"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

interface SearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedSpecialty: string | null;
  setSelectedSpecialty: (specialty: string | null) => void;
}

export function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  selectedSpecialty,
  setSelectedSpecialty,
}: SearchAndFilterProps) {
  const specialties = ["Small Animal Veterinarian", "Exotic Animal Specialist"];

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search doctors by name or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-input border-border focus:ring-ring"
        />
      </div>

      {/* Filter Options */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">
            Specialties:
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedSpecialty === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedSpecialty(null)}
            className="h-8"
          >
            All
          </Button>
          {specialties.map((specialty) => (
            <Button
              key={specialty}
              variant={selectedSpecialty === specialty ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSpecialty(specialty)}
              className="h-8"
            >
              {specialty}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
