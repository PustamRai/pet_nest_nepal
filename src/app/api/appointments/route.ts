import { type NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Appointment from "@/models/Appointment";
// import { FilterQuery } from "mongoose";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      petOwnerName,
      petName,
      petType,
      phoneNumber,
      email,
      doctorId,
      doctorName,
      appointmentDate,
      timeSlot,
      reason,
    } = body;

    // Validate required fields
    if (
      !petOwnerName ||
      !petName ||
      !petType ||
      !phoneNumber ||
      !email ||
      !doctorId ||
      !doctorName ||
      !appointmentDate ||
      !timeSlot ||
      !reason
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Check if the time slot is already booked for the same doctor and date
    const existingAppointment = await Appointment.findOne({
      doctorId,
      appointmentDate: new Date(appointmentDate),
      timeSlot,
      status: { $ne: "cancelled" },
    });

    if (existingAppointment) {
      return NextResponse.json(
        {
          error:
            "This time slot is already booked. Please choose another time.",
        },
        { status: 409 },
      );
    }

    // Create new appointment
    const appointment = new Appointment({
      petOwnerName,
      petName,
      petType,
      phoneNumber,
      email,
      doctorId,
      doctorName,
      appointmentDate: new Date(appointmentDate),
      timeSlot,
      reason,
      status: "pending",
    });

    console.log("new appointment: ", appointment);

    const savedAppointment = await appointment.save();

    return NextResponse.json(
      {
        message: "Appointment booked successfully",
        appointment: {
          id: savedAppointment._id,
          petOwnerName: savedAppointment.petOwnerName,
          petName: savedAppointment.petName,
          doctorName: savedAppointment.doctorName,
          appointmentDate: savedAppointment.appointmentDate,
          timeSlot: savedAppointment.timeSlot,
          status: savedAppointment.status,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// export async function GET(request: NextRequest) {
//   try {
//     await connectDB();

//     const { searchParams } = new URL(request.url);
//     const doctorId = searchParams.get("doctorId");
//     const date = searchParams.get("date");

//     const query: FilterQuery<Appointment> = {};

//     if (doctorId) {
//       query.doctorId = doctorId;
//     }

//     if (date) {
//       const startDate = new Date(date);
//       const endDate = new Date(date);
//       endDate.setDate(endDate.getDate() + 1);

//       query.appointmentDate = {
//         $gte: startDate,
//         $lt: endDate,
//       };
//     }

//     const appointments = await Appointment.find(query)
//       .sort({ appointmentDate: 1, timeSlot: 1 })
//       .select("-__v");

//     return NextResponse.json({ appointments }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }
