import styled from "styled-components";
import React from "react";

export default function ShapeFilter({ filter, setFilter }) {
  return (
    <Container>
      {/* 전체 */}
      <Btn
        isClick={filter.shape === ""}
        onClick={() => {
          setFilter({
            shape: "",
            size: "",
          });
        }}
      >
        <Img src="../images/지구마스크.png" />
        <Shape>전체</Shape>
      </Btn>
      <Btn
        isClick={filter.shape === "새부리형"}
        onClick={() => {
          setFilter({
            shape: "새부리형",
            size: "",
          });
        }}
      >
        <Img src="../images/새부리형.png" />
        <Shape>새부리</Shape>
      </Btn>
      <Btn
        isClick={filter.shape === "입체형"}
        onClick={() => {
          setFilter({
            shape: "입체형",
            size: "",
          });
        }}
      >
        <Img src="../images/입체형.png" />
        <Shape>입체</Shape>
      </Btn>
      <Btn
        isClick={filter.shape === "평면형"}
        onClick={() => {
          setFilter({
            shape: "평면형",
            size: "",
          });
        }}
      >
        <Img src="../images/덴탈형.png" />
        <Shape>평면</Shape>
      </Btn>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  margin-bottom: 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    max-height: 50px;
  }
`;

const Btn = styled.button`
  width: 200px;
  ${(props) => props.theme.variables.flex("", "center", "center")};
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  background: none;
  border: 0px;
  cursor: pointer;
  color: ${(props) => (props.isClick ? "#0ea654" : props.theme.style.black)};
  text-decoration ${(props) => (props.isClick ? "underline" : "none")};
   transition: 0.3s ease;
  &:hover {
    color: #0ea654;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.style.masinsaColor};
  padding: 2px;
  border-radius: 50px;
  box-shadow: 2px 2px 3px #999;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Shape = styled.div`
  margin-left: 10px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
