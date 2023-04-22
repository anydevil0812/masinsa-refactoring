package com.spring.masinsa.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.dto.ReviewDTO;
import com.spring.masinsa.entity.Review;

@Repository
@Mapper
public interface ReviewMapper {
	public Boolean addMemberReview(ReviewDTO reviewDTO);
	public void updateMemberReview(Long reviewId, Float score, String content);
	public Review getMemberReview(Long reviewId);
} 

