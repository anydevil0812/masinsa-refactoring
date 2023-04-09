import styled from "styled-components";

// Header 제외한 화면의 내용부분 : MainWrapper
export const MainWrapper = styled.section`
  width: 1200px;
  height: auto;
  margin: 8px auto;
  // border: 2px solid red;
`;

// 현재 적용된 필터 Section ( 홈 > KF94 >  ...)
export const CurrentFilterSection = styled.div`
  width: auto;
  height: 20px;
  padding-left: 5px;
  margin-bottom: 15px;
  text-align: left;
  font-size: 13px;
  color: #868b8b;
  // border: 2px solid red;
`;
