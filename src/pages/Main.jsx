import styled from "styled-components";
import React, { useState } from "react";
import { Title, Wrapper } from "../styles/Common";
import Awards from "../components/mainPage/Awards";
import Search from "../components/mainPage/Search";
import MaskItem from "../components/MaskItem";

function Main() {
  // 마스크 리스트
  const [maskList, setMaskList] = useState([]);
  // 키워드 설정
  const [keyword, setKeyWord] = useState("");

  return (
    <Wrapper>
      {/* masinsa awards */}
      <Title>MASINSA AWARDS</Title>
      <Awards />
      <Title>ALL MASINSA MASK</Title>
      {/* 검색창 */}
      <Search
        setMaskList={setMaskList}
        setKeyWord={setKeyWord}
        keyword={keyword}
      />
      {/* 마스크리스트 */}
      {keyword && (
        <P>
          <Span>" {keyword} " </Span>에 대한 MASINSA 검색결과 입니다.
        </P>
      )}
      <MaskItem maskList={maskList} />
    </Wrapper>
  );
}

export default Main;

const P = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.style.textSmall};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.style.highlight};
  font-weight: 600;
`;
