import styled from "styled-components";

// "~~하셨다구요?" 부분 Div
export const TopSection = styled.section`
  width: auto;
  height: 110px;
  padding: 1px;
  // border: 1px solid red;
  margin-top: 10px;
`;

// 글씨 하이라이트
export const HighLightSpan = styled.span`
  color: #ff7d04;
  font-weight: 800;
  font-size: 12px;
  // border: 1px solid red;
`;

// 기본 글씨Span
export const BasicSpan = styled.span`
  font-weight: 800;
  font-size: 11px;
  padding: 5px;
  // border: 1px solid red;
`;

// 그렇다면, MASINSA 저희를 이용해보세요 Div
export const MiddleSection = styled.section`
  width: auto;
  margin: 15px auto;
  // border: 1px solid red;
`;

// 로고 이미지 div
export const LogoSection = styled.section`
  width: auto;
  height: 100px;
  padding: 10px;
  margin: 15px;
  // border: 1px solid red;
`;

// 로고 Img
export const IntroLogoImg = styled.img`
  width: 300px;
  height: 100%;
  float: center;
  // border: 1px solid red;
`;

// 설명 전체 div
export const IntroSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: auto;
  height: 170px;
  margin: 0px auto;
  // border: 1px solid red;
`;

// 왼쪽설명(1번째) div
export const LeftIntroDiv = styled.div`
  width: 300px;
  float: left;
  font-size: 10px;
  // border: 1px solid blue;
`;

// 가운데설명(2번째) div
export const CenterIntroDiv = styled.div`
  width: 300px;
  float: left;
  font-size: 10px;
  // border: 1px solid blue;
`;

// 오른쪽설명(3번째) div
export const RightIntroDiv = styled.div`
  width: 300px
  height: 100%;
  float: right;
  font-size: 10px;
  // border: 1px solid blue;
`;

// 설명 글씨 하이라이트
export const IntroHighLightSpan = styled.span`
  color: #ff7d04;
  font-weight: 800;
  font-size: 14px;
  // border: 1px solid red;
  // text-shadow: 1px 1px 1px #000;
`;

// 설명 글씨 Span
export const IntroSpan = styled.span`
  font-weight: 800;
  font-size: 12px;
  padding: 5px;
  // border: 1px solid red;
`;

// 설명글 title div
export const IntroTitleDiv = styled.div`
  width: 230px;
  height: 55px;
  // border: 1px solid blue;
`;

// 설명글내용 div
export const IntroContentDiv = styled.div`
  width: 230px;
  height: 100px;
  font-size: 13px;
  margin-top: 10px;
  // border: 1px solid blue;
`;

// 상품목록이동 div
export const GoListBtnDiv = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  margin-top: 25px;
  // border: 1px solid blue;
`;

// 상품목록이동Link a
export const GoListLinkBox = styled.a`
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #5cec7c;
  }
  // border: 1px solid blue;
`;

// 중간 선 (hr태그)
export const MiddleLine = styled.hr`
  width: 100%;
  color: #9a9a9a;
  border: 0px;
  border-top: 1px dashed #9a9a9a;
`;

// 세로구분선 : hr 태그 width 적당히 작게 하고 height 주기
export const VerticalHr = styled.hr`
  width: 1px;
  height: 170px;
  border: 0px;
  border-right: 2px solid #d9d9d9;
  margin-left: 5%;
  margin-right: 5%;
`;
