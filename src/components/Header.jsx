import React, { useContext } from "react";
import styled from "styled-components";
import { UserLoginContext } from "../context/UserLoginContext";
import { BsPersonHearts } from "react-icons/bs";
import { MdLogout, MdLogin } from "react-icons/md";

function Header() {
  const { isLogin } = useContext(UserLoginContext);

  // 로그아웃 => 세션쿠키, accessToken 삭제
  const naverLogout = () => {
    //user정보 삭제
    sessionStorage.removeItem("acessToken");
    // main 페이지로 이동
    window.location.href = "/";
  };

  return (
    <div>
      <HeaderWrapper>
        <Hedaer>
          {/* 마신사로고 : home버튼 */}
          <a href="/">
            {/* 로고이미지 : public 폴더에 넣은 후, 경로지정 */}
            <Img src={`/images/masinsa-logo.png`} alt="masinsa-logo" />
          </a>
          {isLogin ? (
            <BtnGroup>
              <Btn>
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
      {/* Navigation Bar */}
      <NavWrapper>
        <NavContainer>
          <Btn onClick={() => window.location.assign("/maskList/KF94")}>
            KF94
          </Btn>
          <Btn onClick={() => window.location.assign("/maskList/KF80")}>
            KF80
          </Btn>
          <Btn onClick={() => window.location.assign("/maskList/OTHER")}>
            OTHER
          </Btn>
        </NavContainer>
      </NavWrapper>
    </div>
  );
}

export default Header;

export const HeaderWrapper = styled.div`
  background: ${(props) => props.theme.style.lightGray};
`;

export const Hedaer = styled.div`
  max-width: 1150px;
  height: 80px;
  ${(props) => props.theme.variables.flex("", "space-between", "")};
  padding: 0 10px;
  margin: 0px auto;
  @media (max-width: 768px) {
    height: 70px;
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
  ${(props) => props.theme.variables.flex("", "space-around", "")};
  position: relative;
`;

export const Icon = styled.div`
  font-size: 25px;
`;

export const Btn = styled.div`
  width: 80px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.style.text};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.textHover};
  }
  &:active {
    color: ${(props) => props.theme.style.textHover};
    text-decoration: underline;
  }
`;

export const P = styled.p`
  margin: 0px;
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  height: 40px;
  ${(props) => props.theme.variables.flex("", "center", "")};
  margin: 0 auto;
  background: ${(props) => props.theme.style.bg};
`;

export const NavContainer = styled.div`
  width: 1200px;
  ${(props) => props.theme.variables.flex("", "space-around", "")};
`;
