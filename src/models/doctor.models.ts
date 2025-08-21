import mongoose, { Schema } from "mongoose";
import { IDoctor } from "@/types/doctor.types";

const doctorSchema = new Schema<IDoctor>({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availableDays: {
    type: [String],
    required: true,
  },
  availableTime: {
    type: String,
    required: true,
  },
});

const Doctor =
  mongoose.models.Doctor || mongoose.model<IDoctor>("Doctor", doctorSchema);

export default Doctor;
