// 인기 순위 3위
import React, { useState, useEffect } from "react";
import {
  Top3ArticleSection,
  Top3BlankSection,
  Top3Article,
  IntroLinkBox,
  Top3MaskSection,
} from "../../styles/MainPageStyle";
import { TopMaskImg } from "../../styles/MainPageStyle";
import { putClick } from "../../api/mask/putClick";

function TopThree({ topMask }) {
  // console.log("topMask - TopThree", topMask);

  /* TOP3 상품 클릭 수 증가  */
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();
  // console.log(isClick);

  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <div>
      <Top3ArticleSection>
        <Top3BlankSection></Top3BlankSection>
        <Top3Article>MASINSA AWARDS</Top3Article>
        <IntroLinkBox href="introduce/masinsa">
          {/* Do you want know about MASNSA? */}
          What is MASINSA?
        </IntroLinkBox>
      </Top3ArticleSection>
      <hr></hr>
      <div>
        {/* "/aboutMask/:maskId/Masinsa" */}
        <Top3MaskSection>
          {topMask ? (
            topMask.map((top) => (
              <div key={top.id}>
                <a
                  href={`/about/${top.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    setIsClick(true);
                    setClickMaskId(top.id);
                  }}
                >
                  {/* 마우스 오버 x 면 마스크 info */}
                  <div
                    style={{
                      position: "relative",
                      width: "auto",
                      // border: "1px solid green",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* 마우스 오버 전, thumbnail */}
                    <TopMaskImg
                      src={top.thumbnail}
                      onMouseOver={() =>
                        (document.getElementById(
                          `${top.id}info`
                        ).style.opacity = "85%")
                      }
                      onMouseOut={() =>
                        (document.getElementById(
                          `${top.id}info`
                        ).style.opacity = "0%")
                      }
                    ></TopMaskImg>

                    {/* TOP3 상품 Hover 시 상품정보 표기 */}
                    <div
                      id={`${top.id}info`}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "35%",
                        bottom: "0%",
                        left: "0%",
                        background: "black",
                        borderRadius: "0px 0px 15px 15px",
                        opacity: "0%",
                        textAlign: "left",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          padding: "5px 10px",
                          fontWeight: "600",
                        }}
                      >
                        {/* 마스크이름 */}
                        <p
                          style={{
                            fontSize: "13px",
                            margin: "5px",
                          }}
                        >
                          {top.name}
                        </p>
                        {/* 가격 */}
                        <p
                          style={{
                            fontSize: "13px",
                            margin: "1px",
                            color: "#FF7D04",
                          }}
                        >
                          ▪ {top.price} 원
                        </p>
                        {/* 사이즈 */}
                        <p
                          style={{
                            fontSize: "13px",
                            margin: "1px",
                          }}
                        >
                          ▪ size : {top.size}
                        </p>
                        {/* 평점 */}
                        <p
                          style={{
                            fontSize: "13px",
                            margin: "0px",
                          }}
                        >
                          ▪ score : ⭐ {top.avgScore}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <></>
          )}
        </Top3MaskSection>
      </div>
    </div>
  );
}

export default TopThree;
