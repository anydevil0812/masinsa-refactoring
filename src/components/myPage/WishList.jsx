import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { putWishlist } from "../../api/wishlist/putWishlist";
import { BsBagHeartFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { TbMoodCry } from "react-icons/tb";

export default function WishList({ wishList, memberId }) {
  const navigate = useNavigate();
  const [isClickSetUup, setIsClickSetUp] = useState(false);
  const [maskId, setMaskId] = useState(0);

  const setUpWish = (maskId) => {
    setIsClickSetUp(true);
    setMaskId(maskId);
    // console.log(maskId);
  };

  useEffect(() => {
    if (isClickSetUup) {
      putWishlist(memberId, maskId);
      window.location.reload();
    }
  }, [maskId]);

  return (
    <WishContainer>
      <Title>
        My WishList
        <Icon>
          <BsBagHeartFill />
        </Icon>
      </Title>
      {wishList?.length ? (
        <WishMaskList>
          {wishList.map((wish) => (
            <MaskContainer key={wish.id}>
              <Mask onClick={() => navigate(`/about/${wish.maskId}`)}>
                <Img src={wish.thumbnail} alt={wish.maskName} />
                <Info>
                  <P>{wish.maskName}</P>
                  <p>▪ {wish.price} 원</p>
                </Info>
              </Mask>
              <DeleteBtn
                onClick={() => {
                  setUpWish(wish.maskId);
                }}
              >
                <MdDeleteForever />
              </DeleteBtn>
            </MaskContainer>
          ))}
        </WishMaskList>
      ) : (
        <Div>
          <CryIcon>
            <TbMoodCry />
          </CryIcon>
          등록된 찜 상품이 없습니다.
        </Div>
      )}
    </WishContainer>
  );
}

const WishContainer = styled.div`
  width: 95%;
  height: 365px;
  ${(props) => props.theme.variables.flex("column", "flex-start", "center")};
  border: 1px solid ${(props) => props.theme.style.textLightGray};
  border-radius: 15px;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Title = styled.div`
  width: 100.5%;
  height: 55px;
  ${(props) => props.theme.variables.flex("", "", "center")};
  margin-bottom: 18px;
  padding: 13px 15px;
  border-radius: 15px 15px 0px 0px;
  background: ${(props) => props.theme.style.masinsaColor};
  font-size: ${(props) => props.theme.style.textLarge};
  font-weight: 600;
  color: ${(props) => props.theme.style.white};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    height: 50px;
    font-size: ${(props) => props.theme.style.textMedium};
  }
`;

const Icon = styled.div`
  margin-left: 5px;
  font-size: ${(props) => props.theme.style.textLarge};
`;

const WishMaskList = styled.div`
  width: 97%;
  height: 75%;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  overflow: auto;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 426px) {
    height: 80%;
    gap: 15px;
    padding: 0 10px;
  }
`;

const MaskContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Mask = styled.div`
  position: relative;
  @media (max-width: 426px) {
    height: 190px;
  }
`;

const Img = styled.img`
  width: 100%;
  border: 1px solid ${(props) => props.theme.style.textLightGray};
  border-radius: 10px;
  @media (max-width: 426px) {
    border-radius: 10px 10px 0 0;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 35%;
  ${(props) => props.theme.variables.flex("column", "center", "")};
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 10px 10px;
  color: ${(props) => props.theme.style.white};
  font-size: ${(props) => props.theme.style.textSmall};
  padding-left: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: 426px) {
    height: 40%;
    padding: 10px;
    background-color: ${(props) => props.theme.style.black};
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

const DeleteBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 30px;
  color: ${(props) => props.theme.style.black};
  cursor: pointer;
  position: absolute;
  top: 3%;
  right: 2%;
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.style.masinsaColor};
  }
  &:active {
    color: ${(props) => props.theme.style.masinsaColor};
  }
  @media (max-width: 426px) {
    font-size: ${(props) => props.theme.style.textLarge};
  }
`;

const P = styled.p`
  display: block;
  width: 95%;
  margin-bottom: 5px;
  line-height: 1.3;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${(props) => props.theme.style.textMedium};
  font-weight: 600;
  color: ${(props) => props.theme.style.textLightGray};
  ${(props) => props.theme.variables.flex("column", "center", "center")};
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textSmall};
  }
`;

const CryIcon = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
