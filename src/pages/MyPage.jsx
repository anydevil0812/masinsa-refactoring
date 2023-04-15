import React, { useContext, useEffect, useState } from "react";
import { getWishlist } from "../api/wishlist/getWishlist";
import MyWishLists from "../components/myPage/MyWishLists";
import { UserLoginContext } from "../context/UserLoginContext";
import {
  MyPageArticle,
  MyPageBox,
  MyPageWrapper,
  MyWishMasks,
} from "../styles/MyPageStyle";
import { Wrapper } from "../styles/Common";

function MyPage() {
  const { userInfo } = useContext(UserLoginContext);

  console.log("유저", userInfo);

  // 닉네임 ! (없으면 고객)
  const nickname = userInfo ? userInfo.nickname : "고객";
  const memberId = userInfo.id;
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    getWishlist(memberId, setWishList);
  }, [memberId]);

  return (
    <Wrapper>
      {userInfo && (
        <MyPageWrapper>
          <div>
            <h3>"안녕하세요"</h3>
            <h2>
              <span>{nickname}</span>님 🙂
            </h2>
          </div>
          {/* 찜목록 section*/}
          <div>
            {/* 찜목록 box */}
            <MyPageBox>
              {/* My WishList (제목) 보여주는 부분 */}
              <MyPageArticle>
                <span style={{ color: "red" }}>❤</span> My WishList{" "}
                <span style={{ color: "red" }}>❤</span>
              </MyPageArticle>
              {/* 찜 목록 부분 */}
              <MyWishMasks>
                {wishList && (
                  <>
                    <MyWishLists wishList={wishList} memberId={userInfo.id} />
                  </>
                )}
              </MyWishMasks>
            </MyPageBox>
          </div>
        </MyPageWrapper>
      )}
    </Wrapper>
  );
}

export default MyPage;
