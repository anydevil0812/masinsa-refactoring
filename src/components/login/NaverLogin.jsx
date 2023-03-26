import React, { useContext, useEffect, useState } from "react";
import { getUserInfo } from "../../api/getUserInfo";
import { UserLoginContext } from "../../context/UserLoginContext";
import { setCookie } from "../../cookie";

export default function NaverLogin() {
  // naver client
  const NAVER_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const NAVER_CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;
  // 윈도우 객체에 있는 네이버에 로그인 함수 이용
  const { naver } = window;
  // access token
  const [accessToken, setAccessToken] = useState();
  // 로그인여부 & 유저 정보 => UserLoginContext
  const { setIsLogin, isLogin, setUserInfo } = useContext(UserLoginContext);

  const naverLogin = () => {
    const login = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      loginButton: { color: "red", type: 3, height: 30 },
    });
    // init 안하면 아이콘 안뜸!
    login.init();
    // getLoginStatus의 status 값 & accessToken 받가
    login.getLoginStatus((status) => {
      if (status) {
        setAccessToken(login.accessToken.accessToken);
        // 세션 쿠키 설정 : react-cookie
        setCookie("accessToken", accessToken);
        // 로컬스토리지에 저장된 유저 토큰 삭제 => 보안 ..
        localStorage.removeItem("com.naver.nid.access_token");
        localStorage.removeItem("com.naver.nid.oauth.state_token");
      }
      // 로그인 확인을 위해 state 저장
      setIsLogin(status);
    });
  };

  useEffect(() => {
    naverLogin();
  }, []);

  // 로그인이 완료되면, 백엔드에 accessToken과 함께 사용자 정보요청
  useEffect(() => {
    isLogin && getUserInfo({ accessToken, setUserInfo });
  }, [isLogin, accessToken, setUserInfo]);

  return (
    <>
      {/* 네이버 로그인 버튼이 표시 될 div태그에 id='naverIdLogin' 을 추가 */}
      <div id="naverIdLogin"></div>
    </>
  );
}
