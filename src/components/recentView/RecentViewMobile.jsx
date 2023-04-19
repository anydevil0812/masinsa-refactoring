import React, { useEffect, useState } from "react";
import { putClick } from "../../api/mask/putClick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosBrowsers } from "react-icons/io";
import { ContainerTitle } from "../../styles/Common";
import { MdSearchOff } from "react-icons/md";

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
      <ContainerTitle>
        최근 본 상품
        <Icon>
          <IoIosBrowsers />
        </Icon>
      </ContainerTitle>
      {/* <Div> */}
      {userWatched ? (
        userWatched.map((recentMask) => (
          <Div key={recentMask.id}>
            <Mask
              onClick={() => {
                setIsClick(true);
                setClickMaskId(recentMask.id);
                navigate(`/about/${recentMask.id}`);
              }}
            >
              <Img src={recentMask.thumbnail} alt={recentMask.id} />
            </Mask>
          </Div>
        ))
      ) : (
        <None>
          <EyeIcon>
            <MdSearchOff />
          </EyeIcon>
          최근 본 상품이 없습니다.
        </None>
      )}
      {/* </Div> */}
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
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const None = styled.div`
  width: 100%;
  height: 110px;
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  font-size: ${(props) => props.theme.style.textSmall};
  font-weight: 600;
  color: ${(props) => props.theme.style.textLightGray};
`;

const EyeIcon = styled.div`
  font-size: 24px;
  margin-bottom: 5px;
`;
