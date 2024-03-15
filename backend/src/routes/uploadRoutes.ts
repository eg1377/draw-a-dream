import { Router } from 'express';
import { upload } from '../middleware/uploadMiddleware';

const router = Router();

// 이미지 업로드 라우트
router.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
        res.json({ message: 'File uploaded successfully', path: req.file.path });
    } else {
        res.status(400).send('No file uploaded');
    }
});

export default router;
