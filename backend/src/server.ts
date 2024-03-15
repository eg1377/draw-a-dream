import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3001;

const uploadsDir = path.join(__dirname, 'uploads');


// uploads 디렉토리가 없으면 생성
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// 정적 파일 제공을 위한 경로 설정
app.use('/uploads', express.static(uploadsDir));

// Multer 설정: 이미지를 'uploads/' 디렉토리에 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름 충돌 방지
  }
});

const upload = multer({ storage });

// 이미지 업로드 라우트
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'File uploaded successfully', path: req.file?.path ?? "File path not available" });

});

// 기본 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 업로드된 파일을 제공하기 위한 정적 파일 서버 설정
app.use('/uploads', express.static('uploads'));

// 파일 업로드 라우트 정의
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file || !req.file.path) {
        return res.status(400).json({ message: 'No file uploaded or file path not available.' });
    }
    res.json({ message: 'File uploaded successfully', path: req.file.path });
});


// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
