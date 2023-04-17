import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import NaverLogin from "../components/login/NaverLogin";
import { UserLoginContext } from "../context/UserLoginContext";
import styled from "styled-components";
import { Wrapper } from "../styles/Common";

export default function Login() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserLoginContext);

  // 만약, 로그인 된 사용자가 접근 시에 main으로 navigate
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <Wrapper>
      <Container>
        <P>MASINSA LOGIN</P>
        <Contents>
          <p>로그인을 하시면 아래의 서비스를 이용하실 수 있습니다.</p>
          <Ul>
            <Li>회원 리뷰 확인 및 등록</Li>
            <Li>마스크 찜하기 기능</Li>
          </Ul>
        </Contents>
        <NaverLogin />
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  margin: 90px auto 0;
  padding: 20px;
  border: 1px dashed ${(props) => props.theme.style.masinsaColor};
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 420px) {
    width: 90%;
  }
`;

const P = styled.p`
  display: block;
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.style.masinsaColor};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textMedium};
  }
`;

const Contents = styled.div`
  height: 180px;
  ${(props) => props.theme.variables.flex("column", "space-around", "center")};
  font-size: ${(props) => props.theme.style.textSmall};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Ul = styled.div`
  width: 100%;
  height: 90px;
  ${(props) => props.theme.variables.flex("column", "space-around", "center")};
  border: 2px solid ${(props) => props.theme.style.textLightGray};
  padding: 10px;
  margin-bottom: 20px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Li = styled.li`
  margin-bottom: 5px;
`;
