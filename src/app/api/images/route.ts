import { connectDB } from "@/lib/db";
import { Image } from "@/models/image";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const images = await Image.find({});

    return NextResponse.json(
      {
        success: true,
        data: images,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch images",
      },
      { status: 500 },
    );
  }
}
