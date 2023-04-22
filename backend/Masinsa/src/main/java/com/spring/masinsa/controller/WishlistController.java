package com.spring.masinsa.controller;

import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONArray;
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

import com.spring.masinsa.dto.WishListDTO;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;
import com.spring.masinsa.service.WishListServiceImpl;

import io.swagger.annotations.ApiOperation;

@CrossOrigin({"*"})
@RestController
public class WishlistController {
	
	@Autowired
	WishListServiceImpl wishListService;
	
	@ApiOperation(value = "20번 - 찜 등록")
	@PostMapping("/wishlist")
	public ResponseEntity<?> addWishList(@RequestBody WishListDTO ids) {
		WishListDTO wishListDTO = wishListService.addWishList(ids);
		if(wishListDTO != null) {
			Message msg = new Message(Status.OK, "찜 등록이 정상적으로 완료되었습니다.", wishListDTO);
		    return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		 Message msg = new Message(Status.OK, "이미 찜 되어있는 마스크입니다.", wishListDTO);
		 return new ResponseEntity<>(msg, HttpStatus.OK);
	}
	
	@ApiOperation(value = "21번 - 찜 목록 조회(JPA.ver)")
	@GetMapping("/wishlist")
	public ResponseEntity<List<WishListDTO>> getWishList
	(@RequestParam Long memberId, @RequestParam int page, @RequestParam int size) {
		List<WishListDTO> wishListDTO = wishListService.getAllWishList(memberId, page, size);
		return new ResponseEntity<List<WishListDTO>>(wishListDTO, HttpStatus.OK);
	}
	
	@ApiOperation(value = "21번 - 찜 목록 조회(MyBatis.ver)")
	@GetMapping("/wishlist2")
	public ResponseEntity<JSONArray> getWishList2
	(@RequestParam Long memberId, @RequestParam Long page, @RequestParam Long size) {
		JSONArray wishListDTO = wishListService.getAllWishList2(memberId, page, size);
		return new ResponseEntity<JSONArray>(wishListDTO, HttpStatus.OK);
	}
	
	
	@ApiOperation(value = "22번 - 찜 삭제/복원")
	@PutMapping("/wishlist")
	public ResponseEntity<?> setUpWishList(@RequestParam Long memberId, @RequestParam Long maskId) {
		Message msg = wishListService.setUpWishList(memberId, maskId);
		if(msg != null) {
			return new ResponseEntity<>(msg, HttpStatus.OK);
		}
		return new ResponseEntity<>(new Message(Status.OK, "해당하는 찜 상품이 존재하지 않습니다.", null), HttpStatus.OK);
	}
	
}
