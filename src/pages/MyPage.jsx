import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { UserLoginContext } from "../context/UserLoginContext";
import { getWishlist } from "../api/wishlist/getWishlist";
import WishList from "../components/myPage/WishList";
import { Wrapper } from "../styles/Common";
import { RiSurgicalMaskLine } from "react-icons/ri";
import RecentViewMobile from "../components/recentView/RecentViewMobile";

function MyPage() {
  const { userInfo } = useContext(UserLoginContext);

  // 닉네임 ! (없으면 고객)
  const nickname = userInfo ? userInfo.nickname : "고객";
  // Optional Chaining => 사용자정보가 있다면 id값 설정
  const memberId = userInfo?.id;
  const [wishList, setWishList] = useState();

  useEffect(() => {
    getWishlist(memberId, setWishList);
  }, [memberId]);

  return (
    <>
      {userInfo && (
        <Wrapper>
          <Top>
            <P>
              안녕하세요
              <Icon>
                <RiSurgicalMaskLine />
              </Icon>
            </P>
            <P>
              <Color>" {nickname} " </Color> 님
            </P>
          </Top>
          {/* 찜목록 */}
          <WishList wishList={wishList} memberId={userInfo.id} />
          {/*  */}
          <RecentViewMobile />
        </Wrapper>
      )}
    </>
  );
}

export default MyPage;

const Top = styled.div`
  width: 100%;
  ${(props) => props.theme.variables.flex("column", "", "center")};
  margin: 20px 0 10px;
  padding: 20px 0;
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 600;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textMedium};
  }
`;

const P = styled.p`
  line-height: 1.3;
  margin-bottom: 5px;
  position: relative;
`;

const Icon = styled.span`
  font-size: 25px;
  font-weight: 500;
  position: absolute;
  top: -2%;
  right: -30%;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textLarge};
  }
`;

const Color = styled.span`
  color: ${(props) => props.theme.style.masinsaColor};
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textLarge};
  }
`;
