// /routes/imageRoutes.ts
import express from 'express';
import Image from '../models/Image';
import { upload } from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { title, description, ingredient } = req.body;
    const imagePath = req.file?.path;

    if (!imagePath) {
      return res.status(400).send('No image file uploaded');
    }

    const newImage = new Image({ title, description, ingredient, imagePath });
    await newImage.save();

    res.json({ message: 'Image uploaded successfully', data: newImage });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
