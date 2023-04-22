package com.spring.masinsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.masinsa.entity.AnalysisInfo;

public interface AnalysisInfoRepository extends JpaRepository<AnalysisInfo, Long> {

	AnalysisInfo findByMaskId(Long maskId);

	void deleteByMaskId(Long maskId);

}
