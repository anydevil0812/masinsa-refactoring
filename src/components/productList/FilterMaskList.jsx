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

function FilterMaskList({ maskList, userInfo }) {
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();

  /* 상품 클릭 수 증가  */
  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <div>
      {/* "/aboutMask/:maskId/Masinsa" */}
      <MaskListDiv>
        {maskList.length > 0 ? (
          maskList.map((mask) => {
            return (
              <div key={mask.id}>
                <MaskSummaryBox>
                  {/* 마스크썸네일 */}
                  {mask.thumbnail ? (
                    <a
                      href={`/aboutMask/${mask.id}/Masinsa`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      {/* 등록된 썸네일이 있을 경우 : 썸네일 보여줌*/}
                      <MaskSummaryImg src={mask.thumbnail}></MaskSummaryImg>
                    </a>
                  ) : (
                    <a
                      href={`/aboutMask/${mask.id}/Masinsa`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      {/* 등록된 썸네일이 없을 경우 : No Image 보여줌*/}
                      <MaskSummaryImg
                        src={`${process.env.PUBLIC_URL}/NoImage.jpg`}
                      ></MaskSummaryImg>
                    </a>
                  )}
                  {/* 마스크내용 */}
                  <MaskSummaryContent>
                    {/* 이름 */}
                    <MaskSummaryTitleLinkBox
                      href={`/aboutMask/${mask.id}/Masinsa`}
                      onClick={() => {
                        setIsClick(true);
                        setClickMaskId(mask.id);
                      }}
                    >
                      {mask.name}
                    </MaskSummaryTitleLinkBox>
                    {/* 가격 (링크) */}
                    <MaskSummaryPriceLinkBox
                      href={`/aboutMask/${mask.id}/Masinsa`}
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
                      <MaskScore>
                        <div>평점 : {mask.avgScore}⭐</div>
                      </MaskScore>
                      {/* 찜버튼 */}
                      <WishBtn maskId={mask.id} userInfo={userInfo} />
                    </MaskBottom>
                  </MaskSummaryContent>
                </MaskSummaryBox>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </MaskListDiv>
    </div>
  );
}

export default FilterMaskList;
