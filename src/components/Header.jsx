import React, { useContext } from "react";
import styled from "styled-components";
import { UserLoginContext } from "../context/UserLoginContext";
import { BsPersonHearts } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../cookie";

function Header() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserLoginContext);
  // console.log("Header", userInfo);

  // 로그아웃 => 세션쿠키, accessToken 삭제
  const naverLogout = () => {
    //user정보 삭제
    removeCookie("accessToken");
    // main 페이지로 이동
    window.location.href = "/";
  };

  return (
    <HeaderWrapper>
      <Hedaer>
        {/* 마신사로고 : home버튼 */}
        <a href="/">
          <Img src={`/images/masinsa-logo.png`} alt="masinsa-logo" />
        </a>
        {userInfo ? (
          <BtnGroup>
            <Btn onClick={() => navigate("/mypage")}>
              <Icon>
                <BsPersonHearts />
              </Icon>
              <P>MY PAGE</P>
            </Btn>
            <Btn onClick={() => naverLogout()}>
              <Icon>
                <MdLogout />
              </Icon>
              <P>LOGOUT</P>
            </Btn>
          </BtnGroup>
        ) : (
          <BtnGroup>
            <Btn onClick={() => window.location.assign("/login/masinsa")}>
              <Icon>
                <MdLogin />
              </Icon>
              <P>LOGIN</P>
            </Btn>
          </BtnGroup>
        )}
      </Hedaer>
    </HeaderWrapper>
  );
}

export default Header;

export const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.style.lightGray};
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`;

export const Hedaer = styled.div`
  max-width: 1000px;
  height: 80px;
  ${(props) => props.theme.variables.flex("", "space-between", "center")};
  padding-left: 10px;
  margin: 0px auto;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

export const Img = styled.img`
  width: 200px;
  transition: 0.5s ease;
  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const BtnGroup = styled.div`
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  position: relative;
`;

export const Icon = styled.div`
  font-size: 25px;
`;

export const Btn = styled.div`
  width: 80px;
  margin: 8px;
  font-size: ${(props) => props.theme.style.Medium};
  font-weight: 700;
  text-align: center;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.style.text};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.masinsaColor};
  }
  &:active {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    width: 40px;
    font-weight: 600;
  }
`;

export const P = styled.p`
  margin: 0px;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
