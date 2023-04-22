package com.spring.masinsa.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Image;
import com.spring.masinsa.entity.Mask;

@Repository
@Mapper
public interface MaskMapper {
	public List<Image> getAllImages(Long maskId);
	public List<Mask> getAllMask(String blockingIndex, String size, String shape);
	public List<Mask> getSortedMasks(String standard);
	public List<Mask> getTop3Mask();

	public List<Mask> FilterSortMaskByPage(String sortCol, String order, Integer limit, Integer offset, 
	String filterCol1, String filter1, String filterCol2, String filter2, String filterCol3, String filter3);
  List<Mask> SearchSortMask(String searchWord1, String searchWord2, String searchWord3, String sortCol, String order, Integer limit, Integer offset);
	

}
