### [프로젝트 진행 중 겪은 문제점]

### **기획 및 설계 문제**

1. **[문제 내용]**<br>프로젝트 주제 선정 후 기획을 진행하였으나 뒤늦게 해당 분야에 종사하는 현직자의 조언을 들어보니 도저히 개발할 이유도 없고 현실적으로 구현 불가능한 주제라 해당 주제를 파기<br><br>**[문제 원인]**<br>팀원 모두 도메인이 부족한 분야와 관련된 주제를 선정<br><br>**[해결 방법]**<br>팀원들 모두가 익숙하고 해당 도메인 지식이 어느 정도 있는 주제(마스크)로 선정


2. **[문제 내용]**<br>
프로젝트가 원활하게 진행되지 못하고 같은 작업(DB 설계)을 반복<br><br>**[문제 원인]**<br>개발 목적에서 벗어난 기능들(ex- 결제)이 추가되고 이에 따른 유저 스토리를 먼저 고려하지 않고 DB부터 설계<br><br>**[해결 방법]**<br>멘토님께서 잡아주신 가이드라인을 토대로 다시 첫 순서인 BMC 설계부터 차근차근 진행

### **개발 문제**
**Spring**
1. **[문제 내용]**<br>Spring Boot에서 Spring Data JPA를 이용하여 Entity 정의 시에 DB에 이미 있는 컬럼이 또 다른 컬럼명으로 생성<br><br>**[문제 원인]**<br>JPA를 이용하여 컬럼명을 카멜 케이스로 작성하면 MySQL에서는 해당 컬럼명을 스네이크 케이스로 자동 변환하여 Entity 구조를 생성/수정해주는데 MySQL에서 스네이크 케이스를 지키지 않고 컬럼명을 breathability라고 입력하였음<br><br>**[해결 방법]**<br>MySQL에서 컬럼명을 breathability ⇒ breath_ability로 수정
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210240730-1729ea50-446d-481e-9838-d7f1fd9bd9a1.png" height="180"></p>

2. **[문제 내용]**<br>Image 객체의 외래키 컬럼 데이터인 maskId를 추출하고자 MyBatis에서 select문의 resultType으로 Mask 객체를 지정하니 객체 데이터가 반환되지 않고 null로만 출력<br><br>**[해결 방법]**<br>resultType 대신에 resultMap을 사용 ⇒  resultMap 정의 시 외래키 관계에 있는 컬럼은 result가 아닌 association(1:1)이나 collection(1:N)을 사용해야 하므로 mask_id는 <collection>과<id>로 나머지 컬럼들은 <result>로 입력하여 resultMap을 정의

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218633364-566a2501-78f5-44f1-abd7-7bea7acfde65.jpg" height="180"></p>
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218634167-5ae55930-9ee9-4a2b-9b9d-78212f36f7e5.jpg" height="180"></p>

3. **[문제 내용]**<br>MyBatis로 필터링에 대한 쿼리문을 다음과 같이 입력하여 실행하였더니 필터링이 제대로 실행되지 않았음<br><br>**[문제 원인]**<br>choose~when의 경우 여러 when 조건들 중에서 앞 순서의 when의 조건이 만족되어 해당 쿼리가 적용되면 뒤의 조건들은 무시된 채 쿼리문이 실행<br><br>**[해결 방법]**<br>if문을 활용하여 다음과 같이 입력하였더니 해결

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218636911-d6c7b950-d64d-4a1b-ba2b-6ce3a55478fa.jpg" height="180"><p>
 
4. **[문제 내용]**<br>Spring boot에서 Swagger 세팅 완료 후 서버를 실행하였는데 org.springframework.context.ApplicationContextException: Failed to start bean 'documentationPluginsBootstrapper'; nested exception is java.lang.NullPointerException이 발생하면서 서버가 실행되지 않고 종료됨<br><br>**[문제 원인]**<br>Spring boot 2.6 버전 이후에 spring.mvc.pathmatch.matching-strategy 값이 ant_apth_matcher에서 path_pattern_parser로 변경되면서 몇몇 라이브러리에서 오류가 발생<br><br>**[해결 방법]**<br>
 application.properties에 spring.mvc.pathmatch.matching-strategy=ant_path_matcher 입력하여 default값 변경하여 해결
   
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218637398-20256cda-619c-456f-a4af-ac9ce1bcbbeb.jpg" height="180"><p>

5. **[문제 내용]**<br>Spring boot로 작업 중에 DataConversionException으로 인하여 서버 에러가 발생<br><br>**[문제 원인]**<br>deletion 컬럼 정의 시 데이터 값이 2개(Y/N) 밖에 존재하지 않도록 정했기에 해당 컬럼은 Enum을 이용하여 Entity와 DTO에 정의했는데 깜빡하고 해당 컬럼에 @Enumerated(EnumType.STRING)을 적용하지 않았던 것<br><br>**[해결 방법]**<br>
@Enumerated(EnumType.STRING)를 적용하고 나니 서버가 정상적으로 실행되며 문제 해결

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210242612-a9a02d6a-baa3-4d01-8d2a-de100ed97969.png" height="240" width="650"><p>
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210242759-aff7e722-2b7d-4439-9ae5-faf49006fdaf.png" height="240" width="650"><p>

