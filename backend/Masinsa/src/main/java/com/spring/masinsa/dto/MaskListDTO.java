package com.spring.masinsa.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MaskListDTO {
	
	private String name;
	private String size;
	private Long price;
	private String blockingIndex;
	private String thumbnail;
	private Float avgScore;
	
}
