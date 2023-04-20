import axios from "axios";

export const getReviews = async ({
  maskId,
  currentPage,
  size,
  reviewType,
  setReviews,
}) => {
  const response = await axios.get(
    `http://35.216.122.45:8080/review?maskId=${maskId}&page=${currentPage}&size=${size}&reviewType=${reviewType}`
  );

  setReviews(response.data.result);
};
