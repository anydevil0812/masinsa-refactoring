import styled from "styled-components";

// 로고 + 로그인, 마이페이지 + 차단지수가 담긴 header div
export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column; // 정렬기준
  flex: nowrap;
  width: auto;
  height: 130px;
  margin: 0px auto;
  background: #05735f;
  // border: 1px solid red;
`;

// header에서 차단지수를 제외한 윗부분 div
export const TopDiv = styled.div`
  display: flex;
  flex: wrap;
  // width: 100%;
  height: 80px;
  padding-top: 2px;
  padding-bottom: 3px;
  // background: #05735f;
  // border: 1px solid red;
  overflow: hidden;
`;

export const TopBlank = styled.div`
  width: 1200px;
  // border: 1px solid red;
`;

// 로고 Img 스타일
export const LogoImg = styled.img`
  width: 230px;
  height: 100%;
  float: left;
  padding-left: 40px;
  // border: 1px solid skyblue;
`;

// 마이페이지, 네이버버튼을 담은 div
export const TopBtnDiv = styled.div`
  float: right;
  width: 160px;
  height: 85%;
  padding: 8px 15px;
  // border: 1px solid skyblue;
`;

// 마이페이지Btn
export const MyPageBtnStyle = styled.button`
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

// naver 로그인 Btn
export const NaverLoginBtn = styled.button`
  width: 250px;
  height: 40px;
  background: #12de1a;
  border: 0px;
  border-radius: 3px;
  box-shadow: 0px 1px 2px #0ea654;
  font-weight: 800;
  color: white;
  &:active {
    box-shadow: none;
    text-decoration: underline;
  }
  cursor: pointer;
  margin-top: 40px;
`;

// 로그아웃 Btn
export const LogoutBtn = styled.button`
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
`;

// 로그인 Btn
export const LoginBtn = styled.button`
  width: 150px;
  height: 30px;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 3px;
  border-style: dashed;
  background: none;
  cursor: pointer;
  color: white;
  // margin-top: 40px;
  &:active {
    text-decoration: underline;
    box-shadow: 1px 1px 2px white;
  }
`;

// 차단지수를 담은 nav
export const BockingIndexNav = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 1px;
  width: auto;
  height: 40px;
  padding-top: 5px;
  // border: 2px solid yellow;
  box-shadow: 3px 5px 3px #999;
`;

// 차단지수Btn
export const BlockingBtn = styled.button`
  width: 100%;
  height: 40.5px;
  font-size: 17px;
  margin-top: 1px;
  border: 1px solid #091f22;
  border-style: none double;
  background: #2d2d2d;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #5cec7c;
  }
  &:active {
    color: #5cec7c;
    text-decoration: underline;
  }
  &:focus {
    color: #5cec7c;
    text-decoration: underline;
  }
`;
