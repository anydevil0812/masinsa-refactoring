import axios from "axios";

export const postMemberReview = async ({ memberId, maskId, content }) => {
  await axios.post(
    "http://35.216.122.45:8080/member_review",

    {
      memberId: memberId,

      maskId: maskId,
      content: content,
      reviewType: "member",
    }
  );

  console.log("리뷰제출");
};
