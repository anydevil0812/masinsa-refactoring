import React, { useState } from "react";
import { MaskDetailSection } from "../../styles/AboutPageStyle";

function MaskDetail({ images }) {
  // console.log("maskdetail : ", images);
  const [isCheck, setCheck] = useState(false);
  // console.log(isCheck);

  return (
    <div>
      {/* <MoreBtn isCheck={isCheck} setCheck={setCheck} />
      {isCheck && (
        image 기본 출력 크기를 고정해두고 싶음. 현재는 없던 이미지를 보여주는 정도의 버튼. */}
      <MaskDetailSection>
        {images ? (
          images.map((image) => (
            <div key={image.id}>
              {/* imageType이 detail 이면 출력 */}
              {image.imageType === "detail" ? (
                <>
                  <img style={{ width: "600px" }} src={image.imageUrl}></img>
                </>
              ) : (
                <></>
              )}
            </div>
          ))
        ) : (
          <></>
        )}
      </MaskDetailSection>
      {/* )} */}
    </div>
  );
}

export default MaskDetail;
