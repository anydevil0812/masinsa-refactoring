package com.spring.masinsa.entity;

import lombok.Getter;

@Getter
public enum Deletion {
	Y("삭제"), N("유지");
	
	private String deletion;
	
	Deletion(String deletion) {
		this.deletion = deletion;
	}
	
}
