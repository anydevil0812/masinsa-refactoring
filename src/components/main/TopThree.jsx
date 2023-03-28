import React, { useState, useEffect } from "react";
import { putClick } from "../../api/mask/putClick";
import styled from "styled-components";
import { Title } from "../../styles/Common";

function TopThree({ topMask }) {
  /* TOP3 상품 클릭 수 증가  */
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();

  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <Container>
      <Title>MASINSA AWARDS</Title>
      <MaskList>
        {topMask &&
          topMask.map((top) => (
            <a
              href={`/about/${top.id}`}
              onClick={() => {
                setIsClick(true);
                setClickMaskId(top.id);
              }}
              key={top.id}
            >
              <Mask
                // hover => show maskInfo
                onMouseOver={() =>
                  (document.getElementById(`${top.id}info`).style.opacity = "1")
                }
                onMouseOut={() =>
                  (document.getElementById(`${top.id}info`).style.opacity = "0")
                }
              >
                <MaskImg src={top.thumbnail} />
                {/* TOP3 상품 Hover 시 상품정보 표기 */}
                <MaskInfo id={`${top.id}info`}>
                  <P>{top.name}</P>
                  <P>▪ {top.price} 원</P>
                  <P>▪ size : {top.size}</P>
                  <P>▪ score : ⭐ {top.avgScore}</P>
                </MaskInfo>
              </Mask>
            </a>
          ))}
      </MaskList>
    </Container>
  );
}

export default TopThree;

export const Container = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const MaskList = styled.div`
  width: 100%;
  ${(props) => props.theme.variables.flex("", "center", "")};
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.style.bg};
  transition: 0.5s ease;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Mask = styled.div`
  max-width: 350px;
  margin: 5px;
  border: 1px solid ${(props) => props.theme.style.bg};
  border-radius: 20px;
  position: relative;
  @media (max-width: 768px) {
    margin: 0 3px;
  }
`;

export const MaskImg = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const MaskInfo = styled.div`
  width: 100%;
  max-height: 100%;
  border-radius: 0 0 20px 20px;
  background: ${(props) => props.theme.style.infoBg};
  font-size: ${(props) => props.theme.style.textSmall};
  padding: 5px;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.style.white};
  line-height: 1.5;
`;
