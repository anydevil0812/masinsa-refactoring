import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrepper>
      <P>&copy; 2023. MASINSA. HSM. All rights reserved.</P>
    </FooterWrepper>
  );
}

const FooterWrepper = styled.div`
  height: 80px;
  background: ${(props) => props.theme.style.lightGray};
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`;
const P = styled.p`
  line-height: 80px;
  font-size: ${(props) => props.theme.style.textXSmall};
  color: ${(props) => props.theme.style.textLightGray};
  text-align: center;
`;
