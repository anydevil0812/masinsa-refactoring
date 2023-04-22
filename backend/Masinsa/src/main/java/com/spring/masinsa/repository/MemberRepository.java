package com.spring.masinsa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.masinsa.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{
	public Member findMemberById(Long memberId);
	public Member findMemberByToken(String token);
}
