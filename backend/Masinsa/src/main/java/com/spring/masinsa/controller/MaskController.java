package com.spring.masinsa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.MaskServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class MaskController {
	
	@Autowired
	MaskServiceImpl maskService;
	
	@ApiOperation(value = "4번 - Top3 마스크 정보 조회")
	@GetMapping("/mask/top3")
	public ResponseEntity<?> getTop3Mask() {
		List<MaskDTO> top3 = maskService.getTop3Mask();
		if (top3 != null) {
			Message msg = new Message(Status.OK, "Top3 마스크 정보 조회가 정상적으로 실행되었습니다.", top3);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "Top3 마스크 정보 조회에 실패하였습니다.", top3);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
	@ApiOperation(value = "6번 - 마스크 정보 조회")
	@GetMapping("/mask")
	public ResponseEntity<?> getMask(@RequestParam Long maskId) {
		MaskDTO maskDTO = maskService.getMask(maskId);
		if (maskDTO != null) {
			Message msg = new Message(Status.OK, "마스크 정보 조회가 정상적으로 실행되었습니다.", maskDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 정보 조회에 실패하였습니다.", maskDTO);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
	@ApiOperation(value = "14번 - 마스크 이미지 조회")
	@GetMapping("/mask/image")
	public ResponseEntity<?> getMaskDetailImages(@RequestParam Long maskId) {
		List<ImageDTO> imageList = maskService.getAllImages(maskId);
		if (imageList != null) {
			Message msg = new Message(Status.OK, "마스크 이미지 조회가 정상적으로 실행되었습니다.", imageList);
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		Message msg = new Message(Status.OK, "마스크 이미지 조회에 실패하였습니다.", imageList);
		return new ResponseEntity<>(msg, HttpStatus.OK);
	}
		
	@ApiOperation(value = "7번 - 마스크 품절 여부 수정")
	@PutMapping("/mask/soldout")
	public ResponseEntity<?> updateSoldout(@RequestParam Long maskId, @RequestParam String soldout) {
		MaskDTO maskDTO = maskService.updateSoldout(maskId, soldout);
		if (maskDTO != null) {
			Message msg = new Message(Status.OK, "마스크 품절여부가 정상적으로 수정되었습니다.", maskDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 품절여부 수정에 실패하였습니다.", maskDTO);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
		  } 
	
	@ApiOperation(value = "8번 - 마스크의 클릭수 1 추가")
	@PutMapping("/mask/click")
	public void updateClick(@RequestParam Long maskId) {
		maskService.updateClick(maskId);
	}
	
	@ApiOperation(value = "9번 - 마스크 삭제")
	@PutMapping("/mask/delete")
	public ResponseEntity<?> deleteMask(@RequestParam Long maskId) {
		MaskDTO maskDTO = maskService.deleteMask(maskId);
		if (maskDTO != null) {
			Message msg = new Message(Status.OK, "마스크 정보 삭제가 정상적으로 완료되었습니다.", maskDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 삭제에 실패하였습니다.", maskDTO);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	} 
	
	//api that first filters and then sorts
	//api that takes column name, column filter , size, page  and returns list of masks with pagination
	//col, order, filterCol, filter are all optional
	@ApiOperation(value = "11번 - 마스크 필터링 및 정렬")
	@GetMapping("/mask/filter/sort")
	public ResponseEntity<?> getMaskList(@RequestParam(required = false) String sortCol, 
		@RequestParam(required = false) String order,
		@RequestParam(required = false) Integer page, 
		@RequestParam(required = false) Integer size, 
		@RequestParam(required = false) String filterCol1, 
		@RequestParam(required = false) String filter1,
		@RequestParam(required = false) String filterCol2,
		@RequestParam(required = false) String filter2,
		@RequestParam(required = false) String filterCol3,
		@RequestParam(required = false) String filter3) {

		List<MaskDTO> maskList = maskService.FilterSortMaskByPage(sortCol, order, page, size, filterCol1, filter1
			, filterCol2, filter2, filterCol3, filter3);
		if (maskList != null) {
			Message msg = new Message(Status.OK, "마스크 리스트 조회가 정상적으로 실행되었습니다.", maskList);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "마스크 리스트 조회에 실패하였습니다.", maskList);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	}

	//api that searchs by keyword then sorts
	//takes keyword, sortCol, order and returns list of masks
	@ApiOperation(value = "13번 - 마스크 검색 및 정렬")
	@GetMapping("/mask/search/sort")
	public ResponseEntity<?> getMaskList(@RequestParam(required = false) String keyword, 
		@RequestParam(required = false) String sortCol, 
		@RequestParam(required = false) String order,
		@RequestParam(required = false) Integer page,
		@RequestParam(required = false) Integer size) {

		List<MaskDTO> maskList = maskService.SearchSortMask(keyword, sortCol, order, page, size);
		if (maskList != null) {
			Message msg = new Message(Status.OK, "키워드 검색을 통한 마스크 리스트 조회가 정상적으로 실행되었습니다.", maskList);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		  }
		  Message msg = new Message(Status.OK, "키워드 검색을 통한 마스크 리스트 조회에 실패하였습니다.", maskList);
		  return new ResponseEntity<>(msg, HttpStatus.OK);
	}


}
