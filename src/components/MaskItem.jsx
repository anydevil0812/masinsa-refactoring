import React from "react";
import WishBtn from "./WishBtn";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function MaskItem({ maskList }) {
  const navigate = useNavigate();
  return (
    <Container>
      {maskList &&
        maskList.map((mask) => (
          <Wrapper key={mask.id}>
            <Mask onClick={() => navigate(`/about/${mask.id}`)}>
              <Img src={mask.thumbnail} alt="mask thumbnail" />
            </Mask>
            <MaskInfo>
              <Name onClick={() => navigate(`/about/${mask.id}`)}>
                {mask.name}
              </Name>
              <Price onClick={() => navigate(`/about/${mask.id}`)}>
                {mask.price} 원
              </Price>
              <ul>
                <Option>▪ {mask.blockingIndex}</Option>
                <Option>▪ Size : {mask.size}</Option>
              </ul>
              <Rate>평점 : {mask.avgScore}⭐</Rate>
              <Wish>
                <WishBtn maskId={mask.id} />
              </Wish>
            </MaskInfo>
          </Wrapper>
        ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  border: 1px solid #d9d9d9;
  @media (max-width: 767px) {
    ${(props) => props.theme.variables.flex("column", "space-around", "center")}
    width: 100%;
    margin: 0 auto;
  }
`;

const Mask = styled.div`
  max-width: 180px;
  margin-right: 20px;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const MaskInfo = styled.div`
  max-width: 250px;
  ${(props) => props.theme.variables.flex("column", "", "flex-start")};
  padding: 5px;
  color: ${(props) => props.theme.style.black};
  position: relative;
`;

const Name = styled.div`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.style.textSmall};
  line-height: 1.5;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Price = styled.div`
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.style.textMedium};
  line-height: 1.5;
  font-weight: 600;
  color: ${(props) => props.theme.style.highlight};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Option = styled.li`
  line-height: 1.5;
  font-size: ${(props) => props.theme.style.textXSmall};
  margin-bottom: 5px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Rate = styled.p`
  margin-top: 10px;
  font-size: ${(props) => props.theme.style.textSmall};
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Wish = styled.div`
  font-size: 25px;
  position: absolute;
  bottom: 0;
  right: 8px;
`;
