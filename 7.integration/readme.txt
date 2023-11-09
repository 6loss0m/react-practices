1. backend 
    1)  테스트(개발 모드)
        eclipse ctrl + f11 (스프링부트 애플리케이션 실행)

    2) 빌드(서버배포)
        # mvn -f emaillist/backend exec:exec clean package

    3) 빌드(서버배포) 테스트 
        # java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar

2. frontend

3-1. deploy : ssh 연결(ssh key 인증)
    1) Key 생성하기
        # ssh-keygen -t rsa -b 2048 -m PEM -C "gsjang0807@gmail.com"

    2) Key 생성확인
        # private key(개인키) : ~/.ssh/id_rsa
        # public key(공개키) : ~/.ssh/id_rsa.pub

    3) 공개키를 서버에 설치하기
        # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys

    4) private key 잘 저장하기
        mykey.pem파일
        
    5) 접속 테스트
        # ssh -i mykey.pem root@192.168.0.179 Mac용
        -> window는 xshell에서 접속
    6) 접속 연결
       1. ~/.ssh/environment
            =======
            PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/usr/local/poscodx2023/java/bin:/usr/local/poscodx2023/git/bin:/usr/local/poscodx2023/maven/bin:/usr/local/poscodx2023/mariadb/bin:/root/bin
       2. /etc/ssh/sshd_config
            PremitUserEnvironment yes

3-2. deploy: Publish Over SSH 플러그인(Jenkins)
 -> Xshell에서 서버주소를 알려줘서, 파일을 보내서 실행하라고
    1) Public Over SSh 플러그인 설치
    2) Dashboard > Jenkins관리 > System 
        - 실행서버(SSH server) 등록: springboot-publish-server
        - 프로젝트의 빌드 후 조치(post-build action)의 Send build artifacts over SSH 설정
          1. emaillist.jar: transfer 
          2. launch.sh: transfer + execution
    -> 실행시킬 jar파일과, 그것을 유지할 script를 같이 보냄.