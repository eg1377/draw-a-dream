import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// 서버 생성 및 기본 설정
const app = express();
const PORT = process.env.PORT || 3001; // 포트 설정

// uploads 디렉토리 설정
const uploadsDir = path.join(__dirname, '../uploads'); // 'src' 폴더 내에 있으므로 상위 폴더 지정

// uploads 디렉토리가 없으면 생성
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer 설정: 이미지를 'uploads/' 디렉토리에 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // 실제 파일 저장 위치
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름 충돌 방지
  },
});

const upload = multer({ storage });

// 정적 파일 제공을 위한 경로 설정
app.use('/uploads', express.static(uploadsDir));

// 이미지 업로드 라우트
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ message: 'File uploaded successfully', path: req.file?.path ?? "File path not available" });
});

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
