import React from "react";
import WishBtn from "../WishBtn";
import styled from "styled-components";

function MaskInfo({ mask }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Container>
      {/* 썸네일사진 */}
      <Thumnail>
        <Img src={mask.thumbnail} alt={`${mask.name}`} />
      </Thumnail>
      <Content>
        <Top>
          {/* 이름 */}
          {mask.name}
          {/* 찜버튼 */}
          <Wish>
            <WishBtn maskId={mask.id} userInfo={userInfo} />
          </Wish>
        </Top>
        {/* 가격 */}
        <Price>
          판매가격 : <Color>{mask.price} 원</Color>
        </Price>
        {/* 옵션 */}
        <ul>
          <Option>▪ {mask.blockingIndex}</Option>
          <Option>▪ Size : {mask.size}</Option>
          <Option>▪ Option : {mask.option}</Option>
        </ul>
        {/* 구매링크버튼 */}
        <Btn>
          <Link href={mask.purchaseUrl} target="_blank">
            구매하러 가볼까요?
          </Link>
        </Btn>
      </Content>
    </Container>
  );
}

export default MaskInfo;

const Container = styled.section`
  ${(props) => props.theme.variables.flex("", "space-evenly", "center")};
  margin: 10px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Thumnail = styled.div`
  max-width: 350px;
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  padding: 5px;
  border: 1px solid #d9d9d9;
`;

const Content = styled.div`
  max-width: 360px;
  height: 100%;
  ${(props) => props.theme.variables.flex("column", "center", "flex-start")};
  padding: 0 10px;
  @media (max-width: 768px) {
    max-width: 310px;
    margin-top: 15px;
  }
`;

const Top = styled.div`
  width: 80%;
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 20px;
  position: relative;
`;

const Wish = styled.div`
  font-size: 35px;
  position: absolute;
  top: 0;
  right: -20%;
`;

const Price = styled.p`
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  margin-bottom: 20px;
`;

const Color = styled.span`
  color: ${(props) => props.theme.style.highlight};
`;

const Option = styled.li`
  font-size: ${(props) => props.theme.style.textSmall};
  margin-bottom: 10px;
  line-height: 1.5;
`;

const Btn = styled.button`
  width: 100%;
  height: 40px;
  background: #2d2d2d;
  border-radius: 10px;
  border: 0px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.style.textSmall};
  color: ${(props) => props.theme.style.white};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.style.hover};
    text-decoration: none;
  }
`;
