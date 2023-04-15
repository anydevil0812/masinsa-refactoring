import React from "react";
import {
  TopSection,
  HighLightSpan,
  BasicSpan,
  CenterIntroDiv,
  GoListBtnDiv,
  GoListLinkBox,
  IntroContentDiv,
  IntroSection,
  IntroHighLightSpan,
  IntroLogoImg,
  IntroSpan,
  IntroTitleDiv,
  LeftIntroDiv,
  LogoSection,
  MiddleSection,
  MiddleLine,
  RightIntroDiv,
  VerticalHr,
} from "../styles/IntroducePageStyle";
import { Wrapper } from "../styles/Common";

function Introduce() {
  return (
    <Wrapper>
      <div
        style={{
          width: "950px",
          margin: "30px auto",
          height: "570px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 상단의 내용 div */}
        <TopSection>
          <p style={{ margin: "5px auto" }}>
            <HighLightSpan>자신에게 꼭 맞는 마스크</HighLightSpan>
            <BasicSpan>를 찾기 어려우셨다구요 ? </BasicSpan>
          </p>
          <p style={{ margin: "5px auto" }}>
            <HighLightSpan>마스크 후기</HighLightSpan>
            <BasicSpan>를 꼼꼼히 찾아보는 것에 지치셨다구요 ?</BasicSpan>
          </p>
          <p style={{ margin: "5px auto" }}>
            <HighLightSpan>마스크가 급하게 필요</HighLightSpan>
            <BasicSpan>한데 어떤 걸 사야할 지 막막하시다구요 ?</BasicSpan>
          </p>
        </TopSection>
        {/* Masinsa이용 div */}
        <MiddleLine></MiddleLine>
        <MiddleSection>
          <IntroSpan>그렇다면,</IntroSpan>
          <LogoSection>
            <IntroLogoImg
              src={`${process.env.PUBLIC_URL}/MasinsaLogo.png`}
              alt="masinsa"
            ></IntroLogoImg>
          </LogoSection>
          <IntroSpan>저희를 이용해보세요!</IntroSpan>
        </MiddleSection>
        <MiddleLine></MiddleLine>
        {/* 설명div */}
        <IntroSection>
          {/* 1번설명 div */}
          <LeftIntroDiv>
            <IntroTitleDiv>
              <p>
                <IntroSpan>마음에 드는 마스크를</IntroSpan>
              </p>
              <p>
                <IntroHighLightSpan>링크 연결</IntroHighLightSpan>
                <IntroSpan>을 통해 손쉽게 구매</IntroSpan>
              </p>
            </IntroTitleDiv>
            <IntroContentDiv>
              <p>
                <BasicSpan>
                  네이버 최저가를 기준으로 가격을 측정하므로 질 좋고 딱 맞는
                  저렴한 마스크를 구매버튼을 통해 만나보실 수 있습니다.
                </BasicSpan>
              </p>
            </IntroContentDiv>
          </LeftIntroDiv>
          <VerticalHr></VerticalHr>
          {/* 2번설명 div */}
          <CenterIntroDiv>
            <IntroTitleDiv>
              <p>
                <IntroSpan>실착용자의 리뷰를 통한</IntroSpan>
              </p>
              <p>
                <IntroHighLightSpan>간편 확인 후기 통계</IntroHighLightSpan>
                <IntroSpan>제공</IntroSpan>
              </p>
            </IntroTitleDiv>
            <IntroContentDiv>
              <p>
                <BasicSpan>
                  마스크 착용 후기를 자연어 처리(NLP)로 분석하여 마스크의 사이즈
                  및 착용감, 호흡 등에 대한 정보를 제공합니다.
                </BasicSpan>
              </p>
            </IntroContentDiv>
          </CenterIntroDiv>
          <VerticalHr></VerticalHr>
          {/* 3번 설명 div */}
          <RightIntroDiv>
            <IntroTitleDiv>
              <p>
                <IntroSpan>마신사가 직접 선별하여</IntroSpan>
              </p>
              <p>
                <IntroSpan> 믿을 수 있는</IntroSpan>
                <IntroHighLightSpan>Best 상품 확인</IntroHighLightSpan>
              </p>
            </IntroTitleDiv>
            <IntroContentDiv>
              <p>
                <BasicSpan>
                  Masinsa’s Best는 상품의 클릭수, 평점, 리뷰를 기준으로 선별된
                  상품이며, 당사 및 타사의 정보의 합한 값을 기본으로 합니다.
                </BasicSpan>
              </p>
            </IntroContentDiv>
          </RightIntroDiv>
        </IntroSection>
        {/* 상품목록연결링크 div */}
        <div>
          <GoListBtnDiv>
            👉 <GoListLinkBox href="/">Going to see Mask</GoListLinkBox>
          </GoListBtnDiv>
        </div>
      </div>
    </Wrapper>
  );
}

export default Introduce;
