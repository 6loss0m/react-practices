ex01: js Module 번들링 하기

1. 설치 패키지
$ npm i -D express webpack webpack-cli

2. 스크립팅
 "scripts":{
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
 }

 3. 빌드(표준 스테이징이 아니기 때문에 build 써야함)
 $ npm run build

 4. 실행
 $ npm start