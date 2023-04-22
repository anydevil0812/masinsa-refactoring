package com.spring.masinsa.dto;

import com.spring.masinsa.entity.Mask;
import com.spring.masinsa.entity.Member;
import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ReviewDTO {
	
	private Long id;
	private Long memberId;
	private String nickname;
	private String naverId;
	private Long maskId;
	private Float score;
	private String option;
	private String content;
	private ReviewType reviewType;
	
	// DTO -> Entity 변환
	public static Review dtoToEntity(ReviewDTO reviewDTO) {
	      //if memberId is not null, build member and build to review
	      if (reviewDTO.getMemberId() != null) {
	         Member member = Member.builder()
	                            .id(reviewDTO.getMemberId())
	                            .build();
	         Mask mask = Mask.builder()
	        		 		 .id(reviewDTO.getMaskId())
	        		 		 .build();
	         
	         Review review = Review.builder()
	                           .score(reviewDTO.getScore())
	                           .option(reviewDTO.getOption())
	                           .content(reviewDTO.getContent())
	                           .reviewType(reviewDTO.getReviewType())
	                           .member(member)
	                           .mask(mask)
	                           .build();
	         return review;
	      }

	      Review review = Review.builder()
	                       .score(reviewDTO.getScore())
	                       .option(reviewDTO.getOption())
	                       .content(reviewDTO.getContent())
	                       .reviewType(reviewDTO.getReviewType())
	                       .build();
	      return review;
	   }
	}

