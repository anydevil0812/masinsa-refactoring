import { NaverLoginBtn } from "../../styles/HeaderStyle";
import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../cookie";

function NaverLogin() {
  // url 이동
  const navigate = useNavigate();

  // 윈도우 객체에 있는 네이버에 로그인 함수를 이용하여 토큰 값을 바로 전달
  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
    // *************************마지막에 수정하기*******************************
    clientId: "nVtdkXtRReFK7Wbi274O", // CLIENT_ID
    callbackUrl: "http://localhost:3000/login/masinsa",
    /* 팝업을 통한 로그인 여부, true 면 팝업 */
    isPopup: false,
    loginButton: {
      /* 로그인 버튼 타입 */
      color: "green",
      type: 3,
      height: 30,
    },
  });

  // useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
  useEffect(() => {
    naverLogin.init();
  }, []);

  // 네이버가 만들어 준 로그인 버튼 ref설정
  const naverRef = useRef();

  // 새로 만든 버튼 클릭 시, naverRef 상태 변경 > 로그인
  const handleClick = () => {
    naverRef.current.children[0].click();
  };

  // 로그인 버튼 클릭시, 실행
  useEffect(() => {
    naverLogin.init();
    const getUser = async () => {
      await naverLogin.getLoginStatus((status) => {
        // console.log(`사용자 로그인 확인 ?: ${status}`);
        if (status) {
          // clientId를 이용하여 네이버에 accessToken 요청
          axios.get(`/oauth2.0/authorize?response_type=code
            &client_id=${naverLogin.clientId}&redirect_url=
            ${naverLogin.callbackUrl}&state=test`);
          // accessToken 받아옴 => url에서 잘라서 사용
          // accessToken 을 통해 member/new-member 요청
          const accessToken = window.location.href.split("=")[1].split("&")[0];
          // 세션 쿠키 설정 : react-cookie
          setCookie("accessToken", accessToken);
          navigate("/");
        }
      });
    };
    getUser();
  }, []);

  return (
    <div>
      {/* 네이버 로그인 버튼 */}
      {/* 아이콘이 표시 될 div태그에 id='naverIdLogin' 을 추가 => 기존 제공 버튼 보이지 x*/}
      <div ref={naverRef} id="naverIdLogin" style={{ display: "none" }}></div>
      {/* 새로 스타일해서 로그인 버튼 만들기 */}
      <NaverLoginBtn onClick={handleClick}>N 네이버 로그인</NaverLoginBtn>
    </div>
  );
}

export default NaverLogin;
