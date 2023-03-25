// 맨 위: 마신사 로고, 마이페이지 버튼, 네이버 로그인 버튼, 차단지수 카테고리
import React, { useEffect, useState } from "react";
import {
  HeaderSection,
  TopDiv,
  LogoImg,
  TopBtnDiv,
  BockingIndexNav,
  BlockingBtn,
  TopBlank,
  LogoutBtn,
  LoginBtn,
} from "../styles/HeaderStyle";
import axios from "axios";
import { getCookie } from "../cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  // user 정보 설정
  const [userInfo, setUserInfo] = useState();
  // url 이동
  const navigate = useNavigate();

  // 유저 정보 요청
  useEffect(() => {
    // accessToken 가져오기
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      axios
        .post(`http://35.216.122.45:8080/member/new-member`, {
          token: getCookie("accessToken"),
        })
        .then((response) => {
          setUserInfo(response.data.result);
          // 네이버에서 localStorage에 저장되는 token 삭제
          localStorage.removeItem("com.naver.nid.access_token");
          localStorage.removeItem("com.naver.nid.oauth.state_token");
        })
        .catch((e) => console.log(e.message));
    }
  }, []);

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
          <TopBlank></TopBlank>
          <TopBtnDiv>
            {userInfo ? (
              // 로그인 o : 마이페이지버튼 + 로그아웃버튼
              <>
                <Btn onClick={() => navigate("/mypage", { state: userInfo })}>
                  MY PAGE
                </Btn>
                <Btn onClick={naverLogout}>LOGOUT</Btn>
              </>
            ) : (
              // 로그인 x : 네이버로그인
              <>
                <Btn
                  onClick={() =>
                    alert("MASINSA 로그인 후, 이용가능한 서비스입니다.")
                  }
                >
                  MY PAGE
                </Btn>
                <a href="/login/masinsa">
                  <Btn>LOGIN</Btn>
                </a>
              </>
            )}
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
