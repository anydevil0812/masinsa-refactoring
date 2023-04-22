package com.spring.masinsa.entity;

import lombok.Getter;

@Getter
public enum ImageType {
	slide("슬라이드 이미지"), detail("상세 이미지");
	
	private String imageType;
	
	ImageType(String imageType) {
		this.imageType = imageType;
	}
}
