package com.spring.masinsa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.AnalysisInfoDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.AnalysisInfoServiceImpl;
import com.spring.masinsa.service.ReviewServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = {"*"})
@RestController
public class AnalysisInfoController {

  @Autowired
  AnalysisInfoServiceImpl analysisInfoService;

  @Autowired
  ReviewServiceImpl reviewService;

  @ApiOperation(value = "23번 - 마스크 분석 정보 조회")
  @GetMapping("/analysisinfo")
  public ResponseEntity<?> getAnalysisInfo(@RequestParam Long maskId) {
    AnalysisInfoDTO analysisInfo = analysisInfoService.getAnalysisInfo(maskId);
    if (analysisInfo == null) {
      Message message = new Message(Status.OK, "해당 마스크의 분석정보가 없습니다.", null);
      return new ResponseEntity<>(message, HttpStatus.OK);
    }
    Message message = new Message(Status.OK, "해당 마스크의 분석정보를 가져왔습니다.", analysisInfo);
    return new ResponseEntity<>(message, HttpStatus.OK);

  }
  
  @ApiOperation(value = "24번 - 마스크의 분석 정보 삭제")
  @DeleteMapping("/analysisinfo")
  public ResponseEntity<?> deleteAnalysisInfo(@RequestParam Long maskId) {
  //해당 마스크의 분석정보를 삭제
  if (analysisInfoService.deleteAnalysisInfo(maskId)) {
    Message message = new Message(Status.OK, "해당 마스크의 분석정보를 삭제했습니다.", null);
    return new ResponseEntity<>(message, HttpStatus.OK);
  }
  //해당 마스크의 분석정보가 없을 경우
  else {
    Message message = new Message(Status.OK, "해당 마스크의 분석정보가 없습니다.", null);
    return new ResponseEntity<>(message, HttpStatus.OK);
  } 
}
}
