import React, { useEffect, useState } from "react";
import { putClick } from "../../api/mask/putClick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function RecentView() {
  // localStorage에 저장된 최근본상품(watchedMask) 가져오기
  let userWatched = localStorage.getItem("watchedMask");

  // JSON 자료형(String)으로 저장된 데이터를 Object로 변경
  userWatched = JSON.parse(userWatched);

  // 클릭수 확인
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();

  /* Recent 상품 클릭 수 증가  */
  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  const navigate = useNavigate();

  return (
    <Wrapper>
      <P>최근 본 상품</P>
      {userWatched &&
        userWatched.map((recentMask) => (
          <Container
            key={recentMask.id}
            onClick={() => {
              setIsClick(true);
              setClickMaskId(recentMask.id);
              navigate(`/about/${recentMask.id}`);
            }}
          >
            <Img src={recentMask.thumbnail} alt={recentMask.id} />
          </Container>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 85px;
  height: 285px;
  ${(props) => props.theme.variables.flex("column", "", "center")};
  padding: 10px 0;
  background-color: ${(props) => props.theme.style.white};
  border: 1px solid ${(props) => props.theme.style.textLightGray};
  color: ${(props) => props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textXSmall};
  font-weight: 600;
  position: fixed;
  top: 40%;
  right: 30px;
  z-index: 1;
  visibility: visible;
  opacity: 1;
  transition: 0.5s ease;
  @media (max-width: 768px) {
    visibility: hidden;
    opacity: 0;
  }
`;

const P = styled.p`
  margin: 5px auto;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.style.masinsaColor};
`;

// 최근 본 상품 div
const Container = styled.div`
  width: 70px;
  height: 70px;
  margin: 5px 0px;
`;

// 최근 본 상품 Img
const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
