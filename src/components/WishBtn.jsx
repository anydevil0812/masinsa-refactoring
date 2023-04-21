import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserLoginContext } from "../context/UserLoginContext";
import Modal from "./Modal";
import { getWishlist, postWishlist, putWishlist } from "../api/wishlist";

function WishBtn({ maskId }) {
  const { userInfo } = useContext(UserLoginContext);
  // 찜버튼 클릭확인
  const [isClick, setIsClick] = useState(false);
  // 사용자 Id
  const memberId = userInfo?.id;
  // 찜목록
  const [wishList, setWishList] = useState([]);
  // 렌더링시, 찜여부
  const [prevWish, setPrevWish] = useState(false);
  // 클릭시, 찜여부 ( 이미 찜했던 거 deletion : Y 인 경우)
  const [isWish, setIsWish] = useState(false);
  // 모달
  const [open, setOpen] = useState(false);
  // 모달상태
  const [status, setStatus] = useState();

  useEffect(() => {
    getWishlist(memberId, setWishList);
  }, [memberId]);

  // 이미 찜 된 마스크 => 하트채우기
  useEffect(() => {
    wishList?.forEach((wish) => {
      if (wish.maskId === maskId) {
        setPrevWish(true);
      }
    });
  }, [maskId, wishList]);

  // 클릭 event
  useEffect(() => {
    if (isClick) {
      if (memberId !== "") {
        // 찜등록 & 등록여부 확인
        postWishlist(memberId, maskId, isWish, setIsWish);
        handleWish();
      }
    }
  }, [isClick, isWish, maskId, memberId]);

  // 찜 상태 변경
  // iswish : false => 찜등록 / true => 찜삭제
  const handleWish = () => {
    if (memberId !== "") {
      if (isWish) {
        putWishlist(memberId, maskId);
      }
    }
  };

  return (
    <>
      {open && <Modal setOpen={setOpen} status={status} />}
      {userInfo ? (
        <Icon
          onClick={() => {
            setIsClick(!isClick);
            setPrevWish(!prevWish);
            handleWish();
          }}
        >
          {prevWish ? <AiFillHeart /> : <AiOutlineHeart />}
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
  cursor: pointer;
`;
