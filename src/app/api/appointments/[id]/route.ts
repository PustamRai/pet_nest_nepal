import { type NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import Appointment from "@/models/Appointment";
//
export async function GET(request: NextRequest) {
  return NextResponse.json("hello.");
}

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     await connectDB();

//     const appointment = await Appointment.findById(params.id).select("-__v");

//     console.log("appointment data: ", appointment);

//     if (!appointment) {
//       return NextResponse.json(
//         { error: "Appointment not found" },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(
//       {
//         success: true,
//         data: appointment,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error fetching appointment:", error);
//     return NextResponse.json(
//       {
//         success: false,
//         error: "Internal server error",
//       },
//       { status: 500 },
//     );
//   }
// }

// export async function PATCH(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     await connectDB();

//     const body = await request.json();
//     const { status } = body;

//     if (!status || !["pending", "confirmed", "cancelled"].includes(status)) {
//       return NextResponse.json({ error: "Invalid status" }, { status: 400 });
//     }

//     const appointment = await Appointment.findByIdAndUpdate(
//       params.id,
//       { status },
//       { new: true, runValidators: true },
//     ).select("-__v");

//     if (!appointment) {
//       return NextResponse.json(
//         { error: "Appointment not found" },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(
//       {
//         message: "Appointment status updated successfully",
//         appointment,
//       },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error updating appointment:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } },
// ) {
//   try {
//     await connectDB();

//     const appointment = await Appointment.findByIdAndDelete(params.id);

//     if (!appointment) {
//       return NextResponse.json(
//         { error: "Appointment not found" },
//         { status: 404 },
//       );
//     }

//     return NextResponse.json(
//       { message: "Appointment deleted successfully" },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Error deleting appointment:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 },
//     );
//   }
// }
