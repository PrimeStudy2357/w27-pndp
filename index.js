const http = require('http');

// 서버 생성
const server = http.createServer((req, res) => {
  // 응답 헤더 설정
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 응답 본문 작성
  res.end('Hello World\n');
});

// 서버 포트 설정
const PORT = 3000;

// 서버 시작
server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}/ 에서 실행 중입니다.`);
});