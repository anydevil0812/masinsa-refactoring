package com.spring.masinsa.entity;

import lombok.Getter;

@Getter
public enum SoldoutStatus {
	Y("품절"), N("재고 있음");
	
	private String sale_status;
	
	SoldoutStatus(String status){
		this.sale_status = status;
	}
}
