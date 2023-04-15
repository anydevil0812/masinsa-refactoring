import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

function GoReviewBtn() {
  return (
    <Link to="review" smooth={true} duration={500}>
      <Btn>실제 착용자의 상세리뷰 보러가기</Btn>
    </Link>
  );
}

export default GoReviewBtn;

const Btn = styled.button`
  width: auto;
  height: 30px;
  background: none;
  border: 0px;
  font-size: ${(props) => props.theme.style.textXSmall};
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 5px;
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.masinsaColor};
  }
`;
