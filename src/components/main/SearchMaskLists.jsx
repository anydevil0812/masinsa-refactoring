import React, { useEffect, useState } from "react";
import WishBtn from "../WishBtn";
import {
  MaskListDiv,
  MaskSummaryBox,
  MaskSummaryImg,
  MaskSummaryContent,
  MaskSummaryOption,
  MaskSummaryPriceLinkBox,
  MaskSummaryTitleLinkBox,
  MaskScore,
  MaskBottom,
} from "../../styles/MaskListStyles";
import { putClick } from "../../api/mask/putClick";

function SearchMaskLists({ maskList }) {
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();
  // console.log(isClick);

  /* 상품 클릭 수 증가  */
  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <>
      {maskList && (
        <MaskListDiv>
          {maskList.map((mask) => {
            return (
              <div key={mask.id}>
                <MaskSummaryBox>
                  {/* 마스크썸네일 */}
                  {mask.thumbnail && (
                    <a
                      href={`/about/${mask.id}`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      <MaskSummaryImg src={mask.thumbnail}></MaskSummaryImg>
                    </a>
                  )}
                  {/* 마스크내용 */}
                  <MaskSummaryContent>
                    {/* 이름 */}
                    <MaskSummaryTitleLinkBox
                      href={`/about/${mask.id}`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      {mask.name}
                    </MaskSummaryTitleLinkBox>
                    {/* 가격 (링크) */}
                    <MaskSummaryPriceLinkBox
                      href={`/about/${mask.id}`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      {mask.price} 원
                    </MaskSummaryPriceLinkBox>
                    {/* 옵션 */}
                    <MaskSummaryOption>
                      <li>
                        <i>{mask.blockingIndex}</i>
                      </li>
                      <li>
                        <i>Size : {mask.size} </i>
                      </li>
                    </MaskSummaryOption>
                    <MaskBottom>
                      <MaskScore>평점 : {mask.avgScore}⭐</MaskScore>
                      {/* 찜버튼 */}
                      <WishBtn maskId={mask.id} />
                    </MaskBottom>
                  </MaskSummaryContent>
                </MaskSummaryBox>
              </div>
            );
          })}
        </MaskListDiv>
      )}
    </>
  );
}

export default SearchMaskLists;
