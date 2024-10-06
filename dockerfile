# 1. Node.js 공식 이미지 사용
FROM node:14

# 2. 작업 디렉토리 생성
WORKDIR /usr/src/app

# 3. 애플리케이션 소스 코드 복사
COPY index.js .

# 4. 포트 설정
EXPOSE 3000

# 5. 서버 실행 명령
CMD ["node", "index.js"]