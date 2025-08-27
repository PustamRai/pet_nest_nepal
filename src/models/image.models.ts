import mongoose, { Schema } from "mongoose";

export interface Image {
  url: string;
}

const ImageSchema = new Schema<Image>({
  url: {
    type: String,
    required: true,
  },
});

export const Image =
  mongoose.models.image || mongoose.model<Image>("Image", ImageSchema);
