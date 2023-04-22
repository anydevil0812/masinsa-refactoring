package com.spring.masinsa.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.MemberServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MemberController {
	
	@Autowired
	MemberServiceImpl memberService;
	
	@ApiOperation(value = "1번 - 로그인&회원가입 ")
	@PostMapping("/member/new-member")
	public ResponseEntity<?> checkMember(@RequestBody JSONObject acessToken) throws ParseException {
		String token = (String) acessToken.get("token");
        String header = "Bearer " + token; // Bearer 다음에 공백 추가
        String apiURL = "https://openapi.naver.com/v1/nid/me";
        
        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("Authorization", header);
        String responseBody = get(apiURL,requestHeaders);
        
        JSONParser jsonParser = new JSONParser();
        JSONObject obj = (JSONObject) jsonParser.parse(responseBody);
        JSONObject response = (JSONObject) obj.get("response");
               
        String identifierToken = (String) response.get("id");
        String sex = (String) response.get("gender");
        String nickname = (String) response.get("nickname");
        String ageGroup = (String) response.get("age");
        String birthYear = (String) response.get("birthyear");
        
        MemberDTO memberDTO = MemberDTO.builder()
        								.nickname(nickname)
        								.sex(sex)
        								.age_group(ageGroup)
        								.birth(birthYear)
        								.token(identifierToken)
        								.build();
        Message msg = memberService.checkMember(memberDTO, identifierToken);
		
		return new ResponseEntity<>(msg, HttpStatus.OK); // 예외처리로 회원가입 실패 구현 필요
	}
	
    private static String get(String apiUrl, Map<String, String> requestHeaders){
        HttpURLConnection con = connect(apiUrl);
        try {
            con.setRequestMethod("GET");
            for(Map.Entry<String, String> header :requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }
            
            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { // 정상 호출
                return readBody(con.getInputStream());
            } else { // 에러 발생
                return readBody(con.getErrorStream());
            }
            
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }

    private static HttpURLConnection connect(String apiUrl){
        try {
            URL url = new URL(apiUrl);
            return (HttpURLConnection)url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiUrl, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiUrl, e);
        }
    }

    private static String readBody(InputStream body){
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();
            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }

            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
	
	@ApiOperation(value = "2번 - 회원 탈퇴")
	@PutMapping("/member/delete")
	public ResponseEntity<?> deleteMember(@RequestParam Long memberId) {
		MemberDTO memberDTO = memberService.deleteMember(memberId);
		if (memberDTO != null) {
			Message msg = new Message(Status.OK, "회원 탈퇴가 정상적으로 처리되었습니다.", memberDTO);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "회원 탈퇴에 실패하였습니다.", memberDTO);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	@ApiOperation(value = "3번 - 회원 정보 조회")
	@GetMapping("/member")
	public ResponseEntity<?> getMask(@RequestParam Long memberId) {
		MemberDTO memberDTO = memberService.getMember(memberId); 
		if (memberDTO != null) {
			Message msg = new Message(Status.OK, "회원 정보 조회가 정상적으로 실행되었습니다.", memberDTO);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "회원 정보 조회에 실패하였습니다.", memberDTO);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}
}
