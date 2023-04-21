import axios from "axios";

// 리뷰 불러오기
export const getReview = async ({
  maskId,
  currentPage,
  size,
  reviewType,
  setReviews,
}) => {
  await axios
    .get(
      `${process.env.REACT_APP_BASE_URL}/review?maskId=${maskId}&page=${currentPage}&size=${size}&reviewType=${reviewType}`
    )
    .then((res) => setReviews(res.data.result));
};

// 리뷰 개수
export const getReviewCount = async ({ maskId, setCount }) => {
  const naverCount = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/review/count?maskId=${maskId}&reviewType=naver`
  );

  const memberCount = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/review/count?maskId=${maskId}&reviewType=member`
  );
  setCount({
    naver: naverCount.data.result,
    member: memberCount.data.result,
  });
};

// 회원 리뷰 작성
export const postMemberReview = async ({ memberId, maskId, content }) => {
  await axios.post(`${process.env.REACT_APP_BASE_URL}/member_review`, {
    memberId: memberId,
    maskId: maskId,
    content: content,
    reviewType: "member",
  });
  // console.log("리뷰제출");
};

// 회원 리뷰 삭제
export const deleteMemberReview = async ({ memberId, maskId }) => {
  axios.delete(`${process.env.REACT_APP_BASE_URL}/member_review`, {
    memberId: { memberId },
    maskId: { maskId },
  });
};
