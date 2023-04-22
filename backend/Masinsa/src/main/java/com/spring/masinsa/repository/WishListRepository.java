package com.spring.masinsa.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.masinsa.entity.Deletion;
import com.spring.masinsa.entity.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long> {
	public Page<WishList> findWishListByMemberIdAndDeletion(Long memberId, Pageable pageable, Deletion deletion);
	public WishList findWishListById(Long wishListId);
	public WishList findWishListByMemberIdAndMaskId(Long memberId, Long maskId);
}
