import axios from "axios";

export const getReviewCount = async ({
  maskId,
  reviewType,
  setReviewCount,
}) => {
  const response = await axios.get(
    `http://35.216.122.45:8080/review/count?maskId=${maskId}&reviewType=${reviewType}`
  );

  setReviewCount(response.data.result);
};
