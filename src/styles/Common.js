import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    width: 320px;
  }
`;

export const Title = styled.p`
  display: block;
  padding-bottom: 15px;
  margin: 20px auto;
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 700;
  text-align: center;
  border-bottom: 2px solid ${(props) => props.theme.style.bg};
  color: ${(props) => props.theme.style.black};
  transition: 0.5s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textMedium};
    padding-bottom: 10px;
  }
`;
