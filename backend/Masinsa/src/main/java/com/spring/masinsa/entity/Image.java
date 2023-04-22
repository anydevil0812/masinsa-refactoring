package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.spring.masinsa.dto.ImageDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
public class Image {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "image_id")
	private Long id;
	
	private String imageUrl;
	
	@Enumerated(EnumType.STRING)
	private ImageType imageType;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="mask_id")
	private Mask mask;
	
	// Entity -> DTO 변환
	public static ImageDTO entityToDTO(Image image) {
		ImageDTO imageDTO = ImageDTO.builder()
									.id(image.getId())
									.maskId(image.getMask().getId())
									.imageUrl(image.getImageUrl())
									.imageType(image.getImageType())
									.build();
		return imageDTO;
	}
	
}
