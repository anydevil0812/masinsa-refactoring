import React, { useContext, useEffect, useState } from "react";
import { postWishlist } from "../api/wishlist/postWishlist";
import { putWishlist } from "../api/wishlist/putWishlist";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { UserLoginContext } from "../context/UserLoginContext";

function WishBtn({ maskId }) {
  const { userInfo } = useContext(UserLoginContext);
  // 찜버튼 클릭확인
  const [isClick, setIsClick] = useState(false);
  // 사용자 Id
  const [memberId, setMemberId] = useState("");
  // 찜여부 확인 ( 이미 찜했던 거 deletion : Y 인 경우)
  const [isWish, setIsWish] = useState("N");

  useEffect(() => {
    if (userInfo) {
      setMemberId(userInfo.id);
    }
  }, []);

  useEffect(() => {
    if (isClick) {
      if (memberId !== "") {
        // 찜post
        postWishlist(memberId, maskId, isWish, setIsWish);
      }
    }
  }, [isClick]);

  useEffect(() => {
    if (memberId !== "") {
      if (isWish == null) {
        putWishlist(memberId, maskId);
      }
    }
  }, [isWish]);

  return (
    <>
      {userInfo ? (
        <Icon
          // login 되어 있을 경우 =>  wish 추가
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          {isClick ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon>
      ) : (
        <Icon
          // login 안되어 있을 경우 => 로그인 안내 alert
          onClick={() => {
            alert(
              "로그인이 필요한 서비스 입니다. 로그인 후, 이용부탁드립니다."
            );
          }}
        >
          <AiOutlineHeart />
        </Icon>
      )}
    </>
  );
}
export default WishBtn;

export const Icon = styled.div`
  color: pink;
`;
