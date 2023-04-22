package com.spring.masinsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Mask;

@Repository
public interface MaskRepository extends JpaRepository<Mask, Long> {
	public Mask findMaskById(Long maskId);	
}
