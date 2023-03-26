import axios from "axios";

export const postMemberReview = async ({
  memberId,
  maskId,
  content,
  reviewType,
  // setMemberReview,
}) => {
  await axios.post(
    "http://35.216.122.45:8080/member_review",

    {
      memberId: memberId,

      maskId: maskId,
      content: content,
      reviewType: reviewType,
    }
  );

  console.log("리뷰제출");
};
