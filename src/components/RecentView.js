import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FixedRecentView,
  RecentViewImg,
  RecentViewImgDiv,
} from "../styles/OtherStyles";
import { putClick } from "../api/mask/putClick";

function RecentView() {
  // localStorage에 저장된 최근본상품(watchedMask) 가져오기
  let userWatched = localStorage.getItem("watchedMask");

  // console.log("userWatched (type) : ", typeof userWatched);

  // JSON 자료형(String)으로 저장된 데이터를 Object로 변경
  userWatched = JSON.parse(userWatched);

  // console.log("userWatched - RecentView", userWatched);
  // console.log("userWatched after JSON.parse (type) : ", typeof userWatched);

  // 클릭수 확인
  const [isClick, setIsClick] = useState(false);
  const [clickMaskId, setClickMaskId] = useState();
  // console.log(isClick);

  /* Recent 상품 클릭 수 증가  */
  // 만약 isClick이 true가 되면 (해당 상품이 클릭되면) putClick 실행
  useEffect(() => {
    if (isClick === true) {
      putClick({ clickMaskId });
    }
  });

  return (
    <div>
      <FixedRecentView>
        최근 본 상품
        <hr
          style={{
            width: "100%",
            border: "1px solid #D9D9D9",
          }}
        ></hr>
        {userWatched ? (
          userWatched.map((recentMask) => (
            <RecentViewImgDiv key={recentMask.id}>
              <a
                href={`/aboutMask/${recentMask.id}/Masinsa`}
                onClick={() => {
                  setIsClick(true);
                  setClickMaskId(recentMask.id);
                }}
              >
                <RecentViewImg src={recentMask.thumbnail} alt={recentMask.id} />
              </a>
            </RecentViewImgDiv>
          ))
        ) : (
          <></>
        )}
      </FixedRecentView>
    </div>
  );
}
export default RecentView;
