import mongoose, { Schema } from "mongoose";

export interface IAppointment {
  petOwnerName: string;
  petName: string;
  petType: string;
  phoneNumber: string;
  email: string;
  doctorId: string;
  doctorName: string;
  appointmentDate: Date;
  timeSlot: string;
  reason: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    petOwnerName: {
      type: String,
      required: [true, "Pet owner name is required"],
      trim: true,
    },
    petName: {
      type: String,
      required: [true, "Pet name is required"],
      trim: true,
    },
    petType: {
      type: String,
      required: [true, "Pet type is required"],
      enum: ["dog", "cat", "bird", "rabbit", "hamster", "other"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    doctorId: {
      type: String,
      required: [true, "Doctor ID is required"],
    },
    doctorName: {
      type: String,
      required: [true, "Doctor name is required"],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment date is required"],
    },
    timeSlot: {
      type: String,
      required: [true, "Time slot is required"],
    },
    reason: {
      type: String,
      required: [true, "Reason for appointment is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);
