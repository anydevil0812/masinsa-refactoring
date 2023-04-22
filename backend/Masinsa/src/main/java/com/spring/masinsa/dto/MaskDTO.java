package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.SoldoutStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class MaskDTO {
	
	private Long id;
	private String name;
	private String size;
	private Long price;
	private String blockingIndex;
	private String shape;
	private String option;
	private String thumbnail;
	private String purchaseUrl;
	private Long click;
	private SoldoutStatus soldout; 
	private Float avgScore;
	
	// DTO -> Entity 변환
	public static Mask dtoToEntity(MaskDTO maskDTO) {
		Mask mask = Mask.builder()
						 .name(maskDTO.getName())
						 .size(maskDTO.getSize())
						 .price(maskDTO.getPrice())
						 .blockingIndex(maskDTO.getBlockingIndex())
						 .shape(maskDTO.getShape())
						 .option(maskDTO.getOption())
						 .thumbnail(maskDTO.getThumbnail())
						 .purchaseUrl(maskDTO.getPurchaseUrl())
						 .click(maskDTO.getClick())
						 .soldout(maskDTO.getSoldout())
						 .avgScore(maskDTO.getAvgScore())
						 .build();
		return mask;
	}
	
}
