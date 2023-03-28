import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavWrapper>
      <NavContainer>
        <Btn onClick={() => window.location.assign("/maskList/KF94")}>KF94</Btn>
        <Btn onClick={() => window.location.assign("/maskList/KF80")}>KF80</Btn>
        <Btn onClick={() => window.location.assign("/maskList/OTHER")}>
          OTHER
        </Btn>
      </NavContainer>
    </NavWrapper>
  );
}

export const NavWrapper = styled.div`
  background: ${(props) => props.theme.style.masinsaColor};
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 9;
  box-shadow: 0 3px 1px ${(props) => props.theme.style.textLightGray};
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`;

export const NavContainer = styled.div`
  max-width: 1000px;
  height: 45px;
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  margin: 0px auto;
  @media (max-width: 768px) {
    height: 35px;
    width: 100%;
  }
`;

export const Btn = styled.div`
  width: 80px;
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  text-align: center;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.style.white};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.hover};
    font-weight: 600;
  }
  &:active {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-weight: 500;
  }
`;
