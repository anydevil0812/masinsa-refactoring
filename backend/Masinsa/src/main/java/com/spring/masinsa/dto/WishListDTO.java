package com.spring.masinsa.dto;

import com.spring.masinsa.entity.SoldoutStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class WishListDTO {
	
	private Long id;
	private Long maskId;
	private Long memberId;
	private String maskName;
	private String thumbnail;
	private Long price;
	private String nickName;
	private SoldoutStatus soldout;  
	
}
