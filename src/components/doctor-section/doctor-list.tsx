import { DoctorCard } from "./doctor-card";
import { doctorsData } from "@/data/doctor.db";

interface DoctorListProps {
  searchTerm: string;
  selectedSpecialty: string | null;
}

export function DoctorList({ searchTerm, selectedSpecialty }: DoctorListProps) {
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch =
      searchTerm === "" ||
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === null || doctor.specialization === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  if (filteredDoctors.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No doctors found matching your search criteria.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          Try adjusting your search or filter options.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}
