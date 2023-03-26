import styled from "styled-components";

/* 리스트 페이지 기본 Section 나눈거 */

// 필터들이 있는 Section
export const FilterSection = styled.section`
  width: 950px;
  height: 230px;
  margin: 0px auto;
  // border: 2px solid red;
`;

// 마스크리스트 Section
export const FilterMaskListSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 950px;
  height: auto;
  padding: 5px;
  margin: 5px auto;
  // border: 2px solid red;
`;

/* Filter 부분 스타일 */

// 마스크 형태 리스트 Section ( 새부리 / 입체 / 덴탈)
export const ShapeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 120px;
  margin: 10px 0px;
  // border: 2px solid red;
`;

// 마스크 형태 Btn
export const ShapeBtn = styled.button`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  font-size: 15px;
  font-weight: 800;
  background: none;
  padding: 5px;
  border: 0px;
  cursor: pointer;
  &:hover {
    color: #05735f;
  }
  &:active {
    color: #0ea654;
    border: 3px solid #fff;
    padding: 5px;
    border-style: none none double none;
    text-decoration: underline;
  }
`;

// 마스크형태 Img (ShapeBtn버튼)
export const MaskShapeImg = styled.img`
  width: 50px;
  height: 50px;
  background: #05735f;
  padding: 2px;
  border: 0px;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
`;

// 마스크 형태 내용 (ShapeBtn버튼 안에 글 : 선택안되어 있을 경우)
export const MaskShapeName = styled.div`
  margin-left: 10px;
  // border: 1px solid red;
  overflow: hidden;
`;

// 마스크 형태 내용 ( 선택 o )
export const MaskShapeName_active = styled.div`
  color: #0ea654;
  text-decoration: underline;
  margin-left: 10px;
  // border: 1px solid red;
  overflow: hidden;
  &:hover {
    color: #5cec7c;
  }
`;

// 마스크 사이즈 리스트 Section ( 전체 / 대형 / 중형 / 소형 / 기타)
export const SizeListsSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 45px;
  border: 1px solid #9a9a9a;
  border-style: double none;
`;

// 마스크 사이즈 Btn (선택 x)
export const SizeBtn = styled.button`
  width: 170px;
  padding: 10px;
  background: none;
  border: 0px;
  cursor: pointer;
  // color: #fff;
  &:hover {
    color: #5cec7c;
  }
  &:active {
    color: #0ea654;
    border: 3px solid #fff;
    border-style: none none double none;
    text-decoration: underline;
  }
`;

// 마스크 사이즈 Btn (선택 o)
export const SizeBtn_active = styled.button`
  width: 170px;
  padding: 10px;
  background: none;
  border: 0px;
  cursor: pointer;
  color: #0ea654;
  text-decoration: underline;
  &:hover {
    color: #5cec7c;
  }
`;

/* 정렬변경 */

// 정렬기준2 ( 리스트페이지 )
export const SortSection2 = styled.section`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 25px;
  padding: 5px;
  margin-top: 15px;
  // border: 2px solid red;
`;

// 정렬기준 선택 버튼 ( 선택 x )
export const SelectBox = styled.div`
  width: 80px;
  height: 23px;
  padding-top: 3px;
  margin: 0px 10px;
  font-size: 13px;
  text-align: center;
  border: 1px solid #9a9a9a;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: #05735f;
  }
  &:active {
    background: #05735f;
    color: #fff;
  }
`;

// 정렬기준 버튼 ( 선택 o )
export const SelectBox_active = styled.div`
  width: 80px;
  height: 23px;
  padding-top: 3px;
  margin: 0px 10px;
  font-size: 13px;
  text-align: center;
  border: 1px solid #9a9a9a;
  overflow: hidden;
  cursor: pointer;
  background: #05735f;
  color: #fff;
  &:hover {
    color: yellow;
  }
`;
