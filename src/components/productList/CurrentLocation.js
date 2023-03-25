import React from "react";
import { useParams } from "react-router-dom";

function CurrentLocation({ mask }) {
  // ListPage
  // 현재 페이지의 차단지수 파라미터를 통해 받음 (홈 > KF**)
  const { blockingindex } = useParams();
  // console.log("CurrentLocation : ", { blockingindex });

  // about Page
  // console.log("CurrentLocation : ", { mask });

  return (
    <div>
      {mask ? (
        // about Page 에서는 mask에서 값가져오기
        <div>
          홈 → {mask.blockingIndex} → {mask.shape}
        </div>
      ) : (
        // list Page 에서는 파라미터( blockingindex ) 가져오기
        <>
          {{ blockingindex } != ":blockingindex" ? (
            <>
              <div>홈 → {blockingindex}</div>
            </>
          ) : (
            <>
              <div>홈 → </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CurrentLocation;
