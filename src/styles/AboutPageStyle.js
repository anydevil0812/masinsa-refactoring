import styled from "styled-components";

/* 리뷰 부분 */

// "상세리뷰" 타이틀 & 리뷰쓰기 버튼 Section
export const ReviewHead = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 45px;
  margin: 10px;
  border-top: 1px solid #9a9a9a;
  border-bottom: 1px solid #9a9a9a;
`;

// 리뷰 입력창 토탈
export const ReviewBox = styled.section`
  // display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 10px;
  // border: 2px solid red;
`;

// 리뷰 작성창
export const ReviewInput = styled.input`
  width: 830px;
  height: 120px;
  margin: 10px;
`;

// 리뷰 제출버튼
export const ReviewChangeBtn = styled.button``;

// 리뷰 Section
export const ReviewSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: auto;
  padding: 5px;
  margin: 5px auto;
  // border: 2px solid red;
`;

// 리뷰 총평 Section
export const ReviewTotal = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 830px;
  height: 45px;
  margin: 15px auto 10px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-shadow: 2px 1px 3px #d9d9d9;
  background: #f5f5f5;
  font-size: 13px;
  font-weight: 700;
`;

// 리뷰 총평 세부사항
export const Totals = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  // border: 2px solid green;
`;

// 리뷰버튼 Section
export const ReviewBtnSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 35px;
  margin: 0px 0px 5px;
  // border: 2px solid blue;
`;

// 네이버리뷰버튼 ( 선택 x)
export const NaverReviewBtn = styled.button`
  width: 250px;
  height: 30px;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid #9a9a9a;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #12de1a;
  }
  &:active {
    color: #12de1a;
    text-decoration: underline;
  }
`;

// 네이버리뷰 선택o
export const NaverReviewBtn_active = styled.button`
  width: 250px;
  height: 30px;
  margin: 5px;
  overflow: hidden;
  background: none;
  color: #12de1a;
  border: 2px solid #12de1a;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #12de1a;
    text-decoration: underline;
  }
`;

// 마신사리뷰버튼 (선택x)
export const MasinsaReviewBtn = styled.button`
  width: 250px;
  height: 30px;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid #9a9a9a;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #0ea654;
  }
  &:active {
    color: #0ea654;
    text-decoration: underline;
  }
`;

// 마신사리뷰 선택o
export const MasinsaReviewBtn_active = styled.button`
  width: 250px;
  height: 30px;
  margin: 5px;
  overflow: hidden;
  background: none;
  border: 2px solid #0ea654;
  color: #0ea654;
  border-style: none none double;
  cursor: pointer;
  &:hover {
    color: #0ea654;
    text-decoration: underline;
  }
`;

// 리뷰내용 Section
export const ReviewContent = styled.section`
  width: 98%;
  height: auto;
  padding: 5px;
  margin: 5px;
  // border: 2px solid blue;
`;

/* Reviews */

// 각각의 리뷰칸 Section
export const EachReviewSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-item: center;
  width: auto;
  height: auto;
  margin-bottom: 15px;
  padding: 0px 0px 10px;
  border: 1px solid #9a9a9a;
  border-style: none none double;
`;

// 리뷰Top : score
export const ReviewTop = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 600;
  text-align: left;
  margin: 5px 3px;
  padding: 1px;
  // border: 1px solid red;
`;

// 리뷰Center : id + option
export const ReviewCenter = styled.div`
  width: auto;
  height: 20%;
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;

// 리뷰Bottom : 내용
export const ReviewBottom = styled.div`
  width: auto;
  height: 50%;
  font-size: 12px;
  text-align: left;
  margin: 5px;
  // border: 1px solid red;
`;
