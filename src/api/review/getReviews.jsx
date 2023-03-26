import axios from "axios";

export const getReviews = async ({
  maskId,
  page,
  size,
  reviewType,
  setAllReviews,
}) => {
  const response = await axios.get(
    `http://35.216.122.45:8080/review?maskId=${maskId}&page=${page}&size=${size}&reviewType=${reviewType}`
  );

  setAllReviews(response.data.result);
};
