import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api/getUserInfo";
import { setCookie } from "../../cookie";

export default function NaverLoginBtn() {
  // naver client
  const NAVER_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const NAVER_CALLBACK_URL = process.env.REACT_APP_CALLBACK_URL;
  // 윈도우 객체에 있는 네이버에 로그인 함수를 이용
  const { naver } = window;
  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);
  // 유저 access token
  const [accessToken, setAccessToken] = useState();
  // 유저 정보 설정
  const [userInfo, setUserInfo] = useState();
  //
  const navigate = useNavigate();

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

  // console.log(accessToken, isLogin);

  // 유저정보 받아오기 => 백엔드에서!
  useEffect(() => {
    isLogin && getUserInfo({ accessToken, setUserInfo });
    if (userInfo) {
      navigate("/", { state: { userInfo, isLogin } });
    }
  }, [isLogin, accessToken, userInfo, navigate]);

  return (
    // 네이버 로그인 버튼이 표시 될 div태그에 id='naverIdLogin' 을 추가
    <div id="naverIdLogin"></div>
  );
}
