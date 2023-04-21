import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function SortChange({ setSortCol, setSortOrder }) {
  const [isClick, setIsClick] = useState({
    price: false,
    score: false,
    clickNum: false,
  });

  return (
    <Container>
      <SelectBox
        isClick={isClick.price}
        onClick={() => {
          setIsClick({
            price: true,
            score: false,
            clickNum: false,
          });
          setSortCol("price");
          setSortOrder("asc");
        }}
      >
        낮은가격순
      </SelectBox>
      <SelectBox
        isClick={isClick.score}
        onClick={() => {
          setIsClick({
            price: false,
            score: true,
            clickNum: false,
          });
          setSortCol("avg_score");
          setSortOrder("desc");
        }}
      >
        평점순
      </SelectBox>
      <SelectBox
        isClick={isClick.clickNum}
        onClick={() => {
          setIsClick({
            price: false,
            score: false,
            clickNum: true,
          });
          setSortCol("click_num");
          setSortOrder("desc");
        }}
      >
        클릭많은순
      </SelectBox>
    </Container>
  );
}

const Container = styled.div`
  ${(props) => props.theme.variables.flex("", "center", "center")};
  margin: 20px auto;
`;

const SelectBox = styled.div`
  width: 100px;
  height: 25px;
  line-height: 23px;
  margin: 0px 10px;
  font-size: ${(props) => props.theme.style.textSmall};
  text-align: center;
  border: 1px solid #9a9a9a;
  cursor: pointer;
  color: ${(props) => (props.isClick ? props.theme.style.white : "#05735f")};
  background-color: ${(props) => (props.isClick ? "#05735f" : "transparent")};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;
