import React, { useEffect, useState } from "react";
import { GoToReview, GoToReviewBtn } from "../../styles/AboutPageStyle";
import Reviews from "./Reviews";

function ReviewBtn() {
  // console.log("review");

  // 1. 기본 스크롤 카운터

  // 수직 스크롤 위치
  const [scrollY, setScrollY] = useState(0);

  // 위로스크롤 버튼 보이는 상태 : 처음은 false ( 안보임 )
  const [btnStatus, setBtnStatus] = useState(false);

  const reviewShow = () => {
    // 해당 window의 scroll 위치로 scrollY 설정
    setScrollY(window.pageYOffset);

    // 안해줘도 될듯(사이즈가 별로 길지 않아요)
    if (scrollY > 100) {
      // 스크롤 위치가 100 이상으로 되면 위로스크롤 버튼 보임
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  //   const review = Reviews.props.reviews;

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", reviewShow);
      // console.log("ScrollY is ", scrollY); // 스크롤 위치 콘솔로 확인 (위치 확인 후 삭제하기)
    };
    watch();
    return () => {
      window.removeEventListener("scroll", reviewShow);
    };
  });

  const goScrollReview = () => {
    // -sungmin- 이런식으로라도 표현해주는 게 best인것 같아요 ㅜ
    // 이건 그냥 전체 페이지 길이에서 0.95 만큼 가도록  했습니다
    const new_height = document.body.scrollHeight * 0.8;
    // 버튼 끝나면 MaskDetail 끝난 맨 아래 or Reviews 시작 좌표로 움직이고 싶은데?
    window.scrollTo({
      top: new_height,
      //   top: review.y,
      behavior: "smooth",
    });
    setScrollY(0); // 위로 올라가서 scrollY 를 다시 0으로 설정
    setBtnStatus(false); // scrollY가 0이 니까 btn도 false
  };

  // 2. 스크롤 상대위치 카운터

  // const [hideElement, setHideElement] = useState();

  // useEffect(() => {
  //   if (!reviewsRef.current) return;
  //   window.addEventListener("scroll", yScrollEvent);
  //   return () => {
  //     window.removeEventListener("scroll", yScrollEvent);
  //   };
  // }, [reviewsRef.current]);

  // const yScrollEvent = () => {
  //   const scroll = reviewsRef.current.getBoundingClientRect();
  //   console.log(scroll);
  //   setHideElement(scroll.top <= -100);
  // };

  // //   const review = document.getElementById("Reviews");
  // const clientRect = reviewsId.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
  // const relativeTop = clientRect.top; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.

  return (
    <div>
      <GoToReview>
        <GoToReviewBtn
          className={btnStatus ? "upBtn-active" : "upBtn-no-active"}
          onClick={goScrollReview}
        >
          <i>여기를 누르면 착용자의 상세리뷰를 보러갈 수 있어요</i>
        </GoToReviewBtn>
      </GoToReview>
    </div>
  );
}

export default ReviewBtn;
