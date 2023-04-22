package com.spring.masinsa.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.ReviewDTO;
import com.spring.masinsa.entity.Review;
import com.spring.masinsa.entity.ReviewType;
import com.spring.masinsa.mapper.ReviewMapper;
import com.spring.masinsa.repository.ReviewRepository;

@Service
public class ReviewServiceImpl implements ReviewService {

  @Autowired
  private ReviewRepository reviewRepository;

  @Autowired
  private MaskServiceImpl maskService;
  
  @Autowired
  ReviewMapper reviewMapper;

  //maskId를 받아서 해당 마스크의 리뷰갯수를 조회(네이버 리뷰만) -> 분석정보를 만들지 말지 결정하기 위해
  @Override
  @Transactional
  public int countByMaskIdAndReviewType(Long maskId, String reviewType) {
    ReviewType reviewType2 = ReviewType.valueOf(reviewType); //ex) reviewType이 naver면 ReviewType.NAVER로 변환
    //먼저 해당 마스크가 존재하는지 확인 -> 마스크가 없으면 -1 리턴
    if (maskService.getMask(maskId) == null) {
      return -1;
    }
    return reviewRepository.countByMaskIdAndReviewType(maskId, reviewType2);
  }

  @Override
  @Transactional
  public List<ReviewDTO> findByMaskIdAndReviewType(Long maskId, Pageable pageable, String reviewType) {

    //먼저 해당 마스크가 존재하는지 확인 -> 마스크가 없으면 null 리턴
    if (maskService.getMask(maskId) == null) {
      return null;
    }
    ReviewType reviewType2 = ReviewType.valueOf(reviewType); //ex) reviewType이 naver면 ReviewType.NAVER로 변환
    List<Review> reviewList = reviewRepository.findByMaskIdAndReviewType(maskId, reviewType2, pageable);
    List<ReviewDTO> reviewDTOList = new ArrayList<>();
    for (Review review : reviewList) {
      ReviewDTO reviewDTO = Review.entityToDTO(review);
      reviewDTOList.add(reviewDTO);
    }
    return reviewDTOList;
  }
  
//  @Transactional
//  public ReviewDTO addMemberReview2(ReviewDTO reviewDTO){
//	  Review review = reviewRepository.findReviewById(reviewDTO.getId());
//	  if(review != null) {
//		  return null;
//	  }
//	  Review newReview = ReviewDTO.dtoToEntity(reviewDTO);
//	  System.out.println(newReview);
//	  reviewRepository.save(newReview);
//	  return Review.entityToDTO(newReview);
//  }
  
  @Override
  @Transactional
  public ReviewDTO addMemberReview(ReviewDTO reviewDTO){
	  Boolean insertResult = reviewMapper.addMemberReview(reviewDTO);
	  if (insertResult) {
		  Review review = reviewRepository.findReviewById(reviewDTO.getId());
		  ReviewDTO reviewDTO2 = Review.entityToDTO(review);
		  return reviewDTO2;
	  }
	  	  return null;
  }
  
  @Override
  @Transactional
  public ReviewDTO updateMemberReview(Long reviewId, Float score, String content) {
	  reviewMapper.updateMemberReview(reviewId, score, content);
	  Review review = reviewMapper.getMemberReview(reviewId);
	  System.out.println(review);
	  if(review != null) {
		  reviewRepository.save(review);
		  ReviewDTO reviewDTO = Review.entityToDTO(review);
		  return reviewDTO;
	  }
	  return null;
  }
   
  @Transactional
  public Boolean deleteMemberReview(Long memberId, Long maskId) {
	  Review review = reviewRepository.findReviewByMemberIdAndMaskId(memberId, maskId);
	  if(review != null) {
		  reviewRepository.delete(review);
		  return true;
		}
		return false;
  }
}
