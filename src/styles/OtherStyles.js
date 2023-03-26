import styled from "styled-components";

// 전체화면
export const Wrapper = styled.div`
  width: 1200px;
`;

// Header 제외한 화면의 내용부분 : MainWrapper
export const MainWrapper = styled.section`
  width: auto;
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

// 위로가기 버튼 : 고정 fixed
export const GoUpBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  padding: 10px;
  background: #e5ffe9;
  color: #05735f;
  font-weight: 800;
  border: 0px;
  border-radius: 10%;
  box-shadow: 2px 2px 5px #999;
  &:active {
    background: #b1f0e1;
  }
`;

// 최근 본 상품
export const FixedRecentView = styled.div`
  // 위치 설정
  position: fixed;
  top: 30%;
  right: 30px;
  z-index: 1;
  // display
  display: flex;
  flex-direction: column;
  justify-item: center;
  align-items: center;
  // 크기설정
  width: 75px;
  height: 250px;
  padding: 10px;
  background: #92b69c;
  border: 0px;
  border-radius: 6px;
  color: #094a23;
  text-align: left;
  font-size: 13px;
  font-weight: 800;
  // 그림자설정
  box-shadow: 2px 2px 5px #999;
`;

// 최근 본 상품 div
export const RecentViewImgDiv = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 5px 0px;
`;

// 최근 본 상품 Img
export const RecentViewImg = styled.img`
  width: 100%;
  height: 100%;
`;
