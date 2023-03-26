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

export const Hedaer = styled.div`
  max-width: 1200px;
  height: 80px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  color: #094a23;
  transition: 0.3s ease;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #05735f;
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
  margin: 0 auto;
  background: #92b69c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
