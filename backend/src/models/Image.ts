// /models/Image.ts
import mongoose, { Document } from 'mongoose';

interface IImage extends Document {
  title: string;
  description: string;
  ingredient: string;
  imagePath: string;
}

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredient: { type: String, required: true },
  imagePath: { type: String, required: true },
});

const Image = mongoose.model<IImage>('Image', imageSchema);
export default Image;
