export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  image: string;
  rating: number;
  availableDays: string[];
  timeSlots: string[];
  consultationFee: number;
  description: string;
  qualifications: string[];
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-001",
    name: "Dr. Prithivi ",
    specialization: "Small Animal Veterinarian",
    experience: 8,
    image: "/doctor-image/prithivi.jpeg",
    rating: 4.8,
    availableDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    timeSlots: [
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ],
    consultationFee: 1500,
    description:
      "Experienced veterinarian specializing in dogs, cats, and small animals. Passionate about providing comprehensive healthcare for your beloved pets.",
    qualifications: [
      "BVSc & AH from Agriculture and Forestry University",
      "Member of Nepal Veterinary Association",
      "Certified in Pet Surgery",
    ],
  },
  {
    id: "dr-002",
    name: "Dr. Dixit",
    specialization: "Exotic Animal Specialist",
    experience: 6,
    image: "/doctor-image/dixit.jpeg",
    rating: 4.9,
    availableDays: [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    timeSlots: [
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "2:30 PM",
      "3:30 PM",
      "4:30 PM",
    ],
    consultationFee: 2000,
    description:
      "Specialist in exotic pets including birds, rabbits, hamsters, and reptiles. Dedicated to providing specialized care for unique pet companions.",
    qualifications: [
      "BVSc & AH from Tribhuvan University",
      "Advanced Training in Exotic Animal Medicine",
      "Certified Avian Veterinarian",
    ],
  },
];

export const doctors = doctorsData;
