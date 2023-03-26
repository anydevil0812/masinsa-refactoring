import React from "react";
import WishBtn from "../WishBtn";
import {
  MaskInfoSection,
  MaskInfoContent,
  MaskBuyLink,
  MaskInfoMain,
  MaskThumnailImg,
  MaskTitle,
  BuyLinkBox,
  MaskOption,
  MaskPrice,
} from "../../styles/AboutPageStyle";

function MaskInfo({ mask }) {
  // console.log("maskinfo:", { mask });
  // console.log("maskInfo :", images);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // mask 값들을 빼내서 사용하기
  return (
    <div>
      {mask ? (
        <MaskInfoSection>
          {/* 썸네일사진 */}
          <MaskThumnailImg src={mask.thumbnail}></MaskThumnailImg>
          <MaskInfoContent>
            <div style={{ display: "flex" }}>
              {/* 이름 */}
              <MaskTitle>{mask.name}</MaskTitle>
              {/* 찜버튼 */}
              <WishBtn maskId={mask.id} userInfo={userInfo} />
            </div>
            <MaskInfoMain>
              {/* 가격 */}
              <MaskPrice>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#000",
                    marginRight: "10px",
                  }}
                >
                  판매가격 :
                </span>
                {mask.price} <span style={{ fontSize: "13px" }}>원</span>
              </MaskPrice>
            </MaskInfoMain>
            {/* 옵션 */}
            <MaskOption>
              <li
                style={{
                  marginBottom: "5px",
                }}
              >
                {mask.blockingIndex}
              </li>
              <li
                style={{
                  marginBottom: "5px",
                }}
              >
                Size : {mask.size}
              </li>
              <li
                style={{
                  marginBottom: "5px",
                }}
              >
                Option : {mask.option}
              </li>
            </MaskOption>
            {/* 구매링크버튼 */}
            <MaskBuyLink>
              <BuyLinkBox href={mask.purchaseUrl} target="_blank">
                구매하러 가볼까요?
              </BuyLinkBox>
            </MaskBuyLink>
          </MaskInfoContent>
        </MaskInfoSection>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MaskInfo;
