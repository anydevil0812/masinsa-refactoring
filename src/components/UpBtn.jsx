import React, { useState } from "react";
import { GoUpBtn } from "../styles/OtherStyles";

function UpBtn() {
  // 수직 스크롤 위치
  const [scrollY, setScrollY] = useState(0);

  // 위로스크롤 버튼 보이는 상태 : 처음은 false ( 안보임 )
  const [btnStatus, setBtnStatus] = useState(false);

  // upBtn show / no-show 설정
  const upBtnShow = () => {
    // 해당 window의 scroll 위치로 scrollY 설정
    setScrollY(window.pageYOffset);
  };

  // console.log(btnStatus);

  const goScrollTop = () => {
    // 만약 위로 버튼이 클릭되면 scrollTo(스크롤을) top:0으로 이동
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // 위로 올라가서 scrollY 를 다시 0으로 설정
    setBtnStatus(false); // scrollY가 0이 니까 btn도 false
  };

  return (
    <div>
      <GoUpBtn
        className={btnStatus ? "upBtn-active" : "upBtn-no-active"}
        onClick={goScrollTop}
      >
        ▲
      </GoUpBtn>
    </div>
  );
}

export default UpBtn;
