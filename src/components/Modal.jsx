import React from "react";
import styled from "styled-components";

export default function Modal({ setOpen, status }) {
  return (
    <Wrapper>
      <Container>
        {status === "로그인이 필요한 서비스입니다." ? (
          <>
            <P>죄송합니다. </P>
            <P>{status}</P>
            <a href="/login/masinsa">
              <Btn
                onClick={() => {
                  setOpen(false);
                }}
              >
                확인
              </Btn>
            </a>
          </>
        ) : (
          <>
            <P>{status}</P>
            <Btn
              onClick={() => {
                setOpen(false);
              }}
            >
              확인
            </Btn>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  ${(props) => props.theme.variables.flex("", "center", "center")};
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

const Container = styled.div`
  width: 350px;
  height: 140px;
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  background-color: ${(props) => props.theme.style.white};
  border: 0;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 290px;
    height: 120px;
  }
`;

const P = styled.p`
  color: ${(props) => props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textMedium};
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const Btn = styled.button`
  width: 65px;
  height: 25px;
  margin: 15px 10px 0;
  background: ${(props) => props.theme.style.masinsaColor};
  border: 0;
  border-radius: 5px;
  color: ${(props) => props.theme.style.white};
  font-size: ${(props) => props.theme.style.textSmall};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.hover};
  }
  &:active {
    color: ${(props) => props.theme.style.hover};
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;
