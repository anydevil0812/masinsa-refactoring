package com.spring.masinsa.service;

import com.spring.masinsa.dto.AnalysisInfoDTO;

public interface AnalysisInfoService {

	AnalysisInfoDTO getAnalysisInfo(Long maskId);

	Boolean deleteAnalysisInfo(Long maskId);

}