6. **[문제 내용]**<br>Spring boot로 조회 메소드에 MyBatis를 이용한 pagination 구현을 시도하였지만 MyBatis mapper.xml 파일에서 TypeException이 발생<br><br>**[문제 원인]**<br>Like문에 대한 조건 입력 시에 '%#{변수}%'으로 입력 ⇒ #{}으로 변수값을 불러올 경우 자동으로 따옴표('')가 앞뒤로 붙어서 String 형태 입력되기 때문에 문제가 발생<br><br>**[해결 방법]**<br>#을 $으로 수정함으로써 문제를 해결 ⇒ ${}으로 변수값을 불러올 경우 자동으로 해당 컬럼의 데이터 타입에 맞추어 입력되기 때문
    
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218639559-f8530aa2-de10-4a13-b5b3-f801a766ac24.jpg" height="280" width="900"><p>

7. **[문제 내용]**<br>필터링 기능을 구현한 메소드에서 IllegalArgumentException이 발생<br><br>**[문제 원인]**<br>Y와 N만 입력할 수 있도록 JPA에서 Emum으로 정의한 컬럼에 팀원들 중 한 명이 DB에 테스트 데이터를 입력할 때 Y나 N이 아닌 test라는 문자열 데이터를 DB에 저장<br><br>**[해결 방법]**<br>test ⇒ N으로 수정하여 해결
    
**MySQL**
1. **[문제 내용]**<br>찜 기능 작업 시 동일한 회원 ID와 마스크ID에 대해서 찜 데이터가 DB에 중복으로 INSERT되지 않도록 구현하기 위해서 INSERT IGNORE INTO를 사용하였으나 중복값이 입력됨<br><br>**[해결 방법]**<br>INSERT INTO ~ SELECT ~ FROM DUAL WHERE NOT EXISTS 구문을 이용하여 해결
    
<p align="center"><img src="https://user-images.githubusercontent.com/109947297/218639318-19e12a8b-b14d-46c4-8c7b-03222b4454b1.jpg" height="280"><p>

**네이버 로그인**
1. **[문제 내용]**<br>React와 Spring Boot를 이용한 네이버 로그인을 어떻게 구현해야 하는지 파악하기 어려움<br><br>**[해결 방법]**<br>네이버 개발자 공식 홈페이지에 올라와 있는 관련 내용들을 여러 번 정독하고 프론트 팀원들과 끊임없이 회의하여 다음과 같이 정리

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210244131-12aecc6f-f1db-42a1-bcf3-7de9b31f7277.jpg" height="280"><p>

2. **[문제 내용]**<br>네이버 로그인 기능 구현 중 접근 토큰이 보안상br>JSON 객체가 아닌 쿼리 스트링으로 반환 (React)<br><br>**[해결 방법]**<br>window.location.href를 이용하여 해당 url을 추출한 뒤 split을 이용해 접근 토큰에 대한 데이터만 추출하여 해결

<p align="center"><img src="https://blog.kakaocdn.net/dn/bhOSQS/btrUNV4NMDg/Hb9kfnV8OEbJQpdITD9Yd0/img.jpg" height="300" width="500"><p>

3. **[문제 내용]**<br>네이버 로그인 후 네이버 API를 이용한 회원 정보를 조회하는 요청이 계속 거절됨 (React)<br><br>**[문제 원인]**<br>BackEnd 서버에서 네이버 DB로 회원 프로필 정보 조회 api 호출 시 CORS ERROR가 발생⇒ FrontEnd 서버(localhost:3000)와 BackEnd 서버의 포트번호(localhost:8080)가 서로 달라서 네이버에서 보안상 요청을 거부하도록 설정한 것<br><br>**[해결 방법]**<br>React에서 http-proxy-middleware를 설치하여 proxy를 통한 우회 후 api 요청하여 해결

<p align="center"><img src="https://user-images.githubusercontent.com/109947297/210244513-515389bb-a709-4c34-8a01-17e3d0afbba2.jpg" height="230"><p>
    
**GCP**
1. **[문제 내용]**<br>GCP에서 프론트엔드 서버의 SSH에서는 컨테이너를 실행시킨 뒤 SSH 창을 닫아도 컨테이너 실행이 유지되어 사이트 접속 시에 코드 반영이 잘 되었는데 백엔드 서버의 SSH의 경우에는 컨테이너를 실행시킨 뒤 SSH 창을 닫고 10분 정도 지난 후 다시 사이트에 접속하면 컨테이너가 자동으로 종료되어 있어 코드 반영이 안됨<br><br>**[해결 방법]**<br>백엔드 서버의 SSH에서 Screen을 설치한 뒤 접속하여 Screen 내부에서 컨테이너를 실행하여 해결
