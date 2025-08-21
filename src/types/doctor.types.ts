export interface IDoctor {
  _id?: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  experience: number;
  location: string;
  availableDays: string[];
  availableTime: string;
}
