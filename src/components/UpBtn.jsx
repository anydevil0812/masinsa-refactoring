import React, { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import styled from "styled-components";

export default function UpBtn() {
  const [btnStatus, setBtnStatus] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 1000) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  // console.log(btnStatus);

  // 스크롤 위치 확인
  window.addEventListener("scroll", handleShow);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Icon className={btnStatus ? "active" : ""} onClick={handleScroll}>
      <BsArrowUpCircle />
    </Icon>
  );
}

const Icon = styled.div`
  font-size: 45px;
  position: fixed;
  bottom: 20px;
  right: 50px;
  color: ${(props) => props.theme.style.bg};
  cursor: pointer;
  transition: 0.3s ease;
  visibility: ${(props) =>
    props.className === "active" ? "visible" : "hidden"};
  opacity: ${(props) => (props.className === "active" ? "1" : "0")};
  &:hover {
    color: ${(props) => props.theme.style.masinsaColor};
  }
  @media (max-width: 768px) {
    font-size: 30px;
    right: 20px;
  }
`;
