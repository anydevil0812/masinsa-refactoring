import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  min-height: 73vh;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  display: block;
  padding-bottom: 15px;
  margin: 15px auto;
  line-height: 15px;
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

export const ContainerTitle = styled.div`
  width: 100.5%;
  height: 50px;
  ${(props) => props.theme.variables.flex("", "", "center")};
  margin-bottom: 18px;
  padding: 13px 15px;
  border-radius: 15px 15px 0px 0px;
  background: ${(props) => props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 600;
  color: ${(props) => props.theme.style.white};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    height: 45px;
    font-size: ${(props) => props.theme.style.textMedium};
  }
`;
