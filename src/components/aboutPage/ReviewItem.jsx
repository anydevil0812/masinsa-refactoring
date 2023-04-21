import React from "react";
import styled from "styled-components";

export default function ReviewItem({ reviews, reviewType }) {
  return (
    <Container>
      {reviews.map((review) => {
        return (
          <Review key={review.id}>
            {reviewType === "naver" ? (
              <>
                <Score>별점 : {review.score} ⭐</Score>
                <About>
                  <Id>id : {review.naverId}</Id>
                  <p>옵션명 : {review.option}</p>
                </About>
                <Content>{review.content}</Content>
              </>
            ) : (
              <>
                <About>
                  <Id>닉네임: {review.nickname}</Id>
                </About>
                <Content>{review.content}</Content>
              </>
            )}
          </Review>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
`;

const Review = styled.div`
  ${(props) => props.theme.variables.flex("column", "", "")};
  margin-bottom: 15px;
  padding: 0px 0px 10px;
  border-bottom: 1px solid #9a9a9a;
`;

const Score = styled.div`
  height: 20%;
  font-size: ${(props) => props.theme.style.textSmall};
  font-weight: 600;
  text-align: left;
  margin: 5px 3px;
  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.style.textXSmall};
  }
`;

// id + option
const About = styled.div`
  height: 20%;
  color: #9a9a9a;
  font-size: ${(props) => props.theme.style.textXSmall};
  text-align: left;
  line-height: 1.5;
  margin: 5px;
`;

const Id = styled.p`
  margin-bottom: 5px;
`;

const Content = styled.div`
  height: 50%;
  font-size: ${(props) => props.theme.style.textXSmall};
  text-align: left;
  line-height: 1.5;
  margin: 5px;
  word-break: keep-all;
`;
