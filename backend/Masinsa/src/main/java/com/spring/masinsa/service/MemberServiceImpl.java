package com.spring.masinsa.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.dto.MemberLoginDTO;
import com.spring.masinsa.entity.Member;
import com.spring.masinsa.repository.MemberRepository;
import com.spring.masinsa.response.Message;
import com.spring.masinsa.response.Status;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	MemberRepository memberRepo;
	
	@Override
	@Transactional
	public MemberDTO getMember(Long memberId) {
		Member member = memberRepo.findMemberById(memberId);
		MemberDTO memberDTO = Member.entityToDTO(member);
		return memberDTO;
	}
	
	@Override
	@Transactional
	public MemberDTO deleteMember(Long memberId) {
		Member member = memberRepo.findMemberById(memberId);
		if(member != null) {
			member.deleteMember();
			memberRepo.save(member);
			MemberDTO memberDTO = Member.entityToDTO(member);
			return memberDTO;
		}
		return null;
	}

	@Override
	@Transactional
    public Message checkMember(MemberDTO memberDTO, String token) {
		Member member = memberRepo.findMemberByToken(token);
		// 기존 회원인 경우 - 바로 DTO로 변환
		if(member != null) {
			MemberLoginDTO memberLoginDTO = Member.entityToLoginDTO(member);
			Message msg = new Message(Status.OK, "기존 회원입니다.", memberLoginDTO); 
			return msg; 
			}
		// 신규 회원인 경우  - 엔티티로 변환 후 DB에 저장하고 프론트에 필요한 정보만 담은 MemberLoginDTO로 변환
        Member newMember = MemberDTO.dtoToEntity(memberDTO);
		memberRepo.save(newMember);
		MemberLoginDTO newMemberLoginDTO = Member.entityToLoginDTO(newMember);
		Message msg = new Message(Status.OK, "회원가입에 성공하였습니다.", newMemberLoginDTO);
		return msg;
  }
}