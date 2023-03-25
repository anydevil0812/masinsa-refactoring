import React from "react";
import NaverLogin from "../components/login/NaverLogin";
import { MainWrapper } from "../styles/OtherStyles";

function Login() {
  return (
    <MainWrapper>
      <div
        style={{
          width: "400px",
          height: "450px",
          margin: "30px auto",
          border: "1px solid #0ea654",
          borderRadius: "10px",
          borderStyle: "dashed",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "700",
            marginTop: "100px",
            marginBottom: "10px",
            //   border: "1px solid green",
          }}
        >
          MASINSA LOGIN
        </div>
        <div
          style={{
            fontSize: "10px",
            marginBottom: "20px",
            paddingBottom: "10px",
          }}
        >
          로그인을 하시면 아래의 서비스를 이용하실 수 있습니다.
        </div>
        <div
          style={{
            width: "65%",
            padding: "5px",
            border: "2px solid #D9D9D9",
            margin: "0px auto",
          }}
        >
          <p style={{ fontSize: "8px" }}>▪ 회원 리뷰 확인 및 등록</p>
          <p style={{ fontSize: "8px" }}>▪ 마스크 찜하기 기능</p>
        </div>
        <NaverLogin />
      </div>
    </MainWrapper>
  );
}

export default Login;
