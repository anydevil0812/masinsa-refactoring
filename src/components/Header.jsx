// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React from "react";
import {
  HeaderSection,
  TopDiv,
  LogoImg,
  TopBtnDiv,
  BockingIndexNav,
  BlockingBtn,
} from "../styles/HeaderStyle";
import styled from "styled-components";

function Header() {
  // const { state: userInfo } = useLocation();

  // 로그아웃 => 세션쿠키, accessToken 삭제
  const naverLogout = () => {
    //user정보 삭제
    sessionStorage.removeItem("acessToken");
    // reload : 새로고침
    window.location.reload();
  };

  return (
    <div>
      <HeaderSection>
        <TopDiv>
          {/* 마신사로고 : home버튼 */}
          <a href="/">
            {/* 로고이미지 : public 폴더에 넣은 후, 경로지정 */}
            <LogoImg src={`/images/masinsa-logo.png`} alt="masinsa"></LogoImg>
          </a>
          <TopBtnDiv>
            <a href="/login/masinsa">
              <Btn>LOGIN</Btn>
            </a>
            <Btn onClick={naverLogout}>LOGOUT</Btn>
          </TopBtnDiv>
        </TopDiv>
        <BockingIndexNav>
          <a href="/MaskList/Masinsa/KF94">
            <BlockingBtn>KF94</BlockingBtn>
          </a>
          <a href="/MaskList/Masinsa/KF80">
            <BlockingBtn>KF80</BlockingBtn>
          </a>
          <a href="/MaskList/Masinsa/OTHER">
            <BlockingBtn>OTHER</BlockingBtn>
          </a>
        </BockingIndexNav>
      </HeaderSection>
    </div>
  );
}

export default Header;

export const Btn = styled.button`
  width: 150px;
  height: 30px;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 3px;
  border-style: dashed;
  background: none;
  cursor: pointer;
  color: white;
  &:active {
    text-decoration: underline;
    box-shadow: 1px 1px 2px white;
  }
  margin-bottom: 10px;
`;
