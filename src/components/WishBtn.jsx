import React, { useContext, useEffect, useState } from "react";
import { postWishlist } from "../api/wishlist/postWishlist";
import { putWishlist } from "../api/wishlist/putWishlist";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { UserLoginContext } from "../context/UserLoginContext";
import Modal from "./Modal";

function WishBtn({ maskId }) {
  const { userInfo } = useContext(UserLoginContext);
  // 찜버튼 클릭확인
  const [isClick, setIsClick] = useState(false);
  // 사용자 Id
  const [memberId, setMemberId] = useState("");
  // 찜여부 확인 ( 이미 찜했던 거 deletion : Y 인 경우)
  const [isWish, setIsWish] = useState("N");
  // 모달
  const [open, setOpen] = useState(false);
  // 모달상태
  const [status, setStatus] = useState();

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
  }, [isClick, memberId, maskId, isWish]);

  useEffect(() => {
    if (memberId !== "") {
      if (isWish === null) {
        putWishlist(memberId, maskId);
      }
    }
  }, [isWish, memberId, maskId]);

  return (
    <>
      {open && <Modal setOpen={setOpen} status={status} />}
      {userInfo ? (
        <Icon
          onClick={() => {
            setIsClick(!isClick);
          }}
        >
          {isClick ? <AiFillHeart /> : <AiOutlineHeart />}
        </Icon>
      ) : (
        <Icon
          onClick={() => {
            setStatus("로그인이 필요한 서비스입니다.");
            setOpen(true);
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
