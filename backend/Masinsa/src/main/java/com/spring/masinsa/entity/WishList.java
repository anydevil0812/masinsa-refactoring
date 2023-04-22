package com.spring.masinsa.entity;

import java.util.HashMap;

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
import javax.persistence.Table;

import com.spring.masinsa.dto.WishListDTO;

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
@Table(name="wishlist")
public class WishList {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "wishlist_id")
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="mask_id")
	private Mask mask;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="member_id")
	private Member member;
	
	@Enumerated(EnumType.STRING)
	private Deletion deletion;
	
	// Entity -> DTO 변환
	public static WishListDTO entityToDTO(WishList wishList) {
		WishListDTO wishListDTO = WishListDTO.builder()
											.id(wishList.getId())
											.maskId(wishList.getMask().getId())
											.memberId(wishList.getMember().getId())
											.maskName(wishList.getMask().getName())
											.thumbnail(wishList.getMask().getThumbnail())
											.price(wishList.getMask().getPrice())
											.nickName(wishList.getMember().getNickname())
											.soldout(wishList.getMask().getSoldout())
											.build();			
		return wishListDTO;
	}
	
	public void deleteWishList() {
		this.deletion = Deletion.Y;
	}
	
	public void restoreWishList() {
		this.deletion = Deletion.N;
	}
	
}
