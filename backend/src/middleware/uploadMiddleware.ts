import multer from 'multer';
import path from 'path';
import fs from 'fs';


// uploadsDir 변수를 정확히 사용하여 파일 저장 위치 지정
const uploadsDir = path.join(__dirname, '..', 'uploads');

// 디렉토리가 존재하지 않는 경우 생성
const ensureUploadsDirExists = () => {
    if (!fs.existsSync(uploadsDir)){
        fs.mkdirSync(uploadsDir, { recursive: true });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        ensureUploadsDirExists(); // 업로드 디렉토리가 존재하는지 확인하고, 없으면 생성
        cb(null, uploadsDir); // uploadsDir 변수를 사용하여 파일 저장 위치 지정
    },
    filename: (req, file, cb) => {
        // 파일명을 안전하게 생성
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const extension = path.extname(file.originalname).toLowerCase();
        cb(null, `${uniqueSuffix}${extension}`);
    },
});

export const upload = multer({ storage });
