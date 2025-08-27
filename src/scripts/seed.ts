import { connectDB } from "@/lib/db";
import { Image } from "@/models/image.models";

async function seedData() {
  await connectDB();

  await Image.insertMany([
    { url: "/dogandkitten.webp?height=400&width=800" },
    { url: "/cat2.jpg" },
    { url: "/dog1.jpg" },
    { url: "/cat1.jpg?height=400&width=800" },
    { url: "/dog2.jpg?height=400&width=800" },
  ]);

  console.log("seed image data: ");
  console.log("Image inserted successfully in DB.");

  process.exit(0);
}

seedData().catch((err) => {
  console.error("seeding failed!!!", err);
  process.exit(1);
});
