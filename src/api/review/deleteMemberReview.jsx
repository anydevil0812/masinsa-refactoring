import axios from "axios";

export const deleteMemberReview = async ({ memberId, maskId }) => {
  axios.delete(`http://35.216.122.45:8080/member_review`, {
    memberId: { memberId },
    maskId: { maskId },
  });
};
