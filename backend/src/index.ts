import express from 'express';

// Express 애플리케이션 생성
const app = express();
const PORT = 3001; // 서버 포트 번호 설정

app.use(express.json()); // JSON 요청 본문 파싱을 위해 미들웨어 추가

// 간단한 루트 라우트
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
