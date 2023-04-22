package com.spring.masinsa.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicUpdate;

import com.spring.masinsa.dto.MaskDTO;
import com.spring.masinsa.dto.MaskListDTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@DynamicUpdate
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString(exclude = {"images", "wishlist", "reviews"})
@Builder
public class Mask {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "mask_id")
	private Long id;
	
	@Column(name = "mask_name")
	private String name;
	
	private String size;
	
	private Long price;
	
	private String blockingIndex;
	
	private String shape;
	
	@Column(name = "mask_option")
	private String option;
	
	@Column(name = "thumbnail_image_url")
	private String thumbnail;
	
	private String purchaseUrl;
	
	@Column(name = "click_num")
	private Long click;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "soldout_status")
	private SoldoutStatus soldout; 
	
	private Float avgScore;
	
	@Enumerated(EnumType.STRING)
	private Deletion deletion;
	
	@OneToMany(mappedBy = "mask", cascade = CascadeType.ALL)
	private List<Image> images = new ArrayList<Image>();
	
	@OneToMany(mappedBy = "mask", cascade = CascadeType.ALL)
	private List<WishList> wishlist = new ArrayList<WishList>();
	
	@OneToMany(mappedBy = "mask", cascade = CascadeType.ALL)
	private List<Review> reviews = new ArrayList<Review>();
	
	// Entity -> DTO 변환
	public static MaskDTO entityToDTO(Mask mask) {
		MaskDTO maskDTO = MaskDTO.builder()
								 .id(mask.getId())
								 .name(mask.getName())
								 .size(mask.getSize())
								 .price(mask.getPrice())
								 .blockingIndex(mask.getBlockingIndex())
								 .shape(mask.getShape())
								 .option(mask.getOption())
								 .thumbnail(mask.getThumbnail())
								 .purchaseUrl(mask.getPurchaseUrl())
								 .click(mask.getClick())
								 .soldout(mask.getSoldout())
								 .avgScore(mask.getAvgScore())
								 .build();
		return maskDTO;
	}
	
	// Entity -> DTO 변환
	public static MaskListDTO entityToListDTO(Mask mask) {
		MaskListDTO maskListDTO = MaskListDTO.builder()
								 .name(mask.getName())
								 .size(mask.getSize())
								 .price(mask.getPrice())
								 .blockingIndex(mask.getBlockingIndex())
								 .thumbnail(mask.getThumbnail())
								 .avgScore(mask.getAvgScore())
								 .build();
		return maskListDTO;
	}
	
	public void updateClick() {
		this.click = click + 1;
	}
	
	public void updateSoldout(SoldoutStatus soldout) {
		this.soldout = soldout; // @DynamicUpdate 적용으로 나머지 컬럼의 데이터는 보존되는 동시에 soldout만 변경이 가능
	}
	
	public void deleteMask() {
		this.deletion = Deletion.Y;
	}
	
}
