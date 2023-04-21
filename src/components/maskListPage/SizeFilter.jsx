import styled from "styled-components";
import React from "react";

export default function SizeFilter({ filter, setFilter }) {
  return (
    <Container>
      <Btn
        isClick={filter.size === "대형"}
        onClick={() => {
          setFilter({
            shape: filter.shape,
            size: "대형",
          });
        }}
      >
        대형
      </Btn>
      <Btn
        isClick={filter.size === "중형"}
        onClick={() => {
          setFilter({
            shape: filter.shape,
            size: "중형",
          });
        }}
      >
        중형
      </Btn>
      <Btn
        isClick={filter.size === "소형"}
        onClick={() => {
          setFilter({
            shape: filter.shape,
            size: "소형",
          });
        }}
      >
        소형
      </Btn>
      <Btn
        isClick={filter.size === "기타"}
        onClick={() => {
          setFilter({
            shape: filter.shape,
            size: "기타",
          });
        }}
      >
        기타
      </Btn>
    </Container>
  );
}

const Container = styled.div`
  height: 45px;
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  margin-bottom: 10px;
  border: 1px solid #9a9a9a;
  border-style: solid none;
`;

const Btn = styled.button`
  width: 170px;
  padding: 10px;
  background: none;
  border: 0px;
  cursor: pointer;
  &:hover {
   color: #0ea654;
  }
  color: ${(props) => (props.isClick ? "#0ea654" : "")};
  text-decoration ${(props) => (props.isClick ? "underline" : "none")};
`;
