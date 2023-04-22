package com.spring.masinsa.service;

import java.util.List;

import com.spring.masinsa.dto.ImageDTO;
import com.spring.masinsa.dto.MaskDTO;

public interface MaskService  {
	
	public MaskDTO getMask(Long maskId);
	public MaskDTO updateSoldout(Long maskId, String soldout);
	public void updateClick(Long maskId);
	public List<ImageDTO> getAllImages(Long maskId);
	public List<MaskDTO> getAllMask(String kf, String size, String shape);
//	public List<MaskDTO> getSortedMasksPage(String column, String order, int limit, int offset);
	public List<MaskDTO> FilterSortMaskByPage(String sortCol, String order, Integer page, Integer size, 
	String filterCol1, String filter1, String filterCol2, String filter2, String filterCol3, String filter3);
	public List<MaskDTO> SearchSortMask(String keyword, String sortCol, String order, Integer page, Integer size);
}
