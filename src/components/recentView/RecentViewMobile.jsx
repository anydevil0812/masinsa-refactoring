import React, { useEffect, useState } from "react";
import { putClick } from "../../api/mask/putClick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosBrowsers } from "react-icons/io";

// 768px 이하의 경우 => mypage에서 보여줌
export default function RecentViewMobile() {
  // localStorage에 저장된 최근본상품(watchedMask) 가져오기
  let userWatched = localStorage.getItem("watchedMask");

  // JSON 자료형(String)으로 저장된 데이터를 Object로 변경
  userWatched = JSON.parse(userWatched);

  // 클릭수 확인
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();

  /* Recent 상품 클릭 수 증가  */
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  const navigate = useNavigate();

  return (
    <RecentContainer>
      <Title>
        최근 본 상품
        <Icon>
          <IoIosBrowsers />
        </Icon>
      </Title>
      <Div>
        {userWatched &&
          userWatched.map((recentMask) => (
            <Mask
              key={recentMask.id}
              onClick={() => {
                setIsClick(true);
                setClickMaskId(recentMask.id);
                navigate(`/about/${recentMask.id}`);
              }}
            >
              <Img src={recentMask.thumbnail} alt={recentMask.id} />
            </Mask>
          ))}
      </Div>
    </RecentContainer>
  );
}

const RecentContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 95%;
    margin: 30px auto 0;
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.style.textLightGray};
    ${(props) => props.theme.variables.flex("column", "flex-start", "center")};
    display: block;
    margin-bottom: 15px;
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const Title = styled.div`
  width: 100.5%;
  height: 50px;
  ${(props) => props.theme.variables.flex("", "", "center")};
  margin-bottom: 18px;
  padding: 13px 15px;
  border-radius: 15px 15px 0px 0px;
  background: ${(props) => props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  color: ${(props) => props.theme.style.white};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    height: 40px;
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const Icon = styled.div`
  margin-left: 5px;
  padding-top: 2px;
  font-size: ${(props) => props.theme.style.textMedium};
`;

const Div = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10px 15px;
`;

const Mask = styled.div`
  width: 100%;
  margin: 0 10px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;
