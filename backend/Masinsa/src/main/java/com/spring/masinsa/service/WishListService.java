package com.spring.masinsa.service;

import java.util.List;

import com.spring.masinsa.dto.WishListDTO;
import com.spring.masinsa.response.Message;

public interface WishListService {
	public WishListDTO addWishList(WishListDTO ids);
	public List<WishListDTO> getAllWishList(Long memberId, int page, int size);
	public Message setUpWishList(Long memberId, Long maskId);
}
