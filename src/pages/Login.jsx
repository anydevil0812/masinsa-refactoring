import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import NaverLogin from "../components/login/NaverLogin";
import { UserLoginContext } from "../context/UserLoginContext";
import { MainWrapper } from "../styles/OtherStyles";

function Login() {
  const { isLogin } = useContext(UserLoginContext);
  const navigate = useNavigate();

  const goMain = () => {
    if (isLogin) {
      navigate("/");
    }
  };

  useEffect(() => {
    goMain();
  }, [isLogin]);

  return (
    <MainWrapper>
      <div>
        <div>MASINSA LOGIN</div>
        <div>로그인을 하시면 아래의 서비스를 이용하실 수 있습니다.</div>
        <div>
          <p>▪ 회원 리뷰 확인 및 등록</p>
          <p>▪ 마스크 찜하기 기능</p>
        </div>
      </div>
      <NaverLogin />
    </MainWrapper>
  );
}

export default Login;
