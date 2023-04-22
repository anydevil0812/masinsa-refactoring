package com.spring.masinsa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.spring.masinsa.dto.AnalysisInfoDTO;

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
public class AnalysisInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "analysis_id")
	private Long id;
	

	@Column(name = "relative_size")
	private String relativeSize;
	
	private String fit;

	private int score;
	
	@Column(name = "breath_ability")
	private String breathAbility;
	
	private String delivery;
	
	@OneToOne
	@JoinColumn(name="mask_id")
	private Mask mask;

	public static AnalysisInfoDTO entityToDTO (AnalysisInfo analysisInfo) {
		return AnalysisInfoDTO.builder()
				.id(analysisInfo.getId())
				.maskId(analysisInfo.getMask().getId())
				.relativeSize(analysisInfo.getRelativeSize())
				.fit(analysisInfo.getFit())
				.breathAbility(analysisInfo.getBreathAbility())
				.delivery(analysisInfo.getDelivery())
				.score(analysisInfo.getScore())
				.build();
	}
}


