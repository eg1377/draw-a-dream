import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import Image from './models/Image'; // Image 모델 불러오기, 경로 확인 필요

const app = express();
const PORT = 3001;

// MongoDB 연결
mongoose.connect('mongodb://localhost:27017/draw', {
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const uploadsDir = path.join(__dirname, 'uploads');

// uploads 디렉토리가 없으면 생성
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 정적 파일 제공을 위한 경로 설정
app.use('/uploads', express.static(uploadsDir));

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름 충돌 방지
  }
});

const upload = multer({ storage });

// 이미지 업로드 및 메타데이터 저장 라우트
app.post('/upload', upload.single('image'), async (req, res) => {
  const { title, description, ingredient } = req.body;
  const imagePath = req.file?.path;

  if (!imagePath) {
    return res.status(400).send('File upload failed');
  }

  try {
    const newImage = new Image({
      title,
      description,
      ingredient,
      imagePath: `/uploads/${path.basename(imagePath)}` // 상대 경로 저장
    });
    await newImage.save(); // MongoDB에 저장
    res.json({ message: 'File uploaded successfully', data: newImage });
  } catch (error) {
    console.error('Error saving image metadata:', error);
    res.status(500).send('Server error');
  }
});

// 기본 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find(); // Mongoose를 사용하여 이미지 데이터 조회
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).send('Server error');
  }
});
