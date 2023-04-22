package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.ImageType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ImageDTO {
	
	private Long id;
	private Long maskId;
	private String imageUrl;
	private ImageType imageType;
	
	// DTO -> Entity 변환
	public static Image dtoToEntity(ImageDTO imageDTO) {
		Image image = Image.builder()
							.imageUrl(imageDTO.getImageUrl())
							.imageType(imageDTO.getImageType())
							.build();
		return image;
	}
	
}
