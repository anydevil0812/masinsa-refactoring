package com.spring.masinsa.entity;

import lombok.Getter;

@Getter
public enum ReviewType {
	member("마신사 회원 리뷰"), naver("네이버 리뷰");
	
	private String reviewType;
	
	ReviewType(String reviewType) {
		this.reviewType = reviewType;
	}
}
