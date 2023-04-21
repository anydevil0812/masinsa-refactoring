import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import ReviewItem from "./ReviewItem";
import Pagination from "./Pagination";
import { AboutTitle } from "../../styles/Common";
import { UserLoginContext } from "../../context/UserLoginContext";
import Modal from "../Modal";
import { BsPencilSquare } from "react-icons/bs";
import { getReview, getReviewCount, postMemberReview } from "../../api/review";

export default function ReviewList({ maskId, mask }) {
  const { userInfo } = useContext(UserLoginContext);
  const memberId = userInfo?.id;
  // 리뷰타입 : 버튼 누르면 naver 혹은 member로 변경됨 (기본값 naver)
  const [reviewType, setReviewType] = useState("naver");
  // 버튼 클릭 여부
  const [isClick, setIsClick] = useState({
    naver: true,
    member: false,
  });
  // 리뷰 개수
  const [count, setCount] = useState({
    naver: "",
    member: "",
  });
  // 리뷰 데이터
  const [reviews, setReviews] = useState([]);
  // 리뷰 페이지 번호 : 처음 1 에서 버튼 누를때마다 변경됨
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에 보여지는 리뷰 개수
  const size = 10;
  // 모달
  const [open, setOpen] = useState(false);
  // 모달상태
  const [status, setStatus] = useState();
  // 리뷰 작성
  const [write, setWrite] = useState(false);
  // 리뷰 입력내용
  const [content, setContent] = useState("");

  // 리뷰 요청
  useEffect(() => {
    getReview({ maskId, currentPage, size, reviewType, setReviews });
  }, [maskId, currentPage, reviewType]);

  useEffect(() => {
    getReviewCount({ maskId, setCount });
  }, [maskId]);

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onPost = (e) => {
    setStatus("10글자 이상으로 작성바랍니다.");
    if (content.length > 10) {
      postMemberReview({
        memberId,
        maskId,
        content,
      });
      alert("회원님의 리뷰 등록이 완료되었습니다.");
      window.location.reload();
    } else {
      setOpen(true);
    }
  };

  return (
    <Container name="review">
      {/* 모달 */}
      {open && <Modal setOpen={setOpen} status={status} />}
      <AboutTitle>Review</AboutTitle>
      <Section>
        <BtnContainer>
          <Btn
            isClick={isClick.naver}
            onClick={() => {
              setIsClick({ naver: true, member: false });
              setReviewType("naver");
              setCurrentPage(1);
            }}
          >
            네이버 리뷰 ( {count.naver} )
          </Btn>
          {/* 유저로그인 안되어 있을 경우 => 로그인 안내 모달 !! */}
          <Btn
            isClick={isClick.member}
            onClick={() => {
              if (userInfo) {
                setIsClick({ naver: false, member: true });
                setReviewType("member");
                setCurrentPage(1);
              } else {
                setStatus("로그인이 필요한 서비스입니다.");
                setOpen(true);
              }
            }}
          >
            마신사 리뷰 ( {count.member} )
          </Btn>
        </BtnContainer>
        {reviewType === "naver" && (
          <Div point={false}>
            ⭐ 네이버 총 평점 : <P>{mask.avgScore}</P>
          </Div>
        )}
        {reviewType === "member" && (
          <>
            {write ? (
              <WriteBox>
                <ReviewInput
                  placeholder="내용을 작성해주세요."
                  onChange={onChange}
                  autoFocus
                />
                <BtnGroup>
                  <WriteBtn type="submit" onClick={() => onPost()}>
                    제출하기
                  </WriteBtn>
                  <div>ㅣ</div>
                  <WriteBtn onClick={() => setWrite(false)}>취소</WriteBtn>
                </BtnGroup>
              </WriteBox>
            ) : (
              <Div point={true} onClick={() => setWrite(true)}>
                나도 리뷰 작성하기
                <Icon>
                  <BsPencilSquare />
                </Icon>
              </Div>
            )}
          </>
        )}
      </Section>
      {/* 리뷰 내용 */}
      <ReviewItem reviews={reviews} reviewType={reviewType} />
      {/* 페이지네이션 */}
      {reviewType === "naver" ? (
        <>
          <Pagination
            size={size}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            reviewCount={count.naver}
          />
        </>
      ) : (
        <>
          <Pagination
            size={size}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            reviewCount={count.member}
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${(props) => props.theme.variables.flex("column", "", "center")};
  margin-top: 20px;
`;

const Section = styled.div`
  width: 95%;
  margin: 20px auto;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    margin: 15px auto 20px;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 45px;
  ${(props) => props.theme.variables.flex("", "center", "center")};
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.theme.style.textSmall};
  text-align: center;
  border: 0;
  background-color: ${(props) =>
    props.isClick
      ? props.theme.style.masinsaColor
      : props.theme.style.lightGray};
  color: ${(props) =>
    props.isClick ? props.theme.style.white : props.theme.style.black};
  cursor: pointer;
  transition: color 0.3s ease font-size 0.3s ease;
  &:hover {
    color: ${(props) =>
      props.isClick ? props.theme.style.white : props.theme.style.masinsaColor};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Div = styled.div`
  width: 100%;
  height: 50px;
  ${(props) => props.theme.variables.flex("", "center", "center")};
  border: 1px solid #d9d9d9;
  font-size: ${(props) => props.theme.style.textSmall};
  cursor: ${(props) => (props.point ? "pointer" : "")};
  @media (max-width: 768px) {
    height: 45px;
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const P = styled.p`
  margin-left: 5px;
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const Icon = styled.div`
  margin-left: 5px;
  padding-top: 3px;
  font-size: ${(props) => props.theme.style.textMedium};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const WriteBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #d9d9d9;
  margin-bottom: 15px;
  position: relative;
`;

const ReviewInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  border: 0;
  background: white;
  font-size: ${(props) => props.theme.style.textSmall};
  outline: none;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const BtnGroup = styled.div`
  margin-top: 5px;
  ${(props) => props.theme.variables.flex("", "flex-end", "center")};
  color: ${(props) => props.theme.style.textLightGray};
`;

const WriteBtn = styled.button`
  background: transparent;
  border: 0;
  font-size: ${(props) => props.theme.style.textSmall};
  color: ${(props) => props.theme.style.textLightGray};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.style.masinsaColor};
  }
  &:active {
    text-decoration: underline;
    color: ${(props) => props.theme.style.masinsaColor};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;
