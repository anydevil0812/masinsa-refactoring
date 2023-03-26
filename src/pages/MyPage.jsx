import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getWishlist } from "../api/wishlist/getWishlist";
import MyWishLists from "../components/personal/MyWishLists";
import {
  MyPageArticle,
  MyPageBox,
  MyPageWrapper,
  MyWishMasks,
} from "../styles/MyPageStyle";
import { MainWrapper } from "../styles/OtherStyles";

function MyPage() {
  const { state: userInfo } = useLocation();

  // console.log("유저", userInfo);

  // 닉네임 ! (없으면 고객)
  const nickname = userInfo ? userInfo.nickname : "고객";
  const memberId = userInfo.id;
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getWishlist(memberId, setWishList);
  }, [memberId]);

  return (
    <MainWrapper>
      <MyPageWrapper>
        <div style={{ margin: "60px 0px 30px" }}>
          <h3>"안녕하세요"</h3>
          <h2>
            <span style={{ fontSize: "30px", color: "#05735F" }}>
              {nickname}
            </span>
            님 🙂
          </h2>
        </div>
        {/* 찜목록 section*/}
        <div style={{ padding: "20px 50px" }}>
          {/* 찜목록 box */}
          <MyPageBox>
            {/* My WishList (제목) 보여주는 부분 */}
            <MyPageArticle>
              <span style={{ color: "red" }}>❤</span> My WishList{" "}
              <span style={{ color: "red" }}>❤</span>
            </MyPageArticle>
            {/* 찜 목록 부분 */}
            <MyWishMasks>
              {wishList.length > 0 ? (
                <>
                  <MyWishLists wishList={wishList} memberId={userInfo.id} />
                </>
              ) : (
                // 찜목록이 없을 경우
                <div
                  style={{
                    padding: "50px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    찜한 상품이 존재하지 않습니다
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#0ea654",
                      fontWeight: "600",
                    }}
                  >
                    * 믿을 수 있는 MASINSA의 마스크들을 만나러 가볼까요? *
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    👉{" "}
                    <a
                      href="/"
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      MainPage로 돌아가기
                    </a>
                  </p>
                </div>
              )}
            </MyWishMasks>
          </MyPageBox>
        </div>
      </MyPageWrapper>
    </MainWrapper>
  );
}

export default MyPage;
