import React from "react";
import styled from "styled-components";

export const MyPageWrapper = styled.section`
  width: 950px;
  margin: 0px auto;
  // border: 1px solid red;
`;

// 찜목록 section
export const MyPageBox = styled.div`
  width: 900px;
  height: 370px;
  border-radius: 15px;
  border: 2px solid #05735f;
  border-style: dashed;
  position: relative;
  box-shadow: 0px 1px 3px #999;
`;

// 찜목록이름 (MyWishList)
export const MyPageArticle = styled.div`
  position: absolute;
  width: 870px;
  height: 13%;
  border-radius: 15px 15px 0px 0px;
  // border: 1px solid red;
  background: #05735f;
  top: -1%;
  left: -0.5%;
  text-align: left;
  color: white;
  padding: 20px 20px 0px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 1px 3px #999;
`;

// 찜목록 담는 곳
export const MyWishMasks = styled.div`
  position: absolute;
  // border: "1px solid red",
  top: 23%;
  left: 2%;
  right: 2%;
  height: 70%;
  width: 870px;
  overflow: auto;
`;
