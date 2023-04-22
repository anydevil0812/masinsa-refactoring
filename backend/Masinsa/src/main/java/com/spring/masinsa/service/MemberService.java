package com.spring.masinsa.service;

import com.spring.masinsa.dto.MemberDTO;
import com.spring.masinsa.response.Message;

public interface MemberService {
	public MemberDTO getMember(Long memberId);
	public MemberDTO deleteMember(Long memberId);
	public Message checkMember(MemberDTO memberDTO, String token);
}
