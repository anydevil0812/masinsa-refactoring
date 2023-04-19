import styled from "styled-components";
import React, { useState } from "react";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";
import {
  BreatheBarChart,
  DeliveryBarChart,
  FitBarChart,
  SizeBarChart,
} from "./AnalysisCharts";
import GoReviewBtn from "./GoReviewBtn";
import { BsQuestionCircle } from "react-icons/bs";

Chart.register(ChartDataLabels);

function Analysis({ analysisinfo }) {
  // 사이즈
  const analysisSize = JSON.parse(analysisinfo.relativeSize);
  // 착용감
  const analysisFit = JSON.parse(analysisinfo.fit);
  // console.log(analysisFit);
  // 호흡
  const analysisBreathe = JSON.parse(analysisinfo.breathAbility);
  // 배송
  const analysisDelivery = JSON.parse(analysisinfo.delivery);
  // 점수
  const analysisScore = analysisinfo.score;

  const [hover, setHover] = useState(false);

  return (
    <Container>
      {/* 마스크 리뷰가 10,000개이상이면 통계출력 => 10,000개 이상이 아나리면 analysisInfo가 undefined  */}
      <Title>Analysis for this Mask</Title>
      <Content>
        <ScoreContainer>
          <ScoreTitle>MASINSA SCORE</ScoreTitle>
          <P>
            <Score>{analysisScore}</Score>점
          </P>
          <Icon
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <BsQuestionCircle />
          </Icon>
          <ScoreInfo id="scoreInfo" isHover={hover}>
            AI를 통해 리뷰를 분석하여 MASINSA에서 부여한 점수입니다.
          </ScoreInfo>
        </ScoreContainer>
        <Graphs>
          <SizeBarChart analysisSize={analysisSize} />
          <FitBarChart analysisFit={analysisFit} />
          <DeliveryBarChart analysisDelivery={analysisDelivery} />
          <BreatheBarChart analysisBreathe={analysisBreathe} />
        </Graphs>
      </Content>
      {/* 리뷰보러가기 버튼 */}
      <GoReviewBtn />
    </Container>
  );
}

export default Analysis;

const Container = styled.div`
  ${(props) => props.theme.variables.flex("column", "", "center")};
  border-top: 1px solid ${(props) => props.theme.style.textLightGray};
  border-bottom: 1px solid ${(props) => props.theme.style.textLightGray};
  margin-top: 20px;
`;

const Title = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  text-align: center;
  display: block;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.style.textLightGray}; ;
`;

const Content = styled.div`
  width: 100%;
  ${(props) => props.theme.variables.flex("", "space-around", "center")};
  padding: 10px;
  margin: 0px auto;
  @media (max-width: 768px) {
    ${(props) => props.theme.variables.flex("", "center", "")};
    flex-wrap: wrap;
  }
`;

const ScoreContainer = styled.div`
  width: 200px;
  height: 250px;
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  border: 2px dashed ${(props) => props.theme.style.masinsaColor};
  border-radius: 15px;
  position: relative;
  @media (max-width: 768px) {
    margin: 10px auto;
    width: 70%;
    height: 120px;
  }
`;

const ScoreTitle = styled.p`
  width: 150px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  display: block;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const P = styled.p`
  font-size: ${(props) => props.theme.style.textSmall};
  font-weight: 600;
`;

const Score = styled.span`
  font-size: 40px;
  color: ${(props) => props.theme.style.masinsaColor};
  margin-right: 5px;
`;

const Icon = styled.div`
  font-size: 25px;
  color: ${(props) => props.theme.style.textLightGray};
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
  @media (max-width: 420px) {
    display: none;
  }
`;

const ScoreInfo = styled.div`
  width: 170px;
  height: 70px;
  padding-top: 18px;
  background-color: ${(props) => props.theme.style.white};
  border: 2px solid ${(props) => props.theme.style.textLightGray};
  border-radius: 12px;
  text-align: center;
  font-size: 10px;
  line-height: 1.5;
  font-weight: 600;
  position: absolute;
  top: 20%;
  right: -70%;
  opacity: ${(props) => (props.isHover ? "1" : "0")};
  @media (max-width: 768px) {
    top: 30%;
    right: -15%;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;

const Graphs = styled.div`
  max-width: 600px;
  ${(props) => props.theme.variables.flex("", "", "center")};
  flex-wrap: wrap;
`;
