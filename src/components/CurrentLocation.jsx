import styled from "styled-components";
import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation({ mask }) {
  const { blockingindex } = useParams();
  return (
    <Container>
      {mask ? (
        // about Page 에서는 mask에서 값가져오기
        <div>
          홈 → {mask.blockingIndex} → {mask.shape}
        </div>
      ) : (
        <div>홈 → {blockingindex}</div>
      )}
    </Container>
  );
}

export default CurrentLocation;

const Container = styled.div`
  margin: 5px 0 20px;
  padding: 10px;
  font-size: ${(props) => props.theme.style.textSmall};
  color: ${(props) => props.theme.style.textLightGray};
  border-bottom: 2px double ${(props) => props.theme.style.textLightGray};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;
