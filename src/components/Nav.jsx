import styled from "styled-components";
import React from "react";

export default function Nav() {
  return (
    <NavWrapper>
      <NavContainer>
        <Link href="/maskList/KF94">KF94</Link>
        <Link href="/maskList/KF80">KF80</Link>
        <Link href="/maskList/OTHER">OTHER</Link>
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

export const Link = styled.a`
  display: block;
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
